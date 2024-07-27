import React, { useEffect, useState } from "react";
import "./playvideo.css";
import video from "../../assets/video.mp4";
import { value_convertor } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = () => {

  const {videoId} = useParams()
  const API_KEY = import.meta.env.VITE_STREAMTUBE_DATA_API_KEY;
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchVideoData = async () => {
    // fetching videos data
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));

    // fetching comment data

    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  const fetchOtherData = async () => {
    // to fetch channel data
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className="play-video">
      {/* <video src={video} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? value_convertor(apiData.statistics.viewCount) : "16k"}{" "}
          Views &bull;{" "}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span>
            <img src="/like.png" alt="" />
            {apiData ? value_convertor(apiData.statistics.likeCount) : 155}
          </span>
          <span>
            <img src="/dislike.png" alt="" />
          </span>
          <span>
            <img src="/share.png" alt="" />
            Share
          </span>
          <span>
            <img src="/save.png" alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "Channel name"}</p>
          <span>
            {channelData
              ? value_convertor(channelData.statistics.subscriberCount)
              : ""}{" "}
            Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>
          {apiData
            ? apiData.snippet.description.slice(0, 250)
            : "Description here..."}
        </p>
        <hr />
        <h4>
          {apiData ? value_convertor(apiData.statistics.commentCount) : 102}
        </h4>
        {commentData.map((item, index) => (
          <div className="comment" key={index} >
            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
            <div>
              <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span>
              </h3>
              <p>
                {item.snippet.topLevelComment.snippet.textDisplay}
              </p>
              <div className="comment-action">
                <img src="/like.png" alt="" />
                <span>{value_convertor(item.snippet.topLevelComment.snippet.likeCount)}</span>
                <img src="/dislike.png" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayVideo;
