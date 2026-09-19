import { Component, DestroyRef, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { SiteContentService } from '../../../../core/services/site-content.service';

@Component({
  selector: 'app-hero-slider',
  imports: [RouterLink],
  templateUrl: './hero-slider.component.html',
  styleUrl: './hero-slider.component.scss',
})
export class HeroSliderComponent {
  private readonly INTERVAL = 6000;
  private timer?: ReturnType<typeof setInterval>;

  slides = toSignal(inject(SiteContentService).getSlides(), { initialValue: [] });
  index = signal(0);

  constructor() {
    this.start();
    inject(DestroyRef).onDestroy(() => this.stop());
  }

  next() { this.go(this.index() + 1); }
  prev() { this.go(this.index() - 1); }

  go(i: number) {
    const total = this.slides().length;
    if (!total) return;
    this.index.set((i + total) % total);   // wraps around both directions
    this.start();                          // restart the autoplay timer
  }

  start() {
    this.stop();
    this.timer = setInterval(() => {
      const total = this.slides().length;
      if (total) this.index.update(i => (i + 1) % total);
    }, this.INTERVAL);
  }

  stop() { clearInterval(this.timer); }
}