import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Product } from '@/components/Product';
import { selectIsLogged } from '@/lib/otherRedux/selectors';
import { currentUserThunk } from '@/lib/otherRedux/thunks/user';
import { useAppDispatch, useAppSelector } from '@/hooks';

export const ProductPage: FC = () => {
  const { id } = useParams();
  const productId = Number(id);
  const isLogged = useAppSelector(selectIsLogged);
  const dispatch = useAppDispatch();

  if (isLogged) {
    dispatch(currentUserThunk());
  }

  return (
    <>
      <Product id={productId} />
    </>
  );
};
