import React from "react";
import Modal from "react-modal";
import Option from "./Option";
const Options = (props)=>(
        <div>
            <div className="widget-header">
            <h3 className="widget-header__selector">Your options</h3>
            <button 
            className="button button--link"
            onClick={props.handleDeleteOptions}
            >
            Remove All</button>
            </div>
        
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
        {
            // 1 metoda: this.props.options.map((option) => <p key={option}>{option}</p>)
            props.options.map((option, index) => (
                <Option 
                key={option} 
                count={index +1}
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
        </div>
    )

export default Options;