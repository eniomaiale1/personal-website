using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace EnioWebSite.Models
{
    public class ContactModel
    {
        [Required(ErrorMessage ="Contact name is required.")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Email address is required.")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Message can not be emty.")]
        public string Message { get; set; }
    }
}