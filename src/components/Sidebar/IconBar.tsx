import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
import { IconButton } from "../ui/IconButton";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const IconBar = () => {
    return (
        <div className="flex items-center justify-between">
            <Link href='https://github.com/iitianpreetam' target="_blank">
                <IconButton
                    icon={<FaGithub className="h-5 w-5" /> }
                />
            </Link>
            <Link href='https://www.linkedin.com/in/iitianpreetam/' target="_blank">
                <IconButton
                    icon={<FaLinkedinIn className="h-5 w-5" /> }
                />
            </Link>
            <Link href='mailto:dev.preetamraj@gmail.com' target="_blank">
                <IconButton
                    icon={<FaEnvelope className="h-5 w-5" /> }
                />
            </Link>
            <ThemeToggler />
        </div>
    );
};

export default IconBar;