'use client'

import { useQuery } from '@tanstack/react-query'

import { fetchPosts } from '../lib/fetch-posts'

export const useGetPosts = (limit: number = 10) => useQuery(['posts', limit], fetchPosts)
