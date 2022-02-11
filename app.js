
App({
  onLaunch: async function () {
      wx.cloud.init({
        // env: "其他云开发环境，也可以不填"    // 此处init的环境ID和微信云托管没有作用关系，没用就留空
      });
      const res = await wx.cloud.callContainer({
        config: {
          env: "prod-0g6q80gxf1232b84", // 微信云托管环境ID，不能为空，替换自己的
        },
        path: '/', 
        method: 'GET',
        header: {
          'X-WX-SERVICE': 'flask-1d21',
        }
      });
      console.log(res); // 在控制台里查看打印
    }
})