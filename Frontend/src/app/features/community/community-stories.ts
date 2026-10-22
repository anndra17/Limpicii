export interface CommunityStory {
  slug: string;
  image: string;
  title: string;
  description: string;
  alt: string;
  background: string;
  participation: string;
}

export const communityStories: CommunityStory[] = [
  {
    slug: 'crosul-15-noiembrie',
    image: 'assets/images/news/cros15noiembrie.jpg',
    title: 'COMMUNITY_IMPACT.NOVEMBER_TITLE',
    description: 'COMMUNITY_IMPACT.NOVEMBER_DESCRIPTION',
    alt: 'COMMUNITY_IMPACT.NOVEMBER_ALT',
    background: 'COMMUNITY_IMPACT.NOVEMBER_BACKGROUND',
    participation: 'COMMUNITY_IMPACT.NOVEMBER_PARTICIPATION',
  },
  {
    slug: 'brasov-marathon',
    image: 'assets/images/news/brasovMarathon.jpg',
    title: 'COMMUNITY_IMPACT.BRASOV_MARATHON_TITLE',
    description: 'COMMUNITY_IMPACT.BRASOV_MARATHON_DESCRIPTION',
    alt: 'COMMUNITY_IMPACT.BRASOV_MARATHON_ALT',
    background: 'COMMUNITY_IMPACT.BRASOV_MARATHON_BACKGROUND',
    participation: 'COMMUNITY_IMPACT.BRASOV_MARATHON_PARTICIPATION',
  },
  {
    slug: 'bimbo-marathon',
    image: 'assets/images/news/bimboGlobalRace.jpg',
    title: 'COMMUNITY_IMPACT.BIMBO_TITLE',
    description: 'COMMUNITY_IMPACT.BIMBO_DESCRIPTION',
    alt: 'COMMUNITY_IMPACT.BIMBO_ALT',
    background: 'COMMUNITY_IMPACT.BIMBO_BACKGROUND',
    participation: 'COMMUNITY_IMPACT.BIMBO_PARTICIPATION',
  },
  {
    slug: 'incurajam-alergatorii',
    image: 'assets/images/news/RunnersSupport.jpeg',
    title: 'COMMUNITY_IMPACT.RUNNERS_TITLE',
    description: 'COMMUNITY_IMPACT.RUNNERS_DESCRIPTION',
    alt: 'COMMUNITY_IMPACT.RUNNERS_ALT',
    background: 'COMMUNITY_IMPACT.RUNNERS_BACKGROUND',
    participation: 'COMMUNITY_IMPACT.RUNNERS_PARTICIPATION',
  },
  {
    slug: 'sprijin-pentru-comunitate',
    image: 'assets/images/news/assistanceAfterFire.jpeg',
    title: 'COMMUNITY_IMPACT.COMMUNITY_SUPPORT_TITLE',
    description: 'COMMUNITY_IMPACT.COMMUNITY_SUPPORT_DESCRIPTION',
    alt: 'COMMUNITY_IMPACT.COMMUNITY_SUPPORT_ALT',
    background: 'COMMUNITY_IMPACT.COMMUNITY_SUPPORT_BACKGROUND',
    participation: 'COMMUNITY_IMPACT.COMMUNITY_SUPPORT_PARTICIPATION',
  },
];
