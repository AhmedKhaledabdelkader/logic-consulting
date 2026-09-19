import { Component } from '@angular/core';
import { CtaBannerComponent } from '../../../shared/components/cta-banner/cta-banner.component';
import { HeroSliderComponent } from '../components/hero-slider/hero-slider.component';
import { HeroVideoComponent } from '../components/hero-video/hero-video.component';
import { InsightsComponent } from '../components/insights/insights.component';
import { RegionalPresenceComponent } from '../components/regional-presence/regional-presence.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroSliderComponent,
    RegionalPresenceComponent,
    HeroVideoComponent,
    InsightsComponent,
    CtaBannerComponent,
  ],
  template: `
    <app-hero-slider />
    <app-regional-presence />
    <app-hero-video />
    <app-insights />
    <app-cta-banner
      title="Build a Future-Ready Organization, Today."
      [primary]="{ label: 'Connect with us', path: '/contact' }" />`,
})
export class HomeComponent {}