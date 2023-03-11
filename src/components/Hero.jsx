import shoes from "../assets/shoes.png";
const Hero = () => {
  return (
    <main className="h-[100vh] relative w-full md:px-[15%] py-24 hidden">
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
        <button className="w-[200px] rounded-full py-3 border-2 border-black text-2xl dark:border-zinc-50/70">
          Get it
        </button>
      </div>
      <div className="bg-[#191818] h-full w-[40%] absolute right-0 top-0">
        
      </div>
      <div className="absolute right-0 top-0 pt-60 pr-72 z-10">
        <img src={shoes} alt="" className="object-cover"/>
      </div>
    </main>
  );
};

export default Hero;
