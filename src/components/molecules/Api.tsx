import React, { useState, useEffect } from "react";


const Api = ( props ) => {
    const { videoId } = props;

  return (
    <div class=' mx-auto container p-8 h-96'>
    <iframe class='object-contain h-full w-full min-w-min'
      id="player"
      src={"https://www.youtube.com/embed/" + videoId}
      frameBorder="0"
      allowFullScreen
    />
      </div>
  );
};

// width="640"
// height="360"
export default Api;