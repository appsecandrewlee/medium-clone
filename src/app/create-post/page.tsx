import CreateBlog from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";


const page = ({params}: {params: {blogId: string } }) => {
    console.log(params.blogId)
    return (
        <div className='max-w-[1000px] mx-auto'> 
            <CreateBlog/>
        </div>
    )
}
export default page 