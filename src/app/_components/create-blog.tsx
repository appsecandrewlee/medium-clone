"use client";

import { api } from "~/trpc/react";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";


type Props = {};


const CreateBlog = (props: Props) => {
  const RefEdit = useRef<HTMLDivElement | null>(null)

  return (
    <main id='main-cont' className= 'max-w-[800px] mx-auto relative font-mono mt-5'>
      <div
        id='main-edit'
        ref={RefEdit}
        className = 'outline-none focus:outline-none main-edit max-w-[800px]'
      >
        hello
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