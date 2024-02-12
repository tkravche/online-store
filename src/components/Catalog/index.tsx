import { FC, useEffect, useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  Breadcrumbs,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Link,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { getFilteredArticlesThunk } from '@/lib/otherRedux/thunks/catalog';
import { useAppSelector } from '@/lib/redux/init/store';
import { useAppDispatch } from '@/hooks';
import {
  selectFilteredArticles,
  selectFilteredTotalItems,
  selectIsLoadingArticles,
} from '@/lib/otherRedux/selectors';
import { EnumIcons, ICatalogProps } from '@/types';
import { getIcon } from '@/helpers/getIcon';
import {
  Styled2SelectsWrapper,
  StyledArticlesWrapper,
  StyledCatalog,
  StyledCatalogSection,
  StyledFilters,
  StyledFormControlPage,
  StyledPageSelect,
  StyledSelectsWrapper,
} from '@/theme/styles/components/StyledCatalog';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import {
  StyledAccordionDetails,
  StyledAccordionRatingDetails,
  StyledAccordions,
  StyledButton,
  StyledCategoryFilter,
  StyledEmptyStar,
  StyledFilteredNumber,
  StyledFilteredRating,
  StyledFiltersTitle,
  StyledFiltersWrapper,
  StyledPriceNumberInput,
  StyledPriceNumberInputWrapper,
  StyledPriceSlider,
  StyledPriceSliderWrapper,
  StyledRatingFilter,
  StyledResetButton,
  StyledSaleFilter,
  StyledSetPrice,
} from '@/theme/styles/components/StyledProductFilter';
import { useDebounce } from '@/helpers/debounce';
import { ProductsGallery } from './ProductsGallery';

export const Catalog: FC<ICatalogProps> = ({ categoryForPage }) => {
  const dispatch = useAppDispatch();
  const totalItems = useAppSelector(selectFilteredTotalItems);
  const isLoadingArticles = useAppSelector(selectIsLoadingArticles);
  const articles = useAppSelector(selectFilteredArticles);

  const [checkedSale, setCheckedSale] = useState(false);
  const [saleChecked, setSaleChecked] = useState(false);

  const [valueSlider, setValueSlider] = useState<number[]>([0, 20000]);
  const debouncedInputValue = useDebounce(valueSlider, 500);

  const [category, setCategory] = useState(categoryForPage);
  const [starsCount, setStars] = useState(null);

  const [stock, setStock] = useState('inc');
  const [price, setPriceSort] = useState('asc');
  const [pageSize, setPageSize] = useState(8);

  const [page, setPage] = useState(1);

  const minPrice = debouncedInputValue[0];
  const maxPrice = debouncedInputValue[1];
  const limit = pageSize;

  //For Slider
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValueSlider(newValue as number[]);
  };
  const handleMinInputChange = e => {
    if (
      e.target.value < 0 ||
      e.target.value > 20000 ||
      e.target.value > valueSlider[1]
    ) {
      setValueSlider([0, valueSlider[1]]);
    } else {
      setValueSlider([Number(e.target.value), valueSlider[1]]);
    }
  };

  const handleMaxInputChange = e => {
    if (
      e.target.value < 0 ||
      e.target.value > 20000 ||
      e.target.value < valueSlider[0]
    ) {
      setValueSlider([valueSlider[0], 20000]);
    } else {
      setValueSlider([valueSlider[0], Number(e.target.value)]);
    }
  };

  // const handleMinBlur = () => {
  //   if (valueSlider[0] < 0) {
  //     setValueSlider([0, valueSlider[1]]);
  //   } else if (valueSlider[0] > 20000) {
  //     setValueSlider([200000, valueSlider[1]]);
  //   } else if (valueSlider[0] > valueSlider[1]) {
  //     setValueSlider([0, valueSlider[1]]);
  //   }
  // };
  // const handleMaxBlur = () => {
  //   if (valueSlider[1] < 0) {
  //     setValueSlider([valueSlider[0], 20000]);
  //   } else if (valueSlider[1] > 20000) {
  //     setValueSlider([valueSlider[0], 20000]);
  //   } else if (valueSlider[1] < valueSlider[0]) {
  //     setValueSlider([valueSlider[0], 20000]);
  //   }
  // };

  //For radio buttons category
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory((event.target as HTMLInputElement).value);
  };
  //For radio buttons rating
  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStars((event.target as HTMLInputElement).value);
  };

  //For selectors
  const handleStockChange = event => {
    if (event.target.value === 'null') {
      setStock(null);
    } else {
      setStock(event.target.value);
    }
  };
  const handlePriceSortChange = event => {
    if (event.target.value === 'null') {
      setPriceSort(null);
    } else {
      setPriceSort(event.target.value);
    }
  };
  // const handlePriceSortChange = event => {
  //   setPriceSort(event.target.value);
  // };

  const handlePageSizeChange = event => {
    setPageSize(event.target.value);
  };

  //For Pagination
  const handlePageChange = (
    event: React.MouseEvent<HTMLElement>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  //For Reset
  const resetAllFilters = () => {
    setCheckedSale(false);
    setSaleChecked(false);
    // setPrice(null);
    setCategory(null);
    setStars(null);
    setValueSlider([0, 20000]);
  };

  useEffect(() => {
    dispatch(
      getFilteredArticlesThunk({
        page,
        limit,
        saleChecked,
        category,
        starsCount,
        price,
        minPrice,
        maxPrice,
        stock,
      })
    );
  }, [
    dispatch,
    page,
    limit,
    category,
    saleChecked,
    starsCount,
    price,
    maxPrice,
    minPrice,
    stock,
  ]);

  return (
    <StyledCatalogSection>
      <StyledContainer>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography
            color="text.primary"
            className="line-clamp-1"
            sx={{ textTransform: 'capitalize' }}
          >
            Catalog
          </Typography>
        </Breadcrumbs>
        <StyledCatalog>
          <StyledFilters>
            <StyledFiltersTitle>Product filter</StyledFiltersTitle>
            <StyledFiltersWrapper>
              <StyledSaleFilter>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkedSale}
                      onChange={() => {
                        setCheckedSale(!checkedSale);
                        setSaleChecked(!saleChecked);
                      }}
                    />
                  }
                  label="SALE"
                />
                {!saleChecked || isLoadingArticles ? (
                  <StyledFilteredNumber>--</StyledFilteredNumber>
                ) : (
                  <StyledFilteredNumber>{totalItems}</StyledFilteredNumber>
                )}
              </StyledSaleFilter>
              <StyledSetPrice variant="body2" id="input-slider">
                Set the price
              </StyledSetPrice>
              <StyledPriceSliderWrapper>
                <StyledPriceSlider
                  min={0}
                  max={20000}
                  step={100}
                  value={valueSlider}
                  onChange={handleSliderChange}
                  valueLabelDisplay="auto"
                  aria-labelledby="input-slider"
                />
                <StyledPriceNumberInputWrapper>
                  <Typography component="span">$</Typography>
                  <StyledPriceNumberInput
                    aria-label="Price Input"
                    type="number"
                    value={valueSlider[0]}
                    // onBlur={handleMinBlur}
                    onChange={handleMinInputChange}
                  />
                  <Typography
                    component="span"
                    sx={{ color: '#878D99', fontSize: '24px' }}
                  >
                    -
                  </Typography>
                  <StyledPriceNumberInput
                    aria-label="Price Input"
                    type="number"
                    value={valueSlider[1]}
                    // onBlur={handleMaxBlur}
                    onChange={handleMaxInputChange}
                  />
                </StyledPriceNumberInputWrapper>
              </StyledPriceSliderWrapper>
            </StyledFiltersWrapper>
            <StyledAccordions>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Categories
                </AccordionSummary>
                <StyledAccordionDetails>
                  <FormControl>
                    <FormLabel id="categories-controlled-radio-buttons-group"></FormLabel>
                    <RadioGroup
                      aria-labelledby="categories-controlled-radio-buttons-group"
                      name="categories-controlled-radio-buttons-group"
                      value={category}
                      onChange={handleRadioChange}
                    >
                      <StyledCategoryFilter>
                        <FormControlLabel
                          value="bicycle"
                          control={<Radio />}
                          label="Bicycles"
                        />
                        {category === 'bicycle' && !isLoadingArticles ? (
                          <StyledFilteredNumber>
                            {totalItems}
                          </StyledFilteredNumber>
                        ) : (
                          <StyledFilteredNumber>--</StyledFilteredNumber>
                        )}
                      </StyledCategoryFilter>
                      <StyledCategoryFilter>
                        <FormControlLabel
                          value="skateboard"
                          control={<Radio />}
                          label="Skateboards"
                        />
                        {category === 'skateboard' && !isLoadingArticles ? (
                          <StyledFilteredNumber>
                            {totalItems}
                          </StyledFilteredNumber>
                        ) : (
                          <StyledFilteredNumber>--</StyledFilteredNumber>
                        )}
                      </StyledCategoryFilter>
                      <StyledCategoryFilter>
                        <FormControlLabel
                          value="scooter"
                          control={<Radio />}
                          label="Scooters"
                        />
                        {category === 'scooter' && !isLoadingArticles ? (
                          <StyledFilteredNumber>
                            {totalItems}
                          </StyledFilteredNumber>
                        ) : (
                          <StyledFilteredNumber>--</StyledFilteredNumber>
                        )}
                      </StyledCategoryFilter>
                      <StyledCategoryFilter>
                        <FormControlLabel
                          value="gyroboard"
                          control={<Radio />}
                          label="Gyroboards"
                        />
                        {category === 'gyroboard' && !isLoadingArticles ? (
                          <StyledFilteredNumber>
                            {totalItems}
                          </StyledFilteredNumber>
                        ) : (
                          <StyledFilteredNumber>--</StyledFilteredNumber>
                        )}
                      </StyledCategoryFilter>
                      <StyledCategoryFilter>
                        <FormControlLabel
                          value="monowheel"
                          control={<Radio />}
                          label="Monowheels"
                        />
                        {category === 'monowheel' && !isLoadingArticles ? (
                          <StyledFilteredNumber>
                            {totalItems}
                          </StyledFilteredNumber>
                        ) : (
                          <StyledFilteredNumber>--</StyledFilteredNumber>
                        )}
                      </StyledCategoryFilter>
                      <StyledCategoryFilter>
                        <FormControlLabel
                          value="accessory"
                          control={<Radio />}
                          label="Accessories"
                        />
                        {category === 'accessory' && !isLoadingArticles ? (
                          <StyledFilteredNumber>
                            {totalItems}
                          </StyledFilteredNumber>
                        ) : (
                          <StyledFilteredNumber>--</StyledFilteredNumber>
                        )}
                      </StyledCategoryFilter>
                    </RadioGroup>
                  </FormControl>
                </StyledAccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Rating
                </AccordionSummary>
                <StyledAccordionRatingDetails>
                  <FormControl>
                    <FormLabel id="rating-controlled-radio-buttons-group"></FormLabel>
                    <RadioGroup
                      aria-labelledby="rating-controlled-radio-buttons-group"
                      name="rating-controlled-radio-buttons-group"
                      value={starsCount}
                      onChange={handleRatingChange}
                    >
                      <StyledRatingFilter>
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label=""
                        />
                        <StyledFilteredRating>
                          {getIcon(EnumIcons.star)}
                          {getIcon(EnumIcons.star)}
                          {getIcon(EnumIcons.star)}
                          {getIcon(EnumIcons.star)}
                          {getIcon(EnumIcons.star)}
                        </StyledFilteredRating>
                      </StyledRatingFilter>
                      <StyledRatingFilter>
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label=""
                        />
                        <StyledFilteredRating>
                          <StyledEmptyStar>
                            {getIcon(EnumIcons.star)}
                          </StyledEmptyStar>
                          {getIcon(EnumIcons.star)}
                          {getIcon(EnumIcons.star)}
                          {getIcon(EnumIcons.star)}
                          {getIcon(EnumIcons.star)}
                        </StyledFilteredRating>
                      </StyledRatingFilter>
                      <StyledRatingFilter>
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label=""
                        />
                        <StyledFilteredRating>
                          <StyledEmptyStar>
                            {getIcon(EnumIcons.star)}
                          </StyledEmptyStar>
                          {getIcon(EnumIcons.star)}
                          {getIcon(EnumIcons.star)}
                          {getIcon(EnumIcons.star)}
                          {getIcon(EnumIcons.star)}
                        </StyledFilteredRating>
                      </StyledRatingFilter>
                    </RadioGroup>
                  </FormControl>
                </StyledAccordionRatingDetails>
              </Accordion>
            </StyledAccordions>
            <StyledResetButton>
              <StyledButton
                onClick={resetAllFilters}
                variant="text"
                endIcon={getIcon(EnumIcons.close)}
              >
                Reset all
              </StyledButton>
            </StyledResetButton>
          </StyledFilters>
          <StyledArticlesWrapper>
            <StyledSelectsWrapper>
              <Styled2SelectsWrapper>
                <FormControl sx={{ mb: 4, width: 122 }}>
                  {/* <InputLabel id="inStock">In stock</InputLabel> */}
                  <Select
                    labelId="inStock"
                    id="inStock"
                    value={stock}
                    label="All"
                    onChange={handleStockChange}
                  >
                    <MenuItem value={'inc'}>In stock</MenuItem>
                    <MenuItem value={null}>All</MenuItem>
                    <MenuItem value={'exc'}>Out of stock</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ mb: 4, width: 169 }}>
                  {/* <InputLabel id="inStock">In stock</InputLabel> */}
                  <Select
                    labelId="PriceSort"
                    id="PriceSort"
                    value={price}
                    label="Price: Low to High"
                    onChange={handlePriceSortChange}
                  >
                    <MenuItem value={'asc'}>Price: Low to High</MenuItem>
                    <MenuItem value={'desc'}>Price: High to Low</MenuItem>
                    <MenuItem value={'null'}>Default</MenuItem>
                  </Select>
                </FormControl>
              </Styled2SelectsWrapper>
              <StyledFormControlPage sx={{ mb: 4, width: 66 }}>
                {/* <InputLabel id="Limit">8</InputLabel> */}
                <StyledPageSelect
                  labelId="Limit"
                  id="Limit"
                  value={pageSize}
                  label="8"
                  onChange={handlePageSizeChange}
                >
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={16}>16</MenuItem>
                  <MenuItem value={24}>24</MenuItem>
                </StyledPageSelect>
              </StyledFormControlPage>
            </StyledSelectsWrapper>
            <ProductsGallery
              totalItems={totalItems}
              articles={articles}
              page={page}
              pageSize={pageSize}
              handlePageChange={handlePageChange}
            />
          </StyledArticlesWrapper>
        </StyledCatalog>
      </StyledContainer>
    </StyledCatalogSection>
  );
};
