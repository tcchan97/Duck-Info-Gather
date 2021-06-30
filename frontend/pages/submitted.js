import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Submit.module.css'
import { Button, Space, DatePicker, Card, Form, Input, Checkbox, TimePicker, InputNumber } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import logo from '../public/duck-logo.png'



export default function Submitted() {
 
  return (
    <div className={styles.container}>
      <div className={styles.SecondaryContainer}>
        <div className={styles.LogoContainer}>
          <div className={styles.Logo}><Image src={logo}/></div>
          <div className={styles.LogoTitle}>Ducky Logger</div>
        </div>
        <CheckCircleOutlined className={styles.checkMark}/>
        <div className={styles.submitTitle}>Form Successfully Submitted!</div>
       
      </div>
    </div>
  )
}
