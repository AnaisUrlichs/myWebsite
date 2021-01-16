import React from "react"
import "./Listofwhatido.css"

const Listofwhatido = () => {
    return (
        <div className="listgrid">
                <div>
                    <img
                    id="community"
                    src={require("./image/general/community.png")}
                    alt="street art on community creation"
                  />
                    <h4>Community Management</h4>
                    <p>Every community is unique, its audience, interests and communication. Nevertheless, we can <a href="https://courses.edx.org/certificates/003dbaf92bd041ff93d76c80bf309143" target="_blank" rel="noopener noreferrer">collaborate</a> across communities to make the community inclusive and accessible.
                    I grew the Discord Community at <a href="https://near.org/" target="_blank" rel="noopener noreferrer">NEAR</a> from 2k to 6k members, ran a community program of over 120 participants and <a href="https://blog.anaisurl.com/building-communities/" target="_blank" rel="noopener noreferrer">shared my learnings</a> along the way.
                    </p>
                </div>
                <div>
                    <img
                    id="writing"
                    src={require("./image/general/desk.png")}
                    alt="my desk"
                  />
                    <h4>Technical Writing & Developement</h4>
                    <p>My joy lies in learning something new and reiterating on content to add detail, and to make it accessible and understandable to a new audience.
                    This includes technical documentation, blog posts, tutorials and guides. You can find some samples below, <a href="https://near.org/blog/author/anais/" target="_blank" rel="noopener noreferrer">my prev. work</a> and on my <a href="https://blog.anaisurl.com/" target="_blank" rel="noopener noreferrer">blog</a>. 
                    </p>
                </div>
                <div>
                    <img
                    id="events"
                    src={require("./image/general/events.png")}
                    alt="speaking at an event"
                  />
                    <h4>Events & Speaking</h4>
                    <p>Events allow community members to connect. While covid made events largely more accessible, it created new challenges of interacting and engaging the audience. 
                        I helped organise and run events <a href="https://youtu.be/tzFSoQL9HgE" target="_blank" rel="noopener noreferrer">from 20</a> to over <a href="https://www.youtube.com/channel/UC-JxjKyX63VGkRM-8jziK8Q" target="_blank" rel="noopener noreferrer">several thousand members</a>. Sometimes, I get to give a <a href="https://youtu.be/cE-IkzcUUY4" target="_blank" rel="noopener noreferrer">presentation</a> of my own.
                    </p>
                </div>
        </div>
    )
}

export default Listofwhatido