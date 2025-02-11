using Vikreta.Data;
using Vikreta.Entities;
using Vikreta.Repositories;

namespace Vikreta.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext _context;

        public UserRepository(AppDbContext context)
        {
            _context = context;
        }

        public User AddUser(User user)
        {
            try
            {
                _context.Users.Add(user);
                _context.SaveChanges();
                return user;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public User GetUserById(long userId)
        {
            return _context.Users.Find(userId);
        }

        public User GetUserByEmail(string email)
        {
            return  _context.FindByEmail(email);
        }

        public List<User> GetAllUsers()
        {
            return _context.Users.ToList();
        }

        public User UpdateUser(User user)
        {
            _context.Users.Update(user);
            _context.SaveChanges();
            return user;
        }
    }
}
