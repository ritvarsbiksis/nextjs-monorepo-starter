/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User
    categories: Category
    posts: Post
    'payload-preferences': PayloadPreference
    'payload-migrations': PayloadMigration
  }
  globals: {}
}
export interface User {
  id: string
  firstName?: string | null
  lastName?: string | null
  roles?: ('admin' | 'user')[] | null
  updatedAt: string
  createdAt: string
  email: string
  resetPasswordToken?: string | null
  resetPasswordExpiration?: string | null
  salt?: string | null
  hash?: string | null
  loginAttempts?: number | null
  lockUntil?: string | null
  password: string | null
}
export interface Category {
  id: string
  title?: string | null
  updatedAt: string
  createdAt: string
}
export interface Post {
  id: string
  title: string
  categories?: (string | Category)[] | null
  content: {
    [k: string]: unknown
  }[]
  publishedOn?: string | null
  authors: (string | User)[]
  slug?: string | null
  updatedAt: string
  createdAt: string
  _status?: ('draft' | 'published') | null
}
export interface PayloadPreference {
  id: string
  user: {
    relationTo: 'users'
    value: string | User
  }
  key?: string | null
  value?:
    | {
        [k: string]: unknown
      }
    | unknown[]
    | string
    | number
    | boolean
    | null
  updatedAt: string
  createdAt: string
}
export interface PayloadMigration {
  id: string
  name?: string | null
  batch?: number | null
  updatedAt: string
  createdAt: string
}
