import Card from "../components/Card"
import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "../queries/queries";
import { useNavigate } from "react-router-dom";
const Blogs = () => {

  const navigate = useNavigate()

  const { data, error, loading } = useQuery(GET_BLOGS)

  if (loading) {
    return <h3 className="text-center ">...Loading</h3>
  }
  if (error) {
    return <p>Something Went Wrong</p>
  }

  const toAddBlog=()=>{
    console.log('navigate')
    navigate('/addBlog')
  }

  // console.log(data.blogs)
  return (
    <>
      <div className="mb-40">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded float-right m-4"
         onClick={toAddBlog}
        >
          Add Blog
        </button>
      </div>

      {data.blogs.length > 0 ? <div>
        {
          data.blogs.map((blog) => (
            <Card key={blog.id} blog={blog} />
          ))
        }

      </div> : <div className="text-center">No Blogs</div>}
    </>
  )
}

export default Blogs
