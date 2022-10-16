import { z } from 'zod'
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  name_String_NotNull_minLength_5: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: SuccessStatus;
};


export type MutationCreateUserArgs = {
  payload: UserCreationPayload;
};

export type Query = {
  __typename?: 'Query';
  getUser: User;
};


export type QueryGetUserArgs = {
  name?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type SuccessStatus = {
  __typename?: 'SuccessStatus';
  status: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  phoneNumbers: Array<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type UserCreationPayload = {
  email: Scalars['String'];
  name: Scalars['name_String_NotNull_minLength_5'];
  phoneNumbers: Array<Scalars['String']>;
};


type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null;

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));

export function UserCreationPayloadSchema(): z.ZodObject<Properties<UserCreationPayload>> {
  return z.object({
    email: z.string(),
    name: definedNonNullAnySchema,
    phoneNumbers: z.array(z.string())
  })
}
