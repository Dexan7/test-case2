/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataJson: [],
  },
  mutations: {
    fetchData() {
      axios.get('https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/test-case2-d6a9c.appspot.com/o/data.json?alt=media&token=c86544c7-4bea-4f69-8ce8-6e6820bc2f03')
        // CORS - ***********, разобраться потом с этим вопросом окончательно.
        .then((res) => {
          this.state.dataJson = res.data.posts;
          console.log('dataJson', this.state.dataJson);
        });
    },
    deleteArticle(state, id) {
      console.log('Удаляем: ', id);
      // eslint-disable-next-line no-param-reassign
      state.dataJson = state.dataJson.filter(item => item.id !== id);
    },
    revomeComment(state, { articleId, commentId }) {
      console.log('articleId', articleId);
      console.log('commentId', commentId);
      console.log('state.dataJson', state.dataJson[articleId]);
      // eslint-disable-next-line no-param-reassign
      // eslint-disable-next-line max-len
      state.dataJson.find(item => item.id === articleId).comments = state.dataJson.find(item => item.id === articleId).comments.filter(item => item.id !== commentId);
    },
  },
  actions: {
  },
});
