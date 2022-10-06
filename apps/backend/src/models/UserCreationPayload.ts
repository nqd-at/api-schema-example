export interface UserCreationPayloadType {
  /**
   * @minLength 1 Email is required
   * @format email
   * @pattern ^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$ Email is not correct
   */
  email: string;

  /**
   * @minLength 1 Name is required
   */
  name: string;
}
