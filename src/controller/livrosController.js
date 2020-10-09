const livros = require("../model/livros.json");
const fs = require("fs");

// GET

const getAll = (req, res) => {
    console.log(req.url);
    res.status(200).send(livros);
  };
  
  const getById = (req, res) => {
    const id = req.params.id;
  
    res.status(200).send(livros.filter((livro) => livro.id == id));
  };

  //POST

  const postLivros = (req, res) => {
    console.log(req.body);
    const { id, livro, autor, paginas } = req.body;
    livros.push({ id, livro, autor, paginas });
    
    fs.writeFile("./src/model/livros.json", JSON.stringify(livros), 'utf8', function(err) {
        if (err) {
          return res.status(424).send({ message: err});
        }
        console.log("Arquivo atualizado com sucesso!")
    });
  
    res.status(201).send(livros)
  };

  //DELETE

  const deleteLivros = (req, res) => {
    const id = req.params.id;
    const livroFiltrado = livros.find((livro) => livro.id == id);
    const index = livros.indexOf(livroFiltrado);
    livro.splice(index, 1);


    fs.writeFile("./src/model/livros.json", JSON.stringify(livros), 'utf8', function(err) {
      if (err) {
      return res.status(424).send({ message: err})};
    
      console.log("Livro excluido com sucesso!")
    });
    
    res.status(200).send(livros)
};

module.exports = {
    getAll,
    getById,
    postLivros,
    deleteLivros
}