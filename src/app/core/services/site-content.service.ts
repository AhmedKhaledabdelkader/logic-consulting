import { RegionalSection, HeroVideo, ImpactExpertise,ServiceSummary,IndustryPage } from './../models/site.models';
import { REGIONAL } from './../data/site.data';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EXPERTISE, INSIGHTS, NAV_ITEMS, OFFICES, SLIDES, STATS,HERO_VIDEO,IMPACT_EXPERTISE,
  SERVICES, INDUSTRY_PAGES
 } from '../data/site.data';
import { ExpertiseGroup, Insight, NavItem, Office, Slide, Stat } from '../models/site.models';



@Injectable({ providedIn: 'root' })
export class SiteContentService {
  getNav(): Observable<NavItem[]> { return of(NAV_ITEMS); }
  getSlides(): Observable<Slide[]> { return of(SLIDES); }
  getStats(): Observable<Stat[]> { return of(STATS); }
  getExpertise(): Observable<ExpertiseGroup[]> { return of(EXPERTISE); }
  getInsights(): Observable<Insight[]> { return of(INSIGHTS); }
  getOffices(): Observable<Office[]> { return of(OFFICES); }
  getRegional(): Observable<RegionalSection> { return of(REGIONAL); }
   getVideo(): Observable<HeroVideo> { return of(HERO_VIDEO); }
  getImpactExpertise(): Observable<ImpactExpertise> { return of(IMPACT_EXPERTISE); }

  getServices(): Observable<ServiceSummary[]> { return of(SERVICES); }

getIndustry(slug: string): Observable<IndustryPage | null> {
  return of(INDUSTRY_PAGES.find(p => p.slug === slug) ?? null);
}
}