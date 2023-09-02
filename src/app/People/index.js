//const WookieePeople = require('./wookieePeople');
const CommonPeople = require("./commonPeople");

const peopleFactory = async (args, lang) => {
  let people = null;
  if (lang == "wookiee") {
    people = new WookieePeople(id);
  } else {
    people = new CommonPeople(
      args.id,
      args.name,
      args.mass,
      args.height,
      args.homeworld_name,
      args.homeworld_id
    );
    console.log(people.getPerson())
  }
  await people.init();
  return people;
};

module.exports = { peopleFactory };
