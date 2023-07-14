import Link from "next/link";

const ContactPage = () => {
    return (
        <div className='min-h-[calc(100vh-182px)] w-[calc(100vw-32px)] sm:w-full'>
            <h1>Feel free to contact me at: <Link className="text-purple-500" href='mailto:dev.preetamraj@gmail.com'>dev.preetamraj@gmail.com</Link></h1>
        </div>
    );
};

export default ContactPage;