import { Lustria, Andika, Open_Sans } from "next/font/google";
import { Poppins } from "next/font/google";

export const lustria = Lustria({
    weight:'400',
    style:['normal'],
    subsets:['latin']
})

export const poppins = Poppins({
    weight:["400", "600"],
    subsets:["latin"],
    
})
export const andika = Andika({
    style:'normal',
    subsets:['latin'],
    weight:'400'
})

export const open_sans = Open_Sans({
    weight:'500',
    subsets:['greek'],
    style:'normal'
})