import CreateBlog from "~/app/_components/create-post";


const page = ({params}: {params: {blogId: string } }) => {
    console.log(params.blogId)
    return (
        <div className='max-w-[1000px] mx-auto'> 
            <CreateBlog/>
        </div>
    )
}
export default page 