import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {}


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
