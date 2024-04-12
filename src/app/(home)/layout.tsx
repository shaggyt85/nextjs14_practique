import { Hero, Description } from "@/app/components";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Hero />
            <Description />
            {children}
        </div>
    );
}
