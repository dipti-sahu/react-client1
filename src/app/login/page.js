import React from 'react';
import configuration from './configuration.json'
import {Input} from '@/component/reusable/input'
const Login = () => {
  return (
    <div className='container-fluid'>
      <h2 className='text-center'>login</h2>
      {
         configuration.map((obj,ind)=>{
          return <Input {...obj}/>
         })
     }
     <div className='row'>
      <div className='offset-sm-5 col-sm-7'>
      <p><button className='btn btn-success'>login</button></p>
      </div>
     </div>
    </div>
  );
}

export default Login;
