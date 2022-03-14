export interface ListaUrl{
    titulo  : string,
    src     : string,
    routing?: boolean,
    categorias?: boolean
}
export interface Slider{
    titulo : string, 
    cuantosVeo : number,
    tituloEnlace : string,
    enlace : string,
    contenido : Array<Contenido>
}
export interface Contenido{
    imagen : string,
    titulo : string,
    descripcion : string, 
    año : number,
    subtitulos : boolean,
    edad : number
    prime? : boolean
}
