import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta',
  imports: [RouterLink],
  template: `
  <section class="section text-center text-white" style="background:linear-gradient(120deg,var(--brand-dark),var(--brand-primary))">
    <div class="container">
      <h2 class="fw-bold mb-4">Build a Future-Ready Organization, Today.</h2>
      <a class="btn btn-accent btn-lg px-5" routerLink="/contact">Connect with us</a>
    </div>
  </section>`,
})
export class CtaComponent {}