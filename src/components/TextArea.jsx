import React, { useState } from 'react'
import styles from './TextArea.module.css'

function TextArea(props) {

  return (
    <div style={props.textAreaStyles}>
      <p className={styles.textArea}>{props.textArea.map((letter, index) => {
        if (props.upperFlag) {
          return (
            <span key={index} style={letter.styles}>
              {letter.text.toUpperCase()}
            </span>
          )
        }
        else {
          return (
            <span key={index} style={letter.styles}>
              {letter.text}
            </span>
          )
        }

      })}</p>
    </div>
  )
}

export default TextArea
