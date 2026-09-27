import { HeroVideo, ImpactExpertise, IndustryPage, RegionalSection, ServiceSummary } from './../models/site.models';
import { ExpertiseGroup, Insight, NavItem, Office, Slide, Stat } from '../models/site.models';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Industries', children: [
    { label: 'Government & Public Sector', path: '/industries/government' },
    { label: 'Hospitality, Hajj & Umrah', path: '/industries/hospitality' },
    { label: 'Sports', path: '/industries/sports' },
    { label: 'Real Estate', path: '/industries/real-estate' },
    { label: 'Pharma and Healthcare', path: '/industries/pharma' },
    { label: 'Energy', path: '/industries/energy' },
    { label: 'Retail', path: '/industries/retail' },
  ]},
  { label: 'Services', children: [
    { label: 'Strategy', path: '/services/strategy' },
    { label: 'Corporate & Family Governance', path: '/services/governance' },
    { label: 'Digital Transformation', path: '/services/digital' },
    { label: 'People & Organizations', path: '/services/people' },
    { label: 'AI Adoption', path: '/services/ai' },
    { label: 'Supply Chain Consulting', path: '/services/supply-chain' },
    { label: 'Operational Excellence', path: '/services/operational-excellence' },
  ]},
  { label: 'Family Business', path: '/family-business' },
  { label: 'Insights', children: [
    { label: 'Egypt', path: '/insights/egypt' },
    { label: 'KSA', path: '/insights/ksa' },
    { label: 'UAE', path: '/insights/uae' },
  ]},
  { label: 'About Us', children: [
    { label: 'Who We Are', path: '/about/who-we-are' },
    { label: 'Our People & Leadership', path: '/about/leadership' },
    { label: 'Our Clients', path: '/about/clients' },
  ]},
  { label: 'Careers', path: '/careers' },
];

export const SLIDES: Slide[] = [
  {
    category: 'LOGIC Insights Sports Article',
    title: 'Building a Sustainable\nSports Economy',
    image: 'images/Ai-slider.png',
    link: { label: 'Read More', path: '/insights/sports-economy' },
  },
  {
    category: 'Check it now',
    title: 'Real Estate\nConsulting Brochure',
    image: 'images/RE-units-brochure-mockup-scaled.webp',
    link: { label: 'Read More', path: '/industries/real-estate' },
  },
  {
    category: 'Family Business',
    title: 'Family Business\nFor Governance & Legacy',
    subtitle: 'Safeguarding family business legacies & securing multi-generational continuity.',
    image: 'images/Family-SLIDER-scaled.png',
    link: { label: 'Read More', path: '/family-business' },
  },
  {
    category: 'AI & Digital Transformation',
    title: 'AI-Powered\nTransformation for Impact',
    image: 'images/Ai-slider.png',
    link: { label: 'Read More', path: '/services/ai' },
  },
];

export const STATS: Stat[] = [
  { number: '28+',   title: 'Years of Trusted Regional Expertise' },
  { number: '2000+', title: 'Successful Projects Delivered with Measurable Impact' },
  { number: '30+',   title: 'Industries Covered' },
  { number: '120+',  title: 'Consultants & Employees' },
];

export const REGIONAL: RegionalSection = {
  label: 'Regional Consulting Partner',
  title: 'Local Presence.\nRegional Scale.\nEnduring Impact.',
  paragraph: [
    'LOGIC Consulting exists to shape what’s next for organizations across the MENA region. For 28 years, we have worked with governments, family enterprises, and leading corporates to navigate uncertainty, capture new opportunities, and build resilient organizations.',
    'Anchored in deep regional understanding and elevated by global thinking, we do more than consult, we challenge, align, and enable leaders to move decisively in moments that matter.',
    'At LOGIC, impact is not episodic; it is cumulative, compounding, and built through long-term partnership.',
  ],
  image: 'images/regional-consulting.png',
  imageAlt: 'LOGIC Consulting Regional Consulting',
};

export const EXPERTISE: ExpertiseGroup[] = [
  { title: 'Industries', icon: 'bi-buildings', items: [
    { label: 'Government & Public Sector', path: '/industries/government' },
    { label: 'Real Estate', path: '/industries/real-estate' },
    { label: 'Pharma and Healthcare', path: '/industries/pharma' },
  ]},
  { title: 'Services', icon: 'bi-compass', items: [
    { label: 'Strategy', path: '/services/strategy' },
    { label: 'Digital Transformation', path: '/services/digital' },
    { label: 'AI Adoption', path: '/services/ai' },
  ]},
];

export const INSIGHTS: Insight[] = [
  {
    title: 'Building a Sustainable Sports Economy | From sporting ambition to lasting economic value',
    tag: 'Sports',
    slug: 'sports-economy',
    image: 'images/insight-sports.webp',
  },
  {
    title: 'Beyond Mega Projects | The Next Phase of Saudi Tourism',
    tag: 'Tourism & Culture',
    slug: 'saudi-tourism',
    image: 'images/insight-tourism.webp',
  },
  {
    title: 'The Role of AI in the Construction Industry',
    tag: 'AI',
    slug: 'ai-construction',
    image: 'images/insight-construction.webp',
  },
];

export const OFFICES: Office[] = [
  { country: 'Egypt', city: 'Giza', address: 'SODIC West, Block 1, Zone 4B, Sheikh Zayed City', phone: '+201273505023' },
  { country: 'Saudi Arabia', city: 'Riyadh', address: '3888 Anas Ibn Malik, Al Malqa', phone: '+966536620650' },
  { country: 'Saudi Arabia', city: 'Jeddah', address: '1004 Jameel Square Building, Tahlia St.', phone: '+966536618642' },
  { country: 'UAE', city: 'Dubai', address: 'Business Bay, Parklane Tower, Office 1102', phone: '+971524992567' },
  { country: 'Bahrain', city: 'Manama', address: 'Park Place Building, Seef Area, Office 9001' },
];

export const HERO_VIDEO: HeroVideo = {
  youtubeUrl: 'lY8zvsXEv28',
  title: 'LOGIC Consulting',
  subtitle:"ggggggg"
};

export const IMPACT_EXPERTISE: ImpactExpertise = {
  label: '28 YEARS OF IMPACT',
  title: 'Explore Our Expertise and How We Can Support You Achieve Your Strategic Goals',
  links: [
    { label: 'Industries', path: '/industries' },
    { label: 'Services', path: '/services' },
  ],
};



export const SERVICES: ServiceSummary[] = [
  { title: 'Strategy', path: '/services/strategy',
    description: 'Clear strategy turns complexity into direction and enables long-term, sustainable growth.' },
  { title: 'People & Organizations', path: '/services/people',
    description: 'Strong people systems build resilient institutions and high performance at every level.' },
  { title: 'Operational Excellence', path: '/services/operational-excellence',
    description: 'Less waste and leaner processes for consistent quality and reliable service delivery.' },
  { title: 'Corporate & Family Governance', path: '/services/governance',
    description: 'Governance that anchors decision-making, protects shareholders and sustains businesses.' },
  { title: 'AI Adoption', path: '/services/ai',
    description: 'Smarter operations, data-driven insight and automated workflows that accelerate performance.' },
  { title: 'Family Business Advisory Unit', path: '/family-business',
    description: 'Clarity and continuity for family enterprises through succession and governance systems.' },
];

export const INDUSTRY_PAGES: IndustryPage[] = [
  {
    slug: 'government',
    title: 'Government & Public Sector',
    bannerImage: 'images/Government2-1024x440.png',

    intro: {
      title: 'Driving Transformational Impact Across Nations',
      text: 'Across the MENA region, public institutions are being reshaped by national visions and rising public expectations. Consulting helps them turn policy ambition into delivery: implementing reforms, making data-driven decisions and creating measurable public value over the long term.',
      image: 'images/Government.png',
      cta: { label: 'Are you ready to lead?', path: '/contact' },
    },

    closerLook: {
      title: 'A Closer Look',
      image: 'images/industries/Government2-1024x440.png',
      items: [
        { title: 'Integrated National Planning',
          text: 'Policies and priorities are being aligned under long-term national visions.' },
        { title: 'Stronger Governance',
          text: 'Clearer mandates and oversight improve coordination and accountability.' },
        { title: 'Digital & Beneficiary-Centric Services',
          text: 'Digitization pushes agencies to redesign the beneficiary journey.' },
        { title: 'Operational Excellence & Waste Reduction',
          text: 'Entities streamline processes and manage resources better, including municipal and waste operations.' },
        { title: 'Fiscal Responsibility & Efficient Spending',
          text: 'Smarter use of public funds and more efficient ways to deliver services.' },
      ],
    },

    support: {
      title: 'How We Support Governments in Their Transformation Journey',
      text: 'We work with ministries, government and royal authorities and quasi-government entities to design and deliver sustainable, future-ready solutions.',
      expertiseTitle: 'Our Government & Public Sector Consulting Expertise',
      expertise: [
        { title: 'Strategy Development & Policy Enablement',
          text: 'National and sector strategies, forward-looking policies and clear prioritization.' },
        { title: 'Operating Model & Organizational Design',
          text: 'Agile structures, clear mandates and workforce plans for faster decisions.' },
        { title: 'Operational Excellence & Service Transformation',
          text: 'Streamlined operations and a redesigned beneficiary journey for citizen-centric services.' },
        { title: 'Delivery, PMO & Risk Management',
          text: 'Transformation offices that drive implementation, manage risk and track progress.' },
      ],
    },

    enablement: {
      title: 'Government Enablement Unit',
      text: 'GovEn is our dedicated unit that helps institutions sharpen strategic direction, improve operating models and measurably improve services and beneficiary experience.',
      image: 'images/govern.png',
      link: { label: 'Explore GovEn', path: '/services/government-enablement' },
    },

    stories: {
      title: 'Client Success Stories',
      subtitle: 'Transformative Journeys to Success',
      items: [
        { title: 'From Waste to Performance: How a National Authority Reduced 44% of Operational Waste in Four Months',
          image: 'images/story1.png',
          path: '/industries/government/stories/from-waste-to-performance' },
        { title: 'Transforming City Image Management in a Major UAE Emirate',
          image: 'images/story2.webp',
          path: '/industries/government/stories/city-image-management' },
        { title: 'Establishing Comprehensive Risk Governance for a Leading Saudi Ministry',
          image: 'images/story3.webp',
          path: '/industries/government/stories/risk-governance' },
      ],
    },

    insights: [
      { title: 'Oman’s 11th Five-Year Development Plan 2026–2030', tag: 'Government',
        slug: 'omans-11th-five-year-development-plan', image: 'images/insight-sports.webp' },
      { title: 'Governing Under Uncertainty – Part 2', tag: 'Government',
        slug: 'governing-under-uncertainty-2', image: 'images/insight-tourism.webp' },
      { title: 'Governing Under Uncertainty', tag: 'Government',
        slug: 'governing-under-uncertainty', image: 'images/insight-construction.webp' },
    ],

    closing: {
      title: 'Regional Expertise. Global Impact.',
      text: 'Successful public sector transformation needs disciplined execution, stakeholder alignment and governance that sustains performance. GovEn is built to support exactly that.',
      primary: { label: 'Contact us today', path: '/contact' },
      secondary: { label: 'Explore GovEn', path: '/services/government-enablement' },
    },
  },
];