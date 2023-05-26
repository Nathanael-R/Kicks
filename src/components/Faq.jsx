import {FaArrowDown} from 'react-icons/fa'
import coloured from '../assets/colourful.png'
const Faq = () => {
  
  return (
    <section className="px-[10%] h-[100vh] flex justify-center items-center snap-start snap-always"> 
        <div className="flex shadow-[2px_2px_20px_2px_grey] rounded flex-wrap">
            <div className="md:flex hidden w-[50%]">
                <img src={coloured} alt="" className='object-cover'/>
            </div>
            <div className="bg-white flex flex-col p-4 lg:p-12 justify-evenly dark:bg-[#191818] md:w-[50%]">
                <div className="px-10 border-2 py-5 flex items-center gap-6 cursor-pointer text-xl font-semibold dark:bg-inherit"><p>Lorem ipsum dolor sit amet consectetur</p><FaArrowDown/></div>
                <div className="px-10 border-2 py-5 flex items-center gap-6 cursor-pointer text-xl font-semibold dark:bg-inherit"><p>Lorem ipsum dolor sit amet consectetur</p><FaArrowDown/></div>
                <div className="px-10 border-2 py-5 flex items-center gap-6 cursor-pointer text-xl font-semibold dark:bg-inherit"><p>Lorem ipsum dolor sit amet consectetur</p><FaArrowDown/></div>
                <div className="px-10 border-2 py-5 flex items-center gap-6 cursor-pointer text-xl font-semibold dark:bg-inherit"><p>Lorem ipsum dolor sit amet consectetur</p><FaArrowDown/></div>
                <div className="px-10 border-2 py-5 flex items-center gap-6 cursor-pointer text-xl font-semibold dark:bg-inherit"><p>Lorem ipsum dolor sit amet consectetur</p><FaArrowDown/></div>
            </div>
        </div>
    </section>
  )
}

export default Faq