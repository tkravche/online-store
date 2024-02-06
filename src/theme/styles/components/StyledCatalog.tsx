import { FormControl, Pagination, Select } from '@mui/material';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledCatalogSection = styled.section`
  ${tw`mt-40`}
`;
export const StyledCatalog = styled.div`
  ${tw`grid grid-cols-[24% auto] justify-center gap-x-32 mt-14`}
`;
export const StyledFilters = styled.div`
  ${tw`bg-main-white max-h-[780px] rounded-lg`}
`;
export const StyledSelectsWrapper = styled.div`
  ${tw`grid grid-cols-2 justify-between`}
.MuiInputBase-root {
    ${tw`rounded bg-[#E6E7FF] border-none p-0 text-sm`}
  }
`;
export const StyledFormControlPage = styled(FormControl)`
  ${tw`justify-self-end`}
`;
export const Styled2SelectsWrapper = styled.div`
  ${tw`flex gap-x-4`}
  .MuiInputBase-root {
    ${tw`p-0`}
  }
`;

export const StyledPageSelect = styled(Select)`
${tw`bg-main-red`}
}
`;
export const StyledArticlesWrapper = styled.div`
  ${tw`grid`}
`;

export const StyledArticles = styled.div`
  ${tw` grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-5 gap-y-6`}
`;
export const StyledPagination = styled(Pagination)`
  ${tw` justify-self-center mt-6`}
  .MuiPaginationItem-root{
    ${tw`text-secondary-gray border-secondary-gray`}
  }
  .MuiPaginationItem-previousNext {
    border-color: transparent;
  }
`;
