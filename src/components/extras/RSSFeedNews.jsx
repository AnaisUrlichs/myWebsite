import React, {useState, useEffect} from 'react';
import RSSParser from 'rss-parser';
import "./RSSFeedWork.css"

const RSSFeedNews = () => {
    const [feed, setFeed] = useState({ title: '', items: [] })

    const rssData = async () => {
      const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
      let parser = new RSSParser();
  
      try {
        const feed = await parser.parseURL(`${CORS_PROXY}https://blog.anaisurl.com/rss/`)
        setFeed(feed)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      rssData()
    }, [])
  
      return (
      <div className="rssfeed">
        <h1 id="rsstitle">{feed.title} Blog & Newsletter</h1>
        {feed.items.slice(0, 5).map((item, i) => (
            <div id="rsscontent" key={i}>
                <a href={item.link}> 
                <img
                src={require("./image/general/link.png")}
                alt="speaking with a mic"
                />
            <p>{item.title}</p>
            </a>
            </div>
        ))}
      </div>
      );
};

export default RSSFeedNews;