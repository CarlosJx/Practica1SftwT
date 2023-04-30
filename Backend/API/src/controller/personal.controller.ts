import { persona } from "../model/persona1";

export const GetPersonas = ():persona[]=>{
    let p:persona[] = [];
    p.push({id:1, nombre: "Carlos"});
    p.push({id:2, nombre: "Maria"});
    return p;
}