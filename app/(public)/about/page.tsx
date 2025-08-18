import type { Metadata } from "next";
import  { AboutCards } from "@/components";


export const metadata: Metadata = {
 title: 'about',
 description: 'Conoce nuestra fundacion',
 keywords:['about page','fundacion','internado','apoyo psicosocial'],
};

export default function AboutPage(){
    return(
       
        <AboutCards/>
    )
}