'use client';

import { ThemeProvider } from "next-themes";
import { FunctionComponent, ReactNode, useEffect, useRef, useState } from "react";
import SideBar from "../Sidebar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Rightbar from "../Rightbar";

export interface LayoutProps {
    children: ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({children}) => {
    const [menuClicked, setMenuClicked] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if(divRef.current && divRef.current.contains(e.target as Node)) setMenuClicked(false);
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <ThemeProvider attribute="class">
            <div className='flex'>
                <SideBar menuClicked={menuClicked} />
                <div className='relative flex-1 overflow-x-hidden h-screen overflow-y-auto' ref={divRef}>
                    <Navbar menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
                    <div className="flex">
                        <div className='px-4 sm:px-10 lg:px-16 pt-10 pb-4 w-screen sm:w-full h-[calc(100vh-126px)] overflow-y-auto scrollbar-hide'>
                            {children}
                        </div>
                        <Rightbar />
                    </div>
                    <Footer />
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Layout;