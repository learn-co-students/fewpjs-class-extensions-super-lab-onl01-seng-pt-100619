// Write your classes here

class Tree{
    constructor(species){
        this.species = species
    }

    static definition(){
        return 'A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.'
    }

}

class Deciduous extends Tree{
    constructor(species, name){
        super(species) // super has to be called in order to have access to super in  the rest of the class
        this.name = name
    }

    static definition(){
        return super.definition() + " Deciduous trees shed their leaves annually."
    }
}

class Evergreen extends Tree{
    constructor(species, name){
        super(species) //species is used in the Tree constructor
        this.name = name
    }

    static definition(){
        return super.definition() + " Evergreens keep their leaves all year round." // custom static method
    }
}