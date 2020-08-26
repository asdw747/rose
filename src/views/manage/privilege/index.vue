<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row>
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="real ID">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="name">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="desc">
        <template slot-scope="scope">
          {{ scope.row.desc }}
        </template>
      </el-table-column>
      <el-table-column label="url">
        <template slot-scope="scope">
          {{ scope.row.url }}
        </template>
      </el-table-column>
      <el-table-column label="createTime / updateTime">
        <template slot-scope="scope">
          {{ scope.row.createTime }}
          <br>
          {{ scope.row.updateTime }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    import service from './service'

    export default {
        data() {
            return {
                list: null,
                listLoading: true
            }
        },

        created() {
            this.fetchData()
        },

        methods: {
            fetchData() {
                this.listLoading = true
                service.list().then(response => {
                    this.list = response.data
                    this.listLoading = false
                })
            }
        }
    }
</script>
