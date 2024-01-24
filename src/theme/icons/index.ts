import { FC } from 'react';
import { ArrowIconLeft } from './ArrowIconLeft';
import { ArrowIconLong } from './ArrowIconLong';
import { ArrowIconRight } from './ArrowIconRight';
import { CartIcon } from './CartIcon';
import { CloseIcon } from './CloseIcon';
import { FbIcon } from './FbIcon';
import { GoogleIcon } from './GoogleIcon';
import { HeartIcon } from './HeartIcon';
import { InIcon } from './InIcon';
import { InstIcon } from './InstIcon';
import { MailIcon } from './MailIcon';
import { PassIcon } from './PassIcon';
import { SearchIcon } from './SearchIcon';
import { SendIcon } from './SendIcon';
import { StarIcon } from './StarIcon';
import { UserIcon } from './UserIcon';
import { YtIcon } from './YtIcon';
import { AddIcon } from './AddIcon';
import { DeleteIcon } from './DeleteIcon';
import { SettingIcon } from './SettingIcon';
import { OrdersIcon } from './OrdersIcon';
import { LogOutIcon } from './LogOutIcon';
import { DotIcon } from './DotIcon';

export interface Icons {
  [key: string]: FC<{ iconClass: string }>;
}

export const icons: Icons = {
  search: SearchIcon,
  heart: HeartIcon,
  cart: CartIcon,
  user: UserIcon,
  close: CloseIcon,
  fb: FbIcon,
  in: InIcon,
  inst: InstIcon,
  yt: YtIcon,
  mail: MailIcon,
  send: SendIcon,
  star: StarIcon,
  arrowLeft: ArrowIconLeft,
  arrowRight: ArrowIconRight,
  arrowLong: ArrowIconLong,
  pass: PassIcon,
  google: GoogleIcon,
  add: AddIcon,
  delete: DeleteIcon,
  orders: OrdersIcon,
  setting: SettingIcon,
  logOut: LogOutIcon,
  dot: DotIcon,
};
