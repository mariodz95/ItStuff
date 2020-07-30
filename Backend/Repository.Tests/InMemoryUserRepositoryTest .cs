using DAL;
using Microsoft.EntityFrameworkCore;
using Repository.Tests;

namespace Repository.UserTests
{
    public class InMemoryUserRepositoryTest :  UserRepositoryTests
    {
        public InMemoryUserRepositoryTest()
            : base(
                new DbContextOptionsBuilder<ApplicationDbContext>()
                    .UseInMemoryDatabase("ItStuffDb")
                    .Options)
        {
        }
    }
}