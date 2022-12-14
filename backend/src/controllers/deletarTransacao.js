const { pool } = require("../config/bd_dindin");

const deletarTransacao = async (req, res) => {
    const {usuarioLogado} = req
    const {id} = req.params

    if (!usuarioLogado) { 
        return res.status(401).json({ mensagem: "Acesso negado" });
      }

    try {
        const queryConsultaExisteTransacao = `SELECT * FROM transacoes WHERE id = $1 AND usuario_id = $2`;
        const paramsConsultaExisteTransacao = [id, usuarioLogado.id];
        const { rowCount: rowCountConsultaExisteTransacao } = await pool.query(queryConsultaExisteTransacao, paramsConsultaExisteTransacao);
        
        if (rowCountConsultaExisteTransacao <= 0) {
            return res.status(400).json({mensagem:"Nenhuma transação encontrada, verifique e tente novamente."});
        }

        const queryDeletarTransacao = `DELETE FROM transacoes WHERE id = $1 AND usuario_id = $2`;
        const paramsDeletarTransacaoTransacao = [id, usuarioLogado.id];
        const { transacaoDeletada } = await pool.query(queryDeletarTransacao, paramsDeletarTransacaoTransacao);

        return res.status(204).json()

    } catch (error) {
        return res.status(500).json({mensagem: "Erro interno no servidor, aguarde e tente novamente."})
    }

}

module.exports = {
    deletarTransacao
}