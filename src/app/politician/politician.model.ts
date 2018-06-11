export class Politician {
  name: string;
  state: string;
  party: string;
  bio: string;

  constructor(name: string, state: string, party: string, bio: string){
    this.name = name;
    this.state = state;
    this.party = party;
    this.bio = bio;
  }
}
