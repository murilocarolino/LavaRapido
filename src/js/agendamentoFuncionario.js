'use strict'

export async function getBuscarAgendamentoByNomeFuncionario() {
    const url = 'http://localhost:8080/v1/lavaRapido/funcionario/agendamento/:nome'
    const response = await fetch(url)
    const agendamento = await response.json()

}