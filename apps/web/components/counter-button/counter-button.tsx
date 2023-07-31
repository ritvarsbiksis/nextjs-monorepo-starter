'use client'

import { Button as MuiButton } from '@mui/base'
import { useNavigExampleStore } from 'ui'

export const CounterButton = () => {
  const { setCount } = useNavigExampleStore()

  return (
    <MuiButton title="+1" onClick={() => setCount(1)}>
      {'+ 1'}
    </MuiButton>
  )
}
