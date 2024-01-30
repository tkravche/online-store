import { getIcon } from '@/helpers/getIcon';
import { setSearch } from '@/lib/otherRedux/slice/header';
// import { headerActions } from '@/lib/redux/actions';
import { StyledHeaderSearch } from '@/theme/styles/layout/StyledHeader';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import { EnumBreakpoints, EnumIcons } from '@/types';
import {
  IconButton,
  InputAdornment,
  TextField,
  useMediaQuery,
} from '@mui/material';
import { useDispatch } from 'react-redux';

export const HeaderSearch = () => {
  const dispatch = useDispatch();

  const isMobileScreen = useMediaQuery(
    `(min-width: ${EnumBreakpoints.tablet})`
  );

  return (
    <StyledHeaderSearch>
      <StyledContainer>
        <div className="search-content">
          <TextField
            placeholder="What are you looking for?"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {getIcon(EnumIcons.search)}
                </InputAdornment>
              ),
            }}
          />
          {isMobileScreen && (
            <IconButton
              onClick={() => dispatch(setSearch(false))}
            >
              {getIcon(EnumIcons.close)}
            </IconButton>
          )}
        </div>
      </StyledContainer>
    </StyledHeaderSearch>
  );
};

// import { useDebounce } from 'usehooks-ts';
// import { getIcon } from '@/helpers/getIcon';
// import { useAppDispatch, useAppSelector } from '@/hooks';
// import { setSearch } from '@/lib/otherRedux/slice/header';
// import { searchArticlesThunk } from '@/lib/otherRedux/thunks/catalog';
// // import { headerActions } from '@/lib/redux/actions';
// import { StyledHeaderSearch } from '@/theme/styles/layout/StyledHeader';
// import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
// import { EnumBreakpoints, EnumIcons } from '@/types';
// import {
//   Autocomplete,
//   IconButton,
//   InputAdornment,
//   TextField,
//   useMediaQuery,
// } from '@mui/material';
// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { selectFoundArticles } from '@/lib/otherRedux/selectors';

// const page = 1;
// const limit = 5;

// export const HeaderSearch = () => {
//   const dispatch = useAppDispatch();
//   const isMobileScreen = useMediaQuery(
//     `(min-width: ${EnumBreakpoints.tablet})`
//   );
//   const [search, setSearch] = useState('');
//   const [options, setOptions] = useState([]);
//   console.log(options);
//   const found = useAppSelector(selectFoundArticles);
//   const foundOptions = found?.reduce(
//     (acc: any, item: any) => [...acc, `/online-store/${item.id}`],
//     []
//   );
//   console.log(foundOptions);
//   // setOptions(foundOptions);
//   useEffect(() => {
//     if (search) {
//       dispatch(searchArticlesThunk({ search, page, limit }));
//       setOptions(foundOptions);
//     } else {
//       setOptions([]); // Clear options when inputValue is empty
//     }
//   }, [dispatch, search]);

//   return (
//     <StyledHeaderSearch>
//       <StyledContainer>
//         <div className="search-content">
//           <Autocomplete
//             freeSolo
//             options={options}
//             getOptionLabel={option => option.label}
//             onInputChange={(event, newInputValue) => setSearch(newInputValue)}
//             renderInput={params => (
//               <TextField
//                 {...params}
//                 label="Search"
//                 variant="outlined"
//                 fullWidth
//               />
//             )}
//           />
//           {/* {isMobileScreen && (
//             <IconButton onClick={() => dispatch(setSearch(false))}>
//               {getIcon(EnumIcons.close)}
//             </IconButton>
//           )} */}
//         </div>
//       </StyledContainer>
//     </StyledHeaderSearch>
//   );
// };
