"use client";

import { api } from "~/trpc/react";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Braces, Code, FileImage, ImageIcon, Images, ImagesIcon, Plus } from "lucide-react";


type Props = object;


const CreateBlog = (props: Props) => {
  const RefEdit = useRef<HTMLDivElement | null>(null)
  const [Open, setOpen] = useState<boolean>(false)

  return (
    <main id='main-cont' className= 'max-w-[800px] mx-auto relative font-mono mt-5'>
      <div
        id='main-edit'
        ref={RefEdit}
        className = 'outline-none focus:outline-none main-edit max-w-[800px]'
        contentEditable
        suppressContentEditableWarning
      >
        <div>
          <div className='z-10' >
            <button onClick={() => setOpen(!Open)} id='addCircle' className='border-[1px] border-neutral-500 p-1 rounded-full inline-block'>
                <Plus className={`duration-300 ease-linear ${Open ? "rotate-90":""}`}/>
            </button>
            <div id='tool' className={`flex items-center space-x-4 absolute top-0 left-14 ${Open ? "visible": "invisible"}`}>
            <span className= {`border-[2px] border-green-500 rounded-full block p-[6px]'${Open? "scale-100 visible":"scale-0 invisible"} ease-linear duration-100 `}>
                <FileImage size={32} className='opacity-60  text-orange-800'>
                  <input 
                  type='file'
                  accept='image/*'
                  style={{display:'none'}}>
                  </input>
                </FileImage>
              </span>
              <span className= {`border-[2px] border-green-500 rounded-full block p-[6px]'${Open? "scale-100 visible":"scale-0 invisible"} ease-linear duration-100 `}>
                <Code size={32} className='opacity-60  text-orange-800'>
                </Code>
          
              </span>
              <span className= {`border-[2px] border-green-500 rounded-full block p-[6px]'${Open? "scale-100 visible":"scale-0 invisible"} ease-linear duration-100 `}>
              <Braces size={32} className='opacity-60  text-orange-800'>
                </Braces>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default CreateBlog






// export function CreateBlog() {
//   const router = useRouter();
//   const [title, setTitle] = useState("");
//   const [image, setImage] = useState("");
//   const [description, setDescription] = useState("");

//   const createBlog = api.blog.create.useMutation({
//     onSuccess: () => {
//       router.refresh();
//       setTitle("");
//       setDescription("");
//       setImage("");
//     },
//   });

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         createBlog.mutate({
//           title,
//           description,
//           image,
//         });
//       }}
//       className="flex flex-col gap-2"
//     >
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         className="w-full rounded-full px-4 py-2 text-black"
//       />
//       <input
//         type="text"
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         className="w-full rounded-full px-4 py-2 text-black"
//       />
//       <input
//         type="text"
//         placeholder="Image"
//         value={image}
//         onChange={(e) => setImage(e.target.value)}
//         className="w-full rounded-full px-4 py-2 text-black"
//       />
//       <button
//         type="submit"
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
//         disabled={createBlog.isPending}
//       >
//         {createBlog.isPending ? "Submitting..." : "Submit"}
//       </button>
//     </form>
//   );
// }