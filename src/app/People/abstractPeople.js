class AbstractPeople {

    constructor(id,name,mass,height,homeworldName,homeworlId) {
        if (this.constructor == AbstractPeople) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.id = id
        this.name = name
        this.mass = mass
        this.height = height
        this.homeworldName = homeworldName
        this.homeworlId = homeworlId
    }

    async init(){
       console.log('excelente')
    }

    getId() {
       return this.id;
    }

    getName() {
        return this.name;
    }

    getMass() {
        return this.mass;
    }

    getHeight() {
        return this.height;
    }

    getHomeworldName() {
        return this.homeworldName;
    }

    getHomeworlId() {
        return this.homeworlId;
    }

    getWeightOnPlanet(planetId){
        throw new Error('To be implemented');
    }

    getPerson(){
        return {
            name: this.getName(),
            mass: this.getMass(),
            height: this.getMass(),
            homeworldName: this.getHomeworldName(),
            homeworldId: this.getHomeworlId(),
        }
    }
}

module.exports = AbstractPeople