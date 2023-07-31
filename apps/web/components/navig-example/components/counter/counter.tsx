'use client'

import { clsx } from 'clsx'

import { useFromStore, useNavigExampleStore } from 'ui'
import { vt323 } from '../../../../styles/fonts'

import styles from './counter.module.css'

export const Counter = () => {
  const count = useFromStore(useNavigExampleStore, ({ count }) => count)

  if (!count) return <div>Loading...</div>

  return <div className={clsx(vt323.className, styles.main)}>{count}</div>
}
