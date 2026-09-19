import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SiteContentService } from '../../core/services/site-content.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-brand-dark sticky-top shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold fs-4" routerLink="/">LOGIC<span class="text-accent">.</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="mainNav" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto align-items-lg-center">
          @for (item of nav(); track item.label) {
            @if (item.children) {
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">{{ item.label }}</a>
                <ul class="dropdown-menu">
                  @for (c of item.children; track c.path) {
                    <li><a class="dropdown-item" [routerLink]="c.path">{{ c.label }}</a></li>
                  }
                </ul>
              </li>
            } @else {
              <li class="nav-item">
                <a class="nav-link" [routerLink]="item.path" routerLinkActive="active">{{ item.label }}</a>
              </li>
            }
          }
          <li class="nav-item ms-lg-3">
            <a class="btn btn-accent btn-sm px-3" routerLink="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`,
})
export class HeaderComponent {
  nav = toSignal(inject(SiteContentService).getNav(), { initialValue: [] });
}