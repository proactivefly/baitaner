import { PropsWithChildren,useEffect } from 'react'
import { useLaunch } from '@tarojs/taro'
import './app.styl'

function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    // console.log('App launched.')
  })
  //
  useEffect(()=>{
    // console.log('useEffect')
  })

  // children 是将要会渲染的页面
  return children
}

export default App
