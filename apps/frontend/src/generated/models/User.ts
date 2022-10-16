/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type User = {
  id: number;
  email: string;
  name: string;
  status?: User.status;
  phoneNumbers: Array<string>;
};

export namespace User {

  export enum status {
    HAPPY = 'Happy',
    SAD = 'Sad',
  }


}

