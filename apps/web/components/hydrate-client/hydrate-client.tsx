'use client'

import { Hydrate as RQHydrate, HydrateProps } from '@tanstack/react-query'

export const HydrateClient = (props: HydrateProps) => <RQHydrate {...props} />
