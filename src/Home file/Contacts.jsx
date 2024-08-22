


const Contacts = () => {
    return (
        <div className=" mb-10 mt-20 ml-5 mr-5">

            <div>

              
              <div>
                <p className=" text-center text-7xl font-serif">Contacts</p>
              </div>


             


             <div className=" flex-col md:flex-row lg:flex-row mt-10 flex justify-center  gap-10 ">




              <div>
                <img className=" h-[300px] w-[300px] rounded-full " src="https://img.freepik.com/free-photo/expensive-restaurant-interior-view-with-colorful-illuminating_114579-1118.jpg?t=st=1724321567~exp=1724325167~hmac=f41c2fc83e911b68a910516e97a1742d11ac927f1407a32d42202239dc251de8&w=740" alt="" />
                <p className=" mt-5 text-xl">Use our contact form for all information requests or contact<br></br> us directly using the contact information below.</p>
                <p className=" mt-5 text-xl">Feel free to get in touch with us via email or phone</p>
              </div>




              

              <div>


              <p className=" font-serif text-4xl">Sign up for the newsletter</p>

              <p className=" mt-5 font-serif text-2xl text-slate-400">Want to be the first to read our news? Subscribe to the<br></br> newsletter to keep abreast of all events.</p>


               <div className=" flex items-center mt-5">

                 <input className=" bg-slate-200 p-2 h-[50px] w-[400px]" placeholder="Enter Your Valid Message" type="email" name="" id="" />
                 <button className=" text-white -ml-3 btn bg-green-500 h-[50px]">Submit</button>

               </div>




              </div>












             </div>








            </div>
            
        </div>
    );
};

export default Contacts;