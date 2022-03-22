export class User{
    constructor(
    private id: string,
    private firstName: string,
    private lastName: string,
    private participation: string,
    
    ){}

    getId(){
        return this.id;
    }

    getFirstName(){
        return this.firstName
    }

    getLastName(){
        return this.lastName;
    }

     getParticipation(){
        return this.participation;
    }

    setId(id: string){
        this.id = id;
    }

    setFirstName(firstName: string){
        this.firstName = firstName;
    }

    setLastName(lastName: string){
        this.lastName = lastName;
    }

    setParticipation(participation: string){
        this.participation = participation;
    }


    static toUserModel(user: any): User {
        return new User(user.id, user.firstName, user.lastName, user.participation);
      }


}

export interface UserInputDTO{
    firstName: string;
    lastName: string;
    participation: string;
    
}

