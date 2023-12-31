import { NavBar, Address } from '@nutui/nutui-react-taro'
import { Location , ArrowDown } from '@nutui/icons-react-taro'
import { View , Text} from '@tarojs/components'
import { useState , useEffect} from 'react'
import Taro from '@tarojs/taro'

export default function Header(){
  const [visible, setVisible] = useState(false)
  const [text, setText] = useState('请选择地址')
  const [navBarHeight,setNavBarHeight]=useState(0)
  const [headerHeight,setHeaderHeight]=useState(0)
  const [optionsDemo1] = useState([
    {
      value: '浙江',
      text: '浙江',
      children: [
        {
          value: '杭州',
          text: '杭州',
          disabled: true,
          children: [
            { value: '西湖区', text: '西湖区', disabled: true },
            { value: '余杭区', text: '余杭区' },
          ],
        },
        {
          value: '温州',
          text: '温州',
          children: [
            { value: '鹿城区', text: '鹿城区' },
            { value: '瓯海区', text: '瓯海区' },
          ],
        },
      ],
    },
    {
      value: '湖南',
      text: '湖南',
      disabled: true,
      children: [
        {
          value: '长沙',
          text: '长沙',
          disabled: true,
          children: [
            { value: '西湖区', text: '西湖区' },
            { value: '余杭区', text: '余杭区' },
          ],
        },
        {
          value: '温州',
          text: '温州',
          children: [
            { value: '鹿城区', text: '鹿城区' },
            { value: '瓯海区', text: '瓯海区' },
          ],
        },
      ],
    },
    {
      value: '福建',
      text: '福建',
      children: [
        {
          value: '福州',
          text: '福州',
          children: [
            { value: '鼓楼区', text: '鼓楼区' },
            { value: '台江区', text: '台江区' },
          ],
        },
      ],
    },
  ])

  const handlerSelectLocation=()=>{
    setVisible(true)
  }
  const handleAdressChange=(value)=>{
    console.log(value)
    setText(value)
  }
  // 左侧城市选择
  const Left=()=>{
    return (
      <View>
        <View className='flex items-center' onClick={handlerSelectLocation}>
          <Location size={12} />
          <Text className='m-2'>{text}</Text>
          <ArrowDown size={12} />
        </View>
        <Address
          visible={visible}
          options={optionsDemo1}
          title='选择地址'
          onChange={handleAdressChange}
          onClose={() => setVisible(false)}
        />
      </View>

    )
  }

  useEffect(()=>{
    getSystemInfo()
  })
  // 获取设备信息
  const getSystemInfo=()=>{
    console.log('获取设备信息')
    // 获取设备信息 https://juejin.cn/post/7076705501764911118
    const systemInfo:any=Taro.getSystemInfoSync()
    // 胶囊按钮位置信息
    const menuButtonInfo = Taro.getMenuButtonBoundingClientRect();
    // 导航栏高度
    const navBarH=(menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height
    setNavBarHeight(navBarH)
    // 导航栏高度 = 导航栏高度 + 状态栏高度
    const headerH = navBarHeight + systemInfo.statusBarHeight
    setHeaderHeight(headerH)
    console.log(navBarHeight,headerHeight)
  }
  return (
    <View className='navbar' style={{height:headerHeight+'px'}}>
        <NavBar left={<Left />} safeAreaInsetTop  style={{top:(headerHeight-navBarHeight)+'px'}}>
          <span onClick={(e) => Taro.showToast({ title: '标题' })}>
          摆摊儿
          </span>
        </NavBar>
    </View>
  )
}
