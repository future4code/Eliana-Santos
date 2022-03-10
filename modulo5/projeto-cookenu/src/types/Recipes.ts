export class Recipe {

    constructor(
        private id: string,
        private title: string,
        private description: string,
        private creatAt: Date,
        private idUser: string
       
    ) { }
public getIdRecipe(){
    return this.id
}
public getTitle(){
    return this.title
}
public getDescription(){
    return this.description
}
public getData(){
    return this.creatAt
}
public getIdUser(){
    return this.idUser
}

    static toRecipeModel(data: any): Recipe {
        return new Recipe(data.id, data.title, data.description, data.creatAt, data.idUser)
    }
}