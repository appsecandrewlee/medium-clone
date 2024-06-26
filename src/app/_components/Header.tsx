import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

//right now there isn't much use for the prop but is also non-null
//we will change this later 
type Props = object;


export const Header = (props: Props) => {
    return (
        <div className='px-8 py-2 border-b-[1px]'>
            <div className='flex items-center space-x-3'>
                <Link href="/">
                <Image src="/medium.png" width={100} height={100}alt="">   
                </Image>
                </Link>
            </div>
        </div>
    )
    
}
