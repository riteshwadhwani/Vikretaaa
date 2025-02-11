using Vikreta.Entities;

namespace Vikreta.Repositories
{
    public interface IUserRepository
    {
        User AddUser(User user);
        User GetUserById(long userId);
        User GetUserByEmail(string email);
        List<User> GetAllUsers();
        User UpdateUser(User user);
    }
}
