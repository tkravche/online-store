import { instance } from '.';

export const getArticles = async (
  page = 1,
  limit = 20,
  category: null | string,
  sale: null | string
) => {
  try {
    const searchParams = {
      page,
      limit,
      category,
      sale,
    };

    const { data } = await instance.get('articles', {
      params: searchParams,
    });
    return data;
  } catch (error) {
    // Handle the error here
    console.error('Error fetching articles:', error);
    // You can throw the error again if needed or return a default value
    throw error;
  }
};

export const getArticleById = async (id: number) => {
  try {
    const { data } = await instance.get(`articles/${id}`);
    return data;
  } catch (error) {
    // Handle the error here
    console.error('Error fetching article by id:', error);
    // You can throw the error again if needed or return a default value
    throw error;
  }
};

export const getReviewByArticleId = async (id: number) => {
  try {
    const { data } = await instance.get(`reviews/article/${id}`);
    return data;
  } catch (error) {
    // Handle the error here
    console.error('Error fetching reviews by article id:', error);
    // You can throw the error again if needed or return a default value
    throw error;
  }
};

export const searchArticles = async (
  page = 1,
  limit = 20,
  search: null | string
) => {
  try {
    const searchParams = {
      page,
      limit,
      search,
    };

    const { data } = await instance.get('articles', {
      params: searchParams,
    });
    return data;
  } catch (error) {
    // Handle the error here
    console.error('Error searching articles:', error);
    // You can throw the error again if needed or return a default value
    throw error;
  }
};
