import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Space, DatePicker, Card, Form, Input, Checkbox, TimePicker, InputNumber } from 'antd';
import { CiCircleFilled } from '@ant-design/icons';

const config = {
  rules: [
    {
      type: 'object',
      required: true,
      message: 'Please select time!',
    },
  ],
};

export default function Home() {
  const onChange = () => { };

  const onFinish = async (values) => {
    const payload = {
      time: values.time,
      foodType: values.foodType ? values.foodType : "",
      location: values.location ? values.location : "",
      numberOfDucks: values.numberOfDucks ? values.numberOfDucks : 0,
      quantityOfFood: values.quantityOfFood ? values.quantityOfFood : 0,
    }
    try {
      const res = await fetch('http://localhost:3000/api/saveDuck', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (res.status === 200) {
        console.log("Saved Duck Data");
      }
    }
    catch {
      console.log("Data not Saved");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={styles.container}>
      <Form
        name="basic"
        labelCol={{
          span: 15,
        }}
        wrapperCol={{
          span: 50,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item name="time" label="Time Ducks were fed?" {...config}>
          <TimePicker />
        </Form.Item>


        <Form.Item
          label="Type of food ducks were fed?"
          name="foodType"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Where were the ducks fed?"
          name="location"
        >
          <Input />
        </Form.Item>

        <Form.Item name="numberOfDucks" label="How many ducks were fed?" rules={[{ type: 'number', min: 0, max: 1000 }]}>
          <InputNumber />
        </Form.Item>

        <Form.Item name="quantityOfFood" label="How much food the ducks were fed? (Kg)" rules={[{ type: 'number', min: 0, max: 1000 }]}>
          <InputNumber />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
