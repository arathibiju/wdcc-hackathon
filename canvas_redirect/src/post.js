
export default function postsList(){
    const reddit_posts = ["post1", "post2", "post3"];

    const reddit_posts_list = reddit_posts.map((post) =>
    <li key="">{post}</li> 
    );

    return(reddit_posts_list)
};
