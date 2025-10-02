const formEndereco = document.getElementById('form-endereco');

const inputCEP = document.getElementById('cep');
const inputLogradouro = document.getElementById('logradouro');
const inputNumero = document.getElementById('numero');
const inputUF = document.getElementById('uf');

inputCEP.addEventListener('input', (event) => {
    let valor = event.target.value.replace(/\D/g, ''); 
    
    valor = valor.replace(/^(\d{5})(\d{1,3})$/, '$1-$2'); 
    
    event.target.value = valor;
});

inputUF.addEventListener('input', (event) => {
    event.target.value = event.target.value.toUpperCase();
});

inputNumero.addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/\D/g, '');
});

const validarCEP = (cep) => {
    if (!cep) {
        return "O campo CEP é obrigatório.";
    }
    const regexCEP = /^\d{5}-\d{3}$/;
    if (!regexCEP.test(cep)) {
        return "O CEP deve estar no formato 00000-000.";
    }
    return null;
};

const validarLogradouro = (logradouro) => {
    if (!logradouro) {
        return "O campo Logradouro é obrigatório.";
    }
    if (logradouro.length < 5) {
        return "O Logradouro deve ter no mínimo 5 caracteres.";
    }
    return null;
};

const validarNumero = (numero) => {
    if (!numero) {
        return "O campo Número é obrigatório.";
    }
    const regexNumero = /^\d+$/; 
    if (!regexNumero.test(numero)) {
        return "O campo Número deve conter apenas dígitos.";
    }
    return null;
};

const validarUF = (uf) => {
    if (!uf) {
        return "O campo UF é obrigatório.";
    }
    const regexUF = /^[A-Z]{2}$/;
    if (!regexUF.test(uf)) {
        return "O campo UF deve ter exatamente 2 letras maiúsculas (Ex: SP).";
    }
    return null;
};

formEndereco.addEventListener('submit', (event) => {
    event.preventDefault();

    const cep = inputCEP.value;
    const logradouro = inputLogradouro.value;
    const numero = inputNumero.value;
    const uf = inputUF.value;
    
    const erroCEP = validarCEP(cep);
    const erroLogradouro = validarLogradouro(logradouro);
    const erroNumero = validarNumero(numero);
    const erroUF = validarUF(uf);

    const erros = [erroCEP, erroLogradouro, erroNumero, erroUF].filter(erro => erro !== null);

    if (erros.length > 0) {
        erros.forEach(erro => alert(erro));
        return; 
    }

    alert(`Endereço cadastrado com sucesso
👉 CEP: ${cep}
👉 Logradouro: ${logradouro}
👉 Número: ${numero}
👉 UF: ${uf}`);
});