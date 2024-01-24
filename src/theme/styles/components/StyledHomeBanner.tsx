import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { styled } from 'styled-components';
import tw from 'twin.macro';

interface IHeroProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  bg?: string;
}

export const StyledHero = styled.section<IHeroProps>`
  ${tw`relative max-w-full min-h-[846px] py-[100px] bg-no-repeat bg-cover bg-center`}
  background-image: url(${props => props.bg});
`;

StyledHero.shouldForwardProp = prop => prop !== 'bg';

export const StyledHeroContent = styled.div`
  ${tw`pt-[160px] flex flex-col justify-around items-start gap-y-8`}
`;
