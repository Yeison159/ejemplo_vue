import axios from 'axios';

const TRAER_USUARIOS = 'traer_usuarios';
const CARGANDO = 'cargando';
const ERROR = 'error';

const state = {
  usuarios: [],
  cargando: false,
  error: '',
};

const mutations = {
  [TRAER_USUARIOS](state, user) {
    state.usuarios = user;
    state.cargando = false;
  },
  [CARGANDO](state) {
    state.cargando = true;
  },
  [ERROR](state, err) {
    state.error = err;
  }
};

const actions = {
  async traer_usuarios({commit}) {
    commit({
      type: CARGANDO,
    });
    const respuesta = await axios.get(
        'https://jsonplaceholder.typicode.com/users');
    try {
      commit({
        type: TRAER_USUARIOS,
        user: respuesta.data
      });
    }
    catch (e) {
      commit({
        type: ERROR,
        error: e
      });
    }

  },
};

export const user = {
  namespaced: true,
  state,
  actions,
  mutations
};
