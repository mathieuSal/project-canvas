import React, { useState } from 'react';
import Gallery from 'Src/app/gallery/gallery';
import getGalleryFormattedData from 'Src/app/gallery/galleryPresenter';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import useLoadPicsum from 'Src/app/gallery/hook/useLoadPicsum';

const GalleryManager = () => {
  const [selectedAuthors, updateSelectedAuthors] = useState([]);
  const { loading, photos, error, loadMore } = useLoadPicsum();

  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage: true,
    onLoadMore: loadMore,
    disabled: !!error || selectedAuthors.length,
    rootMargin: '100px 0px 0px 0px',
    delayInMs: 1000,
  });

  const formattedData = getGalleryFormattedData(
    photos,
    loading,
    sentryRef,
    selectedAuthors,
    updateSelectedAuthors,
    error,
  );

  return <Gallery formattedData={formattedData} />;
};

export default GalleryManager;
