import type { Metadata } from "next";
import { AboutCards } from "@/components";


export const metadata: Metadata = {
    title: 'Quienes Somos',
    description: 'Conoce nuestra fundacion',
    keywords: ['about page', 'fundacion', 'internado', 'apoyo psicosocial', 'quienes somos'],
};

export default function AboutPage() {
    return (

        <AboutCards />
    )
}