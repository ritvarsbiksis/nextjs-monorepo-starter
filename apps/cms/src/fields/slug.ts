import type { Field } from 'payload/types'

import formatSlug from '../utilities/formatSlug'

type Slug = (fieldToUse?: string, overrides?: Partial<Field>) => Field

export const slugField: Slug = (fieldToUse = 'title') => ({
  name: 'slug',
  admin: {
    position: 'sidebar',
  },
  hooks: {
    beforeValidate: [formatSlug(fieldToUse)],
  },
  index: true,
  label: 'Slug',
  type: 'text',
})
