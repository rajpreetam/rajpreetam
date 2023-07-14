import Link from "next/link";
import { FunctionComponent } from "react";

type Props = {
    tag: string;
    link: string;
};

const TagContainer: FunctionComponent<Props> = ({tag, link}) => {
    return (
        <Link href={link} className="text-sm font-thin px-2 py-1 border dark:border-text-dark-lighter/50 rounded-full flex items-center justify-center mr-2 mb-2">{tag}</Link>
    );
};

export default TagContainer;