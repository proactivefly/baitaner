import { Tabbar } from '@nutui/nutui-react-taro'
import { Home, User } from '@nutui/icons-react-taro';
import Taro, { useLoad } from '@tarojs/taro'

export default function Index (){

  const handleSwitch=(e)=>{
    console.log(e)
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

  return (
    <Tabbar onSwitch={handleSwitch} fixed>
      <Tabbar.Item title='首页' icon={<Home size={18} />} />
      <Tabbar.Item title='我的' icon={<User size={18} />} />
    </Tabbar>
  )
}
