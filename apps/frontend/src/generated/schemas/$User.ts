/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $User = {
  properties: {
    id: {
      type: 'number',
      isRequired: true,
      format: 'int32',
    },
    email: {
      type: 'string',
      isRequired: true,
      pattern: '/[a-z0-9]+/',
    },
    name: {
      type: 'string',
      isRequired: true,
    },
    status: {
      type: 'Enum',
    },
    phoneNumbers: {
      type: 'array',
      contains: {
        type: 'string',
      },
      isRequired: true,
    },
  },
} as const;
