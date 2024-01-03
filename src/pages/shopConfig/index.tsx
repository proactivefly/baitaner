import { Cell, Button, Input, TextArea, Uploader, Picker, Form} from '@nutui/nutui-react-taro'
import Taro from "@tarojs/taro"
import { View } from "@tarojs/components"
import {ArrowRight} from "@nutui/icons-react-taro"
import { useState } from 'react'

const App = () => {
  const submitFailed = (values,error: any) => {
    console.log('values',values)
    Taro.showToast({ title: JSON.stringify(error), icon: 'error' })
  }
  const [status,setStatus]=useState(true)
  const submitSucceed = (values: any) => {
    Taro.showToast({ title: JSON.stringify(values), icon: 'success' })
  }
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const pickerOptions=[
    {text:'美食',value:1},
    {text:'手工艺品',value:2},
    {text:'服务',value:3},
    {text:'其他',value:4},
  ]
  const back=()=>{
    Taro.navigateBack({
      delta:1
    })
  }
  const formatter = (value: string) => value.replace(/\s/g, "")
  return (
    <>
      <Form
        divider
        labelPosition='left'
        onFinish={(values) => submitSucceed(values)}
        onFinishFailed={(values, errors) => submitFailed(values,errors)}
        footer={
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            {
              status?
              <Button type='success' onClick={()=>setStatus(false)}>
                维护摊位
              </Button>
              :
              <Button formType='submit' type='primary'>
                提交
              </Button>
            }
            <Button style={{ marginLeft: '20px' }} onClick={back}>
              返回
            </Button>
          </View>
        }
      >
        <Form.Item
          label='摊位名称'
          name='name'
          rules={[{ required: true, message: "请输入名称" }]}
        >
          <Input placeholder='请输入摊位名称' type='text'  disabled={status} />
        </Form.Item>
        <Form.Item
          label='经营种类'
          name='type'
          trigger='onConfirm'
          rules={[{ required: true, message: "请选择经营种类" }]}
          getValueFromEvent={(...args) => args[1]}
          onClick={(_, ref: any) => {
            if(!status){
              ref.open()
            }
          }}
        >
          <Picker options={[pickerOptions]} title='请选择经营范围'>
            {(value: any) => {
              return (
                <Cell
                  style={{
                    padding: 0,
                    '--nutui-cell-divider-border-bottom': '0',
                  }}
                  className='nutui-cell--clickable'
                  title={
                    value.length
                      ? pickerOptions.filter((po) => po.value === value[0])[0]
                        ?.text
                      : '请选择经营种类'
                  }
                  extra={<ArrowRight />}
                  align='center'
                />
              )
            }}
          </Picker>
        </Form.Item>
        <Form.Item
          label='简介'
          name='short'
          rules={[{ required: true, message: "请输入摊位简介" }]}
        >
          <Input placeholder='请输入摊位简介' maxLength={20}  disabled={status} />
        </Form.Item>
        <Form.Item
          label='详细介绍'
          name='detail'
          rules={[{ required: true, message: "请输入详细介绍" }]}
        >
          <TextArea placeholder='请输入详细介绍' showCount maxLength={100}  disabled={status} />
        </Form.Item>
        <Form.Item
          label='图片'
          name='files'
          rules={[{ required: true, message: "请上传摊位图片" }]}
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
          <Uploader url={uploadUrl} maxCount='5' disabled={status} />
        </Form.Item>
        <Form.Item label='电话' name='mobile'>
          <Input placeholder='请输入电话号码' maxLength={11} type='number' formatter={formatter} formatTrigger='onChange' disabled={status} />
        </Form.Item>
        <Form.Item label='微信号' name='wechat'>
          <Input placeholder='请输入微信号码' formatter={formatter} formatTrigger='onChange' disabled={status} />
        </Form.Item>
      </Form>
    </>
  )
}

export default App;
