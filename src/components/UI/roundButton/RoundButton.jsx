import React from 'react'
import classes from "./RoundButton.module.css"

const RoundButton = ({children, current, ...props}) => {

  const rootClasses = [classes.roundButton]
  
  if (current) {
    rootClasses.push(classes.current)
  }

  return (
    <button {...props} className={rootClasses.join(' ')}>
        {children}
    </button>
  )
}
export default RoundButton