import React from "react";
import Image, { StaticImageData } from "next/image";

export default function ImageFunction(props: {
  imageURL: StaticImageData;
  width?: number;
  height?: number;
  alt?: any;
  sizes?: string;
  style?: any;
  fill?: any;
}) {
  return (
    <Image
      src={props.imageURL}
      alt={props.alt}
      width={props.width}
      height={props.height}
      sizes={props.sizes}
      style={props.style}
      fill={props.fill}
    />
  );
}
