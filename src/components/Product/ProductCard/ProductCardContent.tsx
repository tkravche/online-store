import { NavLink } from 'react-router-dom';
import {
  FC,
  RefObject,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Box,
  Breadcrumbs,
  Checkbox,
  Typography,
  Tab,
  ListItem,
  ListItemText,
} from '@mui/material';
import Link from '@mui/material/Link';
import { TabContext } from '@mui/lab';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getIcon } from '@/helpers/getIcon';
import {
  StyledProductCard,
  StyledCardImg,
  StyledCardInfo,
  StyledProductPrices,
  StyledCardRight,
  StyledProductCode,
  StyledButtonHeartGroup,
  StyledRs,
  StyledSale,
  StyledNoSale,
  StyledProductCardSection,
  StyledAllLink,
  StyledAddButton,
  StyledContainerSlider,
} from '@/theme/styles/components/StyledProductCard';
import { StyledRating } from '@/theme/styles/ui/StyledRating';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import { EnumBreakpoints, EnumIcons, ICardProps } from '@/types';
import {
  StyledCharacteristics,
  StyledCharacteristicsList,
  StyledLabels,
  StyledList,
  StyledTabPanel,
  StyledTabsList,
} from '@/theme/styles/ui/StyledTabs';
import { ReviewsSection } from '../ReviewsSection';
import { ProductSectionByCategory } from '../ProductSectionWithCategory';
import { ImageSlider } from './ImageSlider';
import { selectFavorites, selectIsLogged } from '@/lib/otherRedux/selectors';
import { addItemToCart } from '@/lib/otherRedux/slice/user';
import { useAppDispatch, useAppSelector } from '@/hooks';
import Default from '@/assets/default.webp';
import { getReviewByArticleId } from '@/hooks/axios/service';
import {
  addToFavoritesThunk,
  removeFromFavoritesThunk,
} from '@/lib/otherRedux/thunks/user';

export const ProductCardContent: FC<ICardProps> = props => {
  const {
    name,
    discription,
    price,
    sale,
    id,
    images,
    rating,
    categories,
    characteristic,
    inStock,
  } = props;

  const dispatch = useAppDispatch();

  const [value, setValue] = useState('1'); //For Tabs
  const [reviewsNumber, setReviewsNumber] = useState(0);
  const [reviews, setReviews] = useState([]);
  const isLogged = useAppSelector(selectIsLogged);

  //For reviews number
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await getReviewByArticleId(id);
        setReviewsNumber(res?.data?.meta?.totalItems);
        setReviews(res?.data?.items);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviews();
  }, [id]);
  
  //to scroll to Reviews
  const reviewSection = useRef(null);
  const scrollToSection = (elementRef: RefObject<any>) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  //for adding product to the cart
  const quantity = 1;
  const urlImage = images[0]?.url === undefined ? Default : images[0]?.url;
  const infoForCart = { id, name, url: urlImage, price, sale, quantity };

  //Favorites
  const favoriteItems = useAppSelector(selectFavorites);
  const isFavorite = favoriteItems?.some((item: any) => item.id === id);
  const handleFavoritesChange = () => {
    if (!isLogged) {
      toast.info('You need to be logged in to like!', {});
    } else {
      if (!isFavorite) {
        dispatch(addToFavoritesThunk({ id }));
      } else {
        dispatch(removeFromFavoritesThunk({ id }));
      }
    }
  };

  //For Tabs
  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  //For Characteristics in Tabs
  const formattedCharacteristicsLabels = characteristic
    .split('.')
    .map(item => item.split(':')[0]);
  const formattedCharacteristics = characteristic
    .split('.')
    .map(item => item.split(':')[1]);

  return (
    <StyledProductCardSection>
      <StyledContainer>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="catalog">
            Catalog
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href={`${categories[0].name}s`}
          >
            <Typography sx={{ textTransform: 'capitalize' }}>
              {categories[0].name}s
            </Typography>
          </Link>
          <Typography color="text.primary" className="line-clamp-1">
            {name}
          </Typography>
        </Breadcrumbs>
      </StyledContainer>
      <StyledContainerSlider>
        <StyledProductCard>
          <StyledCardRight>
            {sale?.newPrise ? (
              <StyledSale>
                <Typography component="span">Sale</Typography>
              </StyledSale>
            ) : (
              <StyledNoSale />
            )}
            <StyledCardImg>
              <ImageSlider images={images} />
            </StyledCardImg>
          </StyledCardRight>
          <StyledCardInfo>
            <Typography
              variant="h1"
              aria-label={name}
              title={name}
              component="h1"
              className="line-clamp-2"
            >
              {name}
            </Typography>
            <StyledProductCode>
              <Typography variant="body2" component="span">
                Product code: {id}
              </Typography>
              {!inStock ? (
                <Typography
                  sx={{ color: '#D25' }}
                  variant="body2"
                  component="span"
                >
                  Out of stock
                </Typography>
              ) : (
                <Typography
                  sx={{ color: '#008E24' }}
                  variant="body2"
                  component="span"
                >
                  In stock
                </Typography>
              )}
            </StyledProductCode>
            <StyledRs>
              <StyledRating
                name={`rating-${rating}`}
                defaultValue={rating ?? 0}
                size="small"
                icon={getIcon(EnumIcons.star)}
                emptyIcon={getIcon(EnumIcons.star)}
                readOnly
              />
              <Typography
                sx={{
                  color: '#8083FF',
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
                variant="body1"
                component="span"
                onClick={() => scrollToSection(reviewSection)}
              >
                {reviewsNumber} reviews
              </Typography>
            </StyledRs>
            <StyledProductPrices>
              {!sale?.newPrise ? (
                <Typography variant="newPrice" component="span">
                  ${price}
                </Typography>
              ) : (
                <Typography variant="newPriceRed" component="span">
                  ${sale?.newPrise}
                </Typography>
              )}
              {sale?.newPrise && (
                <Typography variant="oldPrice" component="span">
                  ${price}
                </Typography>
              )}
            </StyledProductPrices>
            <StyledButtonHeartGroup>
              {/* <Cart
                id={id}
                name={name}
                quantity={1}
                url={images[0].url}
                price={price}
                sale={sale?.newPrise}
              /> */}
              <StyledAddButton
                variant="addToCart"
                onClick={() => dispatch(addItemToCart(infoForCart))}
              >
                Add to cart
              </StyledAddButton>
              <Checkbox
                aria-label="Like"
                icon={getIcon(EnumIcons.heart)}
                checkedIcon={getIcon(EnumIcons.heart)}
                checked={isFavorite}
                // disabled={!isLogged}
                onChange={handleFavoritesChange}
              />
            </StyledButtonHeartGroup>
            <Box>
              <TabContext value={value}>
                <Box>
                  <StyledTabsList
                    aria-label="Tabs"
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                      [`@media (min-width: ${EnumBreakpoints.mobile})`]: {
                        width: '200px',
                      },
                      [`@media (min-width: ${EnumBreakpoints.desktopSmall})`]: {
                        width: '576px',
                      },
                    }}
                  >
                    <Tab label="About the product" value="1" />
                    <Tab label="Characteristics" value="2" />
                    <Tab label="Delivery" value="3" />
                  </StyledTabsList>
                </Box>
                <StyledTabPanel value="1" sx={{ padding: '10px' }}>
                  {discription}
                </StyledTabPanel>
                <StyledTabPanel value="2" sx={{ padding: '0px' }}>
                  <StyledCharacteristicsList>
                    <StyledLabels>
                      {formattedCharacteristicsLabels.map((item, index) => (
                        <ListItem key={index}>{item}</ListItem>
                      ))}
                    </StyledLabels>
                    <StyledCharacteristics>
                      {formattedCharacteristics.map((item, index) => (
                        <ListItem key={index}>{item}</ListItem>
                      ))}
                    </StyledCharacteristics>
                  </StyledCharacteristicsList>
                </StyledTabPanel>
                <StyledTabPanel value="3" sx={{ padding: '0px 8px 8px 10px' }}>
                  <StyledList
                    sx={{
                      [`@media (min-width: ${EnumBreakpoints.mobile})`]: {
                        display: 'grid',
                        gridTemplateColumns: 'auto',
                      },
                      [`@media (min-width: ${EnumBreakpoints.tabletPortrait})`]:
                        {
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          columnGap: '30px',
                        },
                      // [`& li.MuiListItem-root`]: {
                      //   display: 'list-item',
                      //   listStyleType: 'disc',
                      //   marginLeft: '1.1em',
                      // },
                      // [`& li.MuiListItem-root::marker`]: {
                      //   fontSize: '29px',
                      //   color: '#D25',

                      // },
                    }}
                  >
                    <ListItem disablePadding>
                      {getIcon(EnumIcons.dot)}
                      <ListItemText primary="fast delivery — 1-5 days*" />
                    </ListItem>
                    <ListItem disablePadding>
                      {getIcon(EnumIcons.dot)}
                      <ListItemText primary="$20 one price for delivery" />
                    </ListItem>
                    <ListItem disablePadding>
                      {getIcon(EnumIcons.dot)}
                      <ListItemText primary="free shipping from $1000" />
                    </ListItem>
                    <ListItem disablePadding>
                      {getIcon(EnumIcons.dot)}
                      <ListItemText primary="swift processing" />
                    </ListItem>
                    <ListItem disablePadding>
                      {getIcon(EnumIcons.dot)}
                      <ListItemText primary="careful packaging" />
                    </ListItem>
                    <ListItem disablePadding>
                      {getIcon(EnumIcons.dot)}
                      <ListItemText primary="real-time tracking" />
                    </ListItem>
                    <ListItem disablePadding>
                      {getIcon(EnumIcons.dot)}
                      <ListItemText primary="timely shipping" />
                    </ListItem>
                    <ListItem disablePadding>
                      {getIcon(EnumIcons.dot)}
                      <ListItemText primary="international shipping" />
                    </ListItem>
                    <ListItem disablePadding>
                      {getIcon(EnumIcons.dot)}
                      <ListItemText primary="responsive customer support" />
                    </ListItem>
                    <ListItem disablePadding>
                      {getIcon(EnumIcons.dot)}
                      <ListItemText primary="positive post-purchase experience" />
                    </ListItem>
                  </StyledList>
                  <Typography
                    component="p"
                    sx={{ fontSize: '10px', paddingTop: '38px' }}
                  >
                    *Delivery terms depending on the destination and the
                    selected shipping method
                  </Typography>
                </StyledTabPanel>
              </TabContext>
            </Box>
          </StyledCardInfo>
        </StyledProductCard>
      </StyledContainerSlider>
      <StyledContainer>
        <div ref={reviewSection}></div>
        <ReviewsSection url={urlImage} name={name} id={id} reviews={reviews} />
        <ProductSectionByCategory category={categories[0].name} />
        <StyledAllLink>
          <NavLink to={`/online-store/${categories[0].name}s`}>
            View All
            {getIcon(EnumIcons.arrowLong)}
          </NavLink>
        </StyledAllLink>
      </StyledContainer>
    </StyledProductCardSection>
  );
};
