import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { SiteContentService } from '../../../../core/services/site-content.service';

@Component({
  selector: 'app-impact-expertise',
  imports: [RouterLink],
  templateUrl: './impact-expertise.component.html',
  styleUrl: './impact-expertise.component.scss',
})
export class ImpactExpertiseComponent {
  data = toSignal(inject(SiteContentService).getImpactExpertise());
}

