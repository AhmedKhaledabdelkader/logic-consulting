import { Component, DestroyRef, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StoryLink } from '../../../core/models/site.models';

@Component({
  selector: 'app-story-slider',
  imports: [RouterLink],
  templateUrl: './story-slider.component.html',
  styleUrl: './story-slider.component.scss',
})
export class StorySliderComponent {
  private readonly INTERVAL = 6000;
  private timer?: ReturnType<typeof setInterval>;

  title = input.required<string>();
  subtitle = input<string>();
  stories = input.required<StoryLink[]>();

  index = signal(0);

  constructor() {
    this.start();
    inject(DestroyRef).onDestroy(() => this.stop());
  }

  go(i: number) {
    const total = this.stories().length;
    if (!total) return;
    this.index.set((i + total) % total);
    this.start();                       // restart autoplay after a manual click
  }

  start() {
    this.stop();
    this.timer = setInterval(() => {
      const total = this.stories().length;
      if (total) this.index.update(i => (i + 1) % total);
    }, this.INTERVAL);
  }

  stop() { clearInterval(this.timer); }
}