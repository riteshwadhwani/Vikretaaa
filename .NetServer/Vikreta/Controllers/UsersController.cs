using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Vikreta.Services;
using Vikreta.DTO;

namespace Vikreta.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    [Consumes("application/json")]
    [AllowAnonymous]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IOtpService _otpService;
        private readonly IMemoryCache _cache; // Use IMemoryCache for OTP storage

        public UsersController(IUserService userService, IOtpService otpService, IMemoryCache cache)
        {
            _userService = userService;
            _otpService = otpService;
            _cache = cache;
        }

        [HttpPost("signup")]
        public IActionResult RegisterUser([FromBody] UserDTO userDTO)
        {
            var user = _userService.GetUserDetailsByEmail(userDTO.Email);

            if (user != null)
            {
                return BadRequest("User already exists.");
            }

            var otp = _otpService.GenerateOtp();
            var expiry = DateTime.Now.AddMinutes(5); 

            // Store OTP in the cache with an expiration time
            _cache.Set(userDTO.Email, new OtpDetails
            {
                Email = userDTO.Email,
                Otp = otp,
                Expiry = expiry
            }, new MemoryCacheEntryOptions
            {
                AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(5) // Expiry time for the OTP
            });

            bool sent = _otpService.SendOtp(userDTO.Email, otp);

            if (sent)
            {
                return Ok(new ApiResponse("Otp Send", true));
            }
            else
            {
                return Ok(new ApiResponse("Otp Not Send", false));
            }
        }

        [HttpPost("validate-otp")]
        public IActionResult ValidateOtpAndRegister([FromBody] OtpValidationDTO otpValidationDTO)
        {
            // Retrieve OTP details from cache
            if (!_cache.TryGetValue(otpValidationDTO.Email, out OtpDetails otpDetails))
                return BadRequest("OTP not found.");

            if (otpDetails.Expiry < DateTime.Now)
                return BadRequest("OTP expired.");

            if (otpDetails.Otp != otpValidationDTO.Otp)
                return BadRequest("Invalid OTP.");

            
            _cache.Remove(otpValidationDTO.Email);

            var result = _userService.RegisterUser(otpValidationDTO.User);
            if (result == null)
            {
                return BadRequest("Failed to register user.");
            }

            return Ok(new ApiResponse("Signup Successful", true));
        }

        [HttpPost("signin")]
        public IActionResult SignInUser([FromBody] LoginDTO loginDTO)
        {
            Console.WriteLine("Here");
            var response = _userService.SignInUser(loginDTO);
            if (response == null)
            {
                return Unauthorized("Invalid credentials.");
            }

            return Ok(response);
        }

        [HttpGet("{userId}")]
        public IActionResult GetUserDetailsById(long userId)
        {
            var user = _userService.GetUserDetailsById(userId);
            if (user == null)
            {
                return NotFound($"User with ID {userId} not found.");
            }

            return Ok(user);
        }

        [HttpGet("all")]
        //[Authorize(Roles = "Admin")]
        public IActionResult GetAllUsers()
        {
            var users = _userService.GetAllUsers();
            return Ok(users);
        }

        [HttpPut("update")]
        public IActionResult UpdateUser([FromBody] UpdateDTO userDTO)
        {
            var updatedUser = _userService.UpdateUser(userDTO);
            if (updatedUser == null)
            {
                return BadRequest("Failed to update user.");
            }

            return Ok(new ApiResponse("User Updated!!", true));
        }
    }
}
