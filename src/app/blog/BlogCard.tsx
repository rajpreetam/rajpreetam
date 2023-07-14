import { createSlug } from "@/utils";
import Link from "next/link";
import { FunctionComponent } from "react";
import {HiCalendar, HiTag} from 'react-icons/hi2';

type Props = {
    title: string;
    excerpt: string;
    date: string;
    tags: string[];
};

const truncateExcerpt = (excerpt: string) => {
    if(excerpt.length < 210) return excerpt;
    return `${excerpt.substring(0, 210)}...`;
};

const BlogCard: FunctionComponent<Props> = ({
    title,
    excerpt,
    date,
    tags
}) => {
    return (
        <div className="flex flex-col space-y-2 pb-5 border-b dark:border-text-dark-lighter/60">
            <Link href={`/blog/${createSlug(title)}`} className="text-2xl text-purple-500">{title}</Link>
            <p className="font-light">{truncateExcerpt(excerpt)}</p>
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <HiCalendar className="h-4 w-4 font-thin text-text-light-lighter dark:text-text-dark-lighter" />
                    <span className="text-sm font-thin text-text-light-lighter dark:text-text-dark-lighter">{date}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <HiTag className="h-4 w-4 font-thin text-text-light-lighter dark:text-text-dark-lighter" />
                    {tags.map((tag, index) => (
                        <span className="text-sm font-thin text-text-light-lighter dark:text-text-dark-lighter" key={index}>{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogCard;