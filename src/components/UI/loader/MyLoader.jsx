import React from 'react'
import classes from './MyLoader.module.css'

const MyLoader = () => {
  return (
    <div className={classes.loader}>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}

export default MyLoader