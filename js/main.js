$(document).ready(function(){
    $('#carousel').slick({
        autoplay: true
        
    })
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    })
   

    
    
    
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
        },
        messages:{
            nome: 'Por favor, preencha o campo acima',
            email: 'Por favor, preencha o campo acima',
            telefone: 'Por favor, preencha o campo acima'
        },
      
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    })
})
