import {appleImg, bagImg, searchImg} from "../utils/index"
import {navLists} from "../constants/index"
const Navbar = () => {
  return (
    // w-full matlab takes full width of the screen
 <header className="w-full py-5 sm:px-10 px-5  flex justify-between items-center">
    <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="apple" height={18} width={14} />





        <div className="flex flex-1 justify-center max-sm:hidden">
            {navLists.map((nav)=>(  
                // ['phones', 'mackbooks','tablets'] insted of this we used navlists which was predefined in constants
                <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">{nav}</div>
            ))}
        </div>





            <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 ">
                <img src={searchImg} alt="search" width={18} height={18} />
                <img src={bagImg} alt="bag" width={18} height={18} />
            </div>
            
               
            

    </nav>
 </header>
  )
}

export default Navbar
