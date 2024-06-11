'use strict'

        const versao = "v1"
        const url = `http://localhost:8080`

        async function getClientes() {
            const link = `${url}/${versao}/lavaRapido/funcionarios`
            const response = await fetch(link)
            const data = await response.json()
            return data.funcionarios
        }

        async function displayFuncionarios() {
            const funcionarios = await getClientes()
            const funcionariosList = document.getElementById('funcionarios-list')

            funcionarios.forEach(funcionario => {                
                const cargo = funcionario.cargo
                const nome = funcionario.nome

                //const enderecos = funcionario.endereco.map(endereco => endereco.rua).join(', ')


                const nomeFuncionario=document.createElement('p')
                nomeFuncionario.textContent=nome
                const funcao=document.createElement('p')
                funcao.textContent=cargo
                
                funcionariosList.replaceChildren(nomeFuncionario,funcao)
            })
        }

        

        displayFuncionarios()







        
 async function postCliente(dados) {
    const link=`${url}/${versao}/lavaRapido/funcionario`
    const options={
        method:`POST`,
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(dados)
    }
    const response=await fetch(link,options)
    return response.ok
}


function Servicos() {
    const add = document.getElementById('add')
    add.classList.toggle('show')
}

function adicionarServico() {
    const trabalho = document.getElementById('trabalho').value
    const descricao = document.getElementById('descricao').value
    const preco = document.getElementById('preco').value

    if (trabalho && tipo && preco) {
        const reader = new FileReader()
        reader.onload = function (e) {
            const servicosDiv = document.getElementById('servicos')
            const servico = document.createElement('div')
            servico.classList.add('bg-red', 'p-4', 'rounded-md', 'shadow-md', 'flex', 'justify-between', 'items-center')

            servico.innerHTML = `
                <div>
                    <p><strong>Trabalho:</strong> ${trabalho}</p>
                    <p><strong>Descricao:</strong> ${descricao}</p>
                    <p><strong>Preço:</strong> ${preco}</p>
                </div>
                <button class="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onclick="excluirServico(this)"> Excluir </button>
            `
            servicosDiv.appendChild(servico)
        }

    } else {
        alert('Por favor, preencha todos os campos.')
    }
}

function excluirServico(button) {
    const servico = button.parentElement;
    servico.remove()
}

function toggleMenu() {
    const menu = document.getElementById('menu')
    menu.classList.toggle('show')
}

const btn_adicionar=document.getElementById('btn_adicionar')
btn_adicionar.addEventListener('click', adicionarProfissional)

async function adicionarProfissional() {
    const addProfissional = document.getElementById('addProfissional').value
    const addEmail = document.getElementById('addEmail').value
    const addSenha = document.getElementById('addSenha').value
    const addCargo = document.getElementById('addCargo').value
    const addTelefone = document.getElementById('addTelefone').value
    const addRua = document.getElementById('addRua').value
    const addCep = document.getElementById('addCep').value
    const addNumero = document.getElementById('addNumero').value
    const addComplemento = document.getElementById('addComplemento').value
    const addBairro = document.getElementById('addBairro').value
    const addEstado = document.getElementById('addEstado').value
    const addCidade = document.getElementById('addCidade').value

    const novoClienteJSON = {
        nome: addProfissional,
        email: addEmail,
        senha: addSenha,
        cargo: addCargo,
        telefone: addTelefone,
        rua: addRua,
        cep: addCep,
        numero: addNumero,
        complemento: addComplemento,
        bairro: addBairro,
        estado: addEstado,
        cidade: addCidade
    }
    
    const result = await postCliente(novoClienteJSON)
    
    if(result){
        window.location.reload()
    } else {
        alert("Ocorreu um erro ao criar a sua conta")
    }

    
    if (addProfissional && addCargo) {
        const reader = new FileReader()
        reader.onload = function (e) {
            const anunciosDiv = document.getElementById('anuncios');
            const anuncio = document.createElement('div');
            anuncio.classList.add('bg-white', 'p-4', 'rounded-md', 'shadow-md', 'flex', 'justify-between', 'items-center')

            anuncio.innerHTML = `
                <div>
                    <p><strong>Adicionar Profissional:</strong> ${addProfissional}</p>
                    <p><strong>addCargo:</strong> ${addCargo}</p>
                </div>
                <button class="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onclick="excluirAnuncio(this)"> Excluir </button>
            `
                                // <img src="${e.target.result}" alt="Foto do Imóvel" class="mt-2 w-32 h-32 object-cover">

            anunciosDiv.appendChild(anuncio)
        };

        // reader.readAsDataURL(foto);
    } else {
        alert('Por favor, preencha todos os campos.')
    }

    let validate = await adicionarProfissional(insert)
    if (validate) {
        location.href = './servicos.html'
    } else {
        alert('Não foi possível!')
    }
}

function excluirAnuncio(button) {
    const anuncio = button.parentElement
    anuncio.remove()
}