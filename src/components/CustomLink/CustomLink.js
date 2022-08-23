import React from 'react';
import {
    //unused import gula kete dilam
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom";

const CustomLink = ({ to, children, ...props }) => {
    //to er maddhome link
    //childresn er maddhome home,contact,about egula
    //and props er madhdome onno kono props jemon style , classname jodi jaite chai tokhn lagbe 
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link
            style={{ color: match ? "#0991B1" : "BLACK" }}
            //link take customized korlam jetar main copy react router active link e ache 
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;