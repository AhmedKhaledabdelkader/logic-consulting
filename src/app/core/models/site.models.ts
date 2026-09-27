export interface NavLink { label: string; path: string; }
export interface NavItem { label: string; path?: string; children?: NavLink[]; }

export interface Slide {
  category: string;
  title: string;          // use \n for a line break
  subtitle?: string;
  image: string;
  link: NavLink;
}
export interface Stat { number: string; title: string; }
export interface RegionalSection {
  label: string;
  title: string;          // use \n for line breaks
  paragraph: string[];
  image: string;
  imageAlt: string;
}


export interface Insight {
  id:number;
  title: string;
  tag: string;
  slug: string;
  image: string;
}

export interface Office { country: string; city: string; phone?: string; address: string; }
export interface ExpertiseGroup { title: string; icon: string; items: NavLink[]; }

export interface HeroVideo {
  youtubeUrl: string;
  title: string;
  subtitle:string
}

export interface ImpactExpertise {
  label: string;
  title: string;
  links: NavLink[];
}

export interface Breadcrumb { label: string; path?: string; }
export interface TitledText { title: string; text: string; }
export interface StoryLink { title: string; image: string; path: string; }
export interface ServiceSummary { title: string; description: string; path: string; }


export interface IndustryPage {
  slug: string;
  title: string;
  bannerImage: string;
  intro: { title: string; text: string; image: string; cta: NavLink };
  closerLook: { title: string; image: string; items: TitledText[] };
  support: { title: string; text: string; expertiseTitle: string; expertise: TitledText[] };
  enablement: { title: string; text: string; image: string; link: NavLink };
  stories: { title: string; subtitle: string; items: StoryLink[] };
  insights: Insight[];
  closing: { title: string; text: string; primary: NavLink; secondary?: NavLink };
}