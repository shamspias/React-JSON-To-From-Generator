import React from 'react';

const SelectInputComponent = (props) => {
    return (
        <div className="form-group" >
            <label>{props.label}</label>
            <select className="form-control form-control-lg" name={props.name} onChange={props.change}>
                {props.options.map((option, index)=> {
                    return(<option key={index} value={option.value}>{option.label}</option>)
                })}
            </select>
        </div>
    )

}
export default SelectInputComponent;