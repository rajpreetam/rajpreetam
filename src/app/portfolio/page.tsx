import PortfolioCard from "./PortfolioCard";

const PortfolioPage = () => {
    return (
        <div className='min-h-[calc(100vh-182px)] w-[calc(100vw-32px)] sm:w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
            <PortfolioCard
                imgUrl="https://res.cloudinary.com/dxgl4eyhq/image/upload/v1689107780/portfolio/me/hulu_zlr1k7.png"
                title="Hulu Clone"
            />
            <PortfolioCard
                imgUrl="https://res.cloudinary.com/dxgl4eyhq/image/upload/v1689107885/portfolio/me/tweetbook_qfprxy.png"
                title="Tweetbook"
            />
            <PortfolioCard
                imgUrl="https://res.cloudinary.com/dxgl4eyhq/image/upload/v1689108658/portfolio/me/baazarnow_nm8qyn.png"
                title="Baazarnow"
            />
            <PortfolioCard
                imgUrl="https://res.cloudinary.com/dxgl4eyhq/image/upload/v1689104203/portfolio/me/vscode_roysxu.png"
                title="Code Together"
            />
            <PortfolioCard
                imgUrl="https://res.cloudinary.com/dxgl4eyhq/image/upload/v1689104203/portfolio/me/school_te8msc.jpg"
                title="SMS: School Management System"
            />
        </div>
    );
};

export default PortfolioPage;