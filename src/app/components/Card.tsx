import React from "react";
import { cardContent } from "../../content/cardContent";

export default function CardComponent() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-6 ">
        {/*  Grid Card */}
        {cardContent.map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>
    </div>
  );
}
function Card(props: any) {
  return (
    <div className=" p-10 bg-gray-100  border-gray-300 hover:border-t-4 hover:border-primaryBlue md:hover:scale-110 ease-in duration-300">
      {props.data.cardIcon}
      <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6">
        {props.data.header}
      </p>
      <p className=" font-normal text-base leading-6 text-gray-600 my-4">
        {props.data.txtResource}{" "}
      </p>
      <a className=" cursor-pointer text-base leading-4 font-medium text-gray-800 border-b-2 border-gray-800 hover:text-gray-600 ">
        {props.data.buttonText}
      </a>
    </div>
  );
}
