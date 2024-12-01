import React from 'react';

const ResetPassword = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
      <div className="text p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="mb-4">Reset your password</h2>
        <p className="mb-3">
          Have no fear. We'll email you instructions to reset your password. If you don't have access to your email, we can try account recovery.
        </p>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="youremail@example.com"
              required
            />
          </div>

          <button type="submit" className="btn w-100" style={{ backgroundColor: 'rgb(34, 197, 94)', color: '#fff' }}>
       
            Reset Password
          </button>

        </form>
        <a href="/" className="text-decoration-none  d-block" style={{ color: 'white' }}>
          ← Back to login
        </a>
      </div>
    </div>
  );
};

export default ResetPassword;
