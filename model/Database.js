import Realm from 'realm';

class NivelSchema extends Realm.Object {}
NivelSchema.schema = {
  name: 'Nivel',
  primaryKey: 'niv_codigo',
  properties: {
    niv_codigo: 'int',
    niv_descricao: 'string',
  },
};
class TabuadaSchema extends Realm.Object {}
TabuadaSchema.schema = {
  name: 'Tabuada',
  primaryKey: 'tab_codigo',
  properties: {
    tab_codigo: 'int',
    tab_x: 'string',
    tab_y: 'string',
    tab_operacao: 'string',
    tab_resposta: 'int',
    Nivel: 'Nivel',
  },
};
class ContaResolvidaSchema extends Realm.Object {}
ContaResolvidaSchema.schema = {
  name: 'ContaResolvida',
  primaryKey: 'conres_codigo',
  properties: {
    conres_codigo: 'int',
    conres_acertou: 'bool',
    Tabuada: 'Tabuada',
  },
};
// Create realm
let realm = new Realm({
  schema: [NivelSchema, TabuadaSchema, ContaResolvidaSchema],
  schemaVersion: 0,
});

// Functions
// Return all books
let getAllNivel = () => {
  return realm.objects('Nivel');
};
// Add a single book using parameters
let addNivel = _niv_descricao => {
  realm.write(() => {
    const Nivel = realm.create('Nivel', {
      niv_codigo:
        realm.objects('Nivel').max('niv_codigo') > 0
          ? realm.objects('Nivel').max('niv_codigo') + 1
          : 1,
      niv_descricao: _niv_descricao,
    });
  });
};
let getNivelById = _niv_codigo => {
  return realm.objects('Nivel').filtered(`niv_codigo = ${_niv_codigo}`);
};
// Remove all books from Realm database
let deleteAllNiveis = () => {
  realm.write(() => {
    realm.delete(getAllNivel());
  });
};

// Update all books that have a null value as edition and update it to 1
let updateAllBookEditions = () => {
  realm.write(() => {
    let books = getAllBooks();
    books.map((item, index) => {
      if (item.edition === null) {
        item.edition = 1;
      }
    });
  });
};

// Get all books with more than 400 pages using .filtered()
let getBigBooks = () => {
  return realm.objects('Book').filtered('pages > 400');
};

// Get all authors
let getAllAuthors = () => {
  return realm.objects('Author');
};

// Add a single author using parameters (With a auto increment ID. Read the Tips chapter in the blog post)
let addAuthor = (_firstName, _lastName) => {
  realm.write(() => {
    const book = realm.create('Author', {
      id: realm.objects('Author').max('id') + 1,
      firstName: _firstName,
      lastName: _lastName,
    });
  });
};

// Remove all authors from Realm database
let deleteAllAuthors = () => {
  realm.write(() => {
    realm.delete(getAllAuthors());
  });
};

// Get author by index in the array
let getAuthorById = _id => {
  return realm.objects('Author').filtered(`id = ${_id}`);
};

// Exports
// Export the realm so other files can access it
export default realm;

// Export other functions so other files can access it
export {
  getAllNivel,
  getNivelById,
  deleteAllNiveis,
  updateAllBookEditions,
  getBigBooks,
  getAllAuthors,
  addAuthor,
  getAuthorById,
  addNivel,
};
