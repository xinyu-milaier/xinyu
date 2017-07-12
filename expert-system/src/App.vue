<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        overflow: hidden;
    }
    .layout-breadcrumb{
        padding: 5px 15px 0;
        background: #fff;
        border-radius: 4px;
        border-bottom: 1px solid #cfcfcf;
    }


    .layout-content{
        min-height: 635px;
     
        overflow: hidden;
        background: #e4e4e4;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;

    }
    .layout-copy{
        text-align: center;
        padding: 0 0 5px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;

    }
    .layout-header{
        height: 60px;
        background: #1b1b1b;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }

    .layout-header-right{
        height: 60px;
        background: #1b1b1b;
        font-size: 13px;
        padding: 20px 8px 5px;
    }

    .layout-logo-left{
        width: 100%;
        height: 60px;
        font-size: 35px;
        color: #a8a8a8;
        background: #1b1b1b;
        border-radius: 0px;
        margin: 0px auto;
        text-align: center;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
      }
      .ivu-col{
        transition: width .2s ease-in-out;
    }

</style>
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex">
            <i-col span="spanLeft" class="layout-menu-left">
                <Menu :active-name="$route.name" theme="dark" width="auto" :open-names="['1']">
                    <div class="layout-logo-left">Expert System</div>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate" :size="iconSize"></Icon>
                            用户
                        </template>
                        
                        <router-link to="query">
                          <Menu-item name="query">
                            query列表查询
                          </Menu-item>
                        </router-link>

                        <router-link to="tree">
                          <Menu-item name="tree">
                            query问答
                          </Menu-item>
                        </router-link>

                        <router-link to="feedback">
                          <Menu-item name="feedback">
                            反馈
                          </Menu-item>
                        </router-link>

                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad" :size="iconSize"></Icon>
                            专家
                        </template>
                        <Menu-item name="2-1">选项 1</Menu-item>
                        <Menu-item name="2-2">选项 2</Menu-item>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-analytics" :size="iconSize"></Icon>
                            导航三
                        </template>
                        <Menu-item name="3-1">选项 1</Menu-item>
                        <Menu-item name="3-2">选项 2</Menu-item>
                    </Submenu>
                </Menu>
            </i-col>
            <i-col span="spanRight">
                <Row justify="center">
                  <i-col span="22">
                    <div class="layout-header">
                      <i-button type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </i-button>
                    </div>
                  </i-col>
                  <i-col span="2" class="layout-header-right">
                     <Icon size="20" type="person" color="#a8a8a8"></Icon>
                     <div style="float:right">
                      <span><a href="#" style="color:#a8a8a8">登录&nbsp/&nbsp注册</a></span>
                     </div>
                  </i-col>
                </Row>
                

                <Row class="layout-breadcrumb">
                <i-col span="22">
                <div >
                    <Breadcrumb>
                        <Breadcrumb-item href="#">首页</Breadcrumb-item>
                        <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                        <Breadcrumb-item>某应用</Breadcrumb-item>
                    </Breadcrumb>
                  </div>
                  </i-col>
                  <i-col span="2">
                 
                    
                  </i-col>
                  </Row>
                
                <div class="layout-content">
                    <div class="layout-content-main">
                      <router-view/>
                    </div>
                </div>
                <div class="layout-copy">
                    Copyright &copy; 2009-2017 WEIBO 北京微梦创科网络技术有限公司
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
    export default {
      data () {
            return {
                spanLeft: 4,
                spanRight: 20
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 4 ? 14 : 24;
            }
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 4) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 4;
                    this.spanRight = 20;
                }
            }
        }
        
    }
</script>
