enum GENERO {
	ACAO = "ação",
	DRAMA = "drama",
	COMEDIA = "comédia",
	ROMANCE = "romance",
	TERROR = "terror"
}
type filmes = {
	nome: string,
	anoDeLancamento: number,
	tipo: GENERO,
	nota?: number,

}

const catalogos: filmes = {
	nome: "a volta ao mundo",
	anoDeLancamento: 2000,
	tipo: GENERO.COMEDIA,
	nota: 6	
}
console.log(catalogos)