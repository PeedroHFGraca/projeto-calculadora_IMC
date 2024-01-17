const form = document.getElementById('form');

form.addEventListener('submit', function(event){ // Quando clicar no BUTTON para enviar os dados(Submit), chamará a função(evento)
    event.preventDefault()  // Impedir o comportamento da página atualizar automaticamente ao enviar os dados dos inputs clicando no BUTTON

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2) // fazer o calculo do IMC com 2 casas decimais

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attencion')// Adicionar a class('attencion') nas frases. Por padrão deixaremos todas as frases com cor Vermelha 

    document.getElementById('infos').classList.remove('hidden') // fazer as 'Infos' aparecer

    if (bmi < 18.5){
        description = 'Cuidado! Você está abaixo do peso!'
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = 'Você está no peso ideal!'
        value.classList.remove('attencion')
        value.classList.add('normal')// Removendo cor vermelha e adicionando cor verde
        // Adicionar a class('attencion') nas frases. Por padrão deixaremos todas as frases com cor Vermelha para não ter que adicionar em todas

    } else if (bmi > 25 && bmi <=30) {
        description = 'Cuidado! Você está com sobrepeso!'
    } else if(bmi > 30 && bmi <= 35) {
        description = 'Cuidado! Você está com obesidade moderada!'
    } else if(bmi > 35 && bmi <= 40) {
        description = 'Cuidado! Você está com obesidade several!'
    } else {
        description = 'Cuidado! Você está com obesidade morbida!'
    }

    value.textContent = bmi.replace('.', ','); // Trocar o ponto pela vírgula
    document.getElementById('description').textContent = description; // Fazer o texto acima aparecer
});