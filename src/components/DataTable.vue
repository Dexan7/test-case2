
<template>
  <div>
    <div>asdasasd
      <div v-for="data in myJson" :key="data.id">{{ data }}</div>
      <el-button @click='test()'>ddd</el-button>
    </div>
    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="Date"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Name"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>Name: {{ scope.row.name }}</p>
          <p>Addr: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="Operations">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import myJsonFile from '@/json/data.json';
import axios from 'axios';

export default {
  data() {
    return {
      myJson: myJsonFile,
    //   tableData: [{
    //       date: '2016-05-03',
    //       name: 'Tom',
    //       address: 'No. 189, Grove St, Los Angeles'
    //     }, {
    //       date: '2016-05-02',
    //       name: 'Tom',
    //       address: 'No. 189, Grove St, Los Angeles'
    //     }, {
    //       date: '2016-05-04',
    //       name: 'Tom',
    //       address: 'No. 189, Grove St, Los Angeles'
    //     }, {
    //       date: '2016-05-01',
    //       name: 'Tom',
    //       address: 'No. 189, Grove St, Los Angeles'
    //     }]
    };
  },
  methods: {
    test() {
      // console.log(this.myJson);
      axios.get('https://firebasestorage.googleapis.com/v0/b/test-case2-d6a9c.appspot.com/o/data.json?alt=media&token=09640b63-8bd7-428b-94cc-830d01cbbf72')
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
