import { React,  useState, useEffect } from "react";
import LazyLoad from 'react-lazyload';

const PostsList = () => {

    const [links, setLinks] = useState([]);
    const [loaded, setLoaded] = useState(true);

    useEffect(() => {  
        console.log('loading');
        fetch('https://www.reddit.com/r/all/hot.json')
        .then(function(res) {
        return res.json();   // Convert the data into JSON
        })
        .then(function(data) {
        console.log(data);   // Logs the data to the console
        const newLinks = data.data.children.map(item => `https://www.redditmedia.com${item.data.permalink}?ref_source=embed&amp;ref=share&amp;embed=true`).slice(0, 100);
        // newLinks.forEach(link => console.log(`https://www.reddit.com${link}`))
        // setLink(`https://www.redditmedia.com${newLinks[0]}?ref_source=embed&amp;ref=share&amp;embed=true`);
        setLinks(newLinks);
        console.log('links set')
        })
        .catch(function(err) {
        console.log(err);   // Log error if any
        });
    }, [loaded])
    // const a = reddit_posts.map((url) => {
    //     const index = url.indexOf("reddit") + 6;
    //     return `${url.substring(0, index)}media${url.substring(index)}?ref_source=embed&amp;ref=share&amp;embed=true`;
    // });

    // const postnum =Math.floor(Math.random() * (a.length - 1) + 1);

    //posttodisp = posttodisp + "?ref_source=embed&amp;ref=share&amp;embed=true"



    return(
        <div>
            {
            links === ''
            ? 'loading links'
            : links.map(link => (
            <LazyLoad height={200} offset={100}>
                <iframe id="reddit-embed" loading="lazy" src={link} sandbox="allow-scripts allow-same-origin allow-popups" width="500px" height="300px" scrolling="yes"></iframe>
           </LazyLoad>
            ))
            }
            </div>
        
    )
};

export default PostsList;