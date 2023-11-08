// Import necessary modules
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

// Define validation schema using yup
const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),  
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  city: yup.string().required('City is required'),
  gender: yup.string().required('Gender is required'),
  hobbies: yup.array().min(1, 'Select at least one hobby')
});

const WithHooksForms = () => {
  // Destructure methods from useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },control} = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: '',
      hobbies: [],
      city: ''
    },
    resolver: yupResolver(schema),
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log('Form submitted with data: ', data);
  };

  return (
    <div className="signup-form">
      <h2>Sign UP</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <div className="form-group">
          <label htmlFor="firstName">First Name :</label>
          <input type="text" id="firstName" {...register('firstName')} />
          {errors?.firstName && <span className="error">{errors?.firstName.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="lastName"> Last Name :</label>
          <input type="text" id="lastName" {...register('lastName')} />
          {errors?.lastName && <span className="error">{errors?.lastName.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email"> Email:</label>
          <input type="email" id="email" {...register('email')} />
          {errors?.email && <span className="error">{errors?.email.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" {...register('password')} />
          {errors?.password && <span className="error">{errors?.password.message}</span>}
        </div>

        <div className="form-group">
          <label>Gender :</label>
          <input type="radio" id="male" value="male" {...register('gender')} /> Male
          <input type="radio" id="female" value="female" {...register('gender')} /> Female
          {errors?.gender && <span className="error">{errors?.gender.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor='hobbies'> Hobbies </label>
          <input type="checkbox" id="reading" value="Reading" {...register('hobbies')} /> Reading
          <input type="checkbox" id="gaming" value="Gaming" {...register('hobbies')} /> Gaming
          <input type="checkbox" id="music" value="Music" {...register('hobbies')} /> Music
          {errors?.hobbies && <span className="error">{errors?.hobbies.message}</span>}
        </div>

        <div className="formgroups">
          <label> City:</label>
        
          <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select {...field}>
                <option value="" disabled> Select City:</option>
                <option value="pune"> Pune</option>
                <option value="Mumbai"> Mumbai</option>
                <option value="Ratnagiri">Ratnagiri</option>
              </select>
            )}
          />
          {errors?.city && <span className="error">{errors?.city.message}</span>}
        </div>

        <div>
          <button type="submit"> Sign up </button>
        </div>
      </form>
    </div>
  );
}

export default WithHooksForms;
