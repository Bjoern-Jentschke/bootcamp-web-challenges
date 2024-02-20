import { Chance } from "chance";

const chance = new Chance();
const character = {
  id: "2",
  firstName: chance.first(),
  lastName: chance.last(),
  age: chance.age(),
  profession: chance.profession(),
  twitterName: chance.twitter(),
  geoHash: chance.geohash(),
};

export default function handler(request, response) {
  response.status(200).json(character);
}
