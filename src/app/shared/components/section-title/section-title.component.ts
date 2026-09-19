import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  template: `
    <div class="text-center mb-5">
      <h2 class="fw-bold text-brand">{{ title }}</h2>
      @if (subtitle) { <p class="text-muted mx-auto" style="max-width:640px">{{ subtitle }}</p> }
      <div class="mx-auto mt-3" style="width:60px;height:4px;background:var(--brand-accent)"></div>
    </div>`,
})
export class SectionTitleComponent {
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
}