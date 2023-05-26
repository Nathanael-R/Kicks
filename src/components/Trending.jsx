import shoeBg from "../assets/shoeBg.png";
import blueShoe from "../assets/blueShoe.png";
import redShoe from "../assets/redShoe.png";
import whiteShoe from "../assets/whiteShoe.png";

const Trending = () => {
  return (
    <section className="relative px-48 flex items-center h-[100vh] justify-between snap-start snap-always">
      <div className="flex items-start h-full gap-4 w-[70%]">
        <div className="bg-white h-[65%] flex flex-col justify-end max-w-[20rem]">
          <img src={blueShoe} alt="" className="h-[18rem] object-cover" />
        </div>
        <div className="bg-black h-[80%] flex flex-col justify-end max-w-[20rem]">
          <img src={redShoe} alt="" className="h-[18rem] object-cover" />
        </div>
        <div className="bg-yellow-400 h-[50%] flex flex-col justify-end max-w-[20rem]">
          <img src={whiteShoe} alt="" className="h-[18rem] object-cover" />
        </div>
      </div>
      <div className="w-[35%] flex flex-col gap-8 items-start">
        <h2 className="text-7xl">Get the X1 set</h2>
        <p className="text-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, ipsum rerum dolore laboriosam eos, cumque accusamus, obcaecati  tempore, quia provident repudiandae id illum.</p>
      <button className="text-3xl font-semibold border-2 bg-black text-white px-4 py-3">Get the set</button>
      </div>
    </section>
  );
};

export default Trending;
