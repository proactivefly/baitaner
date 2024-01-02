import { Button, Input, TextArea, Uploader, Form} from '@nutui/nutui-react-taro'
import Taro from "@tarojs/taro"
import { View } from "@tarojs/components"

const App = () => {
  const submitFailed = (error: any) => {
    Taro.showToast({ title: JSON.stringify(error), icon: 'error' })
  }

  const submitSucceed = (values: any) => {
    Taro.showToast({ title: JSON.stringify(values), icon: 'success' })
  }
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'

  const back=()=>{
    Taro.reLaunch({
      url:'/pages/index/index'
    })
  }
  return (
    <>
      <Form
        divider
        labelPosition='left'
        onFinish={(values) => submitSucceed(values)}
        onFinishFailed={(values, errors) => submitFailed(errors)}
        footer={
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Button formType='submit' type='primary'>
              提交
            </Button>
            <Button style={{ marginLeft: '20px' }} onClick={back}>
              取消
            </Button>
          </View>
        }
      >
        <Form.Item
          label='问题名称'
          name='name'
          rules={[{ required: true, message: "请输入问题名称" }]}
        >
          <Input placeholder='请输入问题' type='text' />
        </Form.Item>

        <Form.Item
          label='详情'
          name='address'
          rules={[{ required: true, message: "请描述您的问题" }]}
        >
          <TextArea placeholder='请描述您的问题' showCount maxLength={100} />
        </Form.Item>
        <Form.Item
          label='图片'
          name='files'
          initialValue={[]}
        >
          <Uploader url={uploadUrl} maxCount='5' />
        </Form.Item>
      </Form>
    </>
  )
}

export default App;
