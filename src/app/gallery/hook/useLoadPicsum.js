import { useReducer, useState } from 'react';
import axios from 'axios';

const useLoadPicsum = () => {
  const [loading, toggleLoading] = useReducer(
    (previousValue) => !previousValue,
    false,
  );
  const [page, incPage] = useReducer((previousValue) => ++previousValue, 1);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState();

  const loadMore = () => {
    toggleLoading();
    incPage();
    axios
      .get(`https://picsum.photos/v2/list?page=${page}`)
      .then((picsumData) => {
        toggleLoading();
        setPhotos((current) => [...current, ...picsumData.data]);
      })
      .catch((err) => {
        toggleLoading();
        setError(err);
      });
  };

  return { loading, photos, hasNextPage: true, error, loadMore };
};

export default useLoadPicsum;
