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

                const enderecos = funcionario.endereco.map(endereco => endereco.rua).join(', ')
                const funcionarioDiv = document.createElement('div')
                funcionarioDiv.textContent = `cargo: ${cargo}, Endereço(s): ${enderecos}, Nome: ${nome}`
                funcionariosList.appendChild(funcionarioDiv)
            })
        }

        displayFuncionarios()