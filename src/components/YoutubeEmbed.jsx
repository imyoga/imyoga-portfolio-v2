import React from 'react';
import '../styles/YoutubeEmbed.css';

const YoutubeEmbed = (props) => (
  <div className="embed-youtube">
    <iframe
      width={400}
      height={225}
      src={`https://www.youtube.com/embed/${props.embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className="iframe"
      srcDoc={`<style>
        *{padding:0;margin:0;overflow:hidden}
        html,body{height:100%}        
        img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
        span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
        </style>
        <a href=https://www.youtube.com/embed/${props.embedId}>
        <img src=https://img.youtube.com/vi/${props.embedId}/hqdefault.jpg alt='video-thumbnail' loading='lazy'>
        <span>▶</span>
        </a>`}
    />
  </div>
);

export default YoutubeEmbed;
