"use client";

import FuzzyText from "@/components/FuzzyText";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
    const [time, setTime] = useState(3);
    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((p) => {
                if (p === 1) {
                    clearInterval(interval);
                    return 0;
                }
                return p - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (time === 0) {
            router.push("/");
        }
    }, [time, router]);

    return (
        <div className="flex flex-col gap-6 justify-center items-center h-screen">
            <FuzzyText
                baseIntensity={0.2}
                hoverIntensity={0.5}
                enableHover
                color="#FF7C7C"
            >
                404
            </FuzzyText>
            <h1 className="notable text-[#FFC7C7]">Page not found</h1>
            <p className="mt-20 text-[#FFC7C7]">
                We&apos;ll redirect you to{" "}
                <Link href="/" className="underline">
                    home
                </Link>{" "}
                in {time} seconds
            </p>
        </div>
    );
};

export default NotFound;
