"use client";

import { TestimonialCarousel } from "@/components/common/testi-carousel";
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
} from "@/components/ui/card";
import { Lightbulb, Users, Star } from "lucide-react";
import Image from "next/image";

const COMPANY_VALUES = [
    {
        icon: <Lightbulb className="w-6 h-6 text-primary" />,
        title: "Strategic Thinking",
        description:
            "We approach every project with clarity, aligning creative with business goals.",
    },
    {
        icon: <Users className="w-6 h-6 text-primary" />,
        title: "Collaborative Process",
        description:
            "We work closely with clients to co-create solutions that truly represent their brand.",
    },
    {
        icon: <Star className="w-6 h-6 text-primary" />,
        title: "Design with Impact",
        description:
            "Every output is made to perform — visually, emotionally, and functionally.",
    },
];

const COMPANY_STATS = [
    { label: "+50 Clients", description: "Across multiple industries" },
    { label: "8+ Years", description: "Creative design experience" },
    { label: "100+ Projects", description: "Successfully launched" },
];

export default function CompanySection() {
    return (
        <section id="company" className="container px-4 lg:px-0">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Who <span className="text-primary">We Are</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base md:text-lg">
                    We are a creative design studio driven by purpose and precision —
                    building identities and experiences that connect brands with people.
                </p>

                {/* 🔢 Stats */}
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 mb-16">
                    {COMPANY_STATS.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-primary">{stat.label}</span>
                            <span className="text-muted-foreground text-sm mt-1">{stat.description}</span>
                        </div>
                    ))}
                </div>

                {/* 🧠 Value Cards */}
                <div className="grid gap-6 md:grid-cols-3 mt-10">
                    {COMPANY_VALUES.map((value, index) => (
                        <Card key={index} className="text-left">
                            <CardHeader className="flex items-center justify-start gap-4">
                                {value.icon}
                                <CardTitle>{value.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    {value.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                {/* 🤝 Client Logos */}
                <div className="mt-20">
                    <h3 className="text-lg font-semibold text-foreground text-center mb-6">
                        Trusted by brands and businesses
                    </h3>
                    <div className="flex flex-wrap justify-center items-center gap-6 opacity-80">
                        {["logo.svg", "logo.svg", "logo.svg", "logo.svg", "logo.svg", ].map((logo, i) => (
                            <Image
                                key={i}
                                src={`/${logo}`}
                                alt={`Client ${i + 1}`}
                                className="h-10 w-auto max-w-[120px]"
                                width={100}
                                height={50}
                            />
                        ))}
                    </div>
                </div>

                {/* 💬 Testimonial Carousel */}
                <div className="mt-20">
                    <h3 className="text-lg font-semibold text-foreground text-center mb-6">
                        What our clients say
                    </h3>
                    <TestimonialCarousel />
                </div>

            </div>
        </section>
    );
}
