export class GlobalConstants {
  // Meesage
  public static genericError: string =
    'Something went wrong. pleases try again later';

  //Regex
  public static nameRegex: string = '[a-zA-Z0-9 ]*';

  public static emailRegex: string =
    '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}';

  public static productExistError: string = 'Product already exists';

  public static productAdded: string = 'Product added successfully';

  public static emailSend: string = 'Email Send successfully';

  public static passwordChanged: string = 'Password Changed successfully';

  public static contactNumberRegex: string = '^[e0-9]{10,10}$';

  public static unauthroized: string =
    'You are not authorized person to access this page.';
  //Variable
  public static error: string = 'Error';

  public static oldPasswordError: string = 'Error : Wrong Old Password';

  public static signupSuccess: string = 'Signed Up Successfully';
}
