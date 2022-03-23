import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css';

function Shipment() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const [loggedInUser,setLoggedInUser]= useContext(UserContext)
  return (
    <div className='ship-form'>
      <form  onSubmit={handleSubmit(onSubmit)}>
        
        <input  className='form-input' defaultValue={loggedInUser.name} placeholder='Name' {...register("name", { required: true })} />
        {errors.name && <span className='error-field'>Name is required</span>}
        <input  className='form-input' defaultValue={loggedInUser.email} placeholder='Email' {...register("email", { required: true })} />
        {errors.email && <span className='error-field'>Email is required</span>}
        <input  className='form-input' placeholder='Address' {...register("address", { required: true })} />
        {errors.address && <span className='error-field'>Address is required</span>}
        <input  className='form-input' placeholder='Phone' {...register("phone", { required: true })} />
        {errors.phone && <span className='error-field'>Phone is required</span>}
        <input className='form-input' type="submit" />
      </form>
    </div>
  )
}

export default Shipment