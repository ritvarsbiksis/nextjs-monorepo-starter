import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  Path,
  UseFormRegister,
} from 'react-hook-form'

import classes from './index.module.scss'
import { ReactNode } from 'react'

type Props<T extends FieldValues> = {
  name: Path<T>
  label: string
  register: UseFormRegister<T>
  required?: boolean
  error?: FieldError | Merge<FieldError, FieldErrorsImpl>
  type?: 'text' | 'number' | 'password' | 'email'
  validate?: (value: string) => boolean | string
}

export const Input = <T extends FieldValues>({
  name,
  label,
  required,
  register,
  error,
  type = 'text',
  validate,
}: Props<T>): ReactNode => {
  return (
    <div className={classes.inputWrap}>
      <label htmlFor="name" className={classes.label}>
        {`${label} ${required ? '*' : ''}`}
      </label>
      <input
        className={[classes.input, error && classes.error].filter(Boolean).join(' ')}
        {...{ type }}
        {...register(name, {
          required,
          validate,
          ...(type === 'email'
            ? {
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Please enter a valid email',
                },
              }
            : {}),
        })}
      />
      {error && (
        <div className={classes.errorMessage}>
          {typeof error === 'string' ? error : ''}
          {!error?.message && error?.type === 'required'
            ? 'This field is required'
            : String(error['message'])}
        </div>
      )}
    </div>
  )
}
