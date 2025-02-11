namespace Vikreta.Services
{
    public interface IOtpService
    {
        string GenerateOtp();
        bool SendOtp(string email, string otp);
    }
}
