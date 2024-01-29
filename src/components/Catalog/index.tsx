import { FC, useEffect, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Breadcrumbs,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Link,
  PaginationItem,
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
  StyledAccordions,
  StyledButton,
  StyledEmptyStar,
  StyledFilteredNumber,
  StyledFilteredRating,
  StyledFiltersTitle,
  StyledFiltersWrapper,
  StyledFormControl,
  StyledPriceNumberInput,
  StyledPriceNumberInputWrapper,
  StyledPriceSlider,
  StyledPriceSliderWrapper,
  StyledResetButton,
  StyledSaleFilter,
  StyledSetPrice,
} from '@/theme/styles/components/StyledProductFilter';
import { getIcon } from '@/helpers/getIcon';

export const Catalog: FC = () => {
  const [checkedSale, setCheckedSale] = useState(false);
  const [saleChecked, setSaleChecked] = useState(false);

  const [categoryBChecked, setCategoryBChecked] = useState(false);
  const [categorySkChecked, setCategorySkChecked] = useState(false);
  const [categoryScChecked, setCategoryScChecked] = useState(false);
  const [categoryGChecked, setCategoryGChecked] = useState(false);
  const [categoryMChecked, setCategoryMChecked] = useState(false);
  const [categoryAChecked, setCategoryAChecked] = useState(false);
  const [category, setCategory] = useState(null);

  const [category5Checked, setCategory5Checked] = useState(false);
  const [category4Checked, setCategory4Checked] = useState(false);
  const [category3Checked, setCategory3Checked] = useState(false);
  const [starsCount, setStars] = useState(null);

  const [page, setPage] = useState(1);
  const [pageSize] = useState(8);

  const dispatch = useAppDispatch();
  const limit = pageSize;

  useEffect(() => {
    dispatch(getFilteredArticlesThunk({ page, limit, saleChecked, category, starsCount }));
  }, [dispatch, page, limit, category, saleChecked, starsCount]);

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
                <AccordionDetails>
                  <FormGroup>
                    <StyledFormControl>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={categoryBChecked}
                            onChange={() => {
                              setCategoryBChecked(!categoryBChecked);
                              category
                                ? setCategory(null)
                                : setCategory('bicycle');
                            }}
                          />
                        }
                        label="Bycicles"
                      />
                      {!categoryBChecked || isLoadingArticles ? (
                        <StyledFilteredNumber>--</StyledFilteredNumber>
                      ) : (
                        <StyledFilteredNumber>
                          {totalItems}
                        </StyledFilteredNumber>
                      )}
                    </StyledFormControl>
                    <StyledFormControl>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={categorySkChecked}
                            onChange={() => {
                              setCategorySkChecked(!categorySkChecked);
                              category
                                ? setCategory(null)
                                : setCategory('skateboard');
                            }}
                          />
                        }
                        label="Skateboards"
                      />
                      {!categorySkChecked || isLoadingArticles ? (
                        <StyledFilteredNumber>--</StyledFilteredNumber>
                      ) : (
                        <StyledFilteredNumber>
                          {totalItems}
                        </StyledFilteredNumber>
                      )}
                    </StyledFormControl>

                    <StyledFormControl>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={categoryScChecked}
                            onChange={() => {
                              setCategoryScChecked(!categoryScChecked);
                              category
                                ? setCategory(null)
                                : setCategory('scooter');
                            }}
                          />
                        }
                        label="Scooters"
                      />
                      {!categoryScChecked || isLoadingArticles ? (
                        <StyledFilteredNumber>--</StyledFilteredNumber>
                      ) : (
                        <StyledFilteredNumber>
                          {totalItems}
                        </StyledFilteredNumber>
                      )}
                    </StyledFormControl>
                    <StyledFormControl>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={categoryGChecked}
                            onChange={() => {
                              setCategoryGChecked(!categoryGChecked);
                              category
                                ? setCategory(null)
                                : setCategory('gyroboard');
                            }}
                          />
                        }
                        label="Gyroboards"
                      />
                      {!categoryGChecked || isLoadingArticles ? (
                        <StyledFilteredNumber>--</StyledFilteredNumber>
                      ) : (
                        <StyledFilteredNumber>
                          {totalItems}
                        </StyledFilteredNumber>
                      )}
                    </StyledFormControl>
                    <StyledFormControl>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={categoryMChecked}
                            onChange={() => {
                              setCategoryMChecked(!categoryMChecked);
                              category
                                ? setCategory(null)
                                : setCategory('monowheel');
                            }}
                          />
                        }
                        label="Monowheels"
                      />
                      {!categoryMChecked || isLoadingArticles ? (
                        <StyledFilteredNumber>--</StyledFilteredNumber>
                      ) : (
                        <StyledFilteredNumber>
                          {totalItems}
                        </StyledFilteredNumber>
                      )}
                    </StyledFormControl>
                    <StyledFormControl>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={categoryAChecked}
                            onChange={() => {
                              setCategoryAChecked(!categoryAChecked);
                              category
                                ? setCategory(null)
                                : setCategory('accessory');
                            }}
                          />
                        }
                        label="Accessories"
                      />
                      {!categoryAChecked || isLoadingArticles ? (
                        <StyledFilteredNumber>--</StyledFilteredNumber>
                      ) : (
                        <StyledFilteredNumber>
                          {totalItems}
                        </StyledFilteredNumber>
                      )}
                    </StyledFormControl>
                  </FormGroup>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Rating
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup>
                    <StyledFormControl>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={category5Checked}
                            onChange={() => {
                              setCategory5Checked(!category5Checked);
                              starsCount ? setStars(null) : setStars(5);
                            }}
                          />
                        }
                        label=""
                      />
                      <StyledFilteredRating>
                        {getIcon(EnumIcons.star)}
                        {getIcon(EnumIcons.star)}
                        {getIcon(EnumIcons.star)}
                        {getIcon(EnumIcons.star)}
                        {getIcon(EnumIcons.star)}
                      </StyledFilteredRating>
                    </StyledFormControl>
                    <StyledFormControl>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={category4Checked}
                            onChange={() => {
                              setCategory4Checked(!category4Checked);
                              starsCount? setStars(null) : setStars(4);
                            }}
                          />
                        }
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
                    </StyledFormControl>
                    <StyledFormControl>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={category3Checked}
                            onChange={() => {
                              setCategory3Checked(!category3Checked);
                              starsCount ? setStars(null) : setStars(3);
                            }}
                          />
                        }
                        label=""
                      />
                      <StyledFilteredRating>
                        <StyledEmptyStar>
                          {getIcon(EnumIcons.star)}
                        </StyledEmptyStar>
                        <StyledEmptyStar>
                          {getIcon(EnumIcons.star)}
                        </StyledEmptyStar>
                        {getIcon(EnumIcons.star)}
                        {getIcon(EnumIcons.star)}
                        {getIcon(EnumIcons.star)}
                      </StyledFilteredRating>
                    </StyledFormControl>
                  </FormGroup>
                </AccordionDetails>
              </Accordion>
            </StyledAccordions>
            <StyledResetButton>
              <StyledButton variant="text" endIcon={getIcon(EnumIcons.close)}>
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
