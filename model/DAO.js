import Realm from 'realm';
import ContaResolvidaEsquema from './esquemas/ContaResolvidaEsquema';
import NivelEsquema from './esquemas/NivelEsquema';
import TabuadaEsquema from './esquemas/TabuadaEsquema';

export default class DAO {
  constructor() {
    this.realm = new Realm({
      schema: [NivelEsquema, TabuadaEsquema, ContaResolvidaEsquema],
      schemaVersion: 0,
    });
  }
}
