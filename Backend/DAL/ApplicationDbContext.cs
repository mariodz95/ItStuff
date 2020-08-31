using DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext()
        {

        }  
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
          : base(options)
        {
        }

        public DbSet<UserEntity> Users { get; set; }
        public DbSet<UserRoleEntity> UserRole { get; set; }
        public DbSet<ProductEntity> Product { get; set; }
        public DbSet<ProductImageEntity> ProductImage { get; set; }
    }
}
