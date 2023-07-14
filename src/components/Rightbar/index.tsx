import TagContainer from "./TagContainer";

const trendingHeading = [
    {
        id: 1,
        title: 'What is Virtual Environment'
    },
    {
        id: 2,
        title: 'What is WebRTC'
    },
    {
        id: 3,
        title: 'What is Socket Programming'
    },
    {
        id: 4,
        title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: 5,
        title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    }
];

const Rightbar = () => {
    const truncateString = (text: string) => {
        if(text.length <= 43) return text;
        return `${text.substring(0,40)}...`
    };

    return (
        <div className="hidden xl:flex flex-col space-y-10 w-[450px] pt-10 pr-10">
            <div className="border-l dark:border-text-dark-lighter/50 px-4 py-1 flex flex-col space-y-2">
                <h1 className="text-lg font-light">Recently Updated</h1>
                <ul className="flex flex-col space-y-1">
                    {trendingHeading.map(item => (
                        <li key={item.id} className="text-sm font-thin">
                            {truncateString(item.title)}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="border-l dark:border-text-dark-lighter/50 px-4 py-1 flex flex-col space-y-2">
                <h1 className="text-lg font-light">Trending Tags</h1>
                <div className=" flex items-center flex-wrap">
                    <TagContainer tag="Python" link="/" />
                    <TagContainer tag="ReactJS" link="/" />
                    <TagContainer tag="NextJS" link="/" />
                    <TagContainer tag="Django Rest Framework" link="/" />
                    <TagContainer tag="Django" link="/" />
                    <TagContainer tag="AWS" link="/" />
                    <TagContainer tag="Cloud" link="/" />
                </div>
            </div>
        </div>
    );
};

export default Rightbar;