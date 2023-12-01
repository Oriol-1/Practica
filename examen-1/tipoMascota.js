class Puppy{
    constructor(
        raza,
        origen,
        alturaCm,
        pesoKg,
        pelo,
        colores,
        caracter,
        esperanzaVida,
        tipoMascota
    ){
        this.raza = raza;
        this.origen = origen;
        this.alturaCm = alturaCm;
        this.pesoKg = pesoKg;
        this.pelo = pelo;
        this.colores = colores;
        this.caracter = caracter;
        this.esperanzaVida = esperanzaVida;
        this.tipoMascota = tipoMascota;
    }

      //Getters
    getRaza(){
        return this.raza;
    }
    getOrigen(){
        return this.origen;
    }
    getAlturaCm(){
        return this.alturaCm;
    }
    getPesoKg(){
        return this.pesoKg;
    }
    getPelo(){
        return this.pelo;
    }
    getColores(){
        return this.colores;
    }
    getCaracter(){
        return this.caracter;
    }
    getEsperanzaVida(){
        return this.esperanzaVida;
    }
    getTipoMascota(){
        return this.tipoMascota;
    }
     //Setters
    setRaza(raza){
        this.raza = raza;
    }
    setOrigen(origen){
        this.origen = origen;
    }
    setAlturaCm(alturaCm){
        this.alturaCm = alturaCm;
    }
    setPesoKg(pesoKg){
        this.pesoKg = pesoKg;
    }
    setPelo(pelo){
        this.pelo = pelo;
    }
    setColores(colores){
        this.colores = colores;
    }
    setCaracter(caracter){
        this.caracter = caracter;
    }
    setEsperanzaVida(esperanzaVida){
        this.esperanzaVida = esperanzaVida;
    }
    setTipoMascota(tipoMascota){
        this.tipoMascota = tipoMascota;
    }

    toString(){
        let resultado = "el objeto Puppu";
        resultado += "\n raza" + this.raza;
        resultado += "\n origen" + this.origen;
        resultado += "\n alturaCm" + this.alturaCm;
        resultado += "\n pesoK" + this.pesoK;
        resultado += "\n pelo" + this.pelo;
        resultado += "\n colores" + this.colores;
        resultado += "\n caracter" + this.caracter;
        resultado += "\n esperanzaVida" + this.esperanzaVida;
        resultado += "\n tipoMascota" + this.tipoMascota;

       return resultado;



    }

    
}