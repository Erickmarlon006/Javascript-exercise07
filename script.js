var frase = document.querySelector('#frase');
var deslocamento = document.querySelector('#deslocamento');
var frasePronta = document.querySelector("#frase-pronta");

var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G' ,'H', 'I', 'J', 'K', 'L', 'M', 'N' ,'O' ,'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G' ,'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O' ,'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
const Alfabeto2 = [A = 0,  B = 1, C = 2,  D = 3,
        E = 4, F = 5,  G = 6,  H = 7,
         I = 8,  J = 9,  K = 10,  L = 11,
         M = 12,  N = 13,  O = 14, P = 15, 
         Q = 16,  R = 17,  S = 18,  T = 19,
         U = 20,  V = 21, W = 22,  X = 23,
         Y = 24,  Z = 25
]
deslocamento.onchange = function(){
    
    var fraseCifrada = frase.value.replaceAll('a', alfabeto[Alfabeto2[0] + parseInt(deslocamento.value)])
    .replaceAll('b', alfabeto[Alfabeto2[1] + parseInt(deslocamento.value)])
    .replaceAll('c', alfabeto[Alfabeto2[2] + parseInt(deslocamento.value)]).replaceAll('d', alfabeto[Alfabeto2[3] + parseInt(deslocamento.value)]).replaceAll('e',alfabeto[Alfabeto2[4] + parseInt(deslocamento.value)]).replaceAll('f', alfabeto[Alfabeto2[5] + parseInt(deslocamento.value)])
    .replaceAll('g', alfabeto[Alfabeto2[6] + parseInt(deslocamento.value)]).replaceAll('h', alfabeto[Alfabeto2[7] + parseInt(deslocamento.value)]).replaceAll('i', alfabeto[Alfabeto2[8] + parseInt(deslocamento.value)]).replaceAll('j', alfabeto[Alfabeto2[9] + parseInt(deslocamento.value)]).replaceAll('k', alfabeto[Alfabeto2[10] + parseInt(deslocamento.value)])
    .replaceAll('l', alfabeto[Alfabeto2[11] + parseInt(deslocamento.value)]).replaceAll('m', alfabeto[Alfabeto2[12] + parseInt(deslocamento.value)]).replaceAll('n', alfabeto[Alfabeto2[13] + parseInt(deslocamento.value)])
    .replaceAll('o', alfabeto[Alfabeto2[14] + parseInt(deslocamento.value)]).replaceAll('p', alfabeto[Alfabeto2[15] + parseInt(deslocamento.value)]).replaceAll('q', alfabeto[Alfabeto2[16] + parseInt(deslocamento.value)])
    .replaceAll('r', alfabeto[Alfabeto2[17] + parseInt(deslocamento.value)]).replaceAll('s', alfabeto[Alfabeto2[18] + parseInt(deslocamento.value)]).replaceAll('t', alfabeto[Alfabeto2[19] + parseInt(deslocamento.value)])
    .replaceAll('u', alfabeto[Alfabeto2[20] + parseInt(deslocamento.value)]).replaceAll('v', alfabeto[Alfabeto2[21] + parseInt(deslocamento.value)]).replaceAll('w', alfabeto[Alfabeto2[22] + parseInt(deslocamento.value)]).replaceAll('x', alfabeto[Alfabeto2[23] + parseInt(deslocamento.value)]).replaceAll('y', alfabeto[Alfabeto2[24] + parseInt(deslocamento.value)])
    .replaceAll('z', alfabeto[Alfabeto2[25] + parseInt(deslocamento.value)]);
    frasePronta.value = fraseCifrada;
}
