import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { Button , Swiper  , ImagePreview ,Rate} from '@nutui/nutui-react-taro';
import { StarFill, User } from '@nutui/icons-react-taro'
import { useState } from 'react'
import InfoItem from "@/components/descItem/index"

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })
  const handlerBannerClick=(e)=>{
    setShowPreview(true)
    setPreviewIndex(e+1)
  }
  const [showPreview, setShowPreview] = useState(false)
  const [previewIndex, setPreviewIndex] = useState<any>(1)
  const handlerCollectChange=(value)=>{
    console.log(value)
  }
  const hidePreview = () => {
    setShowPreview(false)
  }

  const list = [
    {src:'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg'},
    {src:'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg'},
    {src:'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg'},
    {src:'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'}
  ]

  const info=[
    {
      label:'',
      value:'摊位简介摊位简介摊位简介摊位简介摊位简介摊位简介摊位简介摊位简介摊介摊位简介摊位简介摊位简介摊位简介摊介摊位简介摊位简介摊位简介摊位简介摊介摊位简介摊位简介摊位简介摊位简介摊介摊位简介摊位简介摊位简介摊位简介摊介摊位简介摊位简介摊位简介摊位简介摊位简介摊位简介摊位简介lorem',
    },
    {
      label:'摊位地址',
      value:'北京市通州区台湖镇通成家园'
    },
    {
      label:'营业时间',
      value:'2023-12-12'
    },
    {
      label:'电话',
      value:'13910119420'
    },
    {
      label:'微信',
      value:'13910119420'
    },
    {
      label:'摊位人气',
      value:'99'
    }
  ]
  return (
    <View className='shop-index'>
      <View className='banner'>
        <Swiper
          defaultValue={0}
          indicator
          autoPlay
          height={300}
        >
        {list.map((item, index) => {
          return (
            <Swiper.Item key={index}>
              <img width='100%' height='100%' src={item.src} onClick={()=>handlerBannerClick(index)} title={item.src} />
            </Swiper.Item>
          )
        })}
        </Swiper>
        <ImagePreview
          images={list}
          visible={showPreview}
          value={previewIndex}
          indicator
          onChange={(value) => setPreviewIndex(value)}
          onClose={hidePreview}
        />
      </View>
      {/* info 描述信息 */}
      <View className='p-3 info'>
        <View className='flex justify-between'>
          <Text className='mb-3 text-xl font-medium'>店铺名称</Text>
          <Rate className='mr-1' count={1} defaultValue={0} checkedIcon={<StarFill color='rgb(255, 200, 0)' />} onChange={handlerCollectChange} />
        </View>

        {
          info.map((item,index)=>{
            return <InfoItem info={item} key={index} />
          })
        }
      </View>
    </View>
  )
}
