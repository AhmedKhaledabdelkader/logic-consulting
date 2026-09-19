import { DOCUMENT } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb } from '../../../core/models/site.models';

@Component({
  selector: 'app-page-banner',
  imports: [RouterLink],
  templateUrl: './page-banner.component.html',
  styleUrl: './page-banner.component.scss',
})
export class PageBannerComponent {
  private readonly doc = inject(DOCUMENT);

  title = input.required<string>();
  image = input<string>();
  breadcrumbs = input<Breadcrumb[]>([]);

  shareLinks = computed(() => {
    const url = encodeURIComponent(this.doc.location.href);
    const text = encodeURIComponent(`${this.title()} | LOGIC Consulting`);
    return [
      { icon: 'bi-envelope', label: 'Email', href: `mailto:?subject=${text}&body=${url}` },
      { icon: 'bi-linkedin', label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}` },
      { icon: 'bi-twitter-x', label: 'X', href: `https://twitter.com/intent/tweet?url=${url}&text=${text}` },
      { icon: 'bi-facebook', label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
    ];
  });
}