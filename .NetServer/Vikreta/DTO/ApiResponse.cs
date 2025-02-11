namespace Vikreta.DTO
{
    public class ApiResponse
    {
        public bool Success { get; set; }
        public string Message { get; set; }

        public ApiResponse(string message, bool success)
        {
            Success = success;
            Message = message;
        }
    }
}
