import { Avatar } from "@mui/material";
import React, { forwardRef ,useEffect,useState} from "react";
import "./Post.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

const Post = forwardRef(
  ({ displayName,
    username, 
    verified, 
    text, 
    image, 
    avatar },ref) => {
    const [count, setcount] = useState(0);
      const handleLike=()=>{
        if(count>=1){
          count=count;
        }
        setcount(count+1)
      }
    
      
      return (
      <div className="post" ref={ref}>
        <div className="post_avatar">
          <Avatar src={avatar}></Avatar>
        </div>
        <div className="post_body">
          <div className="post_header">
            <div className="post_headerText">
              <h3>
                {displayName}{" "}
                <span className="post_headerSpecial">
                  {verified && <VerifiedIcon className="post_badge" />}@
                  {username}
                </span>
              </h3>
            </div>
            <div className="post_headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post_footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon className="like" onClick={handleLike} fontSize="small" />{count}Like
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
