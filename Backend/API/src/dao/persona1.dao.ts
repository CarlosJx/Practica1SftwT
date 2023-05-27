import GetConnection from "../conexion/conexion";
import { persona } from "../model/persona1";

export const ListasPersonas = async (): Promise<persona[]> => {
    try {
        let sql = "SELECT * FROM persona;";
        const pool = await GetConnection();
        let rs = await pool.query<persona>(sql);

        if(rs!=undefined){
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export async function CrearPersona(P:persona): Promise<boolean>{
    try {
        let sql=`INSERT INTO persona(Nombre) VALUES ('${P.nombre}')`; 
        const pool = await GetConnection();
        let rs = await pool.query<persona>(sql);
        if(rs!=undefined){
            return rs.rowsAffected.length == 1;
        }
        return false;

    } catch (error) {
        throw error;
    }
}