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

   getYoutubeId = (url: string): string | null => {
  try {
    const parsedUrl = new URL(url);

    // https://www.youtube.com/watch?v=VIDEO_ID
    if (parsedUrl.hostname.includes('youtube.com')) {
      return parsedUrl.searchParams.get('v');
    }

    // https://youtu.be/VIDEO_ID
    if (parsedUrl.hostname === 'youtu.be') {
      return parsedUrl.pathname.substring(1);
    }

    return null;
  } catch {
    return null;
  }
};

  url = computed(() => {
    const v = this.video();
    console.log(v);
  
    
    
    if (!v) return null;
    const id =this.getYoutubeId(v.youtubeUrl);
    console.log(id);
    
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}` +
      `&controls=0&rel=0&modestbranding=1`
    );
  });

  
}