import { React,  useState } from "react";

const PostsList = () => {

    const [links, setLinks] = useState([]);

    const reddit_posts = ["https://www.reddit.com/r/AskReddit/comments/ouuxfz/people_no_longer_bound_by_their_nda_what_can_you/", 
    "https://www.reddit.com/r/IdiotsInCars/comments/ouzsuh/police_blocked_off_the_road_for_a_fatal_crash/", 
    "https://www.reddit.com/r/nrl/comments/ouxpfj/brisbane_in_lockdown_and_the_nrl_in_crisis/",
    "https://www.reddit.com/r/nextfuckinglevel/comments/ov0h92/he_has_gold_if_he_liftted_192_but_went_for_world/",
    "https://www.reddit.com/r/PersonalFinanceNZ/comments/ouz1uu/july_was_a_really_good_month_for_my_consulting/",
    "https://www.reddit.com/r/AskReddit/comments/ouoaf9/what_is_everyones_favourite_band/",
    "https://www.reddit.com/r/AskReddit/comments/ov0pdp/what_is_100_worse_when_wet/",
"https://www.reddit.com/r/auckland/comments/ouwz7j/open_theft_in_quay_st_countdown/",
"https://www.reddit.com/r/Wellington/comments/ouut70/multi_level_marketing_in_wellington/",
"https://www.reddit.com/r/movies/comments/outkx3/gerard_butler_sues_over_olympus_has_fallen/",
"https://www.reddit.com/r/Wellington/comments/ouw01e/should_i_be_giving_to_beggars/",
    "https://www.reddit.com/r/Minecraft/comments/ouyhob/are_anybody_elses_bees_multiplying_since_117/",
"https://www.reddit.com/r/olympics/comments/ouupzk/olympics_day_eight_megathread_saturday_july_31/",
"https://www.reddit.com/r/dadjokes/comments/ouy3jh/if_you_cant_say_it_to_your_5_yr_old_kid_its_not_a/"  ];

        fetch('https://www.reddit.com/r/all/hot.json')
        .then(function(res) {
        return res.json();   // Convert the data into JSON
        })
        .then(function(data) {
        //console.log(data);   // Logs the data to the console
        const newLinks = data.data.children.map(item => `https://www.redditmedia.com${item.data.permalink}?ref_source=embed&amp;ref=share&amp;embed=true`).slice(0, 5);
        newLinks.forEach(link => console.log(`https://www.reddit.com${link}`))
        // setLink(`https://www.redditmedia.com${newLinks[0]}?ref_source=embed&amp;ref=share&amp;embed=true`);
        setLinks(newLinks);
        })
        .catch(function(err) {
        console.log(err);   // Log error if any
        });


   
    


    const a = reddit_posts.map((url) => {
        const index = url.indexOf("reddit") + 6;
        return `${url.substring(0, index)}media${url.substring(index)}?ref_source=embed&amp;ref=share&amp;embed=true`;
    });

    const postnum =Math.floor(Math.random() * (a.length - 1) + 1);
    let posttodisp = a[postnum];
    //posttodisp = posttodisp + "?ref_source=embed&amp;ref=share&amp;embed=true"
    


    return(
        <div>
            {
            links === ''
            ? 'loading links'
            : links.map(link => <iframe id="reddit-embed" src={link} sandbox="allow-scripts allow-same-origin allow-popups" scrolling="yes"></iframe>)
            }
            </div>
        
    )
};

export default PostsList;