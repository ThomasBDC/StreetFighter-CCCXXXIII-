class personnage {
    constructor(pseudo, classe, sante, attaque) {
      this.pseudo     = pseudo;
      this.classe     = classe;
      this.sante      = sante;
      this.attaque    = attaque;
      this.niveau     = 1;
    }
    
    get informations() {
      return this.pseudo + " (" + this.classe + ") a " + this.sante + " points de vie et est au niveau " + this.niveau + ".";
    }
    
    evoluer() {
      this.niveau++;
      console.log(this.pseudo + ' passe au niveau ' + this.niveau + ' !');
    }
    
    verifierSante() {
      if(this.sante <= 0) {
        this.sante = 0;
        console.log(this.pseudo + " a perdu !");
      }
    }
  }
  
  class guile extends personnage {
    constructor(pseudo) {
      super(pseudo, "guile", 170, 90);
    }
    
    attaquer(personnage) {
      personnage.sante -= this.attaque;
      console.log(this.pseudo + ' attaque ' + personnage.pseudo + ' en lançant un Sonique Boom (' + this.attaque + ' dégâts)');
      
      this.evoluer();
      personnage.verifierSante();
    }
    
    coupSpecial(personnage) {
      personnage.sante -= this.attaque * 5;
      console.log(this.pseudo + ' attaque avec son coup spécial Coup de Pied Flash ' + personnage.pseudo + ' (' + this.attaque * 5 + ' dégâts)');
      personnage.verifierSante();
    }
  }
  
  class zangief extends personnage {
    constructor(pseudo) {
      super(pseudo, "zangief", 350, 50);
    }
    
    attaquer(personnage) {
      personnage.sante -= this.attaque;
      console.log(this.pseudo + ' attaque ' + personnage.pseudo + ' avec Coup de la Corde à linge (' + this.attaque + ' dégâts)');
      
      this.evoluer();
      personnage.verifierSante();
    }
    
    coupSpecial(personnage) {
      personnage.sante -= this.attaque * 5;
      console.log(this.pseudo + ' attaque avec son coup spécial Marteau-pilon Tourbillonnant ' + personnage.pseudo + ' (' + this.attaque * 5 + ' dégâts)');
      personnage.verifierSante();
    }
  }
  
  //var guile       = new guile('guile');
  //var zangief     = new  zangief('zangief');
  console.log(guile.informations);
  console.log(zangief.informations);
  zangief.attaquer(guile);
  console.log(guile.informations);
  guile.attaquer(zangief);
  console.log(zangief.informations);
  zangief.coupSpecial(guile);