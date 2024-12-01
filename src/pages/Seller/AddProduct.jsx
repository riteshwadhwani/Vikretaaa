import React, { useState } from 'react';

const ProductForm = () => {
  const [images, setImages] = useState([]); 

 
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files); 

    if (files.length + images.length > 3) {
      alert("You can upload a maximum of 3 images!");
      return;
    }

    const imagePreviews = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...imagePreviews]); 
  };


  const removeImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-white">Add Product</h2>
      <form style={{ padding: '20px', borderRadius: '8px' }}>
      
        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label text-white">Product Category</label>
          <input
            type="text"
            className="form-control text-white "
            id="productCategory"
            placeholder="Enter product category"
          />
        </div>

       
        <div className="row">
          <div className="col-md-3 mb-3">
            <label htmlFor="productTitle" className="form-label text-white">Product Title</label>
            <input
              type="text"
              className="form-control text-white "
              id="productTitle"
              placeholder="Enter title"
            />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="productType" className="form-label text-white">Type</label>
            <input
              type="text"
              className="form-control text-white "
              id="productType"
              placeholder="Enter type"
            />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="productPricing" className="form-label text-white">Pricing</label>
            <input
              type="text"
              className="form-control text-white "
              id="productPricing"
              placeholder="Enter price"
            />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="productLocation" className="form-label text-white">Location</label>
            <input
              type="text"
              className="form-control text-white "
              id="productLocation"
              placeholder="Enter location"
            />
          </div>
        </div>

        
        <div className="mb-3">
          <label className="form-label text-white">Upload Images </label>
          <input
            type="file"
            className="form-control"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            disabled={images.length === 3} // Disable input if 3 images are uploaded
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
          <label htmlFor="productDescription" className="form-label text-white">Product Description</label>
          <textarea
            className="form-control text-white "
            id="productDescription"
            rows="4"
            placeholder="Enter description"
          ></textarea>
        </div>

      


        <div className="d-flex justify-content-end">
          <button type="submit" style={{ backgroundColor: 'rgb(34, 197, 94)' }} className="btn">Submit</button>
          
        </div>
       


      </form>
    </div>
  );
};

export default ProductForm;
