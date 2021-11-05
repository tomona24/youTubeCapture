import { sendStatusCode } from "next/dist/server/api-utils";
import React, { useState } from "react";
import { Button } from '../atoms/Button';
import { InputForm } from "../atoms/InputForm";

type FormProps = {
  setVideoId: (id: string) => void;
}

const Form = ( props: FormProps ) => {
    const { setVideoId } = props;
    const [ value, setValue ] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onSubmit = () => {

      if(value == '' || value.indexOf('v=') == -1 ){ 
      return };
      let typedURL = value.split('v=');
      let id = typedURL[typedURL.length -1];
      setVideoId(id);
    };

  return (
    <div class='flex justify-center h-10 m-4'>
        <InputForm value={value} handleChange={handleChange} />
        <Button onSubmit={onSubmit}>決定</Button>
    </div>
  );
};

export default Form;