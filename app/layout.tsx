import type { Metadata } from "next";
import { Notable } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const notable = Notable({
    weight: "400",
    variable: "--font-notable",
    subsets: ["latin"],
});


export const metadata: Metadata = {
    metadataBase: new URL("https://shabeensharih.online"),
    title: "Shabeen Sharih | Full Stack Developer & Web Designer",
    description:
        "I'm Shabeen Sharih, a passionate Full Stack Developer specializing in React.js, Next.js, and Node.js. I build responsive, high-performance websites and web applications that enhance user experience.",
    keywords: [
        "Shabeen Sharih",
        "Full Stack Developer",
        "Web Developer",
        "React.js Developer",
        "Next.js Developer",
        "Node.js Developer",
        "JavaScript",
        "TypeScript",
        "Frontend Development",
        "Backend Development",
        "Responsive Web Design",
        "UI/UX Design",
        "Portfolio Website",
        "Web Development Services",
        "Freelance Web Developer",
    ],
    authors: [
        {
            name: "Shabeen Sharih",
            url: "https://shabeensharih.online/",
        },
    ],
    robots: "index, follow",
    openGraph: {
        title: "Shabeen Sharih | Full Stack Developer & Web Designer",
        description:
            "Explore my portfolio showcasing web development projects built with React.js, Next.js, and Node.js.",
        url: "https://shabeensharih.online/",
        type: "website",
        images: [
            {
                url: "/Images/profile.jpg",
                width: 462,
                height: 462,
                alt: "Shabeen Sharih - Full Stack Developer",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${notable.variable} antialiased`}
            >
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
