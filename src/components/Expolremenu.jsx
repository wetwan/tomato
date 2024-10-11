/* eslint-disable react/prop-types */
import { menu_list } from '../assets/assets'

      const Expolremenu = ({setCategory , category}) => {
  return (
    <section className='flex flex-col gap-5 scroll-smooth scroll-mt-60 ' id='explore-memu'>
        <h1 className=" text-[#272727] font-medium "> Explore our menu</h1>
        <p className="text-[#898989] md:max-w-[60%] max-w-full "> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto aliquid quo soluta perspiciatis! Nam eaque quo iure sed odit voluptatibus!</p>
        <div className=" flex justify-between items-center gap-8 text-center my-5 mx-0 overflow-x-scroll scrollbar-hide">
            {menu_list.map((menu, i) =>(
                <div
                     key={i} 
                     onClick={()=> setCategory(prev => prev === menu.menu_name ? 'All' :menu.menu_name  )}
                     className="  cursor-pointer ">
                    <div className="w-[75.vw] min-w-[80px] cursor-pointer rounded-full duration-[0.6s] ">
                    <img 
                        className={category === menu.menu_name ? 'food-active' : ''}
                        src={menu.menu_image} 
                        alt="food image" 
                        />

                    </div>
                    <p className="mt-3 text-[#757575] p-name  ">
                            {menu.menu_name}
                        </p>
                </div>
            ))}
        </div>
        <hr className='my-3 mx-0 p-0.5 bg-[#e3e3e3] rounded-full' />
    </section>
  )
}

export default Expolremenu