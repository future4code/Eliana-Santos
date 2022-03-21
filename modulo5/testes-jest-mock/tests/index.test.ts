import { validaCaracteristica } from "../src";

test("Should return false for empty name", () => {
    const result = validaCaracteristica({
        nome: "",
        vida: 1500,
        forca: 300,
        defesa: 500,
    });

    expect(result).toBe(false);
});

test("Should return false for life 0", () => {
    const result = validaCaracteristica({
        nome: "Tartaruga-Ninja",
        vida: 0,
        forca: 300,
        defesa: 500,
    });

    expect(result).toBe(false);
});

test("Should return false for strength 0", () => {
    const result = validaCaracteristica({
        nome: "tutu-baba",
        vida: 1500,
        forca: 0,
        defesa: 500,
    });

    expect(result).toBe(false);
});

test("Should return false for defense 0", () => {
    const result = validaCaracteristica({
        nome: "Coelho-fofo",
        vida: 1500,
        forca: 300,
        defesa: 0,
    });

    expect(result).toBe(false);
});

test("Should return false for defense value negative", () => {
    const result = validaCaracteristica({
        nome: "Scorpion",
        vida: 100,
        forca: 500,
        defesa: -50,
    });

    expect(result).toBe(false);
});
test("Should return true for all valid inputs", () => {
    const result = validaCaracteristica({
        nome: "Scorpion",
        vida: 1500,
        forca: 300,
        defesa: 500,
    });

    expect(result).toBe(true);
});
