import React, { useState } from 'react';

const ProductForm = () => {
  const [productCategory, setProductCategory] = useState('');
  const [productTitle, setProductTitle] = useState('');
  const [productType, setProductType] = useState('');
  const [productPricing, setProductPricing] = useState('');
  const [productLocation, setProductLocation] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [images, setImages] = useState([]);

  const categories = [
    'ELECTRONICS',
    'FASHION',
    'HOME_APPLIANCES',
    'BOOKS',
    'GROCERIES',
    'SPORTS',
    'TOYS',
    'BEAUTY_PRODUCTS',
    'FURNITURE',
  ];

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + images.length > 3) {
      alert('You can upload a maximum of 3 images!');
      return;
    }

    const imagePreviews = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...imagePreviews]);
  };

  const removeImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Details:', {
      productCategory,
      productTitle,
      productType,
      productPricing,
      productLocation,
      productDescription,
      images,
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-white">Add Product</h2>
      <form style={{ padding: '20px', borderRadius: '8px' }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label text-white">
            Product Category
          </label>
          <select
            className="form-select text-black"
            id="productCategory"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category.replace('_', ' ')}
              </option>
            ))}
          </select>
        </div>

        <div className="row">
          <div className="col-md-3 mb-3">
            <label htmlFor="productTitle" className="form-label text-white">
              Product Title
            </label>
            <input
              type="text"
              className="form-control text-black"
              id="productTitle"
              placeholder="Enter title"
              value={productTitle}
              onChange={(e) => setProductTitle(e.target.value)}
            />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="productType" className="form-label text-white">
              Type
            </label>
            <input
              type="text"
              className="form-control text-black"
              id="productType"
              placeholder="Enter type"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
            />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="productPricing" className="form-label text-white">
              Pricing
            </label>
            <input
              type="text"
              className="form-control text-black"
              id="productPricing"
              placeholder="Enter price"
              value={productPricing}
              onChange={(e) => setProductPricing(e.target.value)}
            />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="productLocation" className="form-label text-white">
              Location
            </label>
            <input
              type="text"
              className="form-control text-black"
              id="productLocation"
              placeholder="Enter location"
              value={productLocation}
              onChange={(e) => setProductLocation(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label text-white">Upload Images</label>
          <input
            type="file"
            className="form-control"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            disabled={images.length === 3}
          />
        </div>

        <div className="row">
          {images.map((image, index) => (
            <div className="col-md-3 mb-3" key={index}>
              <img src={image} alt={`Preview ${index + 1}`} className="img-thumbnail" />
              <button
                type="button"
                className="btn btn-danger btn-sm mt-2"
                onClick={() => removeImage(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label text-white">
            Product Description
          </label>
          <textarea
            className="form-control text-black"
            id="productDescription"
            rows="4"
            placeholder="Enter description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="d-flex justify-content-end">
          <button type="submit" style={{ backgroundColor: 'rgb(34, 197, 94)' }} className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
