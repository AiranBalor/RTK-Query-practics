import React from 'react'
import classes from './ModuleBtn.module.css';

const ModuleBtn = (props) => {
  return (
    <button className={classes.button} onClick={props.remove ? props.remove : props.fetchUsers }>{props.children}</button>
  )
}

export default ModuleBtn;