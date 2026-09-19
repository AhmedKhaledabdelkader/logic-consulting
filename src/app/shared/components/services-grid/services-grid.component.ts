import { DOCUMENT } from '@angular/common';
import { Component, DestroyRef, HostListener, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceSummary } from '../../../core/models/site.models';

@Component({
  selector: 'app-services-grid',
  imports: [RouterLink],
  templateUrl: './services-grid.component.html',
  styleUrl: './services-grid.component.scss',
})
export class ServicesGridComponent {
  private readonly win = inject(DOCUMENT).defaultView;
  private timer?: ReturnType<typeof setInterval>;

  title = input('Explore Our Services');
  services = input.required<ServiceSummary[]>();

  /** how many cards are visible: 3 desktop, 2 tablet, 1 mobile */
  perView = signal(this.calcPerView());
  index = signal(0);

  maxIndex = computed(() => Math.max(0, this.services().length - this.perView()));
  dots = computed(() => Array.from({ length: this.maxIndex() + 1 }, (_, i) => i));

  constructor() {
    this.start();
    inject(DestroyRef).onDestroy(() => this.stop());
  }

  @HostListener('window:resize')
  onResize() {
    this.perView.set(this.calcPerView());
    this.index.update(i => Math.min(i, this.maxIndex()));
  }

  next() { this.go(this.index() >= this.maxIndex() ? 0 : this.index() + 1); }
  prev() { this.go(this.index() <= 0 ? this.maxIndex() : this.index() - 1); }

  go(i: number) {
    this.index.set(i);
    this.start();                        // restart autoplay after a manual action
  }

  start() {
    this.stop();
    this.timer = setInterval(
      () => this.index.update(i => (i >= this.maxIndex() ? 0 : i + 1)),
      5000,
    );
  }

  stop() { clearInterval(this.timer); }

  /** only visible cards can be reached with the keyboard */
  isVisible(i: number) {
    return i >= this.index() && i < this.index() + this.perView();
  }

  private calcPerView() {
    const w = this.win?.innerWidth ?? 1200;
    return w <= 576 ? 1 : w <= 992 ? 2 : 3;
  }
}