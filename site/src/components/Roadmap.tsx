import { type ReactNode, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/Accordion'

interface RoadmapStep {
    number: string
    title: string
    description: string
    icon?: ReactNode
}

interface RoadmapProps {
    steps: RoadmapStep[]
}

export function Roadmap({ steps }: RoadmapProps) {
    const [open, setOpen] = useState<string>('')

    return (
        <Accordion type="single" collapsible value={open} onValueChange={setOpen}>
            {/* Mobile - vertical */}
            <div className="relative border-l border-border ml-4 md:hidden">
                {steps.map(({ number, title, description, icon }) => (
                    <AccordionItem key={number} value={number} className="relative pl-10 pb-4 border-none pr-4">
                        <span className="absolute -left-5 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-black text-sm">
                            {icon ?? number}
                        </span>
                        <AccordionTrigger className="font-bold text-lg py-2">
                            {title}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                            {description}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </div>

            {/* Desktop - horizontal */}
            <div className="hidden md:flex relative">
                <div className="absolute top-7.5 left-0 right-0 h-px bg-border" />
                {steps.map(({ number, title, description, icon }) => (
                    <AccordionItem key={number} value={number} className="relative flex-1 flex flex-col items-center text-center px-4 border-none">
                        <div className="relative flex-col z-10 flex gap-2 pb-4 items-center">
                            <span className="flex items-center justify-center w-15 h-15 rounded-full bg-primary text-primary-foreground font-black text-sm shrink-0">
                                {icon ?? number}
                            </span>
                            <AccordionTrigger
                                onClick={() => setOpen(open === number ? '' : number)}
                                className="py-0 font-bold text-base"
                            >
                                {/* Spacer to keep it centered. Chevdown misaligns it. */}
                                <span className="size-4 shrink-0" />
                                {title}
                            </AccordionTrigger>
                        </div>
                        <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                            {description}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </div>
        </Accordion>
    )
}