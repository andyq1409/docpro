export class DocParams {
    private _package: string;
    private _product: string;
    private _descr: string;
    private _basein: string;
    private _office: string;
    private _regnotes: string;
    private _diffnotes: string;

    constructor() {
        this._package = "-";
        this._product = "-";
        this._descr = "-";
        this._basein = "-";
        this._office = "-";
        this._regnotes = "-";
        this._diffnotes = "-";
      }

      get package() {
        return this._package;
      }
      set package(value: string) {
        if (value != null) {
            this._package = value;
        }
      }


      get product() {
        return this._product;
      }
      set product(value: string) {
        if (value != null) {
            this._product = value;
        }
      }

      
      get descr() {
        return this._descr;
      }
      set descr(value: string) {
        if (value != null) {
            this._descr = value;
        }
      }

      
      get basein() {
        return this._basein;
      }
      set basein(value: string) {
        if (value != null) {
            this._basein = value;
        }
      }

      
      get office() {
        return this._office;
      }
      set office(value: string) {
        if (value != null) {
            this._office = value;
        }
      }

      
      get regnotes() {
        return this._regnotes;
      }
      set regnotes(value: string) {
        if (value != null) {
            this._regnotes = value;
        }
      }

      
      get diffnotes() {
        return this._diffnotes;
      }
      set diffnotes(value: string) {
        if (value != null) {
            this._diffnotes = value;
        }
      }





}