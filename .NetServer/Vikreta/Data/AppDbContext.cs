
using Microsoft.EntityFrameworkCore;
using Vikreta.Entities;

namespace Vikreta.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Bid> Bids { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public  User FindUserByIdAsync(long userId)
        {
          
            User user = Users.Find(userId);

            if (user == null)
            {
                throw new KeyNotFoundException($"User with ID {userId} not found.");
            }

            return user;
        }

        public User FindByEmail(string email)
        {
            User user = Users.FirstOrDefault(u => u.Email == email);
            if (user == null)
            {
                return null;
            }
            return user;
        }
    }
}
