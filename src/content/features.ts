import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    FingerPrintIcon,
    LockClosedIcon,
} from "@heroicons/react/24/outline";
import {descriptions} from "jest-config";
import stratewise from "../../public/assets/stratewise.png";
import isgpBW from "../../public/assets/isgplogoBW.png";
import kdadsLogo from "../../public/assets/kdadsLogo.png";

export const features = [
    {
        name: "Deploy fast and safe",
        description:
            "Use Continuous Integration and Continuous Deployment (CI/CD) tools, automate your testing, optimize your code, monitor your deployment, have viable rollback plans, use a cloud-based platform ",
        icon: CloudArrowUpIcon,
    },
    {
        name: "Project Management and delivery",
        description:
            "We are a strategic hub, providing support, guidance, and resources to our subsidiary\n" +
            "companies. With a long-term investment perspective, we foster\n" +
            "growth, innovation, and operational excellence across our portfolio.",
        icon: LockClosedIcon,
    },
    {
        name: "Agile Product Delivery",
        description:
            "Discover the work, identify the minimum viable product (MVP), breakdown the epics into SMART user stories, backlog the work, refine the backlog, play the stories, demo the work, inspect and adapt via retros, accept,  deploy, and release the work. Rinse and Repeat",
        icon: ArrowPathIcon,
    }
];
export const GRCFeatures = [
    {

        name: "GRC/Risk Manager",
        description: "Help develop and implement a comprehensive GRC program framework. Conduct risk assessments and" +
            " workshops to identify and prioritize organizational risks. Assist in selecting and implementing GRC" +
            " technology solutions."
    },
    {
        name: "Senior Executives",
        description: "Provide strategic guidance on GRC best practices and industry trends." +
            " Develop and deliver GRC awareness training for senior leadership."
    },

    {
        name: "Information Security Professionals",

        description: "Conduct penetration testing and vulnerability assessments to identify security weaknesses.\n" +
            "    Recommend and implement security controls and incident response plans.\n" +
            "    Help develop and maintain a Security Information and Event Management (SIEM) system."
    },

    {
        name: "Data Protection",
        description: "Assist in developing and implementing a data privacy program. Provide guidance on data subject rights" +
            " and breach notification procedures."
    },


    {
        name: "Internal Auditors",
        description: "Perform compliance audits and identify control gaps. Develop and implement internal audit" +
            " methodologies tailored to GRC objectives."
    },


    {
        name: "GRC Specialists",
        description: "Consulting firms can provide additional specialists to manage specific GRC tasks, like gap assessments" +
            " or regulatory reporting. The consulting firm itself can act as an extension of the internal GRC team, providing ongoing support and expertise."
    },
    {
        name: "Governance",
        description:
            "We can help you to establish a framework for decision-making by setting clear policies and" +
            " procedures."
    },
    {
        name: "Risk Management",
        description:
            "Identifies potential threats to the organization, such as financial risks, operational risks, or" +
            " security risks and Develops plans to mitigate or avoid these risks, including risk reduction, risk transference, or risk acceptance."
    },
    {
        name: "Compliance",
        description:
            "Ensures that your organization adheres to all relevant laws and regulations, both internal and external"
    }
];
export const trustPartners = {
    header: 'Our partners',
    subHeading: 'Envision and deliver. Bring projects to fruition.',
    partners: [
        {name: "Stratewise LLC", description: "Partner consulting services", logo: stratewise},
        {name: "KDADS", description: "Kansas Department for Aging and Disability Services", logo: kdadsLogo},
        {name: "InnovationSGP", description: "Partner Consulting", logo: isgpBW},
    ]
}
export const featuresHeader = {
    bulletText: 'Services',
    headerBanner: "Agile Transformation | Quality Delivery",
    header: "Deliver efficiently and connect professional talents",
    subHeading:
        "Choosing InnovatinSGP means partnering with a trusted platform that has your project's success at heart. Our" +
        " services are tailored to transform your ideas and visions into impactful results. Here is why you should choose us: ",
};