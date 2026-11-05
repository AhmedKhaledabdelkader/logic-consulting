import {
  AfterViewChecked,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs';

import { WorkStep } from '../../core/models/work-step.models';
import { SiteContentService } from '../../core/services/site-content.service';

const STEP_ICONS = [
  'bi-search', 'bi-bullseye', 'bi-pencil-square',
  'bi-gear', 'bi-rocket-takeoff', 'bi-graph-up-arrow',
];

@Component({
  selector: 'app-how-we-work',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './how-we-work.component.html',
  styleUrl: './how-we-work.component.scss',
})
export class HowWeWorkComponent implements OnInit, AfterViewChecked, OnDestroy {
  private readonly content = inject(SiteContentService);
  private observer?: IntersectionObserver;

  @ViewChild('timeline') private timeline?: ElementRef<HTMLElement>;

  loading = signal(true);
  error = signal(false);
  steps = signal<WorkStep[]>([]);

  /** 0..1 — how far the reader has scrolled through the timeline. */
  progress = signal(0);

  private observed = false;

  ngOnInit(): void {
    this.content
      .getWorkSteps()
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: list => this.steps.set(list),
        error: () => this.error.set(true),
      });
  }

  ngAfterViewChecked(): void {
    if (this.observed || !this.timeline) return;
    const items = this.timeline.nativeElement.querySelectorAll<HTMLElement>('.hw-step');
    if (!items.length) return;
    this.observed = true;

    if (typeof IntersectionObserver === 'undefined') {
      items.forEach(el => el.classList.add('in'));
      return;
    }

    this.observer = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            this.observer?.unobserve(e.target);
          }
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );
    items.forEach(el => this.observer!.observe(el));
    this.onScroll();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const el = this.timeline?.nativeElement;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const trigger = window.innerHeight * 0.6;
    const p = (trigger - rect.top) / rect.height;
    this.progress.set(Math.min(1, Math.max(0, p)));
  }

  iconFor(step: WorkStep, index: number): string {
    if (step.icon) {
      return step.icon.startsWith('bi-') ? step.icon : `bi-${step.icon}`;
    }
    return STEP_ICONS[index % STEP_ICONS.length];
  }
}
