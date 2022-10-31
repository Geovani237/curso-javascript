/*
ENDEREÇO DO CEP : 13455186
Rua almirante Barroso,412 - Frezzarin
SBO /SP 
*/

function BuscarCEP(){
    // let cep = 13455186
    let cep = $('#pegar-cep').val()
    $.ajax({
        type: "GET",
        url: "https://cep.awesomeapi.com.br/json/" + cep,
        dataType: "json",
        success: function (dados) {

            let rua = dados.address
            let bairo = dados.district
            let cidade = dados.city
            let estado = dados.state
            $('#resultado-pesquisa').html(rua + "-" +bairo+ "-" +cidade+ "/" +estado)

        // console.dir(dados)
        // console.log(dados.address)
        // console.log(dados.district)
        // console.log(dados.city)
        // console.log(dados.state)
        }
    });
}