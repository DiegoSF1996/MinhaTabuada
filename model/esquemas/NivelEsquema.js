
export default class NivelSchema extends Realm.Object {}
NivelSchema.schema = {
  name: 'Nivel',
  primaryKey: 'niv_codigo',
  properties: {
    niv_codigo: 'int',
    niv_descricao: 'string',
  },
};