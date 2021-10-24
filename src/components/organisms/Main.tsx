import React, { useState } from "react";
import Form from '../molecules/Form';
import  Api  from '../molecules/Api'
import Paper from "../atoms/Paper";

const Main = ( ) => {

    const [ videoId, setVideoId ] = useState('');

  return (
    <Paper>
            <Form setVideoId={setVideoId} />
            <Api videoId={videoId} />
    </Paper>
  );
};

export default Main;


