using CloudinaryDotNet.Actions;
using CloudinaryDotNet;

namespace Vikreta.CloudinaryUpload
{
    public class CloudinaryService : ICloudinayService
    {
        private readonly Cloudinary _cloudinary;

        public CloudinaryService()
        {
            var account = new Account(
                "ddjeafvus",
                "729969124551278",
                "cVJcLBQyfevulFjhiUUM9_zdDtc"
            );
            _cloudinary = new Cloudinary(account);
        }

        public string UploadImage(IFormFile file)
        {
            using var stream = file.OpenReadStream();
            var uploadParams = new ImageUploadParams
            {
                File = new FileDescription(file.FileName, stream),
                PublicId = $"products/{Guid.NewGuid()}"
            };

            var uploadResult = _cloudinary.Upload(uploadParams);
            return uploadResult.SecureUrl.ToString();
        }
    }
}
