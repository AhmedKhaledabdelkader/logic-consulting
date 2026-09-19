import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { SiteContentService } from '../../../../core/services/site-content.service';

@Component({
  selector: 'app-hero-video',
  imports: [RouterLink],
  templateUrl: './hero-video.component.html',
  styleUrl: './hero-video.component.scss',
})
export class HeroVideoComponent {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly content = inject(SiteContentService);

  video = toSignal(this.content.getVideo());
  impact = toSignal(this.content.getImpactExpertise());

  url = computed(() => {
    const v = this.video();
    if (!v) return null;
    const id = v.youtubeId;
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}` +
      `&controls=0&rel=0&modestbranding=1`
    );
  });
}