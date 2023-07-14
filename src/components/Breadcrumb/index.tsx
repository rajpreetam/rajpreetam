'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
    const pathname = usePathname();
    const getMenuName = (path: string) => {
        const menu = path.split('/')[1];
        return `${menu.charAt(0).toUpperCase()}${menu.slice(1)}`;
        
    };
    getMenuName('/about');
    return (
        <div className="hidden lg:flex items-center space-x-1">
            {pathname === '/' ? (
                <span className={`mr-1`}>Home</span>
            ): (<Link href='/' className="text-purple-500 mr-1">Home</Link>)}
            <div className={`${pathname==='/' ? 'hidden' : 'flex'} items-center space-x-1`}>
                <span>{'/'}</span>
                <span>{getMenuName(pathname)}</span>
            </div>
        </div>
    );
};

export default Breadcrumb;