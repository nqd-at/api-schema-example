export interface User {
  /**
   * @isInt
   */
  id: number;

  /**
   * @pattern /[a-z0-9]+/
   */
  email: string;
  name: string;
  status?: "Happy" | "Sad";
  phoneNumbers: string[];
}
