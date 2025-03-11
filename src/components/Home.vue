<template>
  <el-container>
    <el-header style="height: 100px;text-align: left">
      <div style="height: 50px;margin-top: 20px">
        <el-button type="primary" style="margin-left: 10px" @click="add">新增</el-button>
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
          :data="tableData" border style="width: 1200px"
          stripe
      >
        <el-table-column prop="id" label="ID" style="width: 100px" />
        <el-table-column prop="username" label="用户名" style="width: 200px" />
        <el-table-column prop="nickName" label="昵称" style="width: 200px;"/>
        <el-table-column prop="age" label="年龄" style="width: 100px"/>
        <el-table-column prop="sex" label="性别" style="width: 50px" />
        <el-table-column fixed="right" label="Operations" min-width="80px">
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
  <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="500px"
      :before-close="handleClose"
  >
    <el-form :model="form" label-width="120px" style="max-width: 600px">
      <el-form-item label="用户名">
        <el-input v-model="form.username" style="width: 300px" />
      </el-form-item>
      <el-form-item label="昵称" >
        <el-input v-model="form.nickname" style="width: 300px" />
      </el-form-item>
      <el-form-item label="出生日期" style="width: 200px">
        <el-col :span="11">
          <el-date-picker
              v-model="form.date"
              type="date"
              placeholder="Pick a date"
              style="width: 150px"
          />
        </el-col>
        <el-col :span="2" class="text-center">
          <span class="text-gray-500">-</span>
        </el-col>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.sex">
          <el-radio value="man">男</el-radio>
          <el-radio value="women">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
  export default {
    name: "Home",
    components: {

    },

    data() {
      return {
        form:{},
        dialogVisible: false,
        search: '',
        tableData: [
          {
            id: '1',
            username: 'admin',
            nickName: '超级管理员',
            age: '20',
            sex: '男',
          },
          {
            id: '2',
            username: 'admin',
            nickName: '超级管理员',
            age: '20',
            sex: '男',
          },
          {
            id: '3',
            username: 'admin',
            nickName: '超级管理员',
            age: '20',
            sex: '男',
          },
          {
            id: '4',
            username: 'admin',
            nickName: '超级管理员',
            age: '20',
            sex: '男',
          },
        ]
      }
    },
    methods: {
      add(){
        this.dialogVisible = true
        this.form = {}
      },
      save(){

      },
      handleSizeChange() {

      },
      handleCurrentChange() {
      },

    }
  }
</script>
