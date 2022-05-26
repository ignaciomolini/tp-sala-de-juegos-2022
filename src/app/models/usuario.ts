export class Usuario {
    uid: string;
    nombre: string;
    email: string;
    password: string;
    perfil: string;

    public constructor(uid: string, nombre: string, email: string, password: string, perfil: string) {
        this.uid = uid;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.perfil = perfil;
    }
}
