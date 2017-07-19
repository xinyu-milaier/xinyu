<template>

  <div>
    <div class="table-item">
      <p>添加树</p>
      <frame onload="init()">
      <div>
          <div id="sample">
              <div id="myDiagramDiv" style="background-color: #696969; border: solid 1px black; height: 500px"></div>
              <div>
                <div id="myInspector">

                </div>
              </div>
              <div>
                <div>
                  <button id="SaveButton" onclick="save()">Save</button>
                  <button onclick="load()">Load</button>
                  Diagram Model saved in JSON format:
                </div>
                <textarea id="mySavedModel" style="width:100%;height:250px">{ "class": "go.TreeModel",
              "nodeDataArray": [
            {"key":1, "name":"query1", "title":"CEO"},
            {"key":2, "name":"query2", "title":"VP Marketing/Sales", "parent":1},
            {"key":3, "name":"query3", "title":"Sales", "parent":2},
            {"key":4, "name":"query4", "title":"VP Engineering", "parent":1},
            {"key":5, "name":"query5", "title":"Manufacturing", "parent":4},
            {"key":6, "name":"query6", "title":"Marketing", "parent":2},
            {"key":7, "name":"query7", "title":"Sales Rep", "parent":3},
            {"key":8, "name":"query8", "title":"Project Mgr", "parent":5},
            {"key":9, "name":"query9", "title":"Events Mgr", "parent":6},
            {"key":10, "name":"query10", "title":"Engineering", "parent":4},
            {"key":11, "name":"query11", "title":"Process", "parent":5},
            {"key":12, "name":"query12", "title":"Software", "parent":10},
            {"key":13, "name":"query13", "title":"Testing", "parent":10},
            {"key":14, "name":"query14", "title":"Hardware", "parent":10},
            {"key":15, "name":"query15", "title":"Quality", "parent":5},
            {"key":16, "name":"query16", "title":"Sales Rep", "parent":3}
            ]
            }
            </textarea>
          </div>
        </div>
    </div>
    </frame>
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
