<template>
  <div>
    <div class="table-item">
      <p>反馈</p>
        <Row :gutter="32" style="margin-top: 20px;">
            <Col span="24" class="demo-tabs-style2">
                <Tabs type="card">
                    <Tab-pane label="场景反馈">
                            <p style="font-size: 15px; margin: 20px 20px;">query关键字提交</p>
                            <Row>
                              <Col span="24">
                                <Form ref="formDynamic" :model="formDynamic" :label-width="120">
                                    <Form-item
                                        v-for="(item, index) in formDynamic.items"
                                        :key="item"
                                        :label="'query关键字' + (index + 1)"
                                        :prop="'items.' + index + '.value'"
                                        :rules="{required: true, message: 'query关键字' + (index + 1) +'不能为空', trigger: 'blur'}">
                                        <Row>
                                            <Col span="18">
                                                <Input type="text" v-model="item.value" placeholder="请输入..."></Input>
                                            </Col>
                                            <Col span="3" offset="1">
                                                <Button type="ghost" @click="handleRemove(index)">删除</Button>
                                            </Col>
                                        </Row>
                                    </Form-item>
                                    <Form-item>
                                        <Row>
                                            <Col span="12">
                                                <Button type="dashed" long @click="handleAdd" icon="plus-round">新增</Button>
                                            </Col>
                                        </Row>
                                    </Form-item>
                                    <Form-item>
                                        <Button type="primary" @click="handleSubmit('formDynamic')">提交</Button>
                                        <Button type="ghost" @click="handleReset('formDynamic')" style="margin-left: 8px">重置</Button>
                                    </Form-item>
                                </Form>
                                </Col>
                          </Row>

                    </Tab-pane>
                    <Tab-pane label="结果查看">
                    <p style="font-size: 15px; margin: 20px 0; font-weight: bold;">反馈结果</p>

                    <Table border :columns="columns7" :data="data6"></Table>

                    </Tab-pane>
                </Tabs>
            </Col>
        </Row>
    
    </div>
  </div>

</template>
<script>
export default {
  data () {
    return {
        value1: 1,
        formDynamic: {
                    items: [
                        {
                            value: ''
                        }
                    ]
                },
        columns7: [
                    {
                        title: '序号',
                        key: 'id',
                    },
                    {
                        title: 'query关键字',
                        key: 'query_key'
                    },
                    {
                        title: '状态',
                        key: 'progress'
                    },
                    {
                        title: '处理人',
                        key: 'processor',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.processor)
                            ]);
                        }
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
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
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
        data6: [
                    {
                        id: 1,
                        query_key: 'page沙箱',
                        progress: '未处理',
                        processor: '小明'
                    },
                    {
                        id: 2,
                        query_key: '图片',
                        progress: '正在处理',
                        processor: '小红'
                    },
                    {
                        id: 3,
                        query_key: '音乐',
                        progress: '已处理',
                        processor: '小红'
                    },
                    {
                        id: 4,
                        query_key: '话题',
                        progress: '未处理',
                        processor: '小明'
                    }
                ]


        }
      },

     

  methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            handleAdd () {
                this.formDynamic.items.push({
                    value: ''
                });
            },
            handleRemove (index) {
                this.formDynamic.items.splice(index, 1);
            },
            show (index) {
                this.$Modal.info({
                    title: '用户信息',
                    content: `序号：${this.data6[index].id}<br>query关键字：${this.data6[index].query_key}<br>状态：${this.data6[index].progress}<br>处理人：${this.data6[index].processor}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
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
    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content {
        height: 120px;
        margin-top: -16px;
    }

    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {
        background: #fff;
        padding: 16px;
    }

    .demo-tabs-style1 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
        border-color: transparent;
    }

    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
        border-color: #fff;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{
        border-radius: 0;
        background: #fff;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active{
        border-top: 1px solid #3399ff;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: #3399ff;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>
