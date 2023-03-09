import shoes from "../assets/shoes.png";
const Hero = () => {
  return (
    <main className="h-[90vh] relative w-full md:px-[17rem]">
      <div className="h-full w-[60%] flex flex-col py-28 items-start gap-14">
        <h1 className="text-8xl">
          KICKS <br />
          ORIGINAL
        </h1>
        <p className="w-[500px] text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          odio esse tempora cumque laboriosam rerum vero suscipit sunt
          repellendus pariatur?
        </p>
        <button className="w-[200px] rounded-full py-3 border-2 border-black text-2xl">
          Get it
        </button>
      </div>
      <div className="bg-black h-full w-[40%] absolute right-0 top-0">
        
      </div>
      <div className="absolute right-0 top-0 py-20 pr-60">
        <img src={shoes} alt="" srcset="" className="h-[600px] object-cover"/>
      </div>
    </main>
  );
};

export default Hero;
