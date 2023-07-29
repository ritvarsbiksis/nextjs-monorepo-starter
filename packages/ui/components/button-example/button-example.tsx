'use client'

import { ButtonOwnerState, Button as MuiButton } from '@mui/base'
import { clsx } from 'clsx'
import { useState } from 'react'

import * as styles from './button-example.module.css'

export const Button = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  const slotProps = {
    // root: { classname: styles.disabled },
    root: (ownerState: ButtonOwnerState) => ({
      className: clsx(styles.root, {
        [styles.disabled]: ownerState.disabled,
        [styles.active]: ownerState.active,
      }),
    }),
  }

  return (
    <MuiButton
      disabled={isDisabled}
      className={styles.root}
      slotProps={slotProps}
      onClick={() => {
        setIsDisabled(true)
        alert('boop')
      }}
    >
      Test <span>button</span>
    </MuiButton>
  )
}
