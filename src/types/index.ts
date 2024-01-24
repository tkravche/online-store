export enum EnumIcons {
  search = 'search',
  star = 'star',
  heart = 'heart',
  cart = 'cart',
  user = 'user',
  close = 'close',
  yt = 'yt',
  inst = 'inst',
  in = 'in',
  fb = 'fb',
  mail = 'mail',
  send = 'send',
  arrowLeft = 'arrowLeft',
  arrowRight = 'arrowRight',
  arrowLong = 'arrowLong',
  pass = 'pass',
  google = 'google',
  add = 'add',
  delete = 'delete',
  orders = 'orders',
  setting = 'setting',
  logOut = 'logOut',
  dot= 'dot'
}

export enum EnumBreakpoints {
  mobile = '600px',
  tablet = '768px',
  tabletPortrait = '1023px',
  desktopSmall = '1280px',
  desktopMedium = '1648px',
}
export interface IIconClassProps {
  iconClass: string;
}

export interface ICardProps {
  id: number;
  price: number;
  discription: string;
  inStock: boolean;
  description: string;
  characteristic: string;
  rating: null | number;
  name: string;
  views: number;
  count: number;
  isPreviouslyUsed: boolean;
  images: {
    id: number;
    name: string;
    url: string;
  }[];
  sale: {
    id: number;
    newPrise: number;
    activeTill: string;
  };
  reviews: {
    text: string;
    stars: number;
    date: Date;
  }[];
  categories: {
    id: number;
    name: string;
  }[];
}

export interface IProductProps {
  id?: number;
}

export interface IReviewItem {
  stars: number;
  author: {
    name: string;
  };
  text: string;
  updatedAt: Date;
}
export interface IReviewProps {
  author: { name: string };
  text: string;
  stars: number;
  updatedAt: Date;
  items?: IReviewItem[];
}

export interface IReviewPopUpProps {
  id?: number;
  name: string;
  url: string;
}

export interface ICartItemProps {
  id: number;
  name: string;
  url: string;
  quantity: number;
  price: number;
  sale: {newPrise:number};
}
