import { ServiceCards } from "@/components";
import type { Metadata } from "next";



export const metadata: Metadata = {
 title: 'Servicio',
 description: 'Servicios que presta la fundacion',
 keywords:['service','service page','fundacion','internado','apoyo psicosocial'],
};

export default function ServicePage(){
    return(
        <>
        < ServiceCards/>
        </>
    )
}