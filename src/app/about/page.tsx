import Link from "next/link";

const AboutPage = () => {
    return (
        <div className='min-h-[calc(100vh-182px)] w-[calc(100vw-32px)] sm:w-full flex flex-col space-y-4'>
            <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold tracking-wide">Who Am I?</h1>
                    <button className="text-purple-500 text-2xl underline underline-offset-4">Resume</button>
                </div>
                <p className="font-light tracking-wider text-justify">Hi, my name is <span className="font-semibold text-purple-500">Preetam Raj</span>. I am from Patna, Bihar. I am graduated from IIT Mandi with major in Mechanical Engineering and minor in Computer Science and Engineering. I am very much enthusiastic in web and app development and did many <Link href='/portfolio'>projects</Link> in various web/app dev tech stack.</p>
            </div>
            <div className="flex flex-col space-y-2">
                <h1 className="text-2xl font-semibold tracking-wide">Skills</h1>
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                        <h1 className="underline underline-offset-4">Languages:</h1>
                        <div className="flex flex-wrap items-center">
                            <span className="font-light mr-4">Python</span>
                            <span className="font-light mr-4">C++</span>
                            <span className="font-light mr-4">Javascript</span>
                            <span className="font-light">Java</span>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h1 className="underline underline-offset-4">Frameworks/Web/App Technologies:</h1>
                        <div className="flex flex-wrap items-center">
                            <span className="font-light mr-4">Django</span>
                            <span className="font-light mr-4">Django Rest Framework</span>
                            <span className="font-light mr-4">FastAPI</span>
                            <span className="font-light mr-4">ReactJS</span>
                            <span className="font-light mr-4">NextJS</span>
                            <span className="font-light mr-4">Redux Toolkit</span>
                            <span className="font-light mr-4">HTML5</span>
                            <span className="font-light mr-4">CSS3</span>
                            <span className="font-light mr-4">Tailwind CSS</span>
                            <span className="font-light mr-4">Material UI</span>
                            <span className="font-light">Bootstrap</span>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h1 className="underline underline-offset-4">Familiar Technologies:</h1>
                        <div className="flex flex-wrap items-center">
                            <span className="font-light mr-4">MySQL</span>
                            <span className="font-light mr-4">Postgresql</span>
                            <span className="font-light mr-4">SQLAlchemy</span>
                            <span className="font-light mr-4">AWS EC2</span>
                            <span className="font-light mr-4">AWS RDS</span>
                            <span className="font-light mr-4">AWS S3</span>
                            <span className="font-light mr-4">Git</span>
                            <span className="font-light mr-4">Github</span>
                            <span className="font-light mr-4">Socket Programming</span>
                            <span className="font-light mr-4">Pandas</span>
                            <span className="font-light mr-4">Numpy</span>
                            <span className="font-light">Matplotlib</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;