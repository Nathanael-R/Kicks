import {FaArrowDown} from 'react-icons/fa'
import coloured from '../assets/colourful.png'
const Faq = () => {
  return (
    <section className="px-[10%] min-h-[100vh] flex justify-center items-center"> 
        <div className="flex shadow-[2px_2px_20px_2px_grey] rounded flex-wrap">
            <div className="sm:flex hidden w-[50%]">
                <img src={coloured} alt="" className='object-cover'/>
            </div>
            <div className="bg-white flex flex-col p-4 lg:p-12 justify-evenly dark:bg-[#191818] w-[50%]">
                <div className="px-10 border-2 py-5 flex items-center gap-6 cursor-pointer text-2xl font-semibold dark:bg-inherit"><p>Lorem ipsum dolor sit amet consectetur</p><FaArrowDown/></div>
                <div className="px-10 border-2 py-5 flex items-center gap-6 cursor-pointer text-2xl font-semibold dark:bg-inherit"><p>Lorem ipsum dolor sit amet consectetur</p><FaArrowDown/></div>
                <div className="px-10 border-2 py-5 flex items-center gap-6 cursor-pointer text-2xl font-semibold dark:bg-inherit"><p>Lorem ipsum dolor sit amet consectetur</p><FaArrowDown/></div>
                <div className="px-10 border-2 py-5 flex items-center gap-6 cursor-pointer text-2xl font-semibold dark:bg-inherit"><p>Lorem ipsum dolor sit amet consectetur</p><FaArrowDown/></div>
                <div className="px-10 border-2 py-5 flex items-center gap-6 cursor-pointer text-2xl font-semibold dark:bg-inherit"><p>Lorem ipsum dolor sit amet consectetur</p><FaArrowDown/></div>
            </div>
        </div>
    </section>
  )
}

export default Faq