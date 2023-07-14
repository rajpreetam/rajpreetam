'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";
import {
    HiHome,
    HiInformationCircle,
    HiShare,
    HiPhone,
    HiBars3CenterLeft,
    HiTag
} from 'react-icons/hi2';

type Props = {
    name: string;
    link: string;
};

const iconProvider = (link: string, pathName: string) => {
    const menuClass = `h-5 w-5 text-text-light-lighter dark:text-text-dark-lighter group-hover:text-text-light group-hover:dark:text-text-dark ${pathName===link ? 'text-black dark:text-white' : ''}`;

    switch(link) {
        case '/':
            return <HiHome className={menuClass} />;

        case '/about':
            return <HiInformationCircle className={menuClass} />;
        
        case '/portfolio':
            return <HiShare className={menuClass} />;
        
        case '/contact':
            return <HiPhone className={menuClass} />;
        
        case '/categories':
            return <HiBars3CenterLeft className={menuClass} />;
        
        case '/tags':
            return <HiTag className={menuClass} />;
        default:
            return null;
    };
};

const MenuItem: FunctionComponent<Props> = ({name, link}) => {
    const pathName = usePathname();
    return (
        <Link href={link} className={`group flex items-center space-x-4 cursor-pointer ${pathName===link ? 'border-r border-black dark:border-white' : ''} hover:border-r border-text-light dark:border-text-dark`}>
            <div className="">
                {iconProvider(link, pathName)}
            </div>
            <span  className={`text-text-light-lighter dark:text-text-dark-lighter ${pathName === link ? 'text-black dark:text-white' : ''} group-hover:text-text-light group-hover:dark:text-text-dark`}>
                {name}
            </span>
        </Link>
    );
};

export default MenuItem;