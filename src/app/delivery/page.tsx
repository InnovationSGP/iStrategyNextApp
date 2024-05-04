"use client";
import React from "react";

import deliveryPNG from "../../../public/assets/designer.jpeg"
import {BlogCarousel} from "../resources/content/BlogCarousel";
import HeroComponent3 from "@/app/components/Hero/HeroComponent3";
import {pageContents} from "@/content/pageCopy";
import CardComponent from "@/app/components/Card";

export default function Delivery() {
    return (
        <div>
            <HeroComponent3 header={pageContents.projectDeliveryPage.headerText} heroImg={deliveryPNG}
                            headerText={pageContents.projectDeliveryPage.headerParagraph}/>

            {/*<Feature2/>*/}
            <CardComponent/>
            <BlogCarousel/>
            {/*<Testimonial2/>*/}

        </div>
    );
}
