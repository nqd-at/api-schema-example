/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserCreationPayloadType = {
  properties: {
    email: {
      type: 'string',
      isRequired: true,
      format: 'email',
      minLength: 1,
      pattern: '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$',
    },
    name: {
      type: 'string',
      isRequired: true,
      minLength: 1,
    },
  },
} as const;
