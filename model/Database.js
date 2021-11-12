import Realm from 'realm';

// Declare Schema
class Niveis extends Realm.Object {}
Niveis.schema = {
  name: 'Book',
  properties: {
    title: 'string',
    pages: 'int',
    edition: 'int?',
  },
};

// Create realm
let realm = new Realm({schema: [Niveis], schemaVersion: 1});

// Export the realm
export default realm;

let getAllBooks = () => {
  return realm.objects('Book');
};

export {getAllBooks};
