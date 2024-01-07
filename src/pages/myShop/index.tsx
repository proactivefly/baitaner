import { useState } from 'react'
import { useLoad } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { Switch, Swiper, ImagePreview , Rate, Tag, Dialog } from '@nutui/nutui-react-taro';
import { StarFill } from '@nutui/icons-react-taro'
import TabBar from "@/components/tabbar/index"

import InfoItem from "@/components/descItem/index"
import './index.styl'

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
  const [onLine,setOnLine]=useState(true)

  const handlerCollectChange=(value)=>{
    console.log(value)
  }
  const hidePreview = () => {
    setShowPreview(false)
  }
  const handleOffline=(value)=>{
    console.log(value)
    setOnLine(value)
    Dialog.open('online', {
      title: '摊位在线状态',
      content:value?'摊位上线后将会推荐给附近人员，是否上线?':'摊位下线后将不会推荐给附近人员，是否下线?',
      onConfirm: () => {
        Dialog.close('online')
        setOnLine(value)
      },
      onCancel: () => {
        Dialog.close('online')
      },
    })
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
      color:'#000'
    },
    {
      label:'摊位地址',
      value:'北京市通州区台湖镇通成家园',
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
    <View className='pb-[200px] shop-index'>
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
          <View className='flex items-center mb-2'>
            <Text className='text-xl font-medium'>店铺名称 </Text>
            {
              onLine?<Tag type='success' className='ml-2'>在线</Tag>:<Tag className='ml-2' background='#E9E9E9' color='#999999'>标签</Tag>
            }
          </View>
          <Rate className='mr-1' count={1} defaultValue={0} checkedIcon={<StarFill color='rgb(255, 200, 0)' />} onChange={handlerCollectChange} />
        </View>
        <View className='flex mt-2 item'>
          <Text className='mr-2 shrink-0'>营业状态</Text>
          <View>
            <Switch
              activeText='开'
              inactiveText='关'
              checked={onLine}
              onChange={handleOffline}
            />
          </View>
        </View>
        {
          info.map((item,index)=>{
            return <InfoItem info={item} key={index} />
          })
        }
      </View>
      <Dialog id='online' />
      <View>
        <TabBar />
      </View>
    </View>
  )
}
