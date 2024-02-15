import { Typography } from '@mui/material';
import { FC } from 'react';

import { getIcon } from '@/helpers/getIcon';
import { StyledReviewCardWrapper } from '@/theme/styles/components/StyledReviewSection';
import { StyledRating, StyledText } from '@/theme/styles/ui/StyledRating';
import { EnumIcons, IReviewItem } from '@/types';

export const ReviewCard: FC<IReviewItem> = props => {
  const { author, text, stars, updatedAt } = props;
  const { name } = author;

  const dateFormatted = new Date(updatedAt);
  const year = dateFormatted.getFullYear();
  const month = dateFormatted.getMonth() + 1;
  const formattedMonth = month < 10 ? '0' + month : month;
  const day = dateFormatted.getDate();
  const formattedDay = day < 10 ? '0' + day : day;
  const formattedDate = `${formattedDay}.${formattedMonth}.${year}`;

  return (
    <StyledReviewCardWrapper>
      <Typography
        variant="button"
        component="h3"
        mb={1}
        sx={{ textTransform: 'none' }}
      >
        {name}
      </Typography>
      <Typography
        variant="body3"
        component="p"
        mb={3}
        sx={{ color: '#878D99' }}
      >
        {formattedDate}
      </Typography>
      <StyledRating
        name={`rating-${stars}`}
        defaultValue={stars ?? 0}
        size="small"
        icon={getIcon(EnumIcons.star)}
        emptyIcon={getIcon(EnumIcons.star)}
        readOnly
      />
      <StyledText>
        <Typography
          variant="body2"
          component="p"
          mt={3}
          sx={{
            maxWidth: '428px',
            maxHeight: '80px',
            overflow: 'auto',
          }}
        >
          {text}
        </Typography>
      </StyledText>
    </StyledReviewCardWrapper>
  );
};
