import { groupBy } from 'Src/utils/formatter';

const getGalleryFormattedData = (
  picsumList,
  isLoading,
  ref,
  selectedAuthors,
  updateSelectedAuthors,
  error,
) => {
  const options = getAuthorOptions(picsumList);
  const selectedAuthorLabels = selectedAuthors.map((option) => option.value);

  return {
    author_options: options,
    author_option_values: options.filter((option) =>
      selectedAuthorLabels.includes(option.value),
    ),
    error,
    is_loading: isLoading,
    photos: selectedAuthorLabels.length
      ? filterPhotosByAuthor(picsumList, selectedAuthorLabels)
      : picsumList,
    ref,
    selected_authors: selectedAuthors,
    update_selected_authors: updateSelectedAuthors,
  };
};

const filterPhotosByAuthor = (photos, authors) =>
  photos.filter((photo) => authors.includes(photo.author));

const getAuthorOptions = (photos) => {
  const groupByAuthor = groupBy(photos, 'author');
  return groupByAuthor.map((group) => {
    return {
      value: group[0].author,
      label: `${group[0].author} (${group.length})`,
    };
  });
};

export default getGalleryFormattedData;
