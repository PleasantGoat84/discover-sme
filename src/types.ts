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

export interface Post {
  name: string;
  id: number;
  img: Array<{ url: string }>;
}

export interface HotPost extends Post {
  popularity: number;
}
