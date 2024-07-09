import React from 'react';
// import axios from 'axios';
// import { useForm, SubmitHandler } from "react-hook-form";
// const {
//   register,
//   handleSubmit,
//   watch,
//   formState: { errors },
// } = useForm<Inputs>()
// const onSubmit=  SubmitHandler<Inputs>=async(data) => {
//   const userInfo={
//     name:data.name,
//     email:data.email,
//     message:data.message
//   }
//   try{
//  await axios.post("https://getform.io/f/azylldeb",userInfo);
//  alert("your message has been sent");
//   }
//   catch(error){
// console.log(error);
//   }
// };

const Contact = () => {
  return (
   <>
    <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
     <h1 className="text-3xl font-bold mb-4">Contact me</h1>
     <span>Feel free to contact me. I look forward to hearing from you!</span>
     <div className="flex flex-col items-center justify-center mt-5">
        <form 
        // onSubmit={handleSubmit(onSubmit)}
        action="https://getform.io/f/azylldeb" 
         method="POST"
        className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
         <h1 className="text-xl font-semibold mb-4">Message me</h1>
         <div className="flex flex-col mb-4">
           <label className="block text-gray-700">FullName</label> 
          <input 
          className="shadow rounded-lg appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:out"
          // {...register("name", { required: true })}
          id="name"
          name="name"
          type="text"
          placeholder="Enter Your FullName"
          required
          />
          {/* {errors.name && <span>This field is required</span>} */}
         </div>
         <div className="flex flex-col mb-4">
           <label className="block text-gray-700">Email</label> 
          <input 
          className="shadow rounded-lg appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:out"
          // {...register("email", { required: true })}
          id="email"
          name="email"
          type="text"
          placeholder="Enter Your Email"
          required
          />
          {/* {errors.email && <span>This field is required</span>} */}
         </div>
         <div className="flex flex-col mb-4">
           <label className="block text-gray-700">Message</label> 
          <textarea
          className="shadow rounded-lg appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:out"
          // {...register("message", { required: true })}
          id="message"
          name="message"
          type="text"
          placeholder="Type your message "
          required
          />
          {/* {errors.message && <span>This field is required</span>} */}
           </div>
          <button 
          type="submit"
          className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300">Send</button>
        
        </form>
     </div>
     </div>
   </>
  )
}

export default Contact
