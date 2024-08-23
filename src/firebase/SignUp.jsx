import { useContext } from "react";
import { fireContext } from "./AuthContext";




const SignUp = () => {

    const {CreateUsr} = useContext(fireContext)


    const handleUp = e => {
      
		e.preventDefault()
		const email = e.target.email.value
		const password = e.target.password.value
		console.log(email, password)

		CreateUsr( email, password)
		.then( result => {
			console.log(result.user)
		})
		.catch(error => {
			console.error(error)
		})



	 }




    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">

        <div className=" flex justify-center">
   

         <div className=" animate__animated   animate__flip animate__repeat-2 w-full max-w-md p-8 space-y-3 rounded-xl  bg-gradient-to-r from-green-500 to-orange-500 text-gray-100">

           
           <div className=" flex justify-center items-center gap-5">
           
           <h1 className="text-4xl  font-serif text-center">Sign Up</h1>
           
           </div>
           
           
           
           <form onSubmit={handleUp} className="space-y-6">
               
               <div className="space-y-1 text-sm">
                   <label htmlFor="username" className="block text-gray-400">Email</label>
                   <input  placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:border-violet-400" type="email" name="email" id="" />
               </div>
           
               <div className="space-y-1 text-sm">
                   <label htmlFor="password" className="block text-gray-400">Password</label>
                   <input  type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:border-violet-400" />
               </div>
               
               <input  className="block w-full p-3 text-center rounded-sm text-gray-900 bg-white btn  " type="submit" value="Sign Up" />
           </form>
           </div>
           </div>
           
                   </div>
    );
};

export default SignUp;