const funcionarios = require("../model/funcionarios.json");
const fs = require("fs");

// GET

const getAllFuncionarios = (req, res) => {
    console.log(req.url);
    res.status(200).send(funcionarios);
  };
  
  const getByIdFuncionarios = (req, res) => {
    const id = req.params.id;
  
    res.status(200).send(funcionarios.filter((funcionario) => funcionario.id == id));
  };

  //POST

  const postFuncionarios = (req, res) => {
    console.log(req.body);
    const { id, nome, idade, cpf, rg, sexo, tipo_sanguineo } = req.body;
    tarefas.push({ id, nome, idade, cpf, rg, sexo, tipo_sanguineo });
    
    fs.writeFile("./src/model/funcionarios.json", JSON.stringify(funcionarios), 'utf8', function(err) {
        if (err) {
          return res.status(424).send({ message: err});
        }
        console.log("Arquivo atualizado com sucesso!")
    });
  
    res.status(201).send(funcionarios)
  };

  //DELETE

  const deleteFuncionarios= (req, res) => {
    const id = req.params.id;
    const funcionarioFiltrado = livros.find((funcionario) => funcionario.id == id);
    const index = funcionarios.indexOf(funcionarioFiltrado);
    funcionario.splice(index, 1);


    fs.writeFile("./src/model/funcionarios.json", JSON.stringify(funcionarios), 'utf8', function(err) {
      if (err) {
      return res.status(424).send({ message: err})};
    
      console.log("Funcionario excluido com sucesso!")
    });
    
    res.status(200).send(funcionarios)
};

module.exports = {
    getAllFuncionarios,
    getByIdFuncionarios,
    postFuncionarios,
    deleteFuncionarios
}