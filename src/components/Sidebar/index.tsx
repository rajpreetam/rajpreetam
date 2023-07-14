import Image from "next/image";
import IconBar from "./IconBar";
import { FunctionComponent } from "react";
import SideBarMenu from "./SideBarMenu";

type Props = {
    menuClicked: boolean;
};

const SideBar: FunctionComponent<Props> = ({menuClicked}) => {
    return (
        <div className={`${menuClicked ? 'flex' : 'hidden'} lg:flex flex-col justify-between w-[300px] lg:w-[350px] h-screen bg-bg-card-light dark:bg-bg-card-dark py-16 px-12 lg:p-16`}>
            <div className="flex flex-col space-y-1">
                {/* <Image
                    src='https://res.cloudinary.com/dxgl4eyhq/image/upload/v1687987306/portfolio/me/preetam_ha8a2h.jpg'
                    alt="Preetam Raj"
                    width={500}
                    height={500}
                /> */}
                <img
                    src="https://res.cloudinary.com/dxgl4eyhq/image/upload/v1687987306/portfolio/me/preetam_ha8a2h.jpg"
                    alt="Preetam Raj"
                    className="h-32 w-32 border rounded-full"
                />
                <h1 className="text-2xl sm:text-3xl font-semibold sm:font-bold">Preetam Raj</h1>
                <h2 className="font-light text-text-light-lighter dark:text-text-dark-lighter">Graduated, IIT Mandi</h2>
                <SideBarMenu />
            </div>
            <IconBar />
        </div>
    );
};

export default SideBar;