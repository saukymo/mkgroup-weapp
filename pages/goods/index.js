import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

Page({
  data: {
    value: '',
    results: [
      {name: '1'},
      {name: '2'},
      {name: '3'},
      {name: '4'},
      {name: '5'}
    ]
  },

  onLoad() {
    this.setData({
      value: '',
    })
  },

  async onSearch() {
    const res = await wx.cloud.callContainer({
      config: {
        env: "prod-0g6q80gxf1232b84", // 微信云托管环境ID，不能为空，替换自己的
      },
      path: '/scripts', // 填入业务自定义路径和参数，根目录，就是 / 
      method: 'GET', // 按照自己的业务开发，选择对应的方法
      header: {
        'X-WX-SERVICE': 'flask-1d21',
      }
    });
    
    console.log(res);
    this.setData({
      results: res.data.data,
    })
  },

  onChange(e) {
    this.setData({
      value: e.detail,
    })
  },

  onTap(e) {
    Toast(e.currentTarget.id);
    console.log(e)
  }

});