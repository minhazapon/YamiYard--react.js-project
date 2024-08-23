


const Have = () => {
    return (
        <div className=" mb-10 mt-10 ml-5 mr-5">

            <div>

              <div>

                <p className=" text-center text-6xl font-semibold">Have any questions</p>
                <p className=" text-center text-2xl mt-5">Want to know about any of our ingredients or suppliers? Or maybe you just want to say<br></br> Aloha? Send us a message below and we'll get right back to you.</p>

              </div>
             
            {/* ---------------------------------------------------- */}
             


             <div className=" flex justify-center mt-10">
               
               <div className=" grid  md:grid-cols-2 gap-5">

                <div>
                    <p className=" text-xl mb-1">Email</p>
                    <input placeholder="Enter Your Email" className=" p-2 h-[50px] w-[400px] bg-slate-200" type="email" name="" id="" />
                </div>


                <div>
                    <p className=" text-xl mb-1">Name</p>
                    <input placeholder="Enter Your Name" className=" p-2 h-[50px] w-[400px] bg-slate-200" type="text" name="" id="" />
                </div>


               </div>

             </div>


             {/* ------------------------- */}
              
              <div className=" flex justify-center">
                <div className=" grid  md:grid-cols-1">

                <div className=" ">
                    <p className=" text-xl mb-1">Message</p>
                    <textarea placeholder="Enter Your Message" className=" p-2 h-[200px] w-[820px] bg-slate-200" name="" id=""></textarea>
                    
                </div>

                </div>
              </div>
              
              <div className=" flex justify-center">
                <button className=" mt-5 btn bg-green-600 w-[200px] text-white">Submit</button>
              </div>



            </div>
            
        </div>
    );
};

export default Have;