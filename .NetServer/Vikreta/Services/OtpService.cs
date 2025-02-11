using MimeKit;
using MailKit.Net.Smtp;
using System;
using System.Threading.Tasks;

namespace Vikreta.Services
{
    public class OtpServices : IOtpService
    {
        private readonly string _smtpHost;
        private readonly int _smtpPort;
        private readonly string _smtpUsername;
        private readonly string _smtpPassword;

        public OtpServices()
        {
            
            _smtpHost = "smtp.gmail.com";
            _smtpPort = 587;
            _smtpUsername = Environment.GetEnvironmentVariable("SMTP_USERNAME") ?? "chaitanyakende2@gmail.com";
            _smtpPassword = Environment.GetEnvironmentVariable("SMTP_PASSWORD") ?? "njlr nbvm hvpj zyxb";
        }

        public string GenerateOtp()
        {
            Random random = new Random();
            return random.Next(100000, 999999).ToString(); 
        }

        public bool SendOtp(string email, string otp)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Vikreta", _smtpUsername));
            message.To.Add(new MailboxAddress("", email));
            message.Subject = "Your OTP Code";

            // Construct email body
            var body = $"<head>\r\n\t\t<meta charset=\"UTF-8\">\r\n\t\t<title>OTP Verification Email</title>\r\n\t\t<style>\r\n\t\t\tbody {{\r\n\t\t\t\tbackground-color: #ffffff;\r\n\t\t\t\tfont-family: Arial, sans-serif;\r\n\t\t\t\tfont-size: 16px;\r\n\t\t\t\tline-height: 1.4;\r\n\t\t\t\tcolor: #333333;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t\tpadding: 0;\r\n\t\t\t}}\r\n\t\r\n\t\t\t.container {{\r\n\t\t\t\tmax-width: 600px;\r\n\t\t\t\tmargin: 0 auto;\r\n\t\t\t\tpadding: 20px;\r\n\t\t\t\ttext-align: center;\r\n\t\t\t}}\r\n\t\r\n\t\t\t.logo {{\r\n\t\t\t\tmax-width: 200px;\r\n\t\t\t\tmargin-bottom: 20px;\r\n\t\t\t}}\r\n\t\r\n\t\t\t.message {{\r\n\t\t\t\tfont-size: 18px;\r\n\t\t\t\tfont-weight: bold;\r\n\t\t\t\tmargin-bottom: 20px;\r\n\t\t\t}}\r\n\t\r\n\t\t\t.body {{\r\n\t\t\t\tfont-size: 16px;\r\n\t\t\t\tmargin-bottom: 20px;\r\n\t\t\t}}\r\n\t\r\n\t\t\t.cta {{\r\n\t\t\t\tdisplay: inline-block;\r\n\t\t\t\tpadding: 10px 20px;\r\n\t\t\t\tbackground-color: #FFD60A;\r\n\t\t\t\tcolor: #000000;\r\n\t\t\t\ttext-decoration: none;\r\n\t\t\t\tborder-radius: 5px;\r\n\t\t\t\tfont-size: 16px;\r\n\t\t\t\tfont-weight: bold;\r\n\t\t\t\tmargin-top: 20px;\r\n\t\t\t}}\r\n\t\r\n\t\t\t.support {{\r\n\t\t\t\tfont-size: 14px;\r\n\t\t\t\tcolor: #999999;\r\n\t\t\t\tmargin-top: 20px;\r\n\t\t\t}}\r\n\t\r\n\t\t\t.highlight {{\r\n\t\t\t\tfont-weight: bold;\r\n\t\t\t}}\r\n\t\t</style>\r\n\t\r\n\t</head>\r\n\t\r\n\t<body>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"message\">OTP Verification Email</div>\r\n\t\t\t<div class=\"body\">\r\n\t\t\t\t<p>Dear User,</p>\r\n\t\t\t\t<p>Thank you for registering with Vikreta. To complete your registration, please use the following OTP\r\n\t\t\t\t\t(One-Time Password) to verify your account:</p>\r\n\t\t\t\t<h2 class=\"highlight\">{otp}</h2>\r\n\t\t\t\t<p>This OTP is valid for 5 minutes. If you did not request this verification, please disregard this email.\r\n\t\t\t\tOnce your account is verified, you will have access to our platform and its features.</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"support\">If you have any questions or need assistance, please feel free to reach out to us at <a\r\n\t\t\t\t\thref=\"mailto:vikreta@gmail.com\">info@vitreta.com</a>. We are here to help!</div>\r\n\t\t</div>\r\n\t</body>";

            message.Body = new TextPart("html")
            {
                Text = body
            };

            try
            {
                using (var client = new SmtpClient())
                {
                   
                    client.Connect(_smtpHost, _smtpPort, MailKit.Security.SecureSocketOptions.StartTls);
                  
                    client.Authenticate(_smtpUsername, _smtpPassword);
                    
                    client.Send(message);
                   
                    client.Disconnect(true);
                }
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error sending email: {ex.Message}");
                return false;
            }
        }
    

    }
}
