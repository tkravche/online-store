import { StyledSearchDialog } from '@/theme/styles/layout/StyledHeader';
import { Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { FC, ReactElement, forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderSearch } from './HeaderSearch';
import { setHeaderSearch } from '@/lib/otherRedux/slice/header';
import { selectSearchOpen } from '@/lib/otherRedux/selectors';

interface TransitionComponentProps extends TransitionProps {
  children: ReactElement;
}

const Transition = forwardRef<unknown, TransitionComponentProps>(
  (props, ref) => {
    const { children, ...rest } = props;
    return (
      <Slide direction="down" ref={ref} {...rest}>
        {children}
      </Slide>
    );
  }
);

Transition.displayName = 'Transition';

export const HeaderSearchModal: FC = () => {
  const dispatch = useDispatch();
  const isSearchOpen = useSelector(selectSearchOpen);
  const handleCloseClick = () => {
    dispatch(setHeaderSearch(false));
  };

  return (
    <StyledSearchDialog
      open={isSearchOpen}
      onClose={handleCloseClick}
      TransitionComponent={Transition}
      keepMounted
    >
      <HeaderSearch />
    </StyledSearchDialog>
  );
};
