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
  passoff = 'passoff',
  google = 'google',
  add = 'add',
  delete = 'delete',
  orders = 'orders',
  setting = 'setting',
  logOut = 'logOut',
  dot = 'dot',
  check = 'check',
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
export interface ICatalogProps {
  categoryForPage?: string;
}

export interface IProductsGalleryProps {
  page: number;
  pageSize: number;
  articles: [];
  totalItems: number;
  handlePageChange: any;
}
export interface IReviewItem {
  id: number;
  stars: number;
  author: {
    name: string;
    id: number;
  };
  text: string;
  updatedAt: Date;
}
export interface IReviewProps {
  reviews: IReviewItem[];
}

export interface IReviewPopUpProps {
  id: number;
  name: string;
  url: string;
  reviews: IReviewItem[];
}

export interface ICartItemProps {
  id: number;
  name: string;
  url: string;
  quantity: number;
  price: number;
  sale: { newPrise: number };
}

export interface ICartItem {
  id: number;
  characteristic: string;
  rating: null | number;
  inStock: boolean;
  price: number;
  discription: string;
  name: string;
  count: number;
  views: number;
  isPreviouslyUsed: boolean;
}

export interface ICartData {
  id: number;
  quantity: number;
  article: ICartItem;
  subtotalPrice: number;
}

export interface ICartItemsData {
  items: ICartData[];
}
