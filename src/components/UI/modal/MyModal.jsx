import React from 'react'
import MyBlock from '../block/MyBlock';
import classes from './MyModal.module.css'

export const MyModal = ({children, visible, setVisible}) => {

  const rootClasses = [classes.myModal]
  
  if (visible) {
    rootClasses.push(classes.active)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div onClick={(e) => e.stopPropagation()}>
      <MyBlock>
            {children}
        </MyBlock>
      </div>
    </div>
  )
}
export default MyModal;