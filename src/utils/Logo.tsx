"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import navLog from '../../public/assets/isgplogo.png'
import navLogWhite from '../../public/assets/isgplogowhite.png'

export const LogoBrand = (props: any) => {

    if (props.footer) {
        return (
            <Link
                data-cy="logo"
                href={"/"}
                className={`text-5xl font-itim p-2 cursor-pointer ${props.textColor}`}
            >
                <Image
                    src={navLogWhite}
                    width={400}
                    height={600}
                    alt="hero image"
                />

            </Link>
        );
    }


    if (props.mobile) {
        return (
            <Link
                data-cy="logo"
                href={"/"}
                className={`p-2 cursor-pointer ${props.textColor}`}
            >
                <Image
                    src={navLogWhite}
                    width={200}
                    height={400}
                    alt="mobile logo"
                />

            </Link>
        );
    }

    return (
        <Link
            data-cy="logo"
            href={"/"}
            className={`text-5xl font-itim p-2 cursor-pointer ${props.textColor}`}
        >
            <Image
                src={navLog}
                width={400}
                height={600}
                alt="hero image"
            />

        </Link>
    );
};

//
//
// <Link
//     data-cy="logo"
//     href={"/"}
//     className={`text-5xl font-itim p-2 cursor-pointer ${props.textColor}`}
// >
//   strate<span className="text-primaryPurple">w</span>ise
// </Link>