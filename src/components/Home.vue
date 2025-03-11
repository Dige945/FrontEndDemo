<template>
  <el-container>
    <el-header style="height: 100px;text-align: left">
      <div style="height: 50px;margin-top: 20px">
        <el-button type="primary" style="margin-left: 10px">新增</el-button>
        <el-button type="primary">导入</el-button>
        <el-button type="primary">导出</el-button>
      </div>
      <div style="height: 30px">
        <el-input v-model="search" style="width: 240px" placeholder="Please input" />
        <el-button type="primary" style="margin-left: 10px">查询</el-button>
      </div>

    </el-header>
    <el-main>
      <el-table
          :data="tableData" border style="width: 100%"
          stripe
      >
        <el-table-column prop="date" label="日期" sortable />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="address" label="地址" />
        <el-table-column fixed="right" label="Operations" min-width="120">
          <template #default>
            <el-popconfirm title="Are you sure to delete this?">
              <template #reference>
                <el-button link type="primary" size="small">删除</el-button>
              </template>
            </el-popconfirm>
            <el-button link type="primary" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="demo-pagination-block" style="margin-top: 10px">
      <div class="demonstration" style="margin-bottom: 10px">All combined</div>
      <el-pagination
          v-model:current-page="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[1, 2, 4, 8]"
          :size="size"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="20"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
      </div>
    </el-main>


  </el-container>

</template>

<script>
  export default {
    name: "Home",
    components: {},

    data() {
      return {
        search: '',
        tableData: [
          {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
        ]
      }
    },
    methods: {
      handleSizeChange() {

      },
      handleCurrentChange() {
      },

    }
  }
</script>
