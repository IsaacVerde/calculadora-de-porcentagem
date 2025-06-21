//NOS USAMOS CONST AO INVES DE LET, PORQUE NAO PLANEJAMOS MUDAR O VALOR ATRIBUIDO A VARIAVEL.
//USAMOS LET QUANDO PLANEJAMOS ATUALIZAR FUTURAMENTE O VALOR OU ATUALIZA-LO

//DOCUMEN.GET ELEMENT BY ID É UM GPS QUE O JS USA PARA ACHAR UM ELEMENTO NO HTML
//NOS TEMOS OS ID QUE ATRIBUIMOS NO HTML
//PODEMOS ACESSAR USANDO (getElementById("ID ATRIBUIDO"))


// .VALUE SERVE PARA PEGAR OQUE O USUARIO ESCREVEU NO CAMPO DE INPUT
//SEM ISSO O JS ESTARIA LIDANDO COM A CAIXA E NAO COM O CONTEUDO DA CAIXA.
//COMBINADO COM O NUMBER, GARANTE QUE O RESULTADO VENHA EM NUMERO f

const form = document.getElementById("form-porcentagem");
const resutlado = document.getElementById("resultado");

form.addEventListener("submit", function (event){
event.preventDefault();

    const valor = Number(document.getElementById("valor").value);
    const porcentagem = Number(document.getElementById("porcentagem").value);

    const resultadoCalculo = (valor * porcentagem)/100;

    resutlado.innerHTML=`<p>${porcentagem} de ${valor} é <strong>${resultadoCalculo.toFixed(2)}</strong></p>`



});