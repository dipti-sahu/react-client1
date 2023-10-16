import React from 'react';
import styles from './input.module.css'


export const Input =({label,tag,model,type})=> {
  return (
    <div className='row'>
      <div className='col-sm-5 text-end'>
           <b>{label}</b>:
      </div>
      <div className='col-sm-4'>
              <input type={type}></input>
      </div>
      <div className='col-sm-3'>
            <b className='text-danger'>please enter valid data</b>
      </div>
    </div>
  );
}
