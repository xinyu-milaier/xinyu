<template>
  <div>
    <div class="table-item">
      <p>反馈</p>
      <div>
        <Row :gutter="16" class="row-margin">
          <Col span="6">
            <Date-picker 
              v-model="aliveDate" 
              type="datetimerange" 
              placement="bottom-start" 
              placeholder="选择日期" 
              :options="options"
              @on-change="aliveTimeControl"/>
          </Col>
          <Col span="4">
            <span class="item-name">appId</span>
            <Input v-model="aliveAppId" placeholder="请输入appId" style="width:110px"></Input>
          </Col>
          <Col span="6">
            <span class="item-name">logId</span>
            <Input v-model="aliveLogId" placeholder="请输入logId" style="width:110px"></Input>
          </Col>
          <Col span="3">
            <Button type="primary" icon="ios-search" @click="searchAlive">查询</Button>
          </Col>
        </Row>
      </div>
      <Table stripe :columns="aliveTableClomuns" :data="aliveTableData"></Table>
      <div class="page-choose">
        <Page :total="aliveTotal" @on-change="aliveChange"></Page>
      </div>
    </div>

    </div>
    
  </div>
</template>
<script>
export default {
  data () {
    return {
      aliveDate: [
        new Date().getTime() - 7 * 24 * 60 * 60 * 1000,
        new Date()
      ],
      aliveAppId: '',
      aliveLogId: '',
      aliveTableClomuns: [
        {
          key: 'id',
          title: 'id'
        },
        {
          key: 'err_type',
          title: 'err_type'
        },
        {
          key: 'status',
          title: 'status'
        },
        {
          key: 'logid',
          title: 'logid'
        },
        {
          key: 'app_service_id',
          title: 'app_service_id'
        },
        {
          key: 'app_id',
          title: 'app_id'
        },
        {
          key: 'app_name',
          title: 'app_name'
        },
        {
          key: 'update_time',
          title: 'update_time'
        }
      ],
      aliveTableData: [],
      aliveTotal: 1,
      aliveData: [],
      qpsDate: [
        new Date().getTime() - 7 * 24 * 60 * 60 * 1000,
        new Date()
      ],
      qpsAppId: '',
      qpsUserId: '',
      qpsTableClomuns: [
        {
          key: 'app_id',
          title: 'app_id'
        },
        {
          key: 'id',
          title: 'id'
        },
        {
          key: 'qps',
          title: 'qps'
        },
        {
          key: 'request_timestamp',
          title: 'request_timestamp'
        },
        {
          key: 'status',
          title: 'status'
        },
        {
          key: 'threshold',
          title: 'threshold'
        },
        {
          key: 'update_time',
          title: 'update_time'
        },
        {
          key: 'user_id',
          title: 'user_id'
        }
      ],
      qpsTableData: [],
      qpsTotal: 1,
      qpsData: [],
      options: {
        disabledDate (date) {
          return date >= new Date()
        }
      },
      date: [
        new Date().getTime() - 7 * 24 * 60 * 60 * 1000,
        new Date()
      ]
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.table-item{
  margin: 20px 0;

  p:first-child{
    font-size: 18px;
    margin: 10px 0;
    font-weight: bold;
  }

  .page-choose{
    float: right;
    overflow: hidden;
    margin: 10px 0;
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
