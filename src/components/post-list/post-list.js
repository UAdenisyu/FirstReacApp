import React from 'react';
import PostListItem from '../post-list-item';

import './post-list.css';

const PostList = ({posts}) => {

    //Сортировка постов по алфавиту
    const elements = posts.map((item) => {
        
        if (typeof item === 'object' && isEmpty(item) ){
            const {id, ...itemProps} = item;
            return (
                <li key={id} className='list-group-item'>
                    <PostListItem {...itemProps}/>
                </li>
            )
        
        }
        return (
            0
        )
    });

    function isEmpty(obj){
        for(let key in obj)
        {
            return true;
        }
        return false;
    }

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;