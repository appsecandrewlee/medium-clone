import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {Search} from "lucide-react"
import { SquarePenIcon } from 'lucide-react';
import { Bell } from 'lucide-react';

//right now there isn't much use for the prop but is also non-null
//we will change this later 
type Props = object;


export const Header = (props: Props) => {
    return (
        <div className='px-2 py-1 border-b-[1px]'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                    <Link href="/">
                        <Image src="/medium.png" width={175} height={175}alt="">   
                        </Image>
                    </Link>
                    <div className='flex items-center bg-gray-100 rounded-full px-3'>
                        <Search size={20} className='opacity-50'/>
                        <input type="text" placeholder='Search'className='focus:outline-none px-3 py-2.5 placeholder:text-sm text-sm bg-gray-100'/>
                    </div>
                </div>
                <div className="flex items-center space-x-7">
                    <Link href={'/'}>
                        <span className='flex items-center space-x-2 opacity-70 hover:opacity-100 duration-100 ease-in cursor-pointer'>
                            <SquarePenIcon size={25}/>
                            <p className='font-light text-sm'>
                                Write
                            </p>
                        </span>
                    </Link>
                    <Link href={'/'}>
                        <span className='flex items-center space-x-2 opacity-70 hover:opacity-100 duration-100 ease-in cursor-pointer'>
                            <Bell size={25}/>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
