const { traslate} = require('../../utils/utils')

class WookieePeople {

    constructor(id,name,mass,height,homeworldName,homeworlId) {
        this.id = id
        this.name = name
        this.mass = mass
        this.height = height
        this.homeworldName = homeworldName
        this.homeworlId = homeworlId
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
            whrascwo: traslate(this.getName()),
            acwoahrracao: this.getHeight(),
            scracc: this.getMass(),
            acooscwoohoorcanwaWhrascwo: traslate(this.getHomeworldName()),
            acooscwoohoorcanwaAhwa: this.getHomeworlId(),
        }
    }
}

module.exports = WookieePeople