const { pool } = require("../config/bd_dindin");

const exibirExtrato = async (req, res) => {
  const { usuarioLogado } = req;
  let entradas = 0;
  let saidas = 0

  if (!usuarioLogado) {
    return res.status(401).json({ mensagem: "Acesso negado" });
  }

  try {
    const queryBuscaTransacaoEntrada = `SELECT * FROM transacoes WHERE usuario_id = $1`;
    const paramsBuscaTransacaoEntrada = [usuarioLogado.id]
    const {rowCount: rowCountResultadoDaBuscaTransacao, rows: rowsResultadoDaBuscaTransacao} = await pool.query(queryBuscaTransacaoEntrada, paramsBuscaTransacaoEntrada);

    rowsResultadoDaBuscaTransacao.forEach((transaco) => {
        if(transaco.tipo === "entrada"){
            entradas += Number(transaco.valor)
        }
        if(transaco.tipo === "saida"){
            saidas += Number(transaco.valor)
        }
      })

      return res.status(200).json({entrada: entradas, saida: saidas})
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({mensagem: "Erro interno no servidor, aguarde e tente novamente."})
    
  }

};

module.exports = {
    exibirExtrato,
};