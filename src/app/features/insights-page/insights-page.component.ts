import { CommonModule } from '@angular/common';

import {
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';

import { finalize } from 'rxjs';

import { Insight } from '../../core/models/site.models';
import { SiteContentService } from '../../core/services/site-content.service';


@Component({
  selector: 'app-insights-page',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './insights-page.component.html',

  styleUrl: './insights-page.component.scss',
})
export class InsightsPageComponent implements OnInit {

  private readonly siteContent =
    inject(SiteContentService);


  loading = signal(true);

  insights = signal<Insight[]>([]);


  ngOnInit(): void {
    this.load();
  }


  private load(): void {

    this.loading.set(true);

    this.siteContent
      .getAllInsights()
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({

        next: insights => this.insights.set(insights),

        error: error =>
          console.error('Failed to load insights.', error),

      });
  }
}