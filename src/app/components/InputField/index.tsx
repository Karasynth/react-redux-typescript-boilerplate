import React from 'react';
import style from './style.css';

export namespace InputField {
  export interface Props {
    placeholder: string,
    icon?: string,
    value: string,
    onChange: any,
  }
}

export const InputField = ({ placeholder='', icon, value, onChange }: InputField.Props): JSX.Element => {

  const handleOnChange = (e:any) => {
    onChange(e.target.value)
  };

  return (
    <div style={{width: "100%", position: 'relative'}}>
      <input 
        type='text'
        className={style.input}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
      {icon && 
        <i 
          className={icon}
          style={{
            position: 'absolute',
            right: 15,
            top: 12,
            color: 'white'
          }}
        />
      }
    </div>
  );
};