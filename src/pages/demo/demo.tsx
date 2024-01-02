import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { Button  } from '@nutui/nutui-react-taro';
import './demo.styl'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })
  return (
    <View className='demo'>
      <Text>Hello world! 我的全民摆摊</Text>
      <Button type='primary'>主要按钮</Button>
    </View>
  )
}
