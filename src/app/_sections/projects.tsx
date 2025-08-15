"use client";

import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/ui/tabs";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const PROJECT_CATEGORIES = [
    {
        id: "branding",
        label: "Branding",
        projects: [
            {
                title: "Brand",
                image: "https://res.cloudinary.com/akrkmnd/image/upload/v1755240458/branding1_yhz8wh.webp",
            },
            {
                title: "Brand",
                image: "https://res.cloudinary.com/akrkmnd/image/upload/v1755240458/branding2_gdbc8h.webp",
            },
            {
                title: "Brand",
                image: "https://res.cloudinary.com/akrkmnd/image/upload/v1755240458/branding3_rununr.webp",
            },
            {
                title: "Brand",
                image: "https://res.cloudinary.com/akrkmnd/image/upload/v1755240458/branding4_hak2s2.webp",
            },
            {
                title: "Brand",
                image: "https://res.cloudinary.com/akrkmnd/image/upload/v1755240458/branding5_bzxmdp.webp",
            },
        ],
    },
    {
        id: "social",
        label: "Social Media",
        projects: [
            {
                title: "Social Media",
                image: "https://res.cloudinary.com/akrkmnd/image/upload/v1755240458/social1_howr1v.webp",
            },
            {
                title: "Social Media",
                image: "https://res.cloudinary.com/akrkmnd/image/upload/v1755240457/social2_rzx7nc.webp",
            },
            {
                title: "Social Media",
                image: "https://res.cloudinary.com/akrkmnd/image/upload/v1755240457/social3_afyvvr.webp",
            },
            {
                title: "Social Media",
                image: "https://res.cloudinary.com/akrkmnd/image/upload/v1755240458/social4_rpbjmq.webp",
            },
            {
                title: "Social Media",
                image: "https://res.cloudinary.com/akrkmnd/image/upload/v1755240458/social5_bolzph.webp",
            },
        ],
    },
    {
        id: "content",
        label: "Content",
        projects: [
            {
                title: "Content",
                image: "https://res.cloudinary.com/akrkmnd/image/upload/v1755240458/social5_bolzph.webp",
            },
            {
                title: "Content",
                image: "https://res.cloudinary.com/akrkmnd/image/upload/v1755240458/social4_rpbjmq.webp",
            },
            {
                title: "Content",
                image: "https://res.cloudinary.com/akrkmnd/image/upload/v1755240458/social1_howr1v.webp",
            },
            {
                title: "Content",
                image: "https://res.cloudinary.com/akrkmnd/image/upload/v1755240457/social2_rzx7nc.webp",
            },
            {
                title: "Content",
                image: "https://res.cloudinary.com/akrkmnd/image/upload/v1755240457/social3_afyvvr.webp",
            },
        ],
    },
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="px-4 lg:px-0">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
                    Our <span className="text-primary">Projects</span>
                </h2>

                <Tabs defaultValue="branding" className="w-full mt-6 relative">
                    <TabsList className="flex flex-wrap justify-center gap-2">
                        {PROJECT_CATEGORIES.map((category) => (
                            <TabsTrigger
                                key={category.id}
                                value={category.id}
                                className="px-4 py-2 text-sm sm:text-base cursor-pointer"
                            >
                                {category.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {PROJECT_CATEGORIES.map((category) => (
                        <TabsContent key={category.id} value={category.id}>
                            <Carousel
                                opts={{ align: "start" }}
                                className="w-full mt-6 relative"
                            >
                                <CarouselContent className="-ml-4">
                                    {category.projects.map((project, index) => (
                                        <CarouselItem
                                            key={index}
                                            className="pl-4 md:basis-full"
                                        >
                                            <div className="mx-auto max-w-5xl px-4">
                                                <Card className="overflow-hidden">
                                                    <Image
                                                        src={project.image}
                                                        alt={project.title}
                                                        width={1620}
                                                        height={1000}
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 600px"
                                                        className="w-full aspect-[1.62] object-cover rounded-lg"
                                                    />
                                                    <CardContent className="py-4 px-6">
                                                        <CardTitle className="text-lg text-foreground">
                                                            {project.title}
                                                        </CardTitle>
                                                    </CardContent>
                                                </Card>
                                            </div>

                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer" />
                                <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer" />
                            </Carousel>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
}
