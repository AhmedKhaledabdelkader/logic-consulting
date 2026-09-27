import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { SiteContentService } from '../../core/services/site-content.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
  <footer class="bg-brand-dark text-white-50 pt-5 pb-3">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-3">
          <h4 class="text-white fw-bold">Houida<br>Consulting <span class="text-accent">.</span></h4>
          <p>Leading MENA Consulting Firm</p>
          <div class="fs-5 d-flex gap-3">
            <a class="text-white-50" href="https://www.linkedin.com/company/logic-management-consulting/" target="_blank"><i class="bi bi-linkedin"></i></a>
            <a class="text-white-50" href="https://twitter.com/LOGIConsultancy" target="_blank"><i class="bi bi-twitter-x"></i></a>
            <a class="text-white-50" href="https://www.facebook.com/LOGICConsultancy" target="_blank"><i class="bi bi-facebook"></i></a>
            <a class="text-white-50" href="https://www.instagram.com/logicconsultancy/" target="_blank"><i class="bi bi-instagram"></i></a>
            <a class="text-white-50" href="https://www.youtube.com/@logicconsultancy" target="_blank"><i class="bi bi-youtube"></i></a>
          </div>
        </div>
        <div class="col-lg-2">
          <h6 class="text-white">Links</h6>
          <ul class="list-unstyled">
            <li><a class="text-white-50 text-decoration-none" routerLink="/">Home</a></li>
            <li><a class="text-white-50 text-decoration-none" routerLink="/careers">Careers</a></li>
            <li><a class="text-white-50 text-decoration-none" routerLink="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div class="col-lg-7">
          <h6 class="text-white">Our Offices</h6>
          <div class="row">
            @for (o of offices(); track o.city) {
              <div class="col-sm-6 mb-3">
                <strong class="text-white">{{ o.country }} - {{ o.city }}</strong><br>
                <small>{{ o.address }}</small>
                @if (o.phone) { <br><small><a class="text-accent text-decoration-none" [href]="'tel:' + o.phone">{{ o.phone }}</a></small> }
              </div>
            }
          </div>
        </div>
      </div>
      <hr class="border-secondary">
      <p class="text-center small mb-0">© {{ year }} LOGIC Consulting. All rights reserved.</p>
    </div>
  </footer>`,
})
export class FooterComponent {
  offices = toSignal(inject(SiteContentService).getOffices(), { initialValue: [] });
  year = new Date().getFullYear();
}