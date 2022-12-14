const { pool } = require("../config/bd_dindin");

const listarTransacoes = async (req, res) => {
  const { usuarioLogado } = req;

  if (!usuarioLogado) { 
    return res.status(401).json({ mensagem: "Acesso negado" });
  }

  try {
    const queryBuscaTransacao = `SELECT transacoes.id, transacoes.tipo, transacoes.descricao, 
    transacoes.valor, transacoes.data, transacoes.usuario_id, transacoes.categoria_id, categorias.descricao as categoria_nome FROM transacoes LEFT JOIN categorias on
    transacoes.categoria_id = categorias.id WHERE transacoes.usuario_id = $1`;
    const paramsBuscaTransacao = [usuarioLogado.id]
    const {rows: resultadoDaBuscaTransacao} = await pool.query(queryBuscaTransacao, paramsBuscaTransacao);
    const [...listarTransacoes] = resultadoDaBuscaTransacao

    return res.status(200).json(listarTransacoes);
    
  } catch (error) {
    return res.status(500).json({mensagem: "Erro interno no servidor, aguarde e tente novamente."});
    
  }
};
 
module.exports = {
    listarTransacoes,
};
 