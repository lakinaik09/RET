import React from "react";

const CreateAccountBtn = ({text}) => {
  return (
    <>
      <button className="bg-orange-500 py-1 px-3 font-medium m-1 rounded text-white hover:bg-inherit hover:text-orange-400 border-2 border-orange-400 duration-300">
       {text}
      </button>
    </>
  );
};

export default CreateAccountBtn;
