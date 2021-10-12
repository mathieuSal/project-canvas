import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import './styles/gallery.scss';

const Gallery = ({ formattedData }) => {
  return (
    <div className="Gallery-Container">
      <div className="Gallery-Search">
        <Select
          id="Gallery-Search-Input"
          name="Gallery-Search-Input"
          value={formattedData.author_option_values}
          placeholder="Filter by author"
          onChange={(data) => formattedData.update_selected_authors(data)}
          isMulti
          options={formattedData.author_options}
          isClearable
          isDisabled={formattedData.loading}
          isSearchable
        />
      </div>
      <div className="Gallery-Content">
        {formattedData.photos.map((photo) => {
          return (
            <div key={photo.id} className="Gallery-Image">
              <img
                alt={photo.download_url}
                src={`https://picsum.photos/id/${photo.id}/400/300`}
              />
            </div>
          );
        })}
        {formattedData.error ? (
          <p className="error">There is been an error</p>
        ) : null}
        {!formattedData.author_option_values.length && !formattedData.error ? (
          <p ref={formattedData.ref}>loading</p>
        ) : null}
      </div>
    </div>
  );
};

Gallery.propTypes = {
  formattedData: PropTypes.object.isRequired,
};

export default Gallery;
