
<template>
<!-- В тз не совсем понятно, почему данные нужно получать из JSON-файла
(что по-идее подразумевает не использование бд), и что с ними делать потом. Нужно ли перезаписывать
данные файл и т.д. Поэтому в данный реализовано так, JSCON-файл грузится в firebase,
далее из него с помощью axios берутся данные и производится манипулирование с данными,
после обноваления страницы, все данные возвращаются в прежний вид.-->
  <div>
    <el-table
    :data="$store.state.dataJson"
    border
    style="width: 100%"
    header-row-class-name="table-header"
    empty-text="empty">
    <el-table-column
      label="Article title"
      width="350"
      >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Content"
      >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.content }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Comments"
      width="100"
      >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.comments.length }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Actions"
      width="200"
      class="test"
      >
      <template slot-scope="scope">

        <Comments :comments="scope.row.comments"
                  :article-id="scope.row.id"
                  :dialogVisible="
        scope.row.id == $route.params.id ? true : false">
        </Comments>

        <el-button
                  size="mini"
                  @click="goToComments(scope.row.id)"
                  >Comments</el-button>

        <el-button
          size="mini"
          type="danger"
          @click="deleteArticle(scope.row.id)"
          >Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="footer">
    <div class="footer-articles">{{articles}} - Articles</div>
    <div class="footer-comments">{{comments}} - comments</div>
  </div>
  </div>
</template>

<script>
import Comments from '@/components/Comments.vue';

export default {
  components: {
    Comments,
  },
  props: [

  ],
  data() {
    return {
      dataJson: [],
    };
  },
  computed: {
    articles() {
      return this.$store.state.dataJson.length;
    },
    comments() {
      let comments = 0;
      this.$store.state.dataJson.map((item) => {
        comments += item.comments.length;
        return true;
      });
      return comments;
    },
  },
  mounted() {
    this.$store.commit('fetchData');
  },
  methods: {
    deleteArticle(id) {
      this.$store.commit('deleteArticle', id);
    },
    opened(id) {
      return (this.$route.params.id === id) ? 1 : 0;
    },
    goToComments(articleId) {
      this.$router.push({ path: `/datatable/article/${articleId}/comments` });
    },
    test() {
      console.log('mylog', this.$store.state.dataJson);
    },
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  margin-top: 25px;
}
.footer-articles {
  border: 1px solid #EBEEF5;
  padding: 30px;
  font-size: 50px;
  margin-right: 25px;
  padding: 20px;
  flex-grow: 1;
}
.footer-comments {
  border: 1px solid #EBEEF5;
  padding: 30px;
  font-size: 50px;
  padding: 20px;
  flex-grow: 1;
}
</style>
