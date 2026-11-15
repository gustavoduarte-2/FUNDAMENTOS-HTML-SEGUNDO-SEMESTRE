function verificar() {
    // criando um array com asnotas
    let nota = [8,5,9,6,7,4,10];
    let resultado = document.getElementById("resultado");
    // Limpando resultado
    resultado.innerHTML = ""
    //Percorredno o array
    for (let i=0; i < notas.length; i++)
        resultado.innerHTML += "<p>Aluno" + (i+1) + " = Nota:" + notas[i] + "<p> style='color:green'"
}