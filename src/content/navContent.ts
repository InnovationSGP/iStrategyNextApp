import {page_routes} from "@/lib/pageRoutes";
import {
    ChartBarIcon,
    InboxArrowDownIcon, LockClosedIcon,
    PresentationChartBarIcon,
    ShieldCheckIcon,
    Squares2X2Icon
} from "@heroicons/react/24/outline";

export const navigationItems = [
    {
        name: "Project Delivery",
        description: "Get work done, and done fast",
        href: page_routes.Delivery,
        icon: ChartBarIcon,
    },

    {
        name: "Governance, Risk and Compliance",
        description: "Strengthen your organization's Governance, Risk, and Compliance (GRC) posture.",
        href: page_routes.ITSecurity,
        icon: ShieldCheckIcon,
    },
    {
        name: "Technical Staffing",
        description: "Find Top Tech Talent: Leverage our Technical Staffing Capabilities",
        href: page_routes.staffing,
        icon: PresentationChartBarIcon,
    },
    {
        name: "Blog",
        description: "View blogs, news, articles and other resources",
        href: page_routes.resourceCenter,
        icon: Squares2X2Icon,
    },

    {
        name: "Contact us",
        description: "Let's get you some help",
        href: page_routes.contactUs,
        icon: InboxArrowDownIcon,
    },

    // {
    //     name: "About us",
    //     description: "Learn more about out services",
    //     href: page_routes.about,
    //     icon: QuestionMarkCircleIcon,
    // },

    // {
    //     name: 'Admin Login',
    //     description: 'Access admin dashboard',
    //     href: page_routes.secure,
    //     icon: LockClosedIcon,
    // }

];
