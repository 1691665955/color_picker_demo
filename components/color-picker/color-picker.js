// components/color-picker/color-picker.js
var util = require("../color-picker/utils/util.js");

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    /**
     * 颜色拾取器显示样式
     */
    imageStyle: {
      type: String,
      value: "width:300px;height:300px;border-radius:150px;"
    },
    //颜色拾取器大小（px）
    size: {
      type: Number,
      value: 300
    },
    //颜色拾取器离页面左边的距离（px）
    left: {
      type: Number,
      value: 0
    },
    //颜色拾取器离页面顶部的距离（px）
    top: {
      type: Number,
      value: 0
    },
    //亮度（此颜色拾取器只能获取到H(色值),S(饱和度),所以需要传入亮度来生成rgb颜色，范围1-255）
    brightness: {
      type: Number,
      value: 255
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    scale: wx.getSystemInfoSync().screenWidth / 750
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _selectColor: function(e) {
      console.log(e);
      var x = ((e.detail.x - this.data.left) * (100 / this.data.size)).toFixed(0) - 50;
      var y = -(((e.detail.y - this.data.top) * (100 / this.data.size)).toFixed(0) - 50);
      var h = ((Math.PI * 5 / 2 - Math.atan2(y, x)) % (Math.PI * 2) * 180 / Math.PI).toFixed(0);
      var s = (Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) / 50 * 255).toFixed(0);
      if (s == 0) {
        s = 1;
      } else if (s > 255) {
        s = 255;
      }
      this.triggerEvent('selectColor', {
        h: h,
        s: s,
        v: this.data.brightness,
        rgb: util.hsv2rgb(h, s, this.data.brightness)
      })
    },
    rpx2px: function(rpx) {
      return rpx * this.data.scale;
    }
  }
})