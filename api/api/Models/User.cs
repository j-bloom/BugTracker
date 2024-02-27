namespace api.Models
{
    public class User
    {        
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        private DateTime _dateJoined; 
        public DateTime DateUserJoined 
        {
            get; set;                      
//            get { return _dateJoined; }
//            set
//            {
//                _dateJoined = DateTime.Now;
//            } 
        }
    }
}
