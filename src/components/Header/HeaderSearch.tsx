import {
  Autocomplete,
  Box,
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
import { useAppDispatch, useAppSelector } from '@/hooks';
import { selectFoundArticles } from '@/lib/otherRedux/selectors';
import { searchArticles } from '@/hooks/axios/service';
import { setSearchedArticles } from '@/lib/otherRedux/slice/catalog';

export const HeaderSearch = () => {
  const [query, setQuery] = useState(null);
  const [options, setOptions] = useState([]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const found = useAppSelector(selectFoundArticles);

  const search = useDebounce(query, 700);
  const page = 1;
  const limit = 30;

  const handleOptionClick = e => {
    const id = e.id;
    navigate(`${id}`);
    dispatch(setHeaderSearch(false));
  };
  const handleSubmit = e => {
    e.preventDefault();
    navigate('search');
    dispatch(setHeaderSearch(false));
  };

  // setOptions(
  //   found?.map(item => {
  //     return {
  //       label: `${item.name}`,
  //       id: `${item.id}`,
  //       image: `${item.images[0].url}`,
  //       category: `${item.categories[0].name}`,
  //     };
  //   })
  // );
  // useEffect(() => {
  //   if (search) {
  //     const fetchData = async () => {
  //       try {
  //         await dispatch(searchArticlesThunk({ page, limit, search }));
  //       } catch (error) {
  //         console.error('Error fetching data:', error);
  //       }
  //     };
  //     fetchData();
  //   }
  // }, [dispatch, search]);

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        try {
          const res = await searchArticles(page, limit, search);
          dispatch(setSearchedArticles(res));
          setOptions(
            res?.data?.items?.map(item => {
              return {
                label: `${item.name}`,
                id: `${item.id}`,
                image: `${item.images[0].url}`,
                category: `${item.categories[0].name}`,
              };
            })
          );
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }
  }, [dispatch, search]);

  const isMobileScreen = useMediaQuery(
    `(min-width: ${EnumBreakpoints.tablet})`
  );
  return (
    <StyledHeaderSearch>
      <StyledContainer>
        <div className="search-content">
          <form onSubmit={handleSubmit}>
            <Autocomplete
              id="autocomplete"
              disableClearable
              noOptionsText="No products corresponding to this search input"
              options={options}
              groupBy={option => option.category}
              clearOnBlur
              value={search}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  <img
                    loading="lazy"
                    width="20"
                    src={option.image}
                    alt="product"
                  />
                  {option.label}
                </Box>
              )}
              renderInput={params => (
                <TextField
                  {...params}
                  placeholder="Start typing the name or description."
                  InputProps={{
                    ...params.InputProps,
                    autoComplete: 'new-password',
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton type="submit" aria-label="search">
                          {getIcon(EnumIcons.search)}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
              onInputChange={(event, newInputValue) => {
                setQuery(newInputValue.toLowerCase().trim());
              }}
              onChange={(event, selectedOption) => {
                if (selectedOption) {
                  handleOptionClick(selectedOption);
                }
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

//********search which shows results in the Search Page as cards
// import {
//   IconButton,
//   InputAdornment,
//   TextField,
//   useMediaQuery,
// } from '@mui/material';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import { useDebounce } from '@/helpers/debounce';
// import { getIcon } from '@/helpers/getIcon';
// import { setHeaderSearch } from '@/lib/otherRedux/slice/header';
// import { StyledHeaderSearch } from '@/theme/styles/layout/StyledHeader';
// import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
// import { EnumBreakpoints, EnumIcons } from '@/types';
// import { searchArticlesThunk } from '@/lib/otherRedux/thunks/catalog';
// import { useAppDispatch } from '@/hooks';

// export const HeaderSearch = () => {
//   const [query, setQuery] = useState('');

//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();

//   const search = useDebounce(query, 700);
//   const page = 1;
//   const limit = 20;

//   const handleChange = e => {
//     setQuery(e.target.value.toLowerCase().trim());
//   };
//   const handleSubmit = e => {
//     e.preventDefault();
//     navigate('search');
//     dispatch(setHeaderSearch(false));
//   };

//   useEffect(() => {
//     dispatch(searchArticlesThunk({ page, limit, search }));
//   }, [dispatch, search]);

//   const isMobileScreen = useMediaQuery(
//     `(min-width: ${EnumBreakpoints.tablet})`
//   );
//   return (
//     <StyledHeaderSearch>
//       <StyledContainer>
//         <div className="search-content">
//           <form onSubmit={handleSubmit}>
//             <TextField
//               id="search-bar"
//               placeholder="Start typing the name or description."
//               onChange={handleChange}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <IconButton type="submit" aria-label="search">
//                       {getIcon(EnumIcons.search)}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </form>
//           {isMobileScreen && (
//             <IconButton onClick={() => dispatch(setHeaderSearch(false))}>
//               {getIcon(EnumIcons.close)}
//             </IconButton>
//           )}
//         </div>
//       </StyledContainer>
//     </StyledHeaderSearch>
//   );
// };
