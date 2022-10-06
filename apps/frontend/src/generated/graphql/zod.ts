import { z } from 'zod'
import { UserCreationPayload } from './types'

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null;

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));

export function UserCreationPayloadSchema(): z.ZodObject<Properties<UserCreationPayload>> {
  return z.object({
    email: z.string().email().min(1),
    name: z.string().min(1)
  })
}
