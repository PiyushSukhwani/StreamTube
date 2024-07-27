import React, { useEffect, useState } from "react";
import "./feed.css";
import { Link } from "react-router-dom";
import { value_convertor } from "../../data";
import moment from "moment";

const Feed = ({ category }) => {
  const API_KEY = import.meta.env.VITE_STREAMTUBE_DATA_API_KEY;
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url)
      .then((res) => res.json())
      .then((data) => setData(data.items))
    };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item, index) => (
        <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card" key={index}>
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>{value_convertor(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
