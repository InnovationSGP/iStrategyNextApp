import { page_routes } from "@/lib/pageRoutes";
import Link from "next/link";
import React from "react";

export const cardContent = [
  {
    cardIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-headset text-green-800"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 14v-3a8 8 0 1 1 16 0v3"></path>
        <path d="M18 19c0 1.657 -2.686 3 -6 3"></path>
        <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z"></path>
        <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z"></path>
      </svg>
    ),
    header: "Offshore Staffing",
    txtResource: "Get IT resources round the clock",
    buttonText: "Learn more",
    buttonURL: "/contactus",
    assestTextResource: (
      <div>
        <h1 className="font-bold py-4">What is Offshore Staffing ?</h1>
        <p className="p-2">
          Offshore staffing refers to the process of hiring employees or teams
          from another country or region to work remotely for a company.
          Offshore staffing offers many benefits, including:{" "}
        </p>

        <p className="p-2">
          Savings measures: Offshore staff can help companies significantly
          reduce their labor costs. You can hire the best staff and teams from
          countries with lower labor costs, leading to significant cost savings.{" "}
        </p>

        <p className="p-2">
          Access to a larger talent pool: Offshore staffing gives companies
          access to a larger talent pool of highly skilled professionals not
          available locally. This helps you find and hire the best talent for
          your business, regardless of location.{" "}
        </p>

        <p className="p-2">
          Greater flexibility: Offshore staffing gives companies more
          flexibility in managing their workforce. Easily scale your team up or
          down based on business needs without worrying about long-term
          commitments.{" "}
        </p>

        <p className="p-2">
          Advantages of time zones: Offshore staff can take advantage of the
          differences in time zones to help your business. For example, you can
          have an offshore team work on a project outside your company&apos;s
          business hours. This can speed up project completion and reduce
          turnaround time.
        </p>
        <p className="p-2">
          {" "}
          Reduced overhead: Offshore staffing helps reduce the overhead
          associated with hiring and managing local teams. This includes costs
          such as office space, equipment and incidentals.
        </p>

        <p className="p-2">
          Increased productivity: Offshore staffing can improve your
          company&apos;s productivity by allowing you to focus on your core
          competencies while delegating non-core tasks to offshore teams. This
          increases efficiency and productivity across your business.
        </p>

        <p className="p-2">
          {" "}
          Overall, offshore staffing can provide organizations with many
          benefits such as reduced costs, access to a larger talent pool,
          increased flexibility, time zone benefits, reduced overhead, and
          increased productivity. 
        </p>
      </div>
    ),
  },
  {
    cardIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-list-check text-primaryGold"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3.5 5.5l1.5 1.5l2.5 -2.5"></path>
        <path d="M3.5 11.5l1.5 1.5l2.5 -2.5"></path>
        <path d="M3.5 17.5l1.5 1.5l2.5 -2.5"></path>
        <path d="M11 6l9 0"></path>
        <path d="M11 12l9 0"></path>
        <path d="M11 18l9 0"></path>
      </svg>
    ),
    header: "Project Management",
    txtResource: "Deliver to scope, time, and cost",
    buttonText: "Learn more",
    buttonURL: "/contactus",
    assestTextResource: (
      <div className="p-2">
        <p className=" text-md text-center font-bold py-2">
          Falling behind schedule, going over budget, or not meeting
          expectations? Do you feel like you're spinning the wheels trying to
          handle everything yourself??
        </p>
        <p>
          Our team of experts has the skills and experience to plan, organize
          and execute your project accurately and efficiently. We work with you
          to create a bespoke project management plan to meet your specific
          needs, whether it's a new product launch, new system implementation,
          or managing a complex tech project. With our help, you can stay on
          track, meet deadlines, and reach your goals. And best of all, you can
          be sure your project is in safe hands. So why wait?
        </p>
      </div>
    ),
  },
  {
    cardIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-shield-lock-filled text-primaryPurple"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path
          d="M11.998 2l.118 .007l.059 .008l.061 .013l.111 .034a.993 .993 0 0 1 .217 .112l.104 .082l.255 .218a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.531 -2.527l.263 -.225l.096 -.075a.993 .993 0 0 1 .217 -.112l.112 -.034a.97 .97 0 0 1 .119 -.021l.115 -.007zm.002 7a2 2 0 0 0 -1.995 1.85l-.005 .15l.005 .15a2 2 0 0 0 .995 1.581v1.769l.007 .117a1 1 0 0 0 1.993 -.117l.001 -1.768a2 2 0 0 0 -1.001 -3.732z"
          strokeWidth="0"
          fill="currentColor"
        ></path>
      </svg>
    ),
    header: "Informations Systems Auditing",
    txtResource: "Work with certified experts",
    buttonText: "Learn more",
    assestTextResource: (
      <div className="p-2">
        <p>
          Our team of experts has the skills and expertise to ensure system
          safety, compliance and efficiency. We work with you to assess your
          current system and identify vulnerabilities and risks. From there,
          develop a comprehensive plan to address any issues and implement best
          practices to protect your data.
        </p>
      </div>
    ),
  },
  {
    cardIcon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 8.877L2.247 5.91l8.405-3.416V.022l7.37 5.393L2.966 8.338v8.225L0 15.707zm24-4.45v14.651l-5.753 4.9-9.303-3.057v3.056l-5.978-7.416 15.057 1.798V5.415z" />
      </svg>
    ),
    header: "Cloud Computing",
    txtResource: "Secure migration and business continuity",
    buttonText: "Learn more",
    buttonURL: "/contactus",
    assestTextResource: (
      <div className="p-2">
        <p>
          Our team of experts has the skills and expertise to ensure system
          safety, compliance and efficiency. We work with you to assess your
          current system and identify vulnerabilities and risks. From there,
          develop a comprehensive plan to address any issues and implement best
          practices to protect your data.
        </p>
      </div>
    ),
  },
  {
    cardIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-checklist text-primaryBlue"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8"></path>
        <path d="M14 19l2 2l4 -4"></path>
        <path d="M9 8h4"></path>
        <path d="M9 12h2"></path>
      </svg>
    ),
    header: "Agile Transformation",
    txtResource: "Deliver working software through continous improvement",
    buttonText: "Learn more",
    buttonURL: "/contactus",
    assestTextResource: (
      <div className="p-2">
        <p>
          We specialize in helping companies like yours adopt Agile
          methodologies so that you can work smarter, faster and more
          collaboratively than ever before.{" "}
          <p className="py-2">
            With our help, you can break down silos, streamline processes, and
            create a culture of innovation and continuous improvement. Respond
            quickly to changing market demands, speed time to market, and
            improve profitability.
          </p>
        </p>
      </div>
    ),
  },
  {
    cardIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M19 18a3.5 3.5 0 0 0 0 -7h-1c.397 -1.768 -.285 -3.593 -1.788 -4.787c-1.503 -1.193 -3.6 -1.575 -5.5 -1s-3.315 2.019 -3.712 3.787c-2.199 -.088 -4.155 1.326 -4.666 3.373c-.512 2.047 .564 4.154 2.566 5.027"></path>
        <path d="M8 15m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z"></path>
        <path d="M10 15v-2a2 2 0 1 1 4 0v2"></path>
      </svg>
    ),
    header: "DevSecOps",
    txtResource: "Shift-left approach to CI/CD",
    buttonText: "Learn more",
    buttonURL: "/contactus",
    assestTextResource: (
      <div className="p-2">
        <p>
          Introducing DevSecOps - the ultimate solution for secure and efficient
          software development. Our DevSecOps service combines development,
          security, and operations best practices to create a streamlined,
          secure, and efficient development process.{" "}
          <p className="py-2">
            With our help, you can build security into every step of your
            development cycle, ensuring your application is secure from the
            moment it's built. Deploy faster with fewer errors and confidence
            that your application is secure.
          </p>
        </p>
      </div>
    ),
  },
];
