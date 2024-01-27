import { FC, useEffect } from 'react';

import { Catalog } from '@/components/Catalog';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { selectArticles } from '@/lib/otherRedux/selectors';
import { getArticlesThunk } from '@/lib/otherRedux/thunks/catalog';


export const CatalogPage: FC = () => {
  const dispatch = useAppDispatch();
  const articlesList = useAppSelector(selectArticles);
  
  const page = 1;
  const limit = 8;
  const saleChecked=false;
  const category='';
  
  useEffect(() => {
    if (articlesList?.length === 0) {
      dispatch(getArticlesThunk({ page, limit, saleChecked, category }));
    }
    return;
  }, [dispatch, articlesList]);
  return (
    <>
      <Catalog />
    </>
  );
};
