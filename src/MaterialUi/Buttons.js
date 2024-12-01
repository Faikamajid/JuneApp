import React from 'react'
import { Button } from '@mui/material'
export default function MyButton({variant,text,disabled,color,action,size,Comp}) {
  return (
    <Button variant={variant} color={color&&color} size={size && size}
    onClick={()=>action && action()}
    >{text && text}
   {Comp && <Comp/>}
    </Button>
  )
}
