import { Tabbar } from '@nutui/nutui-react-taro'
import { Home, User } from '@nutui/icons-react-taro';
import Taro, { useLoad , getCurrentInstance} from '@tarojs/taro'
import { useState } from 'react';

export default function Index (props){
  console.log(props)
  const [active,setActive]=useState(0)
  const { path } =getCurrentInstance().router as any
  const handleSwitch=(e)=>{
    console.log(e)
    setActive(e)
    let url=''
    if(e===0){
      url='/pages/index/index'
    }else if(e===1){
      url='/pages/person/index'
    }
    Taro.redirectTo({
      url:url
    })
  }
  useLoad(()=>{
    console.log(path)
    switch(path){
      case '/pages/index/index': setActive(0);break
      case '/pages/person/index': setActive(1);break
    }
  })
  return (
    <Tabbar onSwitch={handleSwitch} fixed  defaultValue={0} value={active}>
      <Tabbar.Item title='首页' icon={<Home size={18} />} />
      <Tabbar.Item title='我的' icon={<User size={18} />} />
    </Tabbar>
  )
}
