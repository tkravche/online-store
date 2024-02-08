// import { useDebounce } from '@/helpers/debounce';
// import { getIcon } from '@/helpers/getIcon';
// import { useAppDispatch, useAppSelector } from '@/hooks';
// import { instance } from '@/hooks/axios';
// import { selectFoundArticles } from '@/lib/otherRedux/selectors';
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
// import { useNavigate } from 'react-router-dom';

// export const HeaderSearch = () => {
//   const [search, setSearch] = useState('');
//   const [options, setOptions] = useState(['Options are loading']);
//   const navigate = useNavigate();
// const debouncedSearch= useDebounce(search, 500);
//   const dispatch = useAppDispatch();
//   const handleInput = e => {
//     console.log(e.target.value);
//     setSearch(e.target.value.toLowerCase().trim());
//   };
//   const isMobileScreen = useMediaQuery(
//     `(min-width: ${EnumBreakpoints.tablet})`
//   );
//   // useEffect(() => {
//   //   instance
//   //     .get(`articles?search=${debouncedSearch}`)
//   //     .then(res => {
//   //       setOptions(
//   //         res?.data?.data?.items?.map(
//   //           item => item.name + ' ' + item.categories[0].name
//   //         )
//   //       );
//   //     })
//   //     .catch(e => {
//   //       console.log(e.message);
//   //     });
//   // }, [search]);
//   // if (options?.length < 2) {
//   //   instance
//   //     .get(`articles?search=${debouncedSearch}`)
//   //     .then(res => {
//   //       setOptions(res?.data?.data?.items?.map(item => item.name));
//   //     })
//   //     .catch(e => {
//   //       console.log(e.message);
//   //     });
//   // }
//   // console.log(options);

//   // const handleSearch = async search => {
//   //   try {
//   //     const res = await instance.get(`articles?search=${debouncedSearch}`);
//   //     setOptions(res?.data?.data?.items?.map(item => item.name));
//   //   } catch (error) {
//   //     console.error('Error fetching data:', error);
//   //   }
//   // };
//   // const onSearch = async search => {
//   //   try {
//   //     console.log(search);

//   //     const res = await instance.get(`articles?search=${debouncedSearch}`);
//   //     console.log(res?.data?.data?.items);
//   //     navigate(`search`);
//   //   } catch (error) {
//   //     console.error('Error fetching data:', error);
//   //   }
//   // };

//   return (
//     <StyledHeaderSearch>
//       <StyledContainer>
//         <div className="search-content">
//           <Autocomplete
//             // autoComplete
//             disablePortal
//             clearOnEscape
//             openOnFocus
//             autoSelect
//             id="search"
//             onInputChange={(event, value) => {
//               setSearch(value.toLowerCase().trim());
//               // handleSearch(value);
//             }}
//             options={options}
//             onChange={(event, value) => onSearch(value)}
//             renderInput={params => (
//               <TextField
//                 {...params}
//                 placeholder="Start typing the name or description."
//                 // onSelect={handleInput}
//               />
//             )}
//             // InputProps={{
//             //   startAdornment: (
//             //     <InputAdornment position="start">
//             //       {getIcon(EnumIcons.search)}
//             //     </InputAdornment>
//             //   ),
//             // }}
//           />
//           {/*
//           {isMobileScreen && (
//             <IconButton onClick={() => dispatch(setSearch(false))}>
//               {getIcon(EnumIcons.close)}
//             </IconButton>
//           )} */}
//         </div>
//       </StyledContainer>
//     </StyledHeaderSearch>
//   );
// };

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

import { getIcon } from '@/helpers/getIcon';
import { setSearch } from '@/lib/otherRedux/slice/header';
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
            placeholder="Start typing the name or description."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {getIcon(EnumIcons.search)}
                </InputAdornment>
              ),
            }}
          />
          {isMobileScreen && (
            <IconButton onClick={() => dispatch(setSearch(false))}>
              {getIcon(EnumIcons.close)}
            </IconButton>
          )}
        </div>
      </StyledContainer>
    </StyledHeaderSearch>
  );
};
