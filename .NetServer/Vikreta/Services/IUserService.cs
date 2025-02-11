using Vikreta.DTO;
using Vikreta.Entities;

namespace Vikreta.Services
{
    public interface IUserService
    {
        User RegisterUser(UserDTO userDTO);
        LoginResponse SignInUser(LoginDTO loginDTO);
        User GetUserDetailsById(long userId);
        List<User> GetAllUsers();
        User UpdateUser(UpdateDTO userDTO);
        object GetUserDetailsByEmail(string email);
    }
}
