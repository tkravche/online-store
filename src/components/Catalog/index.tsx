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

import { getArticlesThunk } from '@/lib/otherRedux/thunks/catalog';
import { useAppSelector } from '@/lib/redux/init/store';
import { useAppDispatch } from '@/hooks';
import { selectArticles, selectIsLoadingArticles, selectTotalItems } from '@/lib/otherRedux/selectors';
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
  const [category, setCategory] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(8);

  const dispatch = useAppDispatch();
  const limit = pageSize;

  useEffect(() => {
    dispatch(getArticlesThunk({ page, limit, saleChecked, category }));
  }, [dispatch, page, limit, category, saleChecked]);

  const articles = useAppSelector(selectArticles);
  const totalItems = useAppSelector(selectTotalItems);
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
                {!saleChecked||isLoadingArticles ? (
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
                        control={<Checkbox />}
                        label="Bycicles"
                      />
                      <StyledFilteredNumber>--</StyledFilteredNumber>
                    </StyledFormControl>
                    <StyledFormControl>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Skateboards"
                      />
                      <StyledFilteredNumber>--</StyledFilteredNumber>
                    </StyledFormControl>

                    <StyledFormControl>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Scooters"
                      />
                      <StyledFilteredNumber>--</StyledFilteredNumber>
                    </StyledFormControl>
                    <StyledFormControl>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Gyroboards"
                      />
                      <StyledFilteredNumber>--</StyledFilteredNumber>
                    </StyledFormControl>
                    <StyledFormControl>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Monowheels"
                      />
                      <StyledFilteredNumber>--</StyledFilteredNumber>
                    </StyledFormControl>
                    <StyledFormControl>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Accessories"
                      />
                      <StyledFilteredNumber>--</StyledFilteredNumber>
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
                      <FormControlLabel control={<Checkbox />} label="" />
                      <StyledFilteredRating>
                        {getIcon(EnumIcons.star)}
                        {getIcon(EnumIcons.star)}
                        {getIcon(EnumIcons.star)}
                        {getIcon(EnumIcons.star)}
                        {getIcon(EnumIcons.star)}
                      </StyledFilteredRating>
                    </StyledFormControl>
                    <StyledFormControl>
                      <FormControlLabel control={<Checkbox />} label="" />
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
                      <FormControlLabel control={<Checkbox />} label="" />
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
