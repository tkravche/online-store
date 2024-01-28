import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { styled } from 'styled-components';
import tw from 'twin.macro';

interface IHeroProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  bg?: string;
}

export const StyledHero = styled.section<IHeroProps>`
  ${tw`relative max-w-full min-h-[715px] py-[100px] bg-no-repeat bg-cover bg-center`}
  background-image: url(${props => props.bg});
`;

StyledHero.shouldForwardProp = prop => prop !== 'bg';

export const StyledHeroContent = styled.div`
  ${tw`pt-[160px] flex flex-col justify-around items-start gap-y-8`}
`;
export const StyledHeroButton = styled.button`
  display: inline-block;
  min-height: 60px;
  padding: 4px 69px;
  border-radius: 2rem;
  color: #fff;
  font-size: 1rem;
  background: #212121;
  letter-spacing: 200%;
  transition: width 0.9s ease-in;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0%;
    border-radius: 1rem;
    background: #d25;
    transition: opacity 1.5s ease-out 0.1s;
    z-index: -1;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0%;
    height: 100%;
    background: linear-gradient(to right, #d25 4%, #8083ff 60%);
    transition: width 0.8s ease-out;
    border-radius: 1rem;
    z-index: -2;
  }
  &:hover:before {
    width: 100%;
  }
  &:hover:after {
    opacity: 100%;
  }
`;
