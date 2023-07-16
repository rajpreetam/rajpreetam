import Link from "next/link";

const skillsData = [
    {
        skill: 'Languages:',
        items: ['Python', 'C++', 'Javascript', 'Java']
    },
    {
        skill: 'Frameworks/Web/App Technologies:',
        items: ['Django', 'Django Rest Framework', 'FastAPI', 'ReactJS', 'NextJS', 'Redux Toolkit', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI', 'Bootstrap']
    },
    {
        skill: 'Familiar Technologies:',
        items: ['MySQL', 'Postgresql', 'SQLAlchemy', 'AWS EC2', 'AWS RDS', 'AWS S3', 'GIT', 'Github', 'Socket Programming', 'Pandas', 'Numpy', 'Mathplotlib']
    },
];

const AboutPage = () => {
    return (
        <div className='min-h-[calc(100vh-182px)] w-[calc(100vw-32px)] sm:w-full flex flex-col space-y-4'>
            <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold tracking-wide">Who Am I?</h1>
                    <button className="text-purple-500 text-2xl underline underline-offset-4">Resume</button>
                </div>
                <p className="font-light tracking-wider text-justify">Hi, my name is <span className="font-semibold text-purple-500">Preetam Raj</span>. I am from Patna, Bihar. I am graduated from IIT Mandi with major in Mechanical Engineering and minor in Computer Science and Engineering. I am very much enthusiastic in web and app development and did many <Link className='text-purple-500' href='/portfolio'>projects</Link> in various web/app dev tech stack.</p>
            </div>
            <div className="flex flex-col space-y-2">
                <h1 className="text-2xl font-semibold tracking-wide">Skills</h1>
                <div className="flex flex-col space-y-4">
                    {skillsData.map(item => (
                        <div key={item.skill} className="flex flex-col space-y-2">
                            <h1 className="underline underline-offset-4">{item.skill}</h1>
                            <div className="flex flex-wrap items-center">
                                {item.items.map(skill => (
                                    <span key={skill} className="font-light mr-4">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutPage;