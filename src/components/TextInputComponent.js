import React from 'react';

const TextInputComponent = (props) => {
    return (
        <div className="form-group" >
            <label>{props.label}</label>
            <input className="form-control" type="text" name={props.name} placeholder={props.placeholder} onChange={props.change} />
        </div>
    )

}
export default TextInputComponent;