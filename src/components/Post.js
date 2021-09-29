import React from 'react'; 

import '../styles/components/Post.css';
import reactThumb from '../assets/img/reactThumb.png';

export default function Post(props) {    

    function timeSince(date) {

        var seconds = Math.floor((new Date() - date) / 1000);
      
        var interval = seconds / 31536000;
      
        if (interval > 1) {
          return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
          return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
          return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
          return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
          return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
      }

      
    return(
        <section id="posts">
          <a target="_blank" href={"https://reddit.com" + props.post.permalink} alt={props.post.title} title={props.post.title}>
            {
              props.post.thumbnail === 'self' || props.post.thumbnail === 'default' ? <img src={reactThumb} alt="Thumb Post"/> :  <img src={props.post.thumbnail } alt="Thumb Post"/>
            }
            <div>
              <h3>{props.post.title}</h3>
              <p>Sent {timeSince(new Date(props.post.created * 1000))} ago <strong>{props.post.author}</strong></p>
              <h5>{props.post.domain}</h5>
            </div>
          </a>
        </section>
    )
}