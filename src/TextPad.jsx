import { useState } from 'react'
import './TextPad.css'
import TextArea from './components/TextArea'
import Keyboard from './components/Keyboard'
import DesignBar from './components/DesignBar'

function TextPad() {
  let englishLetters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '⬆️',
    'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.'];
  let upperCaseEnglishLetters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '⬇️',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.'];
  let hebrewLetters = ['/', '\'', 'ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ',
    'ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף',
    'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ'];
  let emojies = ['😀', '🥰', '🤡', '🐥', '😉', '🏠', '🥶', '😂', '🫥', '🤗',
    '😎', '🤩', '🤔', '😏', '🫠', '😪', '😴', '😯', '🤐', '😜',
    '😭', '🤯', '😡', '🤑', '🤠', '😤', '😇', '😱', '🫣'];
  let numbersSighn = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '?', '_', '=', '+', '"', ':', '~', '<']
  const [keyboardStatus, setKeyboardStatus] = useState('English');
  const [textArea, setTextArea] = useState([]);
  const [fontSize, setFontSize] = useState(12);
  const [fontColor, setFontColor] = useState('black');
  const [boldFlag, setBoldFlag] = useState(false);
  const [underlineFlag, setUnderlineFlag] = useState(false);
  const [italicFlag, setItalicFlag] = useState(false);
  const [textAlign, setTextAlign] = useState("center");
  const [upperFlag, setUpperFlag] = useState(false);
  const [unDoArray, setUnDoArray] = useState([]);

  let statesStatus = {
    keyboardStatus: keyboardStatus,
    textArea: textArea,
    fontSize: fontSize,
    fontColor: fontColor,
    boldFlag: boldFlag,
    underlineFlag: underlineFlag,
    italicFlag: italicFlag,
    textAlign: textAlign,
    upperFlag: upperFlag
  }
  let styleText = {
    fontSize: `${fontSize}px`,
    color: `${fontColor}`,
    fontWeight: boldFlag ? 'bold' : 'normal',
    textDecoration: underlineFlag ? 'underline' : 'none',
    fontStyle: italicFlag ? 'italic' : 'normal'
  }
  let textAreaStyles = {
    textAlign: textAlign === "center" ? "center" : textAlign === "left" ? "left" : "right",
  }


  return (
    <>
      <DesignBar
        statesStatus={statesStatus}
        upperFlag={upperFlag}
        setUpperFlag={setUpperFlag}
        styleText={styleText}
        unDoArray={unDoArray}
        setUnDoArray={setUnDoArray}
        textAlign={textAlign}
        setTextAlign={setTextAlign}
        fontSize={fontSize}
        setFontSize={setFontSize}
        fontColor={fontColor}
        setFontColor={setFontColor}
        boldFlag={boldFlag}
        setBoldFlag={setBoldFlag}
        underlineFlag={underlineFlag}
        setUnderlineFlag={setUnderlineFlag}
        italicFlag={italicFlag}
        setItalicFlag={setItalicFlag}
        textArea={textArea}
        setTextArea={setTextArea}
        keyboardStatus={keyboardStatus}
        setKeyboardStatus={setKeyboardStatus} />
      <TextArea
        upperFlag={upperFlag}
        textAreaStyles={textAreaStyles}
        textAlign={textAlign}
        textArea={textArea} />
      <Keyboard
        setUnDoArray={setUnDoArray}
        statesStatus={statesStatus}
        styleText={styleText}
        unDoArray={unDoArray}
        textArea={textArea}
        setTextArea={setTextArea}
        numbersSighn={numbersSighn}
        letters={keyboardStatus == 'English' ? englishLetters : keyboardStatus == 'upperCase' ? upperCaseEnglishLetters : keyboardStatus == 'Hebrew' ? hebrewLetters : keyboardStatus == 'numbersSighn' ? numbersSighn : emojies}
        keyboardStatus={keyboardStatus}
        setKeyboardStatus={setKeyboardStatus}
        fontSize={fontSize} fontColor={fontColor}
        boldFlag={boldFlag}
        underlineFlag={underlineFlag}
        italicFlag={italicFlag} />
    </>
  )
}

export default TextPad
