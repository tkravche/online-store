
import { Pagination } from '@mui/material';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledCatalogSection = styled.section`
  ${tw`mt-40 `}
`;
export const StyledCatalog = styled.div`
  ${tw`grid grid-cols-[30% auto] gap-x-36`}
`;
export const StyledFilters = styled.div`
  ${tw``}
`;
export const StyledArticles = styled.div`
  ${tw`grid grid-cols-4  gap-x-5 gap-y-6`}
`;
export const StyledPagination = styled(Pagination)`
  ${tw`col-span-4 justify-self-center`}
`;
