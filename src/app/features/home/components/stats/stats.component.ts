import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SiteContentService } from '../../../../core/services/site-content.service';

@Component({
  selector: 'app-stats',
  template: `
  <section class="section">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-6">
          <h6 class="text-uppercase text-accent fw-bold">Local Presence. Regional Scale. Enduring Impact.</h6>
          <h2 class="fw-bold text-brand mb-3">Shaping what's next across the MENA region</h2>
          <p class="text-muted">
            For 28 years we have worked with governments, family enterprises and leading corporates
            to navigate uncertainty, capture new opportunities and build resilient organizations.
          </p>
        </div>
        <div class="col-lg-6">
          <div class="row g-3">
            @for (s of stats(); track s.label) {
              <div class="col-6">
                <div class="p-4 bg-brand-light rounded-3 h-100 border-start border-4" style="border-color:var(--brand-accent)!important">
                  <div class="display-6 fw-bold text-brand">{{ s.value }}</div>
                  <small class="text-muted">{{ s.label }}</small>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  </section>`,
})
export class StatsComponent {
  stats = toSignal(inject(SiteContentService).getStats(), { initialValue: [] });
}