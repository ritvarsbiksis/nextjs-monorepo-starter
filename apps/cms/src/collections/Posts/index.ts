import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
// import { Archive } from '../../blocks/ArchiveBlock'
// import { CallToAction } from '../../blocks/CallToAction'
// import { Content } from '../../blocks/Content'
// import { ContentMedia } from '../../blocks/ContentMedia'
// import { MediaBlock } from '../../blocks/MediaBlock'

import { adminsOrPublished } from '../../access/adminsOrPublished'
import { slugField } from '../../fields/slug'
import { populatePublishedDate } from '../../hooks/populatePublishedDate'
import { populateAuthors } from '../../hooks/populateAuthors'

import { revalidatePost } from './hooks/revalidatePost'

export const Posts: CollectionConfig = {
  access: {
    create: admins,
    delete: () => false,
    read: adminsOrPublished,
    update: admins,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    // livePreview: {
    //   url: ({ data }) => `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/posts/${data?.slug}`,
    // },
    preview: doc => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/preview?url=${encodeURIComponent(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/posts/${doc?.slug as string}`,
      )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    },
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      required: true,
      type: 'text',
    },
    {
      name: 'categories',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
      relationTo: 'categories',
      type: 'relationship',
    },
    {
      name: 'content',
      required: true,
      type: 'richText',
    },
    {
      name: 'publishedOn',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
      type: 'date',
    },
    {
      name: 'authors',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
      relationTo: 'users',
      required: true,
      type: 'relationship',
    },
    slugField(),
  ],
  hooks: {
    afterChange: [revalidatePost],
    afterRead: [populateAuthors],
    beforeChange: [populatePublishedDate],
  },
  slug: 'posts',
  versions: {
    drafts: true,
  },
}
