var Icone = $('.IconSvg');


var Ovelha = $('#Ovelha');


var StartBtn = $('#StartButton');


var Cont = 0;

var PerguntaAtual = 0;

var Perguntas = [
    {Pergunta: 'Qual o nome dado ao processo de eletrização de átomos?', Opções: ['Decaimento', 'Ionização', 'Decaimento', 'Eletrólise'], Resposta: 1},
    {Pergunta: 'Baseada na configuração eletrônica dos gases nobres, a Regra do Octeto determina a estabilidade do átomo. Segundo ela, o átomo está estável quando?', Opções: ['Possui 8 átomos em sua camada de valência', 'Possui 8 protóns em sua camada de valência', 'Possui 8 neutróns em sua camada de valência', 'Possui 8 eletróns em sua camada de valência'], Resposta: 3},
    {Pergunta: 'As unidades constituintes dos sólidos: óxido de magnésio (MgO), iodo (I2) e platina (Pt) são, respectivamente:', Opções: ['átomos, íons e moléculas', 'íons, átomos e moléculas', 'íons, moléculas e átomos', 'moléculas, átomos e íons'], Resposta: 2},
    {Pergunta: 'O átomo de um elemento químico tem 14 elétrons no 3º nível energético (n = 3). O número atômico desse elemento é:', Opções: ['14', '16', '24', '26'], Resposta: 3},
    {Pergunta: 'Assinale a alternativa correta.', Opções: ['O número máximo de ligações covalentes possível para os elementos da família dos calcogênios é 2', 'O nitrato de sódio é um composto iônico que apresenta ligações covalentes', 'Uma molécula com ligações polares é uma molécula polar', 'Não existe força de atração eletrostática entre moléculas apolares'], Resposta: 1},
];


Icone.click(()=>{
    if(Cont == 0)
    {
        Ovelha.css('top', '0px');
        $('#IconSvg').attr('fill', '#0d0229');

        Cont = 1;
    }
    else
    {
        Ovelha.css('top', '-100%');
        $('#IconSvg').attr('fill', '#d1d1d1');

        Cont = 0;
    }
});

StartBtn.click(() => {window.location.href = 'Perguntas.html'});


document.onload = ConfigPergunta();


function ConfigPergunta()
{
    $('#Pergunta').text(Perguntas[PerguntaAtual].Pergunta);
    $('.Opções').each(function (In){
        $(this).text(Perguntas[PerguntaAtual].Opções[In]);
        console.log('AAA');
    })
    $('.Opções').click(function(){
        if($(this).index() - 1 == Perguntas[PerguntaAtual].Resposta)
        {
            PerguntaAtual++;
            alert('Resposta certa');
            ConfigPergunta();
        }
        else
        {
            alert('Resposta errada, tente denovo');
        }
    })
}