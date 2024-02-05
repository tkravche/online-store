import { FC, useEffect, useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  Breadcrumbs,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  Link,
  MenuItem,
  PaginationItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { getFilteredArticlesThunk } from '@/lib/otherRedux/thunks/catalog';
import { useAppSelector } from '@/lib/redux/init/store';
import { useAppDispatch } from '@/hooks';
import {
  selectArticles,
  selectFilteredArticles,
  selectFilteredTotalItems,
  selectIsLoadingArticles,
  selectTotalItems,
} from '@/lib/otherRedux/selectors';
import { Card } from '../Card';
import { EnumIcons, ICardProps } from '@/types';
import {
  Styled2SelectsWrapper,
  StyledArticles,
  StyledArticlesWrapper,
  StyledCatalog,
  StyledCatalogSection,
  StyledFilters,
  StyledFormControlPage,
  StyledPagination,
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
import { getIcon } from '@/helpers/getIcon';

export const Catalog: FC = () => {
  const [checkedSale, setCheckedSale] = useState(false);
  const [saleChecked, setSaleChecked] = useState(false);

  const [category, setCategory] = useState('bicycle');
  const [starsCount, setStars] = useState(null);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);

  const dispatch = useAppDispatch();
  const limit = pageSize;

  const handlePageSizeChange = event => {
    setPageSize(event.target.value);
  };
  const [price, setPriceSort] = useState('asc');
  const handlePriceSortChange = event => {
    setPriceSort(event.target.value);
  };
  const [stock, setStock] = useState('in');
  const handleStockChange = event => {
    setStock(event.target.value);
  };
  // const [stock, setInStock] = useState(true);
  // const handleStockChange = (event: SelectChangeEvent) => {
  //   setInStock(event.target.value as string);
  // };
  useEffect(() => {
    dispatch(
      getFilteredArticlesThunk({
        page,
        limit,
        saleChecked,
        category,
        starsCount,
        price,
      })
    );
  }, [dispatch, page, limit, category, saleChecked, starsCount, price]);

  const resetAllFilters = () => {
    setCheckedSale(false);
    setSaleChecked(false);
    // setPrice(null);
    setCategory(null);
    setStars(null);
  };

  const articles = useAppSelector(selectFilteredArticles);
  const totalItems = useAppSelector(selectFilteredTotalItems);
  const isLoadingArticles = useAppSelector(selectIsLoadingArticles);
  //For Pagination
  const totalPages = Math.ceil(totalItems / pageSize);
  const handlePageChange = (
    event: React.MouseEvent<HTMLElement>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  //For Slider
  const [value, setValue] = useState<number[]>([0, 20000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  //For radio buttons category
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory((event.target as HTMLInputElement).value);
  };
  //For radio buttons rating
  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStars((event.target as HTMLInputElement).value);
  };
  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value === '' ? 0 : Number(event.target.value));
  // };

  // const handleBlur = () => {
  //   if (value < 0) {
  //     setValue(0);
  //   } else if (value > 100) {
  //     setValue(100);
  //   }
  // };

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
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  aria-labelledby="input-slider"
                />
                <StyledPriceNumberInputWrapper>
                  <Typography component="span">$</Typography>
                  <StyledPriceNumberInput
                    aria-label="Price Input"
                    min={0}
                    max={20000}
                    placeholder="0"
                    // defaultValue="0"
                  />
                  <Typography
                    component="span"
                    sx={{ color: '#878D99', fontSize: '24px' }}
                  >
                    -
                  </Typography>
                  <StyledPriceNumberInput
                    aria-label="Price Input"
                    min={0}
                    max={2000}
                    placeholder="20000"
                    // defaultValue="20000"
                  />
                  {/* <StyledPriceInput
                value={value}
                size="small"
                // onChange={handleInputChange}
                // onBlur={handleBlur}
                inputProps={{
                  step: 1000,
                  min: 0,
                  max: 20000,
                  type: 'number',
                  'aria-labelledby': 'input-slider',
                }}
              /> */}
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
                          label="Monowheel"
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
          {!articles?.length && (
            <Typography component="p">
              Sorry, there are no products corresponding to these filter values.
            </Typography>
          )}
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
                    <MenuItem value={'in'}>In stock</MenuItem>
                    <MenuItem value={'all'}>All</MenuItem>
                    <MenuItem value={'out'}>Out of stock</MenuItem>
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
                    <MenuItem value={null}>Default</MenuItem>
                  </Select>
                </FormControl>
              </Styled2SelectsWrapper>
              <StyledFormControlPage sx={{ mb: 4, width: 66 }}>
                {/* <InputLabel id="Limit">8</InputLabel> */}
                <Select
                  labelId="Limit"
                  id="Limit"
                  value={pageSize}
                  label="8"
                  onChange={handlePageSizeChange}
                >
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={16}>16</MenuItem>
                  <MenuItem value={24}>24</MenuItem>
                </Select>
              </StyledFormControlPage>
            </StyledSelectsWrapper>
            <StyledArticles>
              {articles?.map((item: ICardProps) => (
                <Card key={item.id} {...item} />
              ))}
            </StyledArticles>
            {articles?.length > 0 && (
              <StyledPagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                renderItem={item => (
                  <PaginationItem
                    component="div"
                    {...item}
                    onClick={e => handlePageChange(e, item.page)}
                  />
                )}
                variant="outlined"
                shape="rounded"
              />
            )}
          </StyledArticlesWrapper>
        </StyledCatalog>
      </StyledContainer>
    </StyledCatalogSection>
  );
};
