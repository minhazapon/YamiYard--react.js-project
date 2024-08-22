



const Healthy = () => {
    return (
        <div className=" mt-20 mb-10 ml-5 mr-5 bg-green-100 p-10 ">


            <div className=" flex-col md:flex-row lg:flex-row flex justify-center gap-10 items-center ">


             <div>
               <p className=" text-center text-5xl font-semibold">Healthy and<br></br> tasty</p>
               <p className=" mt-5 text-center">Poké (pronounced “POH-keh”) bowls are healthy, fresh,<br></br> colorful and delicious! Made from wholesome, ethically farmed <br></br>ingredients, they include everything<br></br> from avocado and edamame to mushrooms <br></br>and mango. Diced, sliced, tossed and served with delicate <br></br>sauces, they are a bowl of beauty and freshness in a hectic <br></br>world. Create your own combination based on the foods you<br></br> love, or try one of our in-house classics.</p>
               <div className=" mt-5 flex justify-center">
                 <button className=" btn bg-green-600 text-white">More About Us</button>
               </div>

             </div>


             <div>
                <img className="  rounded-full h-[400px] w-[400px]" src="https://img.freepik.com/premium-photo/delicious-chicken-biryani-wood-board-with-vintage-style-background_146414-166.jpg?w=740" alt="" />
             </div>





            </div>
            
        </div>
    );
};

export default Healthy;