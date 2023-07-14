'use client';

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaRegLightbulb } from "react-icons/fa";
import { IconButton } from "../ui/IconButton";


const ThemeToggler = () => {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme();
    
    useEffect(() => {
        setMounted(true)
    }, []);

    if(!mounted) {
        return null;
    };

    return (
        <div>
            {theme==='dark' && (
                <IconButton
                    icon={<FaRegLightbulb className="h-6 w-6 cursor-pointer dark:text-text-dark-lighter hover:dark:text-text-dark transition ease-in delay-100 text-text-light-lighter hover:text-text-light" />}
                    onClick={() => setTheme('light')}
                />
            )}
            {theme==='light' && (
                <IconButton
                    icon={<FaMoon className="h-6 w-6 cursor-pointer dark:text-text-dark-lighter hover:dark:text-text-dark transition ease-in delay-100 text-text-light-lighter hover:text-text-light" />}
                    onClick={() => setTheme('dark')}
                />
            )}
        </div>
    );
};

export default ThemeToggler;