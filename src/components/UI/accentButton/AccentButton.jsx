import React from 'react'
import classes from "./AccentButton.module.css"

const AccentButton = ({children, ...props}) => {
  return (
    <button {...props} className={classes.accentButton}>
        {children}
    </button>
  )
}
export default AccentButton