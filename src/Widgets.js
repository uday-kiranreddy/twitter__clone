import React from "react";
import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import { TwitterTweetEmbed ,TwitterTimelineEmbed,TwitterShareButton} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input type="text" placeholder="Search Twitters" />
      </div>
      <div className="widgets_widgetContainer">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Kiran88823357"
          options={{ height: 400 }}
        />
        <TwitterShareButton url={"https://facebook.com/cleverprogrammer"}options={{text:"#reactjs is awesome",via:"clever programmer"}}/>
      </div>
    </div>
  );
}

export default Widgets;
