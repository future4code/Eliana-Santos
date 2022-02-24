export class Recipe {

    constructor(
        private id: string,
        private title: string,
        private description: string,
        private data_da_criacao: Date,
       
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
    return this.data_da_criacao
}

    static toRecipeModel(data: any): Recipe {
        return new Recipe(data.id, data.title, data.description, data.data_da_criacao)
    }
}