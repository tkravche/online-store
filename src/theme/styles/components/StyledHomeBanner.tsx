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

export const StyledHeroButton = styled.button`
  min-height: 60px;
  padding: 4px 69px;
  border-radius: 2rem;
  color: #fff;
  background: black;
  font-size: 1rem;
  letter-spacing: 200%;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 2rem;
    // background: linear-gradient(to right, #D25, #8083FF);
    background: #D25;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.7s;
    transition-duration: 0.5s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  &:hover:before,
  &:focus:before,
  &:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    
         }
`;

