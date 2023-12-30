import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { Button } from '@nutui/nutui-react-taro';
import './index.styl'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='text-[100px] index p-6'>
      <Text>Hello world! 我的全民摆摊</Text>
      <Button openType='openSetting'>打开授权设置页</Button>
      <Button type='primary'>主要按钮</Button>
      <Button type='info'>信息按钮</Button>
      <Button type='default'>默认按钮</Button>
      <Button type='danger'>危险按钮</Button>
      <Button type='warning'>警告按钮</Button>
      <Button type='success'>成功按钮</Button>
    </View>
  )
}
