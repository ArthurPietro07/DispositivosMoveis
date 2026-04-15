let totalMoedas = 0;

for (let moeda = 1; moeda <= 10; moeda++) {
    let valor = Math.random() > 0.3 ? 0.25 : 0.50;
    totalMoedas += valor;
    console.log(`Moeda ${moeda}: R$ ${valor.toFixed(2)}`)
}
 console.log(`Total economizado: R$ ${totalMoedas.toFixed(2)}`)