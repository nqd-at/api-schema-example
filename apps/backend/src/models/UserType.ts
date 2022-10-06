export interface UserType {
  /**
   * @isInt
   */
  id: number;

  /**
   * @format email
   */
  email: string;

  name: string;

  status?: "Happy" | "Sad";
}
