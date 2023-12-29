import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.styl'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='text-[100px] index p-6'>
      <Text>Hello world! 我的全民摆摊</Text>
    </View>
  )
}
