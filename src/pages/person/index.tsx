import { Cell, Button , Avatar} from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ArrowRight } from '@nutui/icons-react-taro'
import TabBar from "@/components/tabbar/index"
import "./index.styl"

export default function Index(){
  const onJumpclick =(path) => {
    Taro.navigateTo({
      url:path
    })
  }
  const url='https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png'
  return (
      <>
        <View className='flex items-center justify-center avatar'>
            <Avatar size='large' src={url} />
        </View>
        {/* <Cell
          title='个人信息'
          align='center'
          extra={<ArrowRight />}
        /> */}
        <Cell
          title='我的店铺'
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
          <Button block type='primary'>退出</Button>
        </View>
        <View>
          <TabBar />
        </View>
      </>
  )
}
