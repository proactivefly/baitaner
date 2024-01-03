import { useState, useEffect } from 'react'
import ShopItem from "@/components/shopItem/index"
import { View  } from "@tarojs/components"
import { Empty  , InfiniteLoading , Loading} from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'
import './index.styl'

export default function App(){
  const [dataList, setDataList] = useState<string[]>([])
  const [hasMore, setHasMore] = useState(true)

  const sleep = (time: number): Promise<unknown> => new Promise((resolve) => {setTimeout(resolve, time)})
  useEffect(() => {
    init()
  },[])
  const loadMore = async () => {
    await sleep(2000)
    const curLen = dataList.length
    for (let i = curLen; i < curLen + 10; i++) {
      dataList.push(`${i}`)
    }
    if (dataList.length >= 30) {
      setHasMore(false)
    } else {
      setDataList([...dataList])
    }
  }

  const refresh = async () => {
    await sleep(1000)
    Taro.showToast({
      title: '刷新成功',
      icon: 'success',
      duration: 2000,
    })
  }

  const init = () => {
    for (let i = 0; i < 3; i++) {
      dataList.push(`${i}`)
    }
    setDataList([...dataList])
  }
  return (
    <>
      <View className='p-3'>
        {
          dataList.length > 0 ?
          <View className='scoll-container'>
            <InfiniteLoading
              pullingText={
                <>
                  <Loading direction='vertical'> 松开刷新</Loading>
                </>
              }
              loadingText={
                <Loading direction='vertical' />
              }
              loadMoreText='哎呀，这里是底部了啦'
              pullRefresh
              hasMore={hasMore}
              onLoadMore={loadMore}
              onRefresh={refresh}
            >
              {dataList.map((item, index) => {
                return (
                  <ShopItem key={index} item={item} />
                )
              })}
            </InfiniteLoading>
          </View>
          :
          <Empty
            title='标题'
            description='无数据'
            actions={[
            { text: "操作按钮" }
            ]}
          />
        }
      </View>
    </>
  )
}
