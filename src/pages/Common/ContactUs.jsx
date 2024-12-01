import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-dark text-light min-vh-100 d-flex justify-content-center align-items-center">
      <div className="container py-5">
        <div className="row g-5">
          {/* Left Section */}
          <div className="col-md-4">
            <div className="mb-4">
              <h3>Chat on us</h3>

              <p style={{color: 'rgba(255, 255, 255, 0.55)'}}>vikreta@gmail.com</p>
           

            </div>
            <div className="mb-4">
              <h3>Visit us</h3>

              <p style={{color: 'rgba(255, 255, 255, 0.55)'}}>
        
              Raintree Marg, near Bharati Vidyapeeth, Sector 7, CBD Belapur, Navi Mumbai, Maharashtra 400614
              </p>

            </div>
            <div className="mb-4">
              <h3>Call us</h3>

              <p style={{color: 'rgba(255, 255, 255, 0.55)'}}>Mon - Fri From 8am to 5pm</p>
              <p style={{color: 'rgba(255, 255, 255, 0.55)'}}>9766412152</p>
             

            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-8">
            <div className="bg-secondary p-5 rounded shadow">
              <h2 className="mb-4">Contact Us</h2>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter first name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter last name"
                      required
                    />
                  </div>
                </div>
                <div className="my-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email address"
                    required
                  />
                </div>
                <div className="row g-3 my-3">
                  <div className="col-md-3">
                    <select className="form-select" required>
                      <option value="+91">+91</option>
                      
                    </select>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="9766412152"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>

                
                <button type="submit" className="btn btn-warning w-100"style={{backgroundColor: 'rgb(34, 197, 94)'}}>

                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
