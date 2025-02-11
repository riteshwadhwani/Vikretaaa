using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Vikreta.DTO;
using Vikreta.Services;

namespace Vikreta.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class OtpController : ControllerBase
    {
        private readonly IOtpService _otpService;
        private static Dictionary<string, OtpDetails> _otpStorage = new Dictionary<string, OtpDetails>();

        public OtpController(IOtpService otpService)
        {
            _otpService = otpService;
        }


        [HttpPost("otpSender")]
        [ProducesResponseType(typeof(string), 200)]
        [ProducesResponseType(typeof(string), 400)]
        public async Task<IActionResult> OtpSender([FromBody] LoginRequest request)
        {
            if (string.IsNullOrEmpty(request.Email))
                return BadRequest("Email is required.");

            var otp = _otpService.GenerateOtp();
            var expiry = DateTime.Now.AddMinutes(5);

            _otpStorage[request.Email] = new OtpDetails
            {
                Email = request.Email,
                Otp = otp,
                Expiry = expiry
            };

            //await _otpService.SendOtp(request.Email, otp);

            return Ok(new ApiResponse("Otp Send",true));
        }


        [HttpPost("verifyOtp")]
        [ProducesResponseType(typeof(string), 200)]
        [ProducesResponseType(typeof(string), 400)]
        public IActionResult VerifyOtp(string email, string otp)
        {
            if (!_otpStorage.ContainsKey(email))
                return BadRequest("OTP not found.");

            var otpDetails = _otpStorage[email];

            if (otpDetails.Expiry < DateTime.Now)
                return BadRequest("OTP expired.");

            if (otpDetails.Otp != otp)
                return BadRequest("Invalid OTP.");

            _otpStorage.Remove(email);
            return Ok(new ApiResponse("Validate Sucessfully",true));
        }
    }
}
