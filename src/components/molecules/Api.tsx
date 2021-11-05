import React, { useState, useEffect } from "react";
import YouTube from 'react-youtube';
import { Button } from '../atoms/Button';

const defaultOption = {
  height: '360',
  width: '640',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    listType: 'user_uploads',
    modestbranding: 1,
  }
}

const Api = ( props ) => {
    const { videoId } = props;
    const [event, setEvent] = useState();
    const [sTime, setSTime] = useState(0);
    const [eTime, setETime] = useState(0);
    const [options, setOptions] = useState(defaultOption)
    const onReady = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setEvent(e);
    }
    const setTime = (isStart: boolean): void => {
      if(videoId != '' ) {
        let currentTime = event.target.getCurrentTime();
        if(isStart) { setSTime(currentTime);}
      else {
        setETime(currentTime)  }
      }
    }
    const setVideoOpt = ():void => {
      if(eTime > sTime) {
          let newOptions = {playerVars : {...options.playerVars}};

          newOptions.playerVars = {
            start: Math.floor(sTime,0),
            end:  Math.ceil(eTime,0)
          };
          console.log({...options, ...newOptions})
          // setOptions({...options, ...newOptions})
      }
    }

    return (
    <div class=' mx-auto container p-8 h-96'>
    <YouTube videoId = {videoId} opts={options} onReady={onReady} />
    <button onClick={()=>setTime(true)} >ここから</button>
    <button onClick={()=>setTime(false)} >ここまで</button>
    <br />
    <button onClick={()=>setVideoOpt()} >決定！</button>
      </div>
  );
};

export default Api;