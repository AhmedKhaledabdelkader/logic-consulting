import { environment } from '../../../environments/environment';

/**
 * ASSUMPTION: these paths are guessed to match your section names
 * (nav, slides, stats, expertise, offices, regional, video,
 * impact-expertise, services, industries/{slug}). Swap any of these
 * for your real Laravel routes — nothing else in site-content.service.ts
 * needs to change if you do.
 *
 * `insightsFeatured` reuses the same /insights/featured endpoint the
 * admin dashboard already calls, since the public site should only ever
 * show the (max 3) insights marked to appear on the Home page.
 */
export const SITE_API = {
 // nav: `${environment.apiUrl}/nav`,
  slides: `${environment.apiUrl}/home/slides`,
  stats: `${environment.apiUrl}/home/stats`,
  expertise: `${environment.apiUrl}/expertise`,
  insightsFeatured: `${environment.apiUrl}/insights/featured`,
  offices: `${environment.apiUrl}/offices`,
  regional: `${environment.apiUrl}/home/regional`,
  video: `${environment.apiUrl}/home/video`,
  impactExpertise: `${environment.apiUrl}/impact-expertise`,
  services: `${environment.apiUrl}/services`,
  industry: (slug: string) => `${environment.apiUrl}/industries/${slug}`,
};