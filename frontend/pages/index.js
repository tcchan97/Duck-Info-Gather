import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Form.module.css'
import { Button, Space, DatePicker, Card, Form, Input, Checkbox, TimePicker, InputNumber } from 'antd';
import logo from '../public/duck-logo.png'
import { useRouter } from 'next/router'

// Set configuration for antd forms
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
  const router = useRouter();
  const onChange = () => { };

  // When submitting the form send it to the nextjs api - saveDuck -> nodejs backend 
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
        router.push('/submitted')
      }
    }
    catch {
      console.log("Data not Saved");
      router.push('/submittedError')
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={styles.container}>
      <div className={styles.SecondaryContainer}>
        <div className={styles.LogoContainer}>
          <div className={styles.Logo}><Image src={logo}/></div>
          <div className={styles.LogoTitle}>Ducky Logger</div>
        </div>
        <Form
          name="basic"
          labelCol={{
            span: 30,
            offset: 0,
          }}
          wrapperCol={{
            span: 200,
            offset:0,
          }}
          initialValues={{
            remember: true,
          }}
          labelAlign="left"
          onFinish={onFinish}
          layout="vertical"
          onFinishFailed={onFinishFailed}
        >
          <Form.Item name="time" label="Time ducks were fed?" {...config}>
            <TimePicker />
          </Form.Item>


          <Form.Item
            label="Type of food ducks were fed?"
            name="foodType"
          >
            <Input placeholder="Type of Food"/>
          </Form.Item>

          <Form.Item
            label="Where were the ducks fed?"
            
            name="location"
          >
            <Input placeholder="Location"/>
          </Form.Item>

          <Form.Item name="numberOfDucks" label="How many ducks were fed?" rules={[{ type: 'number', min: 0, max: 1000 }]}>
            <InputNumber placeholder="# of Ducks"/>
          </Form.Item>

          <Form.Item name="quantityOfFood" label="How much food the ducks were fed? (Kg)" rules={[{ type: 'number', min: 0, max: 1000 }]}>
            <InputNumber placeholder="(Kg)" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 10,
              span: 16,
            }}
          >
            <Button className={styles.submitButton} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
