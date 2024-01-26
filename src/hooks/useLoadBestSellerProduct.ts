import useAxios from 'axios-hooks';

export const useLoadBestSellerProduct = () => {
  const url =
    'https://www.citywheels.website/api/articles?page=1&limit=20&sale=inc';

  const [{ data, loading, error }, execute] = useAxios(
    {
      url,
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
    { useCache: false, manual: true }
  );

  return {
    loadBestSeller: execute,
    errorBestSeller: error,
    isLoadingBestSeller: loading,
    responseBestSeller: data,
  };
};
