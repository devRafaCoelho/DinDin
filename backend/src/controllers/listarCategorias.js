const { pool } = require("../config/bd_dindin");

const listarCategorias = async (req, res) => {
  const { usuarioLogado } = req;

  if (!usuarioLogado) {
    return res.status(401).json({ mensagem: "Acesso negado" });
  }

  try {
    const queryBuscaCategorias = "SELECT * FROM categorias";
    const {rows: resultadoBuscaCategorias} = await pool.query(queryBuscaCategorias);
    const [...listarCategorias] = resultadoBuscaCategorias

    return res.status(200).json(listarCategorias);
    
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno no servidor, aguarde e tente novamente" });
  }
};

module.exports = {
  listarCategorias,
};
