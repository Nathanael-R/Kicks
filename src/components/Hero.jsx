import shoes from "../assets/shoes.png";
const Hero = () => {
  return (
    <main className="h-[100vh] relative w-full md:px-56 py-24 flex">
      <div className="flex items-center justify-between w-full z-10">
        <div className="flex flex-col items-start gap-8 w-[25rem]">
          <h1 className="text-8xl">KICKS ORIGINAL</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore rem
            iure quod sint numquam nobis nulla aut mollitia ipsam vel?
          </p>
          <button className="border-2 font-bold text-2xl border-black px-6 py-2 rounded-full">ORDER</button>
        </div>
        <div className="max-w-[70%]">
          <img src={shoes} alt="shoes" className="h-[32rem] object-cover"/>
        </div>
      </div>
      <div className="w-[35%] h-full absolute bg-black right-0 top-0"></div>
    </main>
  );
};

export default Hero;
