import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from "./firebase";
import firebase from "firebase";
function TweetBox() {
  //usestate for the inputs tags
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Uday_Kiran",
      username: "uday__001",
      verified: true,
      text: tweetMessage,
      Image: tweetImage,
      avatar:
        "https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721__340.jpg",
      timestamp:  firebase.firestore.FieldValue.serverTimestamp()
    });
    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721__340.jpg"></Avatar>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox_imageInput"
          type="text"
          placeholder="Optional: Enter image URL"
        />
        <Button
          type="submit"
          onClick={sendTweet}
          className="tweetBox_tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
