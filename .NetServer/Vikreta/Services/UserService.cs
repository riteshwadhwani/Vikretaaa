using Vikreta.DTO;
using Vikreta.Entities;
using Vikreta.Repositories;
using Vikreta.Services;

namespace Vikreta.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        private readonly IJwtUtils JwtUtils;

        public UserService(IUserRepository userRepository , IJwtUtils jwtUtils)
        {
            _userRepository = userRepository;
            JwtUtils = jwtUtils;
        }

        public User RegisterUser(UserDTO userDTO)
        {
            var user = new User
            {
                Name = userDTO.Name,
                Email = userDTO.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(userDTO.Password),
                Role = userDTO.Role
            };

            return _userRepository.AddUser(user);
        }

        public LoginResponse SignInUser(LoginDTO loginDTO)
        {
            var user = _userRepository.GetUserByEmail(loginDTO.Email);
            if (user == null || !BCrypt.Net.BCrypt.Verify(loginDTO.Password, user.Password))
            {
                return null;
            }
            /* LoginResponse (int id , string firstName, string jwt , string role, bool success)*/
            var token = JwtUtils.GenerateToken(user.Id.ToString(),user.Role); 
            return new LoginResponse( user.Id, user.Name,token,user.Role,true);
        }

        public User GetUserDetailsById(long userId)
        {
            return _userRepository.GetUserById(userId);
        }

        public List<User> GetAllUsers()
        {
            return _userRepository.GetAllUsers();
        }

        public User UpdateUser(UpdateDTO userDTO)
        {
            var user = _userRepository.GetUserByEmail(userDTO.Email);
            if (user == null)
            {
                return null;
            }

            user.Name = userDTO.Name;
            user.Email = userDTO.Email;

            return _userRepository.UpdateUser(user);
        }

        public object GetUserDetailsByEmail(string email)
        {
           return _userRepository.GetUserByEmail(email);
        }
    }
}
