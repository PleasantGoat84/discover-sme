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
  Education,
  Other
}

export interface Image {
  url: string;
}

export interface User {
  id: number;
  name: string;
  avatar?: Image;
}

export interface Sme {
  name: string;
  id: number;
  category: SmeCategory;
}

export interface HotSme extends Sme {
  rank: number;
  popularity: number;
  imgs: Array<Image>;
}

export interface Post {
  name: string;
  id: number;
  author: User;
  postDate: string;

  content: string;
  img: Array<Image>;
  popularity: number;
  liked: boolean;
}
