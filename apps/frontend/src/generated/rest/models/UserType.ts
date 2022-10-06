/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserType = {
  id: number;
  email: string;
  name: string;
  status?: UserType.status;
};

export namespace UserType {

  export enum status {
    HAPPY = 'Happy',
    SAD = 'Sad',
  }


}

