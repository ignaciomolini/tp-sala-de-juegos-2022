export class Usuario {
    nombre:string;
    email:string;
    password:string;
   
    public constructor(nombre:string, email:string,password:string){
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
}
