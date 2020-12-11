import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import Posts from './Posts';

function RecentPosts(props) {
    const [posts, setposts] = useState([]);
    const postsData = props.data.posts
    useEffect(()=>{
        let data = postsData.sort((a,b)=> new Date(a.date).getTime() - new Date(b.data).getTime() );
        setposts(data);
    })
    const useFilter = (category="",tag="") =>{
        let data = []
        if (category !== "" && tag !== "" )
            data = posts.filter(post => {
                return post.category === category && post.tags.includes(tag)
            })
        else if (category !== "")
            data = posts.filter(post => {
                return post.category === category
            })
        else if (tag !== "")
            data = posts.filter(post => {
                return post.tags.includes(tag)
            })
        setposts(data);
    }
    return (
        <React.Fragment>
            <Filter useFilter={useFilter} category={props.data.categories}/>
            <Posts data={posts} />
        </React.Fragment>
  );
}

export default RecentPosts;
