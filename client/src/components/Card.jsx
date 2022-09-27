import moment from "moment";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Card = ({ blog }) => {
    const navigate = useNavigate()
    const [date, setDate] = useState(new Date(Number(blog.created_at)))
    const toUpdateBlog=()=>{
        navigate(`/editBlog/${blog.id}`)
    }

    return (
        <div>
            <div className='flex justify-center m-8'>
                <div className="p-6 max-w-sm w-full lg:max-w-3xl lg:flex-col border border-gray-200 shadow-md bg-gray-50">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-black">{blog.title}</h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.description}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{moment(new Date(Number(blog.created_at))).format('MMMM DD YYYY HH:mm')}</p>
                   

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                      onClick={toUpdateBlog}
                    >
                        Update
                    </button>
                </div>




            </div>
        </div>
    )
}

export default Card
