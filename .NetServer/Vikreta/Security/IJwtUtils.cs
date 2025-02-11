public interface IJwtUtils
{
    string GenerateToken(string userId, string role);
    string? ValidateToken(string token);
}
