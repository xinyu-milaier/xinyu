<template>
  <div>
    <div class="table-item">
      <p>首页</p>
        <Carousel autoplay v-model="value2" style="height:480px">
            <Carousel-item>
                <div class="demo-carousel"><img src="/static/slider1.png" width="120%" height="30%"></div>
            </Carousel-item>
            <Carousel-item>
                <div class="demo-carousel"><img src="/static/slider2.jpg" width="120%" height="30%"></div>
            </Carousel-item>
            <Carousel-item>
                <div class="demo-carousel"><img src="/static/slider3.jpg" width="120%" height="30%"></div>
            </Carousel-item>
            <Carousel-item>
                <div class="demo-carousel"><img src="/static/slider4.jpg" width="120%" height="30%"></div>
            </Carousel-item>
        </Carousel>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value2: 0
    }
  methods: {
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
  .ivu-carousel-item{
    
  }
}

.row-margin{
  margin:20px 0;
}
</style>
