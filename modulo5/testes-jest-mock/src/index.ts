export interface Caracteristica {
    nome: string;
    vida: number;
    forca: number;
    defesa: number;
}

export const validaCaracteristica = (input: Caracteristica): boolean => {
    if (
        !input.nome ||
        input.vida === undefined ||
        input.forca === undefined ||
        input.defesa === undefined
    ) {
        return false;
    }

    if (input.vida <= 0 || input.forca <= 0 || input.defesa <= 0) {
        return false;
    }

    return true;
};

export const performAttack = (ataque: Caracteristica, defesa: Caracteristica) => {
    if (!validaCaracteristica(ataque) || !validaCaracteristica(defesa)) {
      throw new Error("Invalid character");
    }
  
    if (ataque.forca > defesa.defesa) {
      defesa.vida -= ataque.forca - defesa.defesa;
    }
  };

/*   export const performAttack = (ataque: Caracteristica, defesa: Caracteristica, validator: (input: Caracteristica) => boolean
  ) => {
    if (!validator(ataque) || !validator(defesa)) {
      throw new Error("Invalid character");
    }
  
    if (ataque.forca > defesa.defesa) {
      defesa.vida -= ataque.forca - defesa.defesa;
    }
  }; */

  