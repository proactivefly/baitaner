import { View , Text} from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import { Skeleton } from '@nutui/nutui-react-taro'
import { Location } from '@nutui/icons-react-taro'
import "./index.styl"

export default function ShopItem(props){

  useLoad(() => {
    // console.log(' ShopItem Page loaded.')
  })

  const url='https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg'
  const goDetail=(shop)=>{
    console.log('shop',shop)
    Taro.navigateTo({
      url:'/pages/shopIndex/index'
    })
  }

  return (
    <View className='mt-4'>
      {
        props.item?
        <View className='rounded-md shadow-lg shopItem' onClick={()=>goDetail(props)}>
          <View className='img'>
            <img src={url} title='店铺名称' />
          </View>
          <View className='info'>
            <View className='truncate title'>店铺店铺名称店铺名称名称</View>
            <View className='indrduce'>店铺简介店铺简店铺简介店铺简介店铺简介介店铺简介店铺简介店铺简介店铺简介</View>
            <View className='flex items-center address'>
              <Text className='truncate location'>位置：通成家园小区8号楼一单元303</Text>
            </View>
            <View className='flex items-center address'>
              <Location size={12} className='shrink-0' />
              <Text className='ml-1 truncate location'>50m</Text>
            </View>
          </View>
        </View>
        :
        <Skeleton rows={3} title animated avatar avatarSize='100px' />
      }
    </View>
  )
}
