/* eslint-disable */


"use client";
import {createRoot} from "react-dom/client";
import { api } from "~/trpc/react";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Braces, Code, FileImage, ImageIcon, Images, ImagesIcon, Plus, Upload } from "lucide-react";
import MediumEditor from "medium-editor";
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import "../../styles/blogs.css";
import { register } from "module";



type Props = object;




const PutImage = ({ImageString, file}: {ImageString: string, file: File}) => {
  const [currentImageString, setCurrentImageString] = useState<string>(ImageString)
  return (
    <div className='py-3'>
      <div>
        <img src= {currentImageString} alt="Image Upload Test"
        className= 'max-w-full h-full'/>
        <div className= 'text-center text-sm max-w-md mx-auto'>
          <p p-blog-title= 'Caption'>
          </p>
        </div>
      </div>
      <p p-blog-title='Image Title'></p>
    </div>
  )
}

const CreateBlog = (props: Props) => {

  //TRPC mutation and upload function 
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

 
  

  const uploadBlog = api.blog.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setTitle("");
      setDescription("");
      setImage("");
    },
  });
////////////////////////////////////////////////////////

 


//FORMS 
///////////////////////////////////////////////////////
  const RefEdit = useRef<HTMLDivElement | null>(null)
  const [Open, setOpen] = useState<boolean>(false)
  const [ButtonPos, setButtonPos] = useState<{top:number, left:number}>({top: 0, left: 0})
  const inputImage = useRef<HTMLInputElement| null>(null)

  const InsertImageFile = () => {
    inputImage.current?.click()
  }


  const ImageHandler = (event: React.ChangeEvent<HTMLInputElement>) => { 
    const file = event.target.files?.[0]
    if (file){
      setOpen(false)

      const localImageString = URL.createObjectURL(file)
      const ImageComp = <PutImage ImageString={localImageString} file={file}/>
      const tryWrap = document.createElement('div')
      const root = createRoot(tryWrap)
      root.render(ImageComp)
      setImage(localImageString);

      RefEdit.current?.appendChild(tryWrap)
    }
  }


  const getPosition = () => {
    let x = 0; 
    let y = 0; 

    const checkWindowSelection = typeof window.getSelection !== 'undefined'
    
    if (checkWindowSelection){
      const selection = window.getSelection() as Selection

      if (selection.rangeCount > 0){
          const check = selection.getRangeAt(0).cloneRange()
          const rect = check.getClientRects()[0]
          if(rect){
            x = rect.left + window.screenX
            y = rect.top + window.scrollY - 40
          }
      }
    }

    return {x,y}
  }
  
  useEffect(() => {

    const handleInput = () => {
    const {y} = getPosition()
    setButtonPos({top:y, left: -50})
    }
    RefEdit.current?.addEventListener('input', handleInput)
  },[])


  //state management for handling input data dynamically
  useEffect(() => {
  const handleTitleInput = () => {
    setTitle(RefEdit.current?.querySelector('[h1-blog-title="Title"]')?.textContent || "");
  };

  const handleDescriptionInput = () => {
    setDescription(RefEdit.current?.querySelector('[p-blog-title="Tell your story..."]')?.textContent || "");
  };

  RefEdit.current?.addEventListener("input", handleTitleInput);
  RefEdit.current?.addEventListener("input", handleDescriptionInput);

  return () => {
    RefEdit.current?.removeEventListener("input", handleTitleInput);
    RefEdit.current?.removeEventListener("input", handleDescriptionInput);
  };
}, []);

  return (
    <main id='main-cont' className='max-w-[800px] mx-auto relative font-mono mt-5'>
      
      <div
        id='main-edit'
        ref={RefEdit}
        className = 'outline-none focus:outline-none main-edit max-w-[800px] prose'
        contentEditable
        suppressContentEditableWarning
        style={{whiteSpace:'pre-line'}}
      >
        <div>
        <h1
            className="font-medium"
            h1-blog-title="Title"
          >
          </h1>

          <p p-blog-title="Tell your story..."></p>
        </div>
        <div>
          <div className={`z-10 ${ButtonPos.top === 0 ? "hidden":""}`} style={{position: "absolute", top:ButtonPos.top,left:ButtonPos.left}} >
            <button onClick={() => setOpen(!Open)} id='addCircle' className='border-[1px] border-neutral-500 p-1 rounded-full inline-block'>
                <Plus className={`duration-300 ease-linear ${Open ? "rotate-90":""}`}/>
            </button>
            <div id='tool' className={`flex items-center space-x-4 absolute top-0 left-14 ${Open ? "visible": "invisible"}`}>
            <span onClick={InsertImageFile} className= {`border-[2px] border-green-500 rounded-full block p-[6px]'${Open? "scale-100 visible":"scale-0 invisible"} ease-linear duration-100 delay-100 bg-white cursor-pointer`}>
                <FileImage size={32} className='opacity-60  text-orange-800'/>
                  <input 
                  type='file'
                  accept='image/*'
                  style={{display:'none'}}
                  ref = {inputImage}
                  onChange={ImageHandler}/>        
              </span>
              <span className= {`border-[2px] border-green-500 rounded-full block p-[6px]'${Open? "scale-100 visible":"scale-0 invisible"} ease-linear duration-100 delay-150 bg-white`}>
                <Code size={32} className='opacity-60  text-orange-800'>
                </Code>
              </span>
              <span className= {`border-[2px] border-green-500 rounded-full block p-[6px]'${Open? "scale-100 visible":"scale-0 invisible"} ease-linear duration-100 delay-175 bg-white`}>
              <Braces size={32} className='opacity-60  text-orange-800'>
                </Braces>
              </span>
            </div>
          </div>
         
        </div>
      </div>
      <button
        onClick={() => {
          uploadBlog.mutate({
            title,
            description,
            image,
          });
        }}
        className='rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20 mt-5'
      >
        Publish
      </button>
    </main>
  )
}
export default CreateBlog














////////////////////////REFERENCE BOILERPLATE ///////////////////////////////////REFERENCE BOILERPLATE ///////////

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

////////////////////////REFERENCE BOILERPLATE ///////////////////////////////////REFERENCE BOILERPLATE ///////////

