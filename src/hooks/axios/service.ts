import { instance } from '.';

export const getArticleById = async (id: number) => {
  const { data } = await instance.get(`articles/${id}`);
  return data;
};

export const getReviewByArticleId = async (id: number) => {
  const { data } = await instance.get(`reviews/article/${id}`);
  return data;
};
