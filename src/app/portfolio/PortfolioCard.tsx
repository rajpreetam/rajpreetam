'use client';
import { createSlug } from "@/utils";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

type Props = {
    imgUrl: string;
    title: string;
};

const PortfolioCard: FunctionComponent<Props> = ({imgUrl, title}) => {    
    const router = useRouter();
    return (
        <div
            className="relative group hover:cursor-pointer h-60"
            onClick={() => router.push(`/portfolio/${createSlug(title)}`)}
        >
            <img className="h-60 w-full object-cover" src={imgUrl} alt="Image" />
            <div className="z-20 bg-black/40 group-hover:bg-black/70 absolute top-0 h-60 w-full flex items-center justify-center p-4 text-center">
                <h1 className="hidden group-hover:block z-20 text-white text-4xl font-bold tracking-wide">{title}</h1>
            </div>
        </div>
    );
};

export default PortfolioCard;