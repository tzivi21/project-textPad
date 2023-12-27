import React, { useState } from 'react'
import styles from './DesignBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold } from '@fortawesome/free-solid-svg-icons';
import { faUnderline } from '@fortawesome/free-solid-svg-icons';
import { faItalic } from '@fortawesome/free-solid-svg-icons';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { faAlignRight } from '@fortawesome/free-solid-svg-icons';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';




function DesignBar(props) {
    

    function handleFontSizeChange(e){
        props.setFontSize(e.currentTarget.value);
        props.setUnDoArray([...props.unDoArray, props.statesStatus])
    }
    function handleColorChange(e){
        props.setFontColor(e.currentTarget.value);
        props.setUnDoArray([...props.unDoArray, props.statesStatus])
    }
    function handleUnderline(){
        props.setUnderlineFlag(props.underlineFlag? false : true);
        props.setUnDoArray([...props.unDoArray, props.statesStatus])
    }
    function handleBold(){
        let flag=props.boldFlag? false : true;
        props.setBoldFlag(flag);
        props.setUnDoArray([...props.unDoArray, props.statesStatus])
    }
    function handleItalic(){
        props.setItalicFlag(props.italicFlag? false : true);
        props.setUnDoArray([...props.unDoArray, props.statesStatus])
    }
    function handleErase(){
        props.setTextArea(props.textArea.slice(0,-1));
        props.setUnDoArray([...props.unDoArray, props.statesStatus])
    }
    function handleDeleteAll(){
        props.setTextArea([]);
        props.setUnDoArray([...props.unDoArray, props.statesStatus])
    }
    function handleTextAlign(side){
        props.setTextAlign(side);
        props.setUnDoArray([...props.unDoArray, props.statesStatus])
    }
    
    function handleUndo(){
        props.setKeyboardStatus(props.unDoArray[props.unDoArray.length-1].keyboardStatus);
        props.setFontColor(props.unDoArray[props.unDoArray.length-1].fontColor);
        props.setBoldFlag(props.unDoArray[props.unDoArray.length-1].boldFlag);
        props.setUnderlineFlag(props.unDoArray[props.unDoArray.length-1].underlineFlag);
        props.setItalicFlag(props.unDoArray[props.unDoArray.length-1].italicFlag);
        props.setTextAlign(props.unDoArray[props.unDoArray.length-1].textAlign);
        props.setUpperFlag(props.unDoArray[props.unDoArray.length-1].upperFlag);
        props.setFontSize(props.unDoArray[props.unDoArray.length-1].fontSize);
        props.setTextArea(props.unDoArray[props.unDoArray.length-1].textArea);  
        let updatedArray= props.unDoArray.slice(0,-1);   
         props.setUnDoArray(updatedArray); 
    }
    function handleUpperAll(){
        props.setUpperFlag(true);
        props.setUnDoArray([...props.unDoArray, props.statesStatus])

    }
    function handleLowerAll(){
        props.setUpperFlag(false);
        props.setUnDoArray([...props.unDoArray, props.statesStatus])

    }
    return (
        <div className={styles.nav}>
            <button className={styles.buttons} onClick={handleUnderline}><FontAwesomeIcon icon={faUnderline} /></button>
            <button className={styles.buttons} onClick={handleBold}><FontAwesomeIcon icon={faBold} /></button>
            <button className={styles.buttons} onClick={handleItalic}><FontAwesomeIcon icon={faItalic} /></button>
            <button className={styles.buttons} onClick={handleErase}><FontAwesomeIcon icon={faEraser} /></button>
            <button className={styles.buttons} onClick={()=>handleTextAlign("left")}><FontAwesomeIcon icon={faAlignLeft} /></button>
            <button className={styles.buttons} onClick={()=>handleTextAlign("right")}><FontAwesomeIcon icon={faAlignRight} /></button>
            <button className={styles.buttons} onClick={()=>handleTextAlign("center")}><FontAwesomeIcon icon={faAlignCenter} /></button>
            <button className={styles.buttons} onClick={handleDeleteAll}>Delete All</button>
            <button className={styles.buttons} onClick={handleUpperAll}>Upper All</button>
            <button className={styles.buttons} onClick={handleLowerAll}>Lower All</button>

            <button className={styles.buttons} onClick={handleUndo}>Undo</button>

            <div  id='chooseSize'>
                <h2 className={styles.h2}>Choose font size:</h2>
                <select  className={styles.fontSize} id="fontSize" onChange={handleFontSizeChange}>
                <option value="12">12</option>
                <option value="14">14</option>
                <option value="16">16</option>
                <option value="18">18</option>
                <option value="20">20</option>
                <option value="24">24</option>
                </select>
            </div>
            <div id="chooseColor">
                <h2 className={styles.h2}>Choose font color:</h2>
                <select onChange={handleColorChange} className={styles.fontColor} id="fontColor">
                <option className={styles.black} id="black" value="black">black</option>
                <option className={styles.red} id="red" value="red">red</option>
                <option className={styles.yellow} id="yellow" value="yellow">yellow</option>
                <option className={styles.blue} id="blue" value="blue">blue</option>
                <option className={styles.green} id="green" value="green">green</option>
                <option className={styles.pink} id="pink" value="pink">pink</option>
                </select>
            </div>
        </div>
    )
}

export default DesignBar
