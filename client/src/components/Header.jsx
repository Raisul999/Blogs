import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <nav class="flex items-center justify-between flex-wrap bg-slate-900 p-6">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                  
                    <Link to='/'><span class="font-semibold text-xl tracking-tight">Travel Blogs</span></Link>
                </div>
                
               
            </nav>
        </>
    )
}

export default Header
