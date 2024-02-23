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
  edit = 'edit',
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

export interface IOrderData {
  id: number;
  status: 'string';
  address: object;
  cancel: object;
  user: object;
  delivery: object;
  orderItems: [];
  totalPrice: number;
}

export interface IOrdersData {
  items: IOrderData[];
}

export interface IOrderItemProps {
  id: number;
  quantity: number;
  article: {
    id: number;
    name: string;
    price: number;
    sale: {
      id: number;
      newPrise: number;
      activeTill: string;
    };
    images?: {
      id: number;
      name: string;
      url: string;
    }[];
  };
}
export interface IOrderProps {
  id: number;
  status: string;
  updatedAt: Date;
  totalPrice: number;
  orderItems: [IOrderItemProps];
}

export interface IChangeData {
  done: boolean;
}

// {
//   "data": {
//     "id": 1,
//     "status": "CENCELED",
//     "address": {
//       "id": 1,
//       "street": "23 Street",
//       "city": "City",
//       "country": "United Kingdom",
//       "postCode": "223324"
//     },
//     "cancel": {
//       "id": 1,
//       "reason": "Bad address"
//     },
//     "user": {
//       "id": 1,
//       "name": "Mykhailo",
//       "email": "email@gmail.com",
//       "phoneNumber": "+44-2832-346-686",
//       "role": "user",
//       "isEmailConfirmed": true,
//       "provider": "EMAIL"
//     },
//     "delivery": {
//       "id": 1,
//       "shippingCost": 20,
//       "addition": "Be carefull it is a present",
//       "sendedAt": 1,
//       "deliveredAt": 1
//     },
//     "orderItems": [
//       {
//         "id": 1,
//         "quantity": 1,
//         "article": {
//           "id": 1,
//           "characteristic": "18 kmph\n120 km max distance",
//           "rating": 4.77,
//           "inStock": true,
//           "price": 199,
//           "discription": "You must to buy it",
//           "name": "Cool Bike",
//           "count": 9,
//           "views": 8924,
//           "isPreviouslyUsed": false
//         },
//         "subtotalPrice": 9.98
//       }
//     ],
//     "totalPrice": 233.6
//   }
// }
