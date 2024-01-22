import { Product } from '@/components/Product';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { selectIsLogged } from '@/lib/otherRedux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { currentUserThunk } from '@/lib/otherRedux/thunks/user';

export const ProductPage: FC = () => {
  const { id } = useParams();
  const productId = Number(id);
  const isLogged = useSelector(selectIsLogged);
  const dispatch = useDispatch();

  // if (isLogged) {
  //   dispatch(currentUserThunk());
  // }

  return (
    <>
      <Product id={productId} />
    </>
  );
};
