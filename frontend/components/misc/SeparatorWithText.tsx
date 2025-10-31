import {Separator} from "@/components/ui/separator";

interface SeparatorWithTextProps {
    text: string;
}

export default function SeparatorWithText({text}: SeparatorWithTextProps) {
    return (
        <div className="flex items-center gap-4">
            <Separator className="flex-1"/>
            <span className="text-muted-foreground">{text}</span>
            <Separator className="flex-1"/>
        </div>
    );
}
