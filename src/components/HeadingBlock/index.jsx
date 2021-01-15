import React from 'react';

import './index.scss';
import deliverSvg from "../../assets/components/HeadingBlog/deliverSvg.svg";

const HeadingBlock = ({title, svg}) => {
    return (
        <div
            itemProp={'headingBlock'}
            className="heading-blog"
        >
            <h1 itemProp = "name">
                {title}
            </h1>
        </div>
    )
}

export default HeadingBlock;