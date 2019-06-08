<template>
  <div>
    <!-- если останется время, вынести кнопку в dataTable, чтобы не передавать лишний
    пропс article-id-->

      <el-dialog
        title="Comments"
        :visible.sync="dialogVisible"
        width="90%"
        :before-close="handleClose"
        >
        <el-table
          :data="comments"
          border
          empty-text="empty"
          style="width: 100%">
          <el-table-column
            label="Comment"
            width="">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.text }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="Remove"
            width="350">
            <template slot-scope="scope">
              <el-button type="danger" @click="revomeComment(articleId, scope.row.id)">
                Удалить
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  mounted() {
    // console.log('comment', this.comments);
  },
  props: [
    'comments',
    'articleId',
    'dialogVisible',
  ],
  data() {
    return {

    };
  },
  methods: {
    revomeComment(articleId, commentId) {
      this.$store.commit('revomeComment', { articleId, commentId });
    },
    handleClose() {
      this.$router.push({ name: 'datatable' });
    },
  },
};
</script>
