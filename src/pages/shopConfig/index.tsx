import { View } from "@tarojs/components"
import Taro from "@tarojs/taro";
import { Form, Button, Input, TextArea,Uploader } from '@nutui/nutui-react-taro';

const App = () => {
  const submitFailed = (error: any) => {
    Taro.showToast({ title: JSON.stringify(error), icon: 'error' })
  }

  const submitSucceed = (values: any) => {
    Taro.showToast({ title: JSON.stringify(values), icon: 'success' })
  }
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const onStart = () => {
    console.log('start 触发')
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
            <Button formType='reset' style={{ marginLeft: '20px' }}>
              重置
            </Button>
          </View>
        }
      >
        <Form.Item
          label='摊位名称'
          name='name'
          rules={[{ required: true, message: "请输入摊位名称" }]}
        >
          <Input placeholder='请输入摊位名称' type='text' />
        </Form.Item>
        <Form.Item
          label='简介'
          name='short'
          rules={[{ required: true, message: "请输入字段C" }]}
        >
          <Input placeholder='请输入摊位简介' maxLength={20} />
        </Form.Item>
        <Form.Item
          label='详细介绍'
          name='address'
          rules={[{ required: true, message: "详细介绍" }]}
        >
          <TextArea placeholder='详细介绍' showCount maxLength={100} />
        </Form.Item>
        <Form.Item
          label='图片'
          name='files'
          initialValue={[
            {
              name: 'file1.png',
              url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
              status: 'success',
              message: 'success',
              type: 'image',
              uid: '122',
            },
          ]}
        >
          <Uploader url={uploadUrl} maxCount='5' />
        </Form.Item>
      </Form>
    </>
  )
}

export default App;
