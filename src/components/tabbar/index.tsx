import { useState } from 'react'
import Taro, { useLoad , useRouter} from '@tarojs/taro'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Home, Find, User} from '@nutui/icons-react-taro'

export default function Index (){
  const [active,setActive]=useState(0)
  const { path } =useRouter()
  const handleSwitch=(e)=>{
    // console.log(e)
    setActive(e)
    let url=''
    switch(e){
      case 0: url='/pages/index/index';break
      case 1: url='/pages/myShop/index';break
      case 2: url='/pages/person/index';break
    }
    Taro.redirectTo({
      url:url
    })
  }
  // 等同于页面的 onLoad 生命周期钩子。
  useLoad(()=>{
    // console.log(path)
    switch(path){
      case '/pages/index/index': setActive(0);break
      case '/pages/myShop/index': setActive(1);break
      case '/pages/person/index': setActive(2);break
    }
  })

  return (
    <Tabbar onSwitch={handleSwitch} fixed  defaultValue={0} value={active}>
      <Tabbar.Item title='发现' icon={<Find size={18} />} />
      <Tabbar.Item title='我的摊位' icon={<Home size={18} />} />
      <Tabbar.Item title='我的' icon={<User size={18} />} />
    </Tabbar>
  )
}
