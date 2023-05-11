import { persona } from "../model/persona1";
import * as Daopersona from "../dao/persona1.dao"; 

export const GetPersonas = async (): Promise<persona[]> => {

    try {
        let p: persona[] = await Daopersona.ListasPersonas();
        return p;
    } catch (error) {
        throw error;
    }
}

export const AddPersona = async (P: persona): Promise <boolean> => {
    try {
        return Daopersona.CrearPersona(P);
    } catch (error) {
        throw error;
        
    }
}