// Referências do DOM - HTML



const btncep = document.getElementById('btncep');
const lblbairro = document.getElementById('lblbairro');
const lbllogradouro= document.getElementById('lbllogradouro');
const lbluf = document.getElementById('lbluf');
const lblcep = document.getElementById('lblcep');

const lblcity = document.getElementById('lblcity');
const lbltemp = document.getElementById('lbltemp');
const lbldate = document.getElementById('lbldate');
const btntempo = document.getElementById('btntempo');
const lbldescription = document.getElementById('lbldescription');

const lblBTC = document.getElementById('lblBTC');
const btnConsultar = document.getElementById('btnConsultar');

const lblDolar = document.getElementById('lblDolar')
const btnconsultard = document.getElementById('btnconsultard')

//Lógica de Programção

const APIcep = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
});

const API = axios.create({
    baseURL:'https://www.mercadobitcoin.net/api/BTC/ticker/'
});

const APItemp = axios.create({
   baseURL: 'https://api.hgbrasil.com/weather?format=json-cors&key=beb256c4&city_name=Volta_Redonda'
});

const APIDolar = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL'

});

//btc
async function consultarBTC(){
    const response = await API.get();
    console.log(response.data.ticker.high);
    lblBTC.innerHTML = response.data.ticker.high;
};


btnConsultar.onclick = ()=>{
    consultarBTC();
};

// tempoclima

async function tempoclima(){
    const response = await APItemp.get();
    console.log(response.data.results.city);
    lblcity.innerHTML = response.data.results.city;
    console.log(response.data.results.date);
    lbldate.innerHTML = response.data.results.date;
    console.log(response.data.results.temp);
    lbltemp.innerHTML = response.data.results.temp + '°';
    console.log(response.data.results.description);
    lbldescription.innerHTML = response.data.results.description;
    
};
btntempo.onclick = ()=>{
    tempoclima();
};

///cep

async function ConsultarCep(){
    const cep = inpcep.value
    const response = await APIcep.get(cep + /json/);
    console.log(response.data.bairro);
   console.log(response.data.uf);
   console.log(response.data.logradouro);
   lblbairro.innerHTML = response.data.bairro;
   lbluf.innerHTML = response.data.uf;
    lbllogradouro.innerHTML = response.data.logradouro;

};

btncep.onclick = ()=>{
   ConsultarCep();
};

//Dolar

async function consultarDolar(){
     const response = await APIDolar.get()
     const dol = (response.data.USDBRL)
     console.log(response.data.USDBRL.high);
    lblDolar.innerHTML ='R$'+ response.data.USDBRL.high ;
};

btnconsultard.onclick = ()=>{
    consultarDolar();
};
