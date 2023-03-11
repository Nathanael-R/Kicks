import shoeBg from '../assets/shoeBg.png'
import blueShoe from '../assets/blueShoe.png'
import redShoe from '../assets/redShoe.png'
import whiteShoe from '../assets/whiteShoe.png'

const Trending = () => {
  return (
    <section className='px-[15%] py-20 relative hidden'>
      <h2 className='text-6xl mb-16'>Trending Shoes</h2>
      <div className="flex justify-center">
        <div className="rounded">
            <img src={shoeBg} alt=""/>
        </div>
        <div className="z-20 -ml-20 flex flex-col justify-between py-8">
          <div className="">
            <h3 className='text-6xl font-bold mb-10'>NIKE AIR ZOOM</h3>
            <p className='w-[80%] mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore neque dolorum, inventore voluptatum perferendis velit. lorem1</p>
            <button className='w-36 border-2 bg-white py-3 rounded-full dark:bg-[#191818] font-bold'>GET IT</button>
          </div>
          <div className="flex gap-10">
            <img src={redShoe} alt=""  className='w-[20%] cursor-pointer'/>
            <img src={whiteShoe} alt=""  className='w-[20%] cursor-pointer'/>
            <img src={blueShoe} alt=""  className='w-[20%] cursor-pointer'/>
          </div>
        </div>
      </div>
    <p className='absolute top-0 right-0 text-[25rem] -rotate-90  -mt-60 text-[#191818] font-bold'>KIC<span className='text-[#F0ECEC]'>KS</span></p>
    </section>
  );
};

export default Trending;
