import { HiBars3 } from "react-icons/hi2";
import SearchBox from "./SearchBox";
import { FunctionComponent } from "react";
import Breadcrumb from "../Breadcrumb";

type Props = {
    menuClicked: boolean;
    setMenuClicked: (value: boolean) => void;
};

const Navbar: FunctionComponent<Props> = ({menuClicked, setMenuClicked}) => {
    return (
        <div className="sticky top-0 flex items-center w-screen sm:w-auto justify-between px-4 sm:px-10 lg:px-16 py-4 border-b dark:border-text-dark-lighter/50 backdrop-blur-lg">
            <HiBars3
                className="h-6 w-6 cursor-pointer block lg:hidden"
                onClick={() => setMenuClicked(true)}
            />
            <Breadcrumb />
            <span className="block lg:hidden">Post</span>
            <SearchBox />
        </div>
    );
};

export default Navbar;