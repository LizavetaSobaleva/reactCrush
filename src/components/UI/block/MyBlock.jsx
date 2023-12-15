import React from 'react'
import classes from "./MyBlock.module.css"

function MyBlock({children, ...props}) {
  return (
    <div className={classes.modalBlock} {...props}>
        {children}
    </div>
  )
}

export default MyBlock