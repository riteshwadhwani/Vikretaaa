import React from 'react'
import image from "../../assets/images/signupimage.png"

const SignUp = () => {
  return (
    <div>
        <div className="h-screen bg-[#0e0f14] flex items-center justify-center">
      <div className="container mx-auto bg-[#0e0f14] p-6 w-[1000px]">
        <div className="lg:flex flex-col lg:flex-row bg-[#0e0f14] rounded-2xl shadow-lg overflow-hidden">
          {/* Form Section */}
          <form className="w-full lg:w-1/2 p-8">
            <h2 className="text-center text-3xl font-bold text-white mb-8">Sign Up</h2>
            <form className="space-y-6">
              {/* Name Field */}
              <div className="flex items-center border-b-2 border-gray-300 focus-within:border-green-500">
                <i className="fas fa-user text-white text-lg mx-2"></i>
                <input
                  type="text"
                  id="name"
                  placeholder="First Name"
                  className="flex-1 bg-transparent border-none outline-none px-2 py-3 text-white"
                />
              </div>

                {/* Name Field */}
                <div className="flex items-center border-b-2 border-gray-300 focus-within:border-green-500">
                <i className="fas fa-user text-white text-lg mx-2"></i>
                <input
                  type="text"
                  id="name"
                  placeholder="Last Name"
                  className="flex-1 bg-transparent border-none outline-none px-2 py-3 text-white"
                />
              </div>

              {/* Email Field */}
              <div className="flex items-center border-b-2 border-gray-300 focus-within:border-green-500">
                <i className="fas fa-envelope text-white text-lg mx-2"></i>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="flex-1 bg-transparent border-none outline-none px-2 py-3 text-white"
                />
              </div>

               {/* Email Field */}
               <div className="flex items-center border-b-2 border-gray-300 focus-within:border-green-500">
                <i className="fas fa-envelope text-white text-lg mx-2"></i>
                <input
                  type="email"
                  id="email"
                  placeholder="Contact No"
                  className="flex-1 bg-transparent border-none outline-none px-2 py-3 text-white"
                />
              </div>

              {/* Password Field */}
              <div className="flex items-center border-b-2 border-gray-300 focus-within:border-green-500">
                <i className="fas fa-lock text-white text-lg mx-2"></i>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="flex-1 bg-transparent border-none outline-none px-2 py-3 text-white"
                />
              </div>

              {/* Repeat Password Field */}
              <div className="flex items-center border-b-2 border-gray-300 focus-within:border-green-500">
                <i className="fas fa-key text-white text-lg mx-2"></i>
                <input
                  type="password"
                  id="repeat-password"
                  placeholder="Repeat Your Password"
                  className="flex-1 bg-transparent border-none outline-none px-2 py-3 text-white"
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the <a href="#!" className="text-green-600 underline">Terms of Service</a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                className="w-full bg-green-500 text-white py-3 rounded-lg shadow-md hover:bg-green-600"
              >
                Register
              </button>
            </form>
          </form>

          {/* Image Section */}
          <div className="hidden lg:flex lg:w-1/2 items-center justify-center  bg-[#0e0f14]">
            <img
              src={image}
              alt="Sign Up Illustration"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignUp