'use client'

import Link from 'next/link'

import { useAuth } from '../../../_providers/Auth'

import { Fragment } from 'react'
import classes from './index.module.scss'

export const HeaderNav: React.FC = () => {
  const { user } = useAuth()

  return (
    <nav
      className={[
        classes.nav,
        // fade the nav in on user load to avoid flash of content and layout shift
        // Vercel also does this in their own website header, see https://vercel.com
        user === undefined && classes.hide,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {user && (
        <Fragment>
          <Link href="/account">Account</Link>
          <Link href="/logout">Logout</Link>
        </Fragment>
      )}
      {!user && (
        <Fragment>
          <Link href="/login">Login</Link>
          <Link href="/create-account">Create Account</Link>
        </Fragment>
      )}
    </nav>
  )
}
