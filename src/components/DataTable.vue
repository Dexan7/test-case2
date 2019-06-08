
<template>
  <div>
    <el-table
    :data="$store.state.dataJson"
    border
    style="width: 100%"
    header-row-class-name="table-header">
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
      width="300"
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
  <div>{{articles}} - Articles</div>
  <div>{{comments}} - comments</div>
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

.table-header {
  color: red;
}
.test {
  display: flex;
}
</style>
