
export default function postsList(){
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
    
    const index = Math.floor(Math.random() * reddit_posts.length);
    Math.floor(Math.random() * (reddit_posts.length - 1) + 1);
    //const posttodisp = reddit_posts[index];
    //posttodisp = posttodisp + "?ref_source=embed&amp;ref=share&amp;embed=true"




    return(
        <iframe id="reddit-embed" src="https://www.redditmedia.com/r/cute/comments/ouy5s1/my_lil_pep/?ref_source=embed&amp;ref=share&amp;embed=true" sandbox="allow-scripts allow-same-origin allow-popups" scrolling="no"></iframe>
    )
};
