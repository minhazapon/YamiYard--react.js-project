



const Banner = () => {
    return (
        <div className=" mb-10   flex-col md:flex-row lg:flex-row ">


            <div className=" flex-col md:flex-row lg:flex-row bg-cover bg-no-repeat p-52 " 
              style={{
                backgroundImage: "url(  https://img.freepik.com/premium-photo/table-with-turkey-plate-food-it_337384-130293.jpg?w=826  )",
              }}
            
            
            >

              

              <div className=" flex-col md:flex-row lg:flex-row text-white bg-gradient-to-r from-black p-5 ">
                <p className=" text-center text-8xl  font-serif " >Poke Bowls</p>
                <p className=" text-center text-5xl font-serif mt-5">Fresh, Healthy and Tasty</p>
                <div className=" mt-5 flex justify-center">
                    <button className=" btn bg-green-600 text-white">View More</button>
                </div>
              </div>








            </div>
            
        </div>
    );
};

export default Banner;