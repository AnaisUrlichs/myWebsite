import React, {useState, useEffect} from 'react';
import RSSParser from 'rss-parser';
import "./RSSFeedWork.css"

const RSSFeedWork = () => {
    const [feed, setFeed] = useState({ title: '', items: [] })

    const rssData = async () => {
      const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
      let parser = new RSSParser();
  
      try {
        const feed = await parser.parseURL(`${CORS_PROXY}https://codefresh.io/author/anais-codefresh/feed/`)
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
        <h1 id="rsstitle">{feed.title}</h1>
        {feed.items.slice(0, 5).map((item, i) => (
            <div id="rsscontent" key={i}>
              <img
                src={require("./image/general/link.png")}
                alt="speaking with a mic"
                />
               <div></div>
              <a href={item.link}>
                <p>{item.title}</p>
              </a>
            </div>
        ))}
      </div>
      );
};

export default RSSFeedWork;