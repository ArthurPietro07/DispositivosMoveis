function calcularDesconto(preco, percentual) {
    return preco - (preco * percentual / 100);
}

console.log(`O preço com desconto é ${calcularDesconto(200, 10)}.`);
console.log(`O preço com desconto é ${calcularDesconto(215, 60)}.`);