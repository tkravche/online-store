import {
  IconButton,
  InputAdornment,
  TextField,
  useMediaQuery,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDebounce } from '@/helpers/debounce';
import { getIcon } from '@/helpers/getIcon';
import { setHeaderSearch } from '@/lib/otherRedux/slice/header';
import { StyledHeaderSearch } from '@/theme/styles/layout/StyledHeader';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import { EnumBreakpoints, EnumIcons } from '@/types';
import { searchArticlesThunk } from '@/lib/otherRedux/thunks/catalog';
import { useAppDispatch } from '@/hooks';

export const HeaderSearch = () => {
  const [query, setQuery] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const search = useDebounce(query, 700);
  const page = 1;
  const limit = 20;

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase().trim());
  };
  const handleSubmit = e => {
    e.preventDefault();
    navigate('search');
    dispatch(setHeaderSearch(false));
  };

  useEffect(() => {
    dispatch(searchArticlesThunk({ page, limit, search }));
  }, [dispatch, search]);

  const isMobileScreen = useMediaQuery(
    `(min-width: ${EnumBreakpoints.tablet})`
  );
  return (
    <StyledHeaderSearch>
      <StyledContainer>
        <div className="search-content">
          <form onSubmit={handleSubmit}>
            <TextField
              id="search-bar"
              placeholder="Start typing the name or description."
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton type="submit" aria-label="search">
                      {getIcon(EnumIcons.search)}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </form>
          {isMobileScreen && (
            <IconButton onClick={() => dispatch(setHeaderSearch(false))}>
              {getIcon(EnumIcons.close)}
            </IconButton>
          )}
        </div>
      </StyledContainer>
    </StyledHeaderSearch>
  );
};
