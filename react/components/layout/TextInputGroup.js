import React from 'react'


const TextInputGroup = ({label, name, value, placeholder, type, onChange, error}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                className={"form-control " + (error ? 'is-invalid' : '')}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            { error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
};

TextInputGroup.defaultProps = {
    type: 'text'
};

export default TextInputGroup;