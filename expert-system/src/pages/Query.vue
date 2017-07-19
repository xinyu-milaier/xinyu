<template>
  <div>
    <div class="table-item">
      <p>query列表</p>
      <div>
        <Row :gutter="16" class="row-margin">
          <Col span="6">
            <span class="item-name">分类选择</span>
            <Select v-model="topic" style="width:150px">
                <Option v-for="item in topicList" :value="item.value" :key="item">{{ item.label }}</Option>
            </Select>
          </Col>
          <Col span="9">
            <span class="item-name">query</span>
              <Input v-model="query" style="width:300px" type="textarea" :autosize="true" placeholder="请输入..."></Input>
          </Col>

          <Col span="4">
          <div>
            <Input style="width:150px"  :disabled="true" value="结果条数">
              <Select slot="append" v-model="number"  style="width: 80px">
                <Option v-for="item in numberList" :value="item" :key="item">{{item}}</Option>
              </Select>
            </Input>
          </div>
        </Col>

          <Col span="4">
            <Button type="primary" icon="ios-search" @click="searchQuery">查询</Button>
          </Col>
        </Row>
      </div>

      <Row width="auto">
      <div width="auto"><i-table stripe highlight-row border :columns="queryTableColumns" :data="queryTableData" width="auto"></i-table></div>
      
      <div class="page-choose">
        <Page :total="pageTotal" @on-change="aliveChange"></Page>
      </div>
      </Row>
    </div>

    </div>
    
</template>





<script>
export default {
  data () {
    return {
      numberList: [5, 15, 40, 60, 80, 100],
      query: '',
      queryTableColumns: [
        {
          key: 'id',
          title: '序号'
        },
        {
          key: 'query_key',
          title: 'query关键字'
        },
        {
          key: 'creator',
          title: '创建人'
        },
        {
          title: '操作',
          key: 'action',
          align: 'center',
          render: (h, params) => {
              return h('div', [
                  h('Button', {
                      props: {
                          type: 'primary',
                          size: 'small'
                      },
                      style: {
                          marginRight: '5px'
                      },
                      on: {
                          click: () => {
                              this.show(params.index)
                          }
                      }
                  }, '查看'),
                  h('Button', {
                      props: {
                          type: 'warning',
                          size: 'small'
                      },
                      on: {
                          click: () => {
                              this.remove(params.index)
                          }
                      }
                  }, '使用')
              ]);
          }
        }

        
      ],
      queryTableData: [
      {
          id: 1,
          query_key: '音乐',
          creator: 'liuxinyu',
      },
       {
          id: 2,
          query_key: '图片',
          creator: 'liuxinyu',
      },
       {
          id: 3,
          query_key: '电影',
          creator: 'liuxinyu',
      },
      {
          id: 3,
          query_key: '音乐',
          creator: 'liuxinyu',
      },
      {
          id: 3,
          query_key: '图片',
          creator: 'liuxinyu',
      },
      {
          id: 3,
          query_key: '电影',
          creator: 'liuxinyu',
      },
      {
          id: 3,
          query_key: '音乐',
          creator: 'liuxinyu',
      },
      {
          id: 3,
          query_key: '图片',
          creator: 'liuxinyu',
      },
      {
          id: 3,
          query_key: '电影',
          creator: 'liuxinyu',
      },
      {
          id: 3,
          query_key: '电影',
          creator: 'liuxinyu',
      },
      {
          id: 3,
          query_key: '电影',
          creator: 'liuxinyu',
      },
      {
          id: 3,
          query_key: '电影',
          creator: 'liuxinyu',
      },


                    

      ],
      pageTotal: 100,
     
      
      topicList: [
                    {
                        value: 'tushu',
                        label: '图书'
                    },
                    {
                        value: 'huati',
                        label: '话题'
                    },
                    {
                        value: 'yinyue',
                        label: '音乐'
                    },
                    {
                        value: 'dianying',
                        label: '电影'
                    },
                ],
                model1: ''
    }
  },
  methods: {
    searchQuery () {
      const data = {
        start_time: time2Date(new Date(this.date[0]), false),
        end_time: time2Date(new Date(this.date[1]), false),
        result_num: this.number
      }
      if (this.userId !== '') {
        data.user_id = this.userId
      }
      if (this.appId !== '') {
        data.app_id = this.appId
      }
      this.$http.get('/api/session/list', {params: data})
      .then(res => {
        let data = res.body
        if (data.errno !== 0) {
          alert(data.msg)
        }
        data = data.data
        for (let index in data) {
          data[index].mark = index
        }
        this.data = data
        this.total = data.length
        this.list = data.slice(0, 10)
      })
      .catch(error => {
        console.log(error)
      })
    },
     show (index) {
                this.$Modal.info({
                    title: 'query信息',
                    content: `序号：${this.queryTableData[index].id}<br>query关键字：${this.queryTableData[index].query_key}<br>创建人：${this.queryTableData[index].creator}`
                })
            },
            remove (index) {
                this.queryTableData.splice(index, 1);
            }
  }
}
</script>
<style lang="less" scoped>
.table-item{
  margin-right: 10px;

  p:first-child{
    font-size: 18px;
    margin: 10px 0;
    font-weight: bold;
  }

  .page-choose{
    float: right;
    overflow: hidden;
    margin: 8px 0;
  }

  .item-name{
    font-size: 12px;
    font-weight: bold;
    padding: 0 10px;
  }

}

.row-margin{
  margin:20px 0;
}
</style>
