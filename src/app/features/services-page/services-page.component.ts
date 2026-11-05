import { Component, HostListener, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs';

import { ServiceDetail } from '../../core/models/service-page.models';
import { SiteContentService } from '../../core/services/site-content.service';

const FALLBACK_ICONS = [
  'bi-compass', 'bi-diagram-3', 'bi-people', 'bi-graph-up-arrow',
  'bi-cpu', 'bi-shield-check', 'bi-lightbulb', 'bi-bullseye',
];

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss',
})
export class ServicesPageComponent implements OnInit {
  private readonly content = inject(SiteContentService);

  loading = signal(true);
  error = signal(false);
  services = signal<ServiceDetail[]>([]);
  active = signal<string | null>(null);

  totalItems = computed(() =>
    this.services().reduce((n, s) => n + s.items_count, 0)
  );

  /** "Seven capability areas" / "One capability area" — follows the real count. */
  introHeading = computed(() => {
    const n = this.services().length;
    if (!n) return 'Our capability areas, one integrated team.';
    const words = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'];
    const count = words[n] ?? String(n);
    return `${count} capability ${n === 1 ? 'area' : 'areas'}, one integrated team.`;
  });

  ngOnInit(): void {
    this.content
      .getServiceDetails()
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: list => {
          this.services.set(list);
          this.active.set(list[0]?.slug ?? null);
        },
        error: () => this.error.set(true),
      });
  }

  iconFor(s: ServiceDetail, index: number): string {
    if (s.icon) {
      return s.icon.startsWith('bi-') ? s.icon : `bi-${s.icon}`;
    }
    return FALLBACK_ICONS[index % FALLBACK_ICONS.length];
  }

  codeFor(s: ServiceDetail, index: number): string {
    return s.code || String.fromCharCode(65 + index);
  }

  // ---------- service picker ----------
  menuOpen = signal(false);

  selectedIndex = computed(() => {
    const i = this.services().findIndex(s => s.slug === this.active());
    return i < 0 ? 0 : i;
  });

  selected = computed<ServiceDetail | null>(
    () => this.services()[this.selectedIndex()] ?? null
  );

  /** One-item list so the @for re-creates the panel (and its animation) per service. */
  selectedList = computed(() => {
    const s = this.selected();
    return s ? [s] : [];
  });

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  select(slug: string): void {
    this.active.set(slug);
    this.menuOpen.set(false);
  }

  /** Previous (-1) / next (+1) service, wrapping around. */
  neighbor(dir: -1 | 1): ServiceDetail | null {
    const list = this.services();
    if (!list.length) return null;
    return list[(this.selectedIndex() + dir + list.length) % list.length];
  }

  step(dir: -1 | 1): void {
    const n = this.neighbor(dir);
    if (n) this.active.set(n.slug);
  }

  /** Overview card clicked: choose that service and bring the panel into view. */
  pickFromCard(slug: string, event: Event): void {
    event.preventDefault();
    this.select(slug);
    setTimeout(() =>
      document.getElementById('explorer')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    );
  }

  @HostListener('document:click')
  closeOnOutsideClick(): void {
    if (this.menuOpen()) this.menuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  closeOnEscape(): void {
    this.menuOpen.set(false);
  }
}
