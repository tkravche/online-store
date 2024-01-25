import { ReviewCard } from '@/components/Product/ReviewCard';
import Slider from 'react-slick';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledReviewSection = styled.section`
  ${tw`mb-14`}
`;

export const StyledReview = styled.div`
  ${tw`h-[254px] grid grid-cols-[29.2%, auto] gap-x-14`}
`;

export const StyledFeedbackWrapper = styled.div`
  ${tw` flex flex-col gap-y-6 p-4 justify-center items-center bg-main-white rounded-3xl`}
`;

export const StyledAddButton = styled.div`
  svg {
    ${tw`h-full w-full stroke-[#878D99] transition-all`}
  }

  .MuiIconButton-root {
    ${tw`p-0 cursor-pointer`}

    &:hover {
      background-color: transparent;

      svg {
        ${tw`stroke-main-red`}
      }
    }
  }
`;

export const StyledReviewsWrapper = styled.div`
  // ${tw`w-full grid`}
`;
export const StyledNoReviews = styled.div`
  ${tw`h-full flex justify-center items-center bg-main-white rounded-3xl p-4`}
`;

export const StyledReviewCard = styled(ReviewCard)`
  ${tw`p-4`}
`;

export const StyledReviewCardWrapper = styled.div`
  ${tw`min-h-[254px] bg-main-white rounded-3xl p-4`}
`;

export const StyledContainerReviewSlider = styled.div`
  ${tw`m-auto`}

  .slick-slider {
    ${tw`relative max-w-[250px] sm:max-w-[300px] md:max-w-[450px] lg:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[940px]`}

    .button {
      ${tw`absolute top-1/2 -left-10 -translate-y-2/4`}
    }

    .button-next {
      ${tw`absolute -right-10 left-auto`}
    }

    .MuiIconButton-root {
      ${tw`w-6 h-6 p-0`}

      svg {
        ${tw`stroke-secondary-gray`}
      }

      svg {
        ${tw`stroke-main-red`}
      }
    }
  }
  .MuiIconButton-root:hover {
    background-color: transparent;
  }
  .slick-list {
    ${tw`overflow-hidden`}
  }
  .slick-track {
    ${tw`flex gap-x-5`}
  }
`;

export const StyledReviewSlider = styled(Slider)`
  .slick-slide {
    
      ${tw`!max-w-[490px] `}
    }
    // @media (max-width: 1000px) {
    //   ${tw`!w-[390px]`}
    // }

    > div {
      ${tw`h-full`}
    }
  }

  ${StyledReviewCard} {
    ${tw`min-w-[460px]`}
  }

  .button {
    ${tw`hidden lg:inline-flex`}
  }
`;
