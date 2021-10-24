import React, { useState } from "react";

const Paper = ({children}) => {

  return (
    <div class='text-center mx-auto container shadow appearance-none border rounded py-12 px-8 text-gray-700 leading-tight'>
        {children}
    </div>
  );
};

export default Paper;