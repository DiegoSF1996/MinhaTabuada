import Realm from 'realm';

export default class TabuadaSchema extends Realm.Object {}
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
