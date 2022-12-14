const { pool } = require("../config/bd_dindin");

const editarTransacao = async (req, res) => {
    const {usuarioLogado} = req;
    const {descricao, valor, data, categoria_id, tipo} = req.body;
    const {id} = req.params


    if (!usuarioLogado) { 
        return res.status(401).json({ mensagem: "Acesso negado" });
      }

    if(!valor){
        return res.status(400).json({mensagem: "O campo valor é obrigatório, verifique e tente novamente."});
    }

    if(!data){
        return res.status(400).json({mensagem: "O campo data é obrigatório, verifique e tente novamente."});
    }

    if(!categoria_id){
        return res.status(400).json({mensagem: "O campo categoria é obrigatório, verifique e tente novamente."});
    }

    if(!tipo || (tipo !== "entrada" && tipo !== "saida")){
        return res.status(400).json({mensagem: "O campo tipo é obrigatório e deve ser definido como entrada ou saída, verifique e tente novamente."});
    }

    try {
    const queryConsultaExisteTransacao = `SELECT * FROM transacoes WHERE id = $1`;
    const paramsConsultaExisteTransacao = [id];
    const { rowCount: rowCountConsultaExisteTransacao } = await pool.query(queryConsultaExisteTransacao, paramsConsultaExisteTransacao);
    
    if (rowCountConsultaExisteTransacao <= 0) {
        return res.status(400).json({mensagem:"Nenhuma transação encontrada, verifique e tente novamente."});
    }

    const queryEditarTransacao = `UPDATE transacoes SET descricao = $1, valor = $2, data =$3, categoria_id = $4, tipo = $5 WHERE id = $6 AND usuario_id = $7`;
    const paramsEditarTransacao = [descricao, valor, data, categoria_id, tipo, id, usuarioLogado.id];
    const trasancaoAtualizada = await pool.query(queryEditarTransacao, paramsEditarTransacao)

    return res.status(204).json()
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({mensagem: "Erro interno no servidor, aguarde e tente novamente."})
        
    }
}

module.exports = {
    editarTransacao
}