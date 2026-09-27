import { RegionalSection, HeroVideo, ImpactExpertise,ServiceSummary,IndustryPage } from './../models/site.models';
import { REGIONAL } from './../data/site.data';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EXPERTISE, INSIGHTS, NAV_ITEMS, OFFICES, SLIDES, STATS,HERO_VIDEO,IMPACT_EXPERTISE,
  SERVICES, INDUSTRY_PAGES
 } from '../data/site.data';
import { ExpertiseGroup, Insight, NavItem, Office, Slide, Stat } from '../models/site.models';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import {catchError, map } from 'rxjs';
 
import { ApiResponse } from '../models/siteApi.models';
import { SITE_API } from '../config/site-api-endpoints';
 

@Injectable({ providedIn: 'root' })
export class SiteContentService {

   private readonly http = inject(HttpClient);
  getNav(): Observable<NavItem[]> { return of(NAV_ITEMS); }
 // getSlides(): Observable<Slide[]> { return of(SLIDES); }

 
  getSlides(): Observable<Slide[]> {
    return this.get<Slide[]>(SITE_API.slides);
  }
  
  getStats(): Observable<Stat[]> {
    return this.get<Stat[]>(SITE_API.stats);
  }
  getExpertise(): Observable<ExpertiseGroup[]> { return of(EXPERTISE); }
  //getInsights(): Observable<Insight[]> { return of(INSIGHTS); }
  getOffices(): Observable<Office[]> { return of(OFFICES); }
 // getRegional(): Observable<RegionalSection> { return of(REGIONAL); }

 
  
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
 
           // image: toMediaUrl(data.image),
          };
        })
      );
  }
   //getVideo(): Observable<HeroVideo> { return of(HERO_VIDEO); }

   getVideo(): Observable<HeroVideo> {
    return this.get<HeroVideo>(SITE_API.video);
  }
  getImpactExpertise(): Observable<ImpactExpertise> { return of(IMPACT_EXPERTISE); }

  getServices(): Observable<ServiceSummary[]> { return of(SERVICES); }


   getInsights(): Observable<Insight[]> {
    return this.get<Insight[]>(SITE_API.insightsFeatured);
  }



getIndustry(slug: string): Observable<IndustryPage | null> {
  return of(INDUSTRY_PAGES.find(p => p.slug === slug) ?? null);
}

private get<T>(url: string): Observable<T> {
    return this.http
      .get<ApiResponse<T>>(url)
      .pipe(map(response => response.data));
  }
}

