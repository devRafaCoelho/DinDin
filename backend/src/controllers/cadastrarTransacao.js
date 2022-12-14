const { pool } = require("../config/bd_dindin");


const cadastrarTransacao = async (req, res) => {
    const {usuarioLogado} = req;
    const {descricao, valor, data, categoria_id, tipo} = req.body;
   


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
        const queryCadastroTransacao = `INSERT INTO transacoes (descricao, valor, data, categoria_id, usuario_id, tipo) VALUES ($1, $2, $3, $4, $5, $6) returning *`;
        const paramsCadastroTransacao = [descricao, valor, data, categoria_id, usuarioLogado.id, tipo];
        const {rows:resultadoCadastroTransacao} = await pool.query(queryCadastroTransacao, paramsCadastroTransacao);

        const idTransacaoCadastrada = resultadoCadastroTransacao[0].id;

        const queryConsultaTransacao = `SELECT transacoes.id, transacoes.tipo, transacoes.descricao, 
        transacoes.valor, transacoes.data, transacoes.usuario_id, transacoes.categoria_id, categorias.descricao as categoria_nome FROM transacoes JOIN categorias on
        (transacoes.categoria_id = categorias.id) 
        WHERE transacoes.id = $1;`;
        const paramsConsultaTransacao = [idTransacaoCadastrada];
        const {rows:resultadoConsultaTransacao} = await pool.query(queryConsultaTransacao, paramsConsultaTransacao);
     
        return res.status(200).json(resultadoConsultaTransacao[0]);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({mensagem: "Erro interno no servidor, aguarde e tente novamente."});
    
    }

}

module.exports = {
    cadastrarTransacao
};