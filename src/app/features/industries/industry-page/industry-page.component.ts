import { Component, computed, effect, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { SiteContentService } from '../../../core/services/site-content.service';
import { ContentCardComponent } from '../../../shared/components/content-card/content-card.component';
import { CtaBannerComponent } from '../../../shared/components/cta-banner/cta-banner.component';
import { PageBannerComponent } from '../../../shared/components/page-banner/page-banner.component';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title.component';
import { ServicesGridComponent } from '../../../shared/components/services-grid/services-grid.component';
import { StorySliderComponent } from '../../../shared/components/story-slider/story-slider.component';

@Component({
  selector: 'app-industry-page',
  imports: [
    RouterLink,
    PageBannerComponent,
    SectionTitleComponent,
    ContentCardComponent,
    ServicesGridComponent,
    CtaBannerComponent,
    StorySliderComponent
  ],
  templateUrl: './industry-page.component.html',
  styleUrl: './industry-page.component.scss',
})
export class IndustryPageComponent {
  private readonly content = inject(SiteContentService);
  private readonly titleService = inject(Title);

  /** filled from the route (:slug) through withComponentInputBinding() */
  slug = input.required<string>();

  /** undefined = loading, null = slug not found */
  page = toSignal(toObservable(this.slug).pipe(switchMap(s => this.content.getIndustry(s))));

  services = toSignal(this.content.getServices(), { initialValue: [] });

  breadcrumbs = computed(() => [
    { label: 'Home', path: '/' },
    { label: 'Industries', path: '/industries' },
    { label: this.page()?.title ?? '' },
  ]);

  constructor() {
    effect(() => {
      const p = this.page();
      if (p) this.titleService.setTitle(`${p.title} | LOGIC Consulting`);
    });
  }
}