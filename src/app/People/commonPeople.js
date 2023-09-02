const AbstractPeople = require('./abstractPeople')

class CommonPeople extends AbstractPeople {
    constructor(id,name,mass,height,homeworldName,homeworlId){
      super(id,name,mass,height,homeworldName,homeworlId)
    }
}

module.exports = CommonPeople
