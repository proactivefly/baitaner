import { PropsWithChildren,useEffect } from 'react'
import Taro,{ useLaunch } from '@tarojs/taro'
import './app.styl'

function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    // console.log('App launched.')
  })
  //
  useEffect(()=>{
    // console.log('useEffect')
    Taro.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res)
      }
      })
  },[])

  // children 是将要会渲染的页面
  return children
}

export default App
