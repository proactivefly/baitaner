import { View , Text} from "@tarojs/components";

export default function Index(props){
  const {label,value}=props.info
  return (
    <View className='flex mt-2 item'>
      <Text className={[label?'mr-2':'','shrink-0']}>{label}</Text>
      <View className='text-gray-500'>{value}</View>
    </View>
  )
}
