import { FC } from 'react';

import { useAppSelector } from '@/hooks';
import { selectFoundArticles } from '@/lib/otherRedux/selectors';
import { StyledSearchSection } from '@/theme/styles/components/StyledSearch';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import { Typography } from '@mui/material';
import { StyledArticles } from '@/theme/styles/components/StyledCatalog';
import { ICardProps } from '@/types';
import { Card } from '@/components/Card';

export const SearchPage: FC = () => {
  const foundArticles = useAppSelector(selectFoundArticles);
  console.log(foundArticles);

  return (
    <StyledSearchSection>
      <StyledContainer>
        {!foundArticles?.length && (
          <Typography
            component="p"
            sx={{ width: '952px', textAlign: 'center' }}
          >
            Sorry, there are no products corresponding to these filter values.
          </Typography>
        )}
        <StyledArticles>
          {foundArticles?.map((item: ICardProps) => (
            <Card key={item.id} {...item} />
          ))}
        </StyledArticles>
      </StyledContainer>
    </StyledSearchSection>
  );
};
