


const Three = () => {
    return (
        <div className=" mb-10 mt-10 ml-5 mr-5 bg-no-repeat bg-cover  p-48 text-white bg-fixed " 
        
        style={{
            backgroundImage: "url( https://img.freepik.com/free-photo/cutlery-pot-near-twig_23-2147811215.jpg?t=st=1724319102~exp=1724322702~hmac=f4fceccb9aceee9b0591185e301236eb05225e355be30fb8cf11a309ee2e6050&w=740)",
          }}
        
        
        
        >

            <div className=" flex justify-center">

                <div className=" grid  md:grid-cols-3 gap-32 ">

                    <div>
                        <div className=" flex justify-center">
                        <img className=" bg-green-500 p-3 rounded-full h-[100px]" src="https://assets.nicepagecdn.com/11a8ddce/3790620/images/0a1708c5.png" alt="" />
                        </div>
                        <p className=" mt-5 text-3xl font-semibold  text-center">since 2009</p>
                    </div>


                    <div>
                        <div className=" flex justify-center">
                        <img className=" bg-green-500 p-3 rounded-full h-[100px]" src="https://assets.nicepagecdn.com/11a8ddce/3790620/images/0a284544.png" alt="" />
                        </div>
                        <p className=" mt-5 text-3xl font-semibold  text-center">5 restaurants</p>
                    </div>


                    <div>
                        <div className=" flex justify-center">
                        <img className=" bg-green-500 p-3 rounded-full h-[100px]" src="https://assets.nicepagecdn.com/11a8ddce/3790620/images/e9dbe8ea.png" alt="" />
                        </div>
                        <p className=" mt-5 text-3xl font-semibold  text-center">+40 followers</p>
                    </div>



                </div>



            </div>
            
        </div>
    );
};

export default Three;