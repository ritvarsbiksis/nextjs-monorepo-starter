'use client'

import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface State {
  count: number
}

interface Actions {
  setCount: (value: number | undefined) => void
}

const INITIAL_STATE: State = {
  count: 12,
}

export const useNavigExampleStore = create(
  devtools(
    persist<State & Actions>(
      (set, get) => ({
        count: INITIAL_STATE.count,
        setCount: (value = 1) => {
          const count = get().count

          if (count < 30) set(({ count }) => ({ count: count + value }))
          else set(() => ({ count: 5 }))
        },
      }),
      {
        name: 'navig-example',
      },
    ),
  ),
)
