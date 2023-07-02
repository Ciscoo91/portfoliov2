import { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode,
    extraClasses?: string
}

const Container = ({children, extraClasses}: ContainerProps) => {
    return (
        <div className={`lg:w-9/12 w-11/12 m-auto container ${extraClasses}`}>
            {children}
        </div>
    );
}
 
export default Container;