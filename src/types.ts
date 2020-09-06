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
  sme: Sme;
}

// somehow importing components doesnt work, so sad
export interface UploadForm {
  getCategory(): SmeCategory;
  getFormValid(): boolean;
  getImgValid(): boolean;
  getTitle(): string;
  getSme(): {
    name: string;
    pos: {
      value: string;
      gPos?: Position;
    };
  };
  getContent(): string;
  getImgGrid(): {
    getImgs(): Array<string>;
    getImgInputsDiv(): HTMLElement | null;
    getLastImgInput(): HTMLInputElement | null;
  };
}
