"use client";

import Link from "next/link";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Sidebar({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: (v: boolean) => void;
}) {
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="text-primary text-2xl">
                        INVISUAL
                    </SheetTitle>
                    <SheetDescription className="sr-only">
                        Sidebar navigation for main sections of the website
                    </SheetDescription>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    <Separator />
                    <div className="grid gap-3">
                        <Link href="#home">Home</Link>
                    </div>
                    <Separator />
                    <div className="grid gap-3">
                        <Link href="#services">Services</Link>
                    </div>
                    <Separator />
                    <div className="grid gap-3">
                        <Link href="#projects">Projects</Link>
                    </div>
                    <Separator />
                    <div className="grid gap-3">
                        <Link href="#company">Company</Link>
                    </div>
                    <Separator />
                </div>
                <SheetFooter>
                    <Button className="cursor-pointer" type="submit">Get Started</Button>
                    <SheetClose asChild>
                        <Button className="border-primary text-primary cursor-pointer" variant="outline">Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
