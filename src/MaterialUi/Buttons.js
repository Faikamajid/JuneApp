import React from 'react'
import { Button } from '@mui/material'
export default function MyButton({variant,text,disabled,color,action}) {
  return (
    <Button variant={variant} color={color&&color}
    onClick={()=>action && action()}
    >{text}</Button>
  )
}
