import { View } from '@tarojs/components'
// import BHeader from "@/components/header/index"
import ShopItem from '@/components/shopItem/index'
import TabBar from "@/components/tabbar/index"
import Taro, { useLoad } from '@tarojs/taro'
import { Swiper , BackTop, SafeArea,Divider } from '@nutui/nutui-react-taro'
import './index.styl'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
  ]
  const handlerBannerClick=(e)=>{
    console.log(e)
  }
  return (
    <View className='index'>
      <SafeArea position='top' />
      {/* <BHeader /> */}
      <View className='banner'>
        <Swiper
          defaultValue={0}
          indicator
          autoPlay
        >
        {list.map((item, index) => {
          return (
            <Swiper.Item key={index}>
              <img width='100%' height='100%' src={item} onClick={handlerBannerClick} title={item} />
            </Swiper.Item>
          )
        })}
        </Swiper>
      </View>
      <Divider>附近摊位信息</Divider>
      <View className='p-3 mt-2 shop-list'>
        {
          [1,2,3,4,5,6,7,8,9,10].map((item)=>{
            return (
              <ShopItem key={item} item={item} />
            )
          })
        }
      </View>
      <View>
        <TabBar />
      </View>
      <BackTop />
    </View>
  )
}
