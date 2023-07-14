import { ComponentProps, FunctionComponent, ReactElement } from "react";

export interface IconButtonProps extends ComponentProps<'div'> {
    icon: ReactElement;
};

export const IconButton: FunctionComponent<IconButtonProps> = ({icon, ...props}) => {
    return (
        <div
            className="flex items-center justify-center rounded-full h-9 w-9 cursor-pointer bg-slate-100/70 dark:bg-slate-700/70"
            {...props}
        >
            {icon}
        </div>
    );
};