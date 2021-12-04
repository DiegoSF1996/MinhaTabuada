
export default class TabuadaSchema extends Realm.Object {}
TabuadaSchema.schema = {
  name: 'Tabuada',
  primaryKey: 'tab_codigo',
  properties: {
    tab_codigo: 'int',
    tab_x: 'int',
    tab_y: 'int',
    tab_operacao: 'string',
    tab_resposta: 'int',
    tab_acertos: 'int?',
    tab_erros: 'int?',
    Nivel: 'Nivel',
  },
};
