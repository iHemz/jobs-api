import React from 'react'

type Props = React.ComponentPropsWithoutRef<'input'> & {
 error?: string;
 label?: string;
}

export function Input({}: Props) {
 
  return (
    <div>Input</div>
  )
}
