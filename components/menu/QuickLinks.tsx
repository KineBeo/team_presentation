import React from "react";

interface LinkProps {
    title: string;
    url: string;
}

interface QuickLinksProps {
    links: LinkProps[];
}

export default function QuickLinks({ links }: QuickLinksProps) {
    return (
        <div className="bg-neutral-100 p-4 w-72 h-auto">
            <h1 className="my-6 font-bold text-xl">Quick Links</h1>
            {
                links.map((link, index) => (
                    <div key={index} className="mb-6">
                        <a href={link.url} className="text-sky-700 underline hover:no-underline">
                            {link.title}
                        </a>
                    </div>
                ))
            }
        </div>
    );
}
