
import Realm from 'realm';

export default class ContaResolvidaSchema extends Realm.Object {}
ContaResolvidaSchema.schema = {
  name: 'ContaResolvida',
  primaryKey: 'conres_codigo',
  properties: {
    conres_codigo: 'int',
    conres_acertou: 'bool',
    Tabuada: 'Tabuada',
  },
};