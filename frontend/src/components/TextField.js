import React from 'react'
//import PropTypes from 'prop-types'


const TextField = ({
  name,
  placeholder,
  value,
  error,
  info,
  type,
  onChange
}) => {
  return (
    <div
      className=""
    >
      <input
        type={type}
        className=""
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {info && <small
        className=""
      >
        {info}
      </small>}
      {error &&
        (
          <div
            className=""
          >
            {error}
          </div>
        )
      }
    </div>
  )
}

TextField.defaultProps = {
  type: 'text'
}

export default TextField