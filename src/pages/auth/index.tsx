import { View } from "@tarojs/components"
import  {Button } from "@nutui/nutui-react-taro"

export default function Auth(){
  return (
    <View className='flex items-center justify-center p-10'>
      <Button type='primary' size='large'>登录</Button>
    </View>
  )
}
