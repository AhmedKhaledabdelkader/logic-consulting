import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { SiteContentService } from '../../../../core/services/site-content.service';
import { ContentCardComponent } from '../../../../shared/components/content-card/content-card.component';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-insights',
  imports: [RouterLink, ContentCardComponent],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.scss',
})
export class InsightsComponent {
  insights = toSignal(inject(SiteContentService).getInsights(), { initialValue: [] });
   environment=environment.mediaUrl
}