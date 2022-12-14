const { pool } = require("../config/bd_dindin");

const detalharTransacao = async (req, res) => {
    const {usuarioLogado} = req
    const {id} = req.params

    if (!usuarioLogado) { 
        return res.status(401).json({ mensagem: "Acesso negado" });
      }
    
      try {
        const queryBuscaTransacao = `SELECT * FROM transacoes WHERE usuario_id = $1 AND id = $2`;
        const paramsBuscaTransacao = [usuarioLogado.id, id]
        const {rowCount: rowCountResultadoDaBuscaTransacao, rows: resultadoDaBuscaTransacao} = await pool.query(queryBuscaTransacao, paramsBuscaTransacao);

        if (rowCountResultadoDaBuscaTransacao <= 0) {
            return res.status(404).json({mensagem:"Nenhuma transação encontrada, verifique e tente novamente."});
          }
    
        return res.status(200).json(resultadoDaBuscaTransacao[0]);
        
      } catch (error) {
        return res.status(500).json({mensagem: "Erro interno no servidor, aguarde e tente novamente."})
        
      }

}

module.exports = {
    detalharTransacao
}