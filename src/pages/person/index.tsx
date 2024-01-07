import { useState } from 'react'
import Taro from '@tarojs/taro'
import { View , Text } from '@tarojs/components'
import { Cell, Button , Avatar} from '@nutui/nutui-react-taro'
import { ArrowRight } from '@nutui/icons-react-taro'
import TabBar from "@/components/tabbar/index"
import "./index.styl"

export default function Index(){
  const [auth , setAuth]=useState(true)
  const onJumpclick =(path) => {
    Taro.navigateTo({
      url:path
    })
  }
  const goLogin=()=>{
    Taro.getUserProfile({
      desc: '用于完善会员资料', //
      success: function(res) {
        var userInfo = res.userInfo
        console.log('userInfo',userInfo)
        setAuth(true)
      }
    })
  }
  const url='https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png'
  return (
      <>
        {
          auth?
          <View>
            <View className='flex items-center justify-center avatar'>
              <View className='flex flex-col items-center justify-center'>
                <Avatar size='large' src={url} />
                <Text className='mt-4'>用户名</Text>
              </View>
            </View>
            <Cell
              title='我的摊位'
              align='center'
              extra={<ArrowRight />}
              onClick={()=>onJumpclick('/pages/shopConfig/index')}
            />
            <Cell
              title='我的收藏'
              extra={<ArrowRight />}
              align='center'
              onClick={()=>onJumpclick('/pages/collect/index')}
            />
            <Cell
              title='问题反馈'
              extra={<ArrowRight />}
              align='center'
              onClick={()=>onJumpclick('/pages/feedback/index')}
            />
            <View className='btn'>
              <Button block type='primary' size='large' onClick={()=>setAuth(false)}>退出</Button>
            </View>
          </View>
          :
          <View className='p-[70px] mt-[30vh]'>
            <Button block type='success' size='large' onClick={goLogin}>去登录</Button>
          </View>
        }
        <View>
          <TabBar />
        </View>
      </>
  )
}
