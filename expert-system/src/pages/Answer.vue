<template>
  <div>
    <div class="table-item">
      <p>人机交互</p> 
               <div class="col-lg-6" style="width: 800px;">
                  <div class="smart-widget widget-purple">
                    <div class="smart-widget-header">
                      <i class="fa fa-comment"></i> 交互
                      <span class="smart-widget-option">
                        <span class="refresh-icon-animated">
                          <i class="fa fa-circle-o-notch fa-spin"></i>
                        </span>
                                      <a href="#" class="widget-toggle-hidden-option">
                                          <i class="fa fa-cog"></i>
                                      </a>
                                      <a href="#" class="widget-collapse-option" data-toggle="collapse">
                                          <i class="fa fa-chevron-up"></i>
                                      </a>
                                      <a href="#" class="widget-refresh-option">
                                          <i class="fa fa-refresh"></i>
                                      </a>
                                      <a href="#" class="widget-remove-option">
                                          <i class="fa fa-times"></i>
                                      </a>
                                  </span>
                    </div>
                    <div class="smart-widget-inner">
                      <div class="smart-widget-hidden-section">
                        <ul class="widget-color-list clearfix">
                          <li style="background-color:#20232b;" data-color="widget-dark"></li>
                          <li style="background-color:#4c5f70;" data-color="widget-dark-blue"></li>
                          <li style="background-color:#23b7e5;" data-color="widget-blue"></li>
                          <li style="background-color:#2baab1;" data-color="widget-green"></li>
                          <li style="background-color:#edbc6c;" data-color="widget-yellow"></li>
                          <li style="background-color:#fbc852;" data-color="widget-orange"></li>
                          <li style="background-color:#e36159;" data-color="widget-red"></li>
                          <li style="background-color:#7266ba;" data-color="widget-purple"></li>
                          <li style="background-color:#f5f5f5;" data-color="widget-light-grey"></li>
                          <li style="background-color:#fff;" data-color="reset"></li>
                        </ul>
                      </div>
                      <div class="smart-widget-body" >
                      <div class="slimScrollDiv">
                        <div id="chatScroll">
                          <ul class="chat">
                            <li class="left clearfix" style="width: auto;">
                              <span class="chat-img pull-left">
                                <img src="static/zhuanjia.jpg" alt="User Avatar">
                              </span>
                              <div class="chat-body clearfix">
                                <div class="header">
                                  <strong class="primary-font">专家</strong>
                                  
                                </div>
                                <p style="font-weight: bold;">
                                  *****欢迎使用专家系统交互页面！*****
                                </p>
                              </div>
                            </li>
                            <li class="left clearfix">
                              <span class="chat-img pull-left">
                                <img src="static/zhuanjia.jpg" alt="User Avatar">
                              </span>
                              <div class="chat-body clearfix">
                                <div class="header">
                                  <strong class="primary-font">专家</strong>
                                  
                                </div>
                                <p>（query关键字）您头疼吗？
                                </p>
                              </div>
                            </li>
                            <li class="right clearfix">
                              <span class="chat-img pull-right">
                                <img src="static/profile2.jpg" alt="User Avatar">
                              </span>
                              <div class="chat-body clearfix">
                              <div class="header">
                                <strong class="primary-font">用户</strong>

                              </div>
                                <p>
                                  是
                                </p>
                              </div>
                            </li>
                            <li class="left clearfix">
                              <span class="chat-img pull-left">
                                <img src="static/zhuanjia.jpg" alt="User Avatar">
                              </span>
                              <div class="chat-body clearfix">
                                <div class="header">
                                  <strong class="primary-font">专家</strong>
                                </div>
                                <p>
                                  您发烧吗？
                                </p>
                              </div>
                            </li>
                            <li class="right clearfix">
                              <span class="chat-img pull-right">
                                <img src="static/profile2.jpg" alt="User Avatar">
                              </span>
                              <div class="chat-body clearfix">
                                <div class="header">
                                  <strong class="primary-font">用户</strong>
                                </div>
                                <p>
                                  否
                                </p>
                              </div>
                            </li>
                            <li class="left clearfix">
                              <span class="chat-img pull-left">
                                <img src="static/zhuanjia.jpg" alt="User Avatar">
                              </span>
                              <div class="chat-body clearfix">
                                <div class="header">
                                  <strong class="primary-font">专家</strong>
                                </div>
                                <p>
                                  感冒吗？
                                </p>
                              </div>
                            </li>
                            <li class="right clearfix">
                              <span class="chat-img pull-right">
                                <img src="static/profile2.jpg" alt="User Avatar">
                              </span>
                              <div class="chat-body clearfix">
                                <div class="header">
                                  <strong class="primary-font">用户</strong>
                                </div>
                                <p>
                                  否
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        </div>
                        </div>
                      <div class="smart-widget-footer">
                          <div style="margin-top:10px; text-align: center">
                          <span class="yesButton">
                            <Button type="success">是</Button>
                          </span>
                          <span class="noButton">
                            <Button type="warning">否</Button>
                          </span>
                          <span class="fufankui">
                            <Button type="primary">反馈</Button>
                          </span>
                          </div>
                        <!-- /input-group -->
                      </div><!-- ./smart-widget-footer -->
                    </div><!-- ./smart-widget-inner -->
                  </div><!-- ./smart-widget -->
                </div><!-- ./col -->

    </div>

    
  </div>
</template>
<script>
export default {
  data () {
    return {


    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
  @import "/static/simplify/css/simplify.min.css";
@import "/static/simplify/css/simplify.css";
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
  .yesButton{
    margin-top: 10px;

  }
  .noButton{
    margin-top: 10px;
    margin-left: 50px;

  }
  .fufankui{
    margin-top: 10px;
    margin-left: 100px;
  }



}

.row-margin{
  margin:20px 0;
}
</style>
