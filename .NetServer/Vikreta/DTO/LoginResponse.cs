using System.Runtime.InteropServices;
using Vikreta.Entities;

namespace Vikreta.DTO
{
    public class LoginResponse
    {
        
       

        public long id { get; set; }

        public string firstName { get; set; }

        public string jwt { get; set; }

        public string role { get; set; }

        public bool success { get; set; }

        public LoginResponse (long id , string firstName, string jwt , string role, bool success)
        {

            this.id = id;
            this.firstName = firstName;
            this.jwt = jwt;
            this.role = role;
            this.success = success;

        }
    }

}
