import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useForm } from "react-hook-form";
import Loding from '../../Shared/Loading/Loding';

const Login = () => {
   const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
   const { register, formState: { errors }, handleSubmit } = useForm();
  
   const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInErrorMessage;
   if (error || googleError) {
      signInErrorMessage = <p className='text-red-600'>{error?.message || googleError?.message}</p>
    }
   //  true || loading || googleLoading
    if (loading || googleLoading) {
      return <Loding></Loding>;
    }
    if (googleUser) {
     console.log(googleUser)
    }

    const onSubmit = data => {
      console.log(data);
      signInWithEmailAndPassword(data.email, data.password);
   }

   return (
      <div className='flex h-screen justify-center items-center'>
         <div className='card w-96 bg-base-100 shadow-xl'>
            <div className='card-body'>
               <h2 className='text-center text-2xl font-bold text-dark'>Login</h2>
               {/* ............Form Login...........  */}
               <form onSubmit={handleSubmit(onSubmit)}>

               <div class="form-control w-full max-w-xs">
                  <label class="label">
                     <span class="label-text">Email</span>
                     
                  </label>
                  <input 
                  {...register("email", {
                     required: {
                        value: true,
                        message: 'Email is Required'
                     },
                     pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message:'Provide a valid email'
                     }
                  })}
                  type="email" 
                  placeholder="Your Email" 
                  class="input input-bordered w-full max-w-xs" />
                  <label class="label">
                     {errors.email?.type === 'required' && <span class="label-text-alt text-red-700">{errors.email.message}</span>}
                     {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-700">{errors.email.message}
                  </span>}
                     
                  </label>
               </div>
               {/* ........  */}
               <div class="form-control w-full max-w-xs">
                  <label class="label">
                     <span class="label-text">Password</span>
                     
                  </label>
                  <input 
                  {...register("password", {
                     required: {
                        value: true,
                        message: 'password is Required'
                     },
                     minLength: {
                        value: 6,
                        message:'Must Be 6 Characters or Longer'
                     }
                  })}
                  type="password" 
                  placeholder="Your password" 
                  class="input input-bordered w-full max-w-xs" />
                  <label class="label">
                     {errors.password?.type === 'required' && <span class="label-text-alt text-red-700">{errors.password.message}</span>}
                     {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-700">{errors.password.message}
                  </span>}
                     
                  </label>
               </div>


                  {/* <input  />
                  {errors.firstName?.type === 'required' && "First name is required"}
                  
                  <input {...register("lastName", { required: true })} />
                  {errors.lastName && "Last name is required"} */}
                  {signInErrorMessage}
                  <input className='btn btn-primary uppercase text-white font-bold 
          bg-gradient-to-r from-secondary to-primary w-full max-w-xs' type="submit" value='Login' />
               </form>

               
               <div className='divider'>OR</div>
               {/* ..........Google..........  */}

               <button onClick={() => signInWithGoogle()} 
               className='btn btn-outline btn-warning'>Continue With Google</button>
            </div>
         </div>
      </div>
   );
};

export default Login;