/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Pick_User_email_or_name_or_phoneNumbers_ = {
  description: `From T, pick a set of properties whose keys are in the union K`,
  properties: {
    email: {
      type: 'string',
      isRequired: true,
      pattern: '/[a-z0-9]+/',
    },
    name: {
      type: 'string',
      isRequired: true,
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
