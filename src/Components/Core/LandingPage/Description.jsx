import React from "react";
import Button from "../LandingPage/Button";
const Description = (props) => {
  const btnText = { ...props.btnText };
  let btnText1 = btnText[0];
  let btnText2 = btnText[1];
  return (
    // className={`flex flex-wrap ${props.row} md:flex-row justify-center items-center gap-6 m-4`}
    <div
      className={`md:flex-wrap ${props.row}  justify-center items-center gap-6 m-4`}
    >
      <div className="justify-center flex-1 items-center lg:w-[90%] sm:w-full">
        <h1 className="text-2xl font-bold">{props.heading}</h1>
        <br />
        <p className="text-justify ">{props.desc}</p>
        <div className="flex gap-6 m-4 justify-center">
          {" "}
          <Button
            text={btnText1}
            color="bg-[#10e8f7] text-gray-800 hover:bg-[#2ccefe]"
            href="/signup"
          />
          <Button
            text={btnText2}
            color="bg-[#6aff41] hover:bg-[#30f941] text-gray-800"
            href="/login"
          />
        </div>
      </div>
      <div className="flex-1">
        <img src={props.img} className="m-10" />
      </div>
    </div>
  );
};

export default Description;
