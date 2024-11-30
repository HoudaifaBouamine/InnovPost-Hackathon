public class RegisterDTO
{
    required public string FullName { get; set; }
    required public string Nin { get; set; }
    required public string Password { get; set; }
    required public string Address { get; set; }
    required public string Phone { get; set; }
    required public string Email { get; set; }
}

public class UserDTO
{
    required public string Id { get; set; }
    required public string FullName { get; set; }
    required public string Nin { get; set; }
    required public string Address { get; set; }
    required public string Phone { get; set; }
    required public string Email { get; set; }
}