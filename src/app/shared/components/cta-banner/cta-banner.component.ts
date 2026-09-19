import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavLink } from '../../../core/models/site.models';

@Component({
  selector: 'app-cta-banner',
  imports: [RouterLink],
  template: `
    <section class="cta text-center text-white">
      <div class="container">
        <h2 class="fw-bold mb-3">{{ title() }}</h2>
        @if (text()) { <p class="cta-text mx-auto">{{ text() }}</p> }
        <div class="d-flex flex-wrap justify-content-center gap-3 mt-4">
          <a class="btn btn-accent btn-lg px-5" [routerLink]="primary().path">{{ primary().label }}</a>
          @if (secondary(); as s) {
            <a class="btn btn-outline-light btn-lg px-5" [routerLink]="s.path">{{ s.label }}</a>
          }
        </div>
      </div>
    </section>`,
  styles: `
    .cta { padding: 5rem 0; background: linear-gradient(120deg, var(--brand-dark), var(--brand-primary)); }
    .cta-text { max-width: 760px; color: rgba(255,255,255,.85); font-size: 18px; line-height: 1.7; }
  `,
})
export class CtaBannerComponent {
  title = input.required<string>();
  text = input<string>();
  primary = input.required<NavLink>();
  secondary = input<NavLink>();
}