export interface SmeEvent {
  carouselImg: {
    url: string;
  };
  id: number;
}

export enum SmeCategory {
  Cafe,
  Drink,
  Barber,
  Dessert,
  Mechanical,
  Fashion,
  Musical,
  Medical,
  Other
}

export interface Sme {
  name: string;
  id: number;
  category: SmeCategory;
}

export interface HotSme extends Sme {
  rank: number;
  popularity: number;
  imgs: Array<{ url: string }>;
}
