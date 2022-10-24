/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserType = {
  properties: {
    id: {
      type: "number",
      isRequired: true,
      format: "int32",
    },
    email: {
      type: "string",
      isRequired: true,
      format: "email",
    },
    name: {
      type: "string",
      isRequired: true,
    },
    status: {
      type: "Enum",
    },
  },
} as const;
