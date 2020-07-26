// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeItem(e){
      // 获取点击索引
      const {index} = e.currentTarget.dataset
      // console.log(e)

      // 触发点击事件
      this.triggerEvent("tabsItemChange",{index})
    }
  }
})
