import React, { useState } from 'react'
import styles from './Keyboard.module.css'


function Keyboard(props) {
  function handleUpperCaseClick(props) {
    props.setKeyboardStatus("upperCase");
    props.setUnDoArray([...props.unDoArray, props.statesStatus])

  }
  function handleLowerCaseClick(props) {
    props.setKeyboardStatus("English");
    props.setUnDoArray([...props.unDoArray, props.statesStatus])

  }
  function handleLetterClick(e, props) {
    props.setTextArea([...props.textArea, { text: `${e.currentTarget.textContent}`, styles: props.styleText }]);
    props.setUnDoArray([...props.unDoArray, props.statesStatus])

  }

  return (
    <div className={styles.keyboard}>
      <div key="keyboard">
        {props.letters.map((letter, key) => {
          if (key == 10 || key == 20) {
            return <><br></br><button key={key} onClick={(e) => handleLetterClick(e, props)}>{letter}</button></>
          }
          if (letter == '⬆️') {
            return <button key={key} onClick={() => handleUpperCaseClick(props)}>{letter}</button>
          }
          if (letter == '⬇️') {
            return <button key={key} onClick={() => handleLowerCaseClick(props)}>{letter}</button>
          }

          return <button key={key} onClick={(e) => handleLetterClick(e, props)}>{letter}</button>
        })}

      </div>
      <div key="buttons">
        <button className={styles.space} onClick={(e) => handleLetterClick(e, props)}> </button>
        <br /><br />
        <button onClick={() => {
          props.setKeyboardStatus("English");
          props.setUnDoArray([...props.unDoArray, props.statesStatus])
        }}>English</button>
        <button onClick={() => {
          props.setKeyboardStatus("Hebrew");
          props.setUnDoArray([...props.unDoArray, props.statesStatus]);
        }}>עברית</button>
        <button onClick={() => {
          props.setKeyboardStatus("Emojies");
          props.setUnDoArray([...props.unDoArray, props.statesStatus]);
        }}>😀🤣🤩</button>
        <button onClick={() => {
          props.setKeyboardStatus("numbersSighn");
          props.setUnDoArray([...props.unDoArray, props.statesStatus]);
        }}>1!@#</button>
      </div>
    </div>
  )
}

export default Keyboard
