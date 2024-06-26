import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", id: "features" },
  { label: "Workflow", id: "workflow" },
  { label: "Testimonials", id: "testimonials" },
];



export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Intuitive Design Tools",
    description:
      "Harness our intuitive design tools to craft engaging user interfaces with ease, ensuring a seamless user experience.",
  },
  {
    icon: <Fingerprint />,
    text: "Enhanced Security Measures",
    description:
      "Implement state-of-the-art security measures to protect your website and users, fostering trust and safety.",
  },
  {
    icon: <ShieldHalf />,
    text: "Responsive Templates",
    description:
      "Utilize our library of responsive templates designed for adaptability, ensuring your website looks great on any device.",
  },
  {
    icon: <BatteryCharging />,
    text: "Dynamic Content Loading",
    description:
      "Boost your site's performance with dynamic content loading, enhancing user engagement and retention.",
  },
  {
    icon: <PlugZap />,
    text: "Real-Time Collaboration",
    description:
      "Collaborate in real-time with your team, streamlining the web development process and enhancing productivity.",
  },
  {
    icon: <GlobeLock />,
    text: "SEO Optimization Dashboard",
    description:
      "Leverage our SEO optimization dashboard to increase your website's visibility, driving traffic and engagement.",
  },
];

export const checklistItems = [
  {
    title: "Custom Website Design",
    description:
      "Design unique websites that perfectly match your client's brand identity and business goals.",
  },
  {
    title: "Responsive and Mobile-Friendly",
    description:
      "Ensure every website looks great and functions flawlessly on all devices, from desktops to smartphones.",
  },
  {
    title: "SEO Optimization",
    description:
      "Implement SEO best practices to help your clients' websites rank higher in search engine results and attract more visitors.",
  },
  {
    title: "E-commerce Integration",
    description:
      "Incorporate e-commerce solutions to turn your clients' websites into powerful sales platforms.",
  },
  {
    title: "Content Management Systems",
    description:
      "Equip websites with easy-to-use content management systems, allowing clients to easily update their content.",
  },
  {
    title: "Ongoing Support and Maintenance",
    description:
      "Provide continuous support and maintenance to ensure the website remains updated, secure, and performing optimally.",
  },
];


export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
