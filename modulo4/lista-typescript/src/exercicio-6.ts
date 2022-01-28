type cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

function saldoNegativo() {
    const clientes: cliente[] = [
        { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, debitos: [] }
    ]

    clientes.forEach(cliente => {
        const valorTotalDebidos = cliente.debitos.map(debito => debito).reduce((acc, valor) => acc = (acc + valor), 0);
        if (cliente.saldoTotal < valorTotalDebidos) {
            console.log(`Cliente: ${cliente.cliente}, Saldo Total: ${cliente.saldoTotal - valorTotalDebidos}`)
        }
    })
}
saldoNegativo()