import { RegionalSection, HeroVideo, ImpactExpertise, ServiceSummary, IndustryPage } from './../models/site.models';
import { REGIONAL } from './../data/site.data';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EXPERTISE, INSIGHTS, NAV_ITEMS, OFFICES, SLIDES, STATS, HERO_VIDEO, IMPACT_EXPERTISE,
  SERVICES, INDUSTRY_PAGES
 } from '../data/site.data';
import { ExpertiseGroup, Insight, NavItem, Office, Slide, Stat } from '../models/site.models';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, map } from 'rxjs';

import { ApiResponse } from '../models/siteApi.models';
import { SITE_API } from '../config/site-api-endpoints';
import { AboutPage } from '../models/about-page.models';
import { mediaUrl } from '../utils/media-url';


@Injectable({ providedIn: 'root' })
export class SiteContentService {

  private readonly http = inject(HttpClient);

  getNav(): Observable<NavItem[]> { return of(NAV_ITEMS); }

  getSlides(): Observable<Slide[]> {
    return this.get<Slide[]>(SITE_API.slides);
  }

  getStats(): Observable<Stat[]> {
    return this.get<Stat[]>(SITE_API.stats);
  }

  getExpertise(): Observable<ExpertiseGroup[]> { return of(EXPERTISE); }

  getOffices(): Observable<Office[]> { return of(OFFICES); }

  getRegional(): Observable<RegionalSection> {
    return this.http
      .get<ApiResponse<RegionalSection>>(SITE_API.regional)
      .pipe(
        map(response => {
          const data = response.data;
          const rawParagraph = data.paragraph as unknown;

          return {
            ...data,
            // The API sends `paragraph` as one plain string, not string[].
            // Split on newlines so multi-paragraph content still renders as
            // separate <p> tags; a single-line string just becomes a
            // one-element array.
            paragraph: Array.isArray(rawParagraph)
              ? rawParagraph
              : String(rawParagraph ?? '')
                  .split('\n')
                  .map(line => line.trim())
                  .filter(Boolean),

            image: mediaUrl(data.image),
          };
        })
      );
  }

  getVideo(): Observable<HeroVideo> {
    return this.get<HeroVideo>(SITE_API.video);
  }

  getImpactExpertise(): Observable<ImpactExpertise> { return of(IMPACT_EXPERTISE); }

  getServices(): Observable<ServiceSummary[]> { return of(SERVICES); }

  getInsights(): Observable<Insight[]> {
    return this.get<Insight[]>(SITE_API.insightsFeatured);
  }

  /**
   * Public read of the singleton About page. `values`/`presence` come back
   * from the API as plain arrays already (no JSON-string decoding needed
   * here — that only applied on the PUT side, in the dashboard), so this
   * only needs to resolve `story_image` into a loadable URL, same as
   * getRegional() does for its image.
   */
  getAbout(): Observable<AboutPage> {
    return this.http
      .get<ApiResponse<AboutPage>>(SITE_API.about)
      .pipe(
        map(response => ({
          ...response.data,
          story_image: mediaUrl(response.data.story_image),
        }))
      );
  }

  getIndustry(slug: string): Observable<IndustryPage | null> {
    return of(INDUSTRY_PAGES.find(p => p.slug === slug) ?? null);
  }

  private get<T>(url: string): Observable<T> {
    return this.http
      .get<ApiResponse<T>>(url)
      .pipe(map(response => response.data));
  }


   getAllInsights(): Observable<Insight[]> {
    return this.http
      .get<ApiResponse<Insight[]>>(SITE_API.insightsAll)
      .pipe(
        map(response =>
          (response.data ?? []).map(insight => ({
            ...insight,
            image: mediaUrl(insight.image),
          }))
        )
      );
  }
}

