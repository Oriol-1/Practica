
class Treballador {
    constructor(nom, cognom, carrec, disponibilitatTrasllat) {
        this.nom = nom;
        this.cognom = cognom;
        this.carrec = carrec;
        this.disponibilitatTrasllat = disponibilitatTrasllat;
    }


    //GETTERS & SETTERS

    get nom() {
        return this._nom;
    }

    set nom(nom) {
        this._nom = nom;
    }

    get cognom() {
        return this._cognom;
    }

    set cognom(cognom) {
        this._cognom = cognom;
    }

    get carrec() {
        return this._carrec;
    }

    set carrec(carrec) {
        this._carrec = carrec;
    }

    get disponibilitatTrasllat() {
        return this._disponibilitatTrasllat;
    }

    set disponibilitatTrasllat(disponibilitatTrasllat) {
        this._disponibilitatTrasllat = disponibilitatTrasllat;
    }

}