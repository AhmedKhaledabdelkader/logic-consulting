import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
  computed,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { forkJoin, finalize } from 'rxjs';

import { Stat } from '../../core/models/site.models';
import { AboutPage } from '../../core/models/about-page.models';
import { SiteContentService } from '../../core/services/site-content.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {

  private readonly siteContent = inject(SiteContentService);

  loading = signal(true);

  about = signal<AboutPage | null>(null);

  stats = signal<Stat[]>([]);

  /** Splits the long story text into a lead sentence group + readable paragraphs. */
  storyParts = computed(() => {
    const text = (this.about()?.story_paragraph ?? '').trim();
    const sentences = text.match(/[^.!?]+[.!?]+(\s|$)|[^.!?]+$/g)?.map(x => x.trim()) ?? [];
    if (sentences.length <= 3) {
      return { lead: text, paragraphs: [] as string[] };
    }
    const lead = sentences.slice(0, 2).join(' ');
    const rest = sentences.slice(2);
    const paragraphs: string[] = [];
    for (let i = 0; i < rest.length; i += 3) {
      paragraphs.push(rest.slice(i, i + 3).join(' '));
    }
    return { lead, paragraphs };
  });

  @ViewChild('valuesTrack')
  private valuesTrack?: ElementRef<HTMLElement>;

  activeValueIndex = signal(0);


  ngOnInit(): void {
    this.loadAboutPage();
  }


  private loadAboutPage(): void {
    this.loading.set(true);

    forkJoin({
      about: this.siteContent.getAbout(),
      stats: this.siteContent.getStats(),
    })
      .pipe(
        finalize(() => this.loading.set(false))
      )
      .subscribe({
        next: ({ about, stats }) => {
          this.about.set(about);
          this.stats.set(stats);
        },

        error: error => {
          console.error('Failed to load About page.', error);
        },
      });
  }


  scrollToSection(id: string, event: Event): void {
    event.preventDefault();

    const el = document.getElementById(id);

    if (!el) return;

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }


  goToValue(index: number): void {
    const values = this.about()?.values ?? [];

    if (!values.length) return;

    const clamped = Math.max(
      0,
      Math.min(index, values.length - 1)
    );

    this.activeValueIndex.set(clamped);

    this.scrollValueIntoView(clamped);
  }


  prevValue(): void {
    this.goToValue(this.activeValueIndex() - 1);
  }


  nextValue(): void {
    this.goToValue(this.activeValueIndex() + 1);
  }


  private scrollValueIntoView(index: number): void {
    const track = this.valuesTrack?.nativeElement;

    if (!track) return;

    const card = track.children.item(index) as HTMLElement | null;

    card?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  }
}