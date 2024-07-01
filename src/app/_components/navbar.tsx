import { Bell, SquarePenIcon } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

const NavigationBar = () => {
    return (
        <div className='px-2 py-1 border-b-[1px]'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                    <Link href="/">
                        <Image src="/medium.png" width={175} height={175} alt="Medium Logo" />
                    </Link>
                </div>
                <div className="flex items-center space-x-7">
                    <Link href='/'>
                        <span className='flex items-center space-x-2 opacity-70 hover:opacity-100 duration-100 ease-in cursor-pointer'>
                            <Bell size={25}/>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;
