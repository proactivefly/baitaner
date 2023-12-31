import { Tabbar } from '@nutui/nutui-react-taro'
import { Home, User } from '@nutui/icons-react-taro';

export default function Index (){

  const handleSwitch=(e)=>{
    console.log(e)
  }

  return (
    <Tabbar onSwitch={handleSwitch} fixed>
      <Tabbar.Item title='首页' icon={<Home size={18} />} />
      <Tabbar.Item title='我的' icon={<User size={18} />} />
    </Tabbar>
  )
}
