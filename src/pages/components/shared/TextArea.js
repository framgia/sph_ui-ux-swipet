import React from 'react';

const TextArea = ({
  labelText,
  htmlFor,
  labelClassName,
  id,
  rows,
  placeholder,
  textAreaClassName,
}) => (
  <div>
    <label htmlFor={htmlFor} className={labelClassName}>
      {labelText}
      <textarea id={id} rows={rows} className={textAreaClassName} placeholder={placeholder} />
    </label>
  </div>
);

export default TextArea;
