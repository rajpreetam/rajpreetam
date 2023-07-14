import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchBox = () => {
    return (
        <div className="flex items-center space-x-2 bg-gray-200/70 dark:bg-bg-card-dark p-2 rounded-full cursor-pointer">
            <HiMagnifyingGlass className="h-6 w-6" />
            <input type="text" placeholder="Search..." className="bg-transparent outline-none flex-1 hidden lg:block"/>
        </div>
    );
};

export default SearchBox;