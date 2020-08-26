export interface SmeEvent {
  carouselImg: {
    url: string;
  };
  id: number;
}

export interface Sme {
  name: string;
  id: number;
}

export interface HotSme extends Sme {
  rank: number;
  popularity: number;
  imgs: Array<{ url: string }>;
}
