import { React,  useState, useEffect } from "react";
//import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
//import InstagramEmbed from 'react-instagram-embed';


const TwitterContainer = () => {
    useEffect(() => {
      const anchor = document.createElement("a");
      anchor.setAttribute("class", "twitter-timeline");
      anchor.setAttribute("data-theme", "dark");
      anchor.setAttribute("data-tweet-limit", "5");
      anchor.setAttribute("data-chrome", "header footer borders");
      anchor.setAttribute("href", "https://twitter.com/HeyMarkKop");
      document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);
  
      const script = document.createElement("script");
      script.setAttribute("src", "https://platform.twitter.com/widgets.js");
      document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, []);
  
    return (
      <section className="twitterContainer">
        <div className="twitter-embed"></div>
      </section>
    );
  };

export default TwitterContainer;
 

