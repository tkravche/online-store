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
  PaginationItem,
  Radio,
  RadioGroup,
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
  StyledArticles,
  StyledCatalog,
  StyledCatalogSection,
  StyledFilters,
  StyledPagination,
} from '@/theme/styles/components/StyledCatalog';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import {
  StyledAccordionDetails,
  StyledAccordionRatingDetails,
  StyledAccordions,
  StyledButton,
  StyledEmptyStar,
  StyledFilteredNumber,
  StyledFilteredRating,
  StyledFiltersTitle,
  StyledFiltersWrapper,
  StyledPriceNumberInput,
  StyledPriceNumberInputWrapper,
  StyledPriceSlider,
  StyledPriceSliderWrapper,
  StyledRadioInfo,
  StyledRatingInfo,
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
  const [pageSize] = useState(8);

  const dispatch = useAppDispatch();
  const limit = pageSize;

  useEffect(() => {
    dispatch(
      getFilteredArticlesThunk({
        page,
        limit,
        saleChecked,
        category,
        starsCount,
      })
    );
  }, [dispatch, page, limit, category, saleChecked, starsCount]);

  const resetAllFilters = () => {
    setCheckedSale(false);
    setSaleChecked(false);
    // setPrice(null);
    setCategory(null);
    setStars(null);
  };
  console.log(checkedSale)

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
                      <FormControlLabel
                        value="bicycle"
                        control={<Radio />}
                        label="Bicycles"
                      />
                      <FormControlLabel
                        value="skateboard"
                        control={<Radio />}
                        label="Skateboards"
                      />
                      <FormControlLabel
                        value="scooter"
                        control={<Radio />}
                        label="Scooters"
                      />
                      <FormControlLabel
                        value="gyroboard"
                        control={<Radio />}
                        label="Gyroboards"
                      />
                      <FormControlLabel
                        value="monowheel"
                        control={<Radio />}
                        label="Monowheel"
                      />
                      <FormControlLabel
                        value="accessory"
                        control={<Radio />}
                        label="Accessories"
                      />
                    </RadioGroup>
                  </FormControl>
                  <StyledRadioInfo>
                    {category === 'bicycle' && !isLoadingArticles ? (
                      <StyledFilteredNumber>{totalItems}</StyledFilteredNumber>
                    ) : (
                      <StyledFilteredNumber>--</StyledFilteredNumber>
                    )}
                    {category === 'skateboard' && !isLoadingArticles ? (
                      <StyledFilteredNumber>{totalItems}</StyledFilteredNumber>
                    ) : (
                      <StyledFilteredNumber>--</StyledFilteredNumber>
                    )}
                    {category === 'scooter' && !isLoadingArticles ? (
                      <StyledFilteredNumber>{totalItems}</StyledFilteredNumber>
                    ) : (
                      <StyledFilteredNumber>--</StyledFilteredNumber>
                    )}
                    {category === 'gyroboard' && !isLoadingArticles ? (
                      <StyledFilteredNumber>{totalItems}</StyledFilteredNumber>
                    ) : (
                      <StyledFilteredNumber>--</StyledFilteredNumber>
                    )}
                    {category === 'monowheel' && !isLoadingArticles ? (
                      <StyledFilteredNumber>{totalItems}</StyledFilteredNumber>
                    ) : (
                      <StyledFilteredNumber>--</StyledFilteredNumber>
                    )}
                    {category === 'accessory' && !isLoadingArticles ? (
                      <StyledFilteredNumber>{totalItems}</StyledFilteredNumber>
                    ) : (
                      <StyledFilteredNumber>--</StyledFilteredNumber>
                    )}
                  </StyledRadioInfo>
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
                      <FormControlLabel
                        value="5"
                        control={<Radio />}
                        label=""
                      />
                      <FormControlLabel
                        value="4"
                        control={<Radio />}
                        label=""
                      />
                      <FormControlLabel
                        value="3"
                        control={<Radio />}
                        label=""
                      />
                    </RadioGroup>
                  </FormControl>
                  <StyledRatingInfo>
                    <StyledFilteredRating>
                      {getIcon(EnumIcons.star)}
                      {getIcon(EnumIcons.star)}
                      {getIcon(EnumIcons.star)}
                      {getIcon(EnumIcons.star)}
                      {getIcon(EnumIcons.star)}
                    </StyledFilteredRating>
                    <StyledFilteredRating>
                      <StyledEmptyStar>
                        {getIcon(EnumIcons.star)}
                      </StyledEmptyStar>
                      {getIcon(EnumIcons.star)}
                      {getIcon(EnumIcons.star)}
                      {getIcon(EnumIcons.star)}
                      {getIcon(EnumIcons.star)}
                    </StyledFilteredRating>
                    <StyledFilteredRating>
                      <StyledEmptyStar>
                        {getIcon(EnumIcons.star)}
                      </StyledEmptyStar>
                      {getIcon(EnumIcons.star)}
                      {getIcon(EnumIcons.star)}
                      {getIcon(EnumIcons.star)}
                      {getIcon(EnumIcons.star)}
                    </StyledFilteredRating>
                  </StyledRatingInfo>
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
          <StyledArticles>
            {articles?.map((item: ICardProps) => (
              <Card key={item.id} {...item} />
            ))}
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
          </StyledArticles>
        </StyledCatalog>
      </StyledContainer>
    </StyledCatalogSection>
  );
};
