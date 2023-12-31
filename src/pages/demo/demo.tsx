import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { Button , Tabbar } from '@nutui/nutui-react-taro';
import { Cart, Category, Find, Home, User } from '@nutui/icons-react-taro';
import './demo.styl'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })
  const handlerSwitch=(params)=>{
    console.log(params)
  }
  return (
    <View className='demo'>
      <Text>Hello world! 我的全民摆摊</Text>
      <Button type='primary'>主要按钮</Button>
      <View>
        <Tabbar onSwitch={handlerSwitch}>
          <Tabbar.Item title='首页' icon={<Home size={18} />} value={9} />
          <Tabbar.Item title='分类' icon={<Category size={18} />} />
          <Tabbar.Item title='发现' icon={<Find size={18} />} />
          <Tabbar.Item title='购物车' icon={<Cart size={18} />} />
          <Tabbar.Item title='我的' icon={<User size={18} />} />
        </Tabbar>
      </View>
    </View>
  )
}
