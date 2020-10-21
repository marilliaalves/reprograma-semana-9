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

// PUT

const putLivro = (req, res) => {
  try {
    const id = req.params.id;

    const livrosModificados = livros.find((livro) => livro.id == id);
    console.log(livrosModificados);


    const livrosAtualizados = req.body;
    console.log(livrosAtualizados);

 
    const index = livros.indexOf(livrosModificados);
    console.log(index);
 
    livros.splice(index, 1, livrosAtualizados);
    console.log(livros);

    fs.writeFile("./src/models/livros.json", JSON.stringify(livros), 'utf8', function (err) {
      if (err) {
        return res.status(424).send({ message: err });
      }
      console.log("Livro atualizado com sucesso!");
    });

    res.status(200).send(tarefas);
  } catch (err) {
    return res.status(424).send({ message: err });
  }
}

//PATCH

const patchLivro = (req, res) => {
  const id = req.params.id;
  const atualizacao = req.body;
  console.log(atualizacao)

  try {
    const livrosModificados = livros.find((livro) => livro.id == id);

    Object.keys(atualizacao).forEach((chave) => {
      livrosModificados[chave] = atualizacao[chave]
    })

    fs.writeFile("./src/models/livros.json", JSON.stringify(livros), 'utf8', function(err) {
      if (err) {
        return res.status(424).send({ message: err});
      }
      console.log("Livro atualizado com sucesso!")
    });

    return res.status(200).send(livros);
  } catch(err) {
    return res.status(424).send({ message: err });
  }
}

module.exports = {
  getAll,
  getById,
  postLivros,
  deleteLivros,
  putLivro,
  patchLivro
};


