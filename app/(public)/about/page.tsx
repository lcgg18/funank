import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'about',
 description: 'Conoce nuestra fundacion',
 keywords:['about page','fundacion','internado','apoyo psicosocial'],
};

export default function AboutPage(){
    return(
        <>
        <span>About Page</span>
        </>
    )
}