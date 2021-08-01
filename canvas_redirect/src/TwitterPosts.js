import { React,  useState, useEffect } from "react";
//import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
//import InstagramEmbed from 'react-instagram-embed';


const TwitterContainer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <section className="twitterContainer">
      <div className="twitter-embed">
        <a
          className="twitter-timeline"
          data-theme="dark"
          data-tweet-limit="5"
          data-chrome="noheader nofooter noborders"
          href="https://twitter.com/HeyMarkKop"
        >
          Tweets by HeyMarkKop
        </a>
      </div>
    </section>
  );
};

export default TwitterContainer;

