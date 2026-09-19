import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SiteContentService } from '../../../../core/services/site-content.service';

@Component({
  selector: 'app-regional-presence',
  templateUrl: './regional-presence.component.html',
  styleUrl: './regional-presence.component.scss',
})
export class RegionalPresenceComponent {
  private readonly content = inject(SiteContentService);

  regional = toSignal(this.content.getRegional());
  stats = toSignal(this.content.getStats(), { initialValue: [] });
}