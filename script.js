//let idadeDoDependente = Number(prompt("Qual é a idade do seu dependente?"))

// if (idadeDoDependente >= 13)
//     if (idadeDoDependente <=17){
//     console.log(idadeDoDependente)
//     alert("Seu dependente já pode ter um cartão de crédito vinculado ao seu.")
//     }else{
//     console.log(idadeDoDependente)
//     alert("Consulte outras possibilidades do Labank")
// }else{
//     console.log(idadeDoDependente)
//     alert("Consulte outras possibilidades do Labank")
// }

// if(idadeDoDependente >= 13 && idadeDoDependente <= 17){
//     console.log("Seu dependente já pode ter um cartão de crédito vinculado ao seu.")
// }else{
//     console.log("Consulte outras possibilidades do Labank")
// }

// console.log(typeof idadeDoDependente);
// idadeDoDependente === 13? console.log("a Idade é 13 e já pode ter um cartão") : console.log("Verifique as opções possíveis")



// if(idadeDoDependente === 13){

//     console.log("A idade do dependente é 13 e já pode ter um cartão" ? 13 : !13)
//     console.log("a idade é 13 e pode ter caartão")
// }else{
//     console.log("Verifique outras possobilidades")
// }


/*A Labank gostou muito do seu trabalho e quer implementar um serviço de escolha do cartão pelo ramal telefónico. 
1 para ‘Fácil’
2 para ‘Black’
3 para ‘Platinum’
4 para ‘Master Gold’
E caso não seja nenhuma dessas opções a mensagem deve ser ‘Escolha umas das quatro opções disponíveis’*/

// let escolhaCartao
// const ramal = Number(prompt(`Digite um número equivalente a um serviço abaixo: 
// 1 - Fácil; 
// 2 - Black; 
// 3 - Platinum; 
// 4- Master Gold.`))

// switch(ramal){
//     case 1 :
//         console.log("Fácil");
//         break;
//     case 2 :
//         console.log("Black");
//         break;
//     case 3 :
//         console.log("Platinum");
//         break;
//     case 4 :
//         console.log("Master Gold");
//         break;
//     default : 
//         console.log("Escolha uma das quatro opões disponíveis");
// }


// Crie um código que receba um número por prompt e verifique se um número é divisível por 2 e por 3. Faça isso:
//  Utilizando ifs aninhados
// Utilizando um operador lógico para unir duas operações relacionais

let numeroQualquer = Number(prompt("Digite um número qualquer"))

if((numeroQualquer % 2 === 0) && (numeroQualquer % 3 === 0)){
    console.log("o Número é divisível por 2 e por 3.")
    }if(numeroQualquer % 2 === 1 || numeroQualquer % 3 === 1){
        console.log("só é divisivel por um dos dois")
    
}else{
    console.log("O número não é divísivel por 2 e nem por 3")
}
numeroQualquer === 30 ? console.log("UFA, ACERTEI!") : console.log("Não foi dessa vez ):");

switch(numeroQualquer){
    case 6 :
        console,log("o numero é 6");
        break;
    case 12 :
        console.log("o numero é 12");
        break;
    case 18 :
        console.log("o numero é 18");
        break;
    case 24 :
        console.log("o numero é 24");
        break;
    case 30 :
        console.log("o numero é 30");
        break;
    default :
        console.log("o numero não está no banco de números");
}