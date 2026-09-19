import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { SiteContentService } from '../../../../../app/core/services/site-content.service';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-expertise',
  imports: [RouterLink, SectionTitleComponent],
  template: `
  <section class="section bg-brand-light">
    <div class="container">
      <app-section-title title="28 Years of Impact"
        subtitle="Explore our expertise and how we can help you achieve your strategic goals" />
      <div class="row g-4">
        @for (g of groups(); track g.title) {
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <i class="bi {{ g.icon }} fs-1 text-brand"></i>
                <h4 class="fw-bold mt-2">{{ g.title }}</h4>
                <ul class="list-unstyled my-3">
                  @for (i of g.items; track i.path) {
                    <li class="mb-1"><i class="bi bi-check2-circle text-accent me-2"></i>{{ i.label }}</li>
                  }
                </ul>
                <a class="btn btn-primary" [routerLink]="'/' + g.title.toLowerCase()">Explore {{ g.title }}</a>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  </section>`,
})
export class ExpertiseComponent {
  groups = toSignal(inject(SiteContentService).getExpertise(), { initialValue: [] });
}