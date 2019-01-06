<template>
  <el-container :style="{height:`${view_height}px`}">
    <el-header height="80px">
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="4"><div class="grid-content bg-purple-dark">
          <router-link to="/first">1</router-link>
        </div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-dark">
          <router-link to="/second">2</router-link>
          </div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-dark">
          <router-link to="/three">3</router-link>
          </div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-dark">
          <router-link to="/four">4</router-link>
          </div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-dark">
          <router-link to="/five">5</router-link>
          </div></el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="300px">
        <el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick"></el-tree>
      </el-aside>
      <el-main> 
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  created() {
    // var that =this;
    window.onresize = () => {
      viewHeight = window.innerHeight;
      // console.log(viewHeight);
      this.view_height = viewHeight;
      // console.log(this.view_height);
    };
    var viewHeight = window.innerHeight;
    // console.log(viewHeight);
    this.view_height = viewHeight;
  },
  name: "App",
  data() {
    return {
      view_height: 0,
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  /* line-height: 200px; */
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-container.is-vertical {
  margin-bottom: 0;
}
.grid-content {
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  /* background-color: #f9fafc; */
}
</style>
