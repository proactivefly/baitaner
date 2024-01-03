export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/myShop/index',
    'pages/auth/index',
    'pages/feedback/index',
    'pages/collect/index',
    'pages/shopConfig/index',
    'pages/person/index',
    'pages/shopIndex/index',
    'pages/demo/demo',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  permission:{
    'scope.userLocation': {
      desc: '你的位置信息将用于展示附近摊位',
    }
  },
  requiredPrivateInfos:['getLocation'],
  requiredBackgroundModes: ['location'],
})
