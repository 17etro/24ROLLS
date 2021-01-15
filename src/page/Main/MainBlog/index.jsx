import React from 'react';
import Slider from "react-slick";
import {Link} from "react-router-dom";
import Truncate from 'react-truncate';
import { backendUrl } from '../../../config/config';

import './index.scss';
import useFetch from "../../../api/useFetch";
import Spinner from "../../../components/Spinner";
import ErrorIndicator from "../../../components/Errors/ErrorIndicator";

const MainBlog = ({url}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    //const [response, error, isLoading] = useFetch(url)

    return (
        // <div className={'main-blog'}>
        //     <Slider {...settings}
        //         className={'slide-block'}
        //     >
        //         {isLoading && <Spinner /> }
        //         {error && <ErrorIndicator />}
        //         {response &&
        //             response.posts.map(post =>
        //                 <div
        //                     key={post._id}
        //                     className={'list'}
        //                 >
        //                     <div className={'list_left'}>
        //                         <img src={backendUrl + `/${post.image}`} alt=""/>
        //                     </div>
        //                     <div className={'list_right'}>
        //                         <div className={'top'}>
        //                             <h1>{post.title}</h1>
        //                             <Truncate
        //                                 lines={8}
        //                                 ellipsis={<span>...</span>}
        //                             >
        //                                 <p>{post.content}</p>
        //                             </Truncate>
        //                         </div>
        //                         <Link
        //                             className={'bottom'}
        //                             to={'/posts'}
        //                         >
        //                             <button>
        //                                 Блог
        //                             </button>
        //                         </Link>
        //                     </div>

        //                 </div>
        //             )
        //         }
        //     </Slider>
        // </div>
        <>
        </>
    );
}

export default MainBlog;