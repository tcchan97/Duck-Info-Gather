import styles from '../styles/Home.module.css'
import { Table, Tag, Space } from 'antd';
import moment from 'moment';
import Image from 'next/image'
import logo from '../public/duck-logo.png'
import React, { useState, useEffect } from 'react';

const columns = [
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Food Type',
    dataIndex: 'foodType',
    key: 'foodType',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Number of Ducks',
    dataIndex: 'numberOfDucks',
    key: 'numberOfDucks',
  },
  {
    title: 'Quantity of Food',
    dataIndex: 'quantityOfFood',
    key: 'quantityOfFood',
  },

];


export default function dashboard(props) {
  const size = useWindowSize();
  console.log(props);
  console.log(size)
  return (
    <div className={styles.container}>
      <div className={styles.SecondaryContainer}>
        <div className={styles.LogoContainer}>
          <div className={styles.Logo}><Image src={logo} /></div>
          <div className={styles.LogoTitle}>Ducky Logger</div>
        </div>
        <Table size={size.width < 500 ? 'small':'default'} columns={columns} dataSource={props.data} />
      </div>
    </div>)

}

export async function getServerSideProps(context) {
  const result = await fetch('http://localhost:8000/getDuckInfo', { method: "GET" })
  const data = await result.json();
  console.log("data", data)
  for (let i = 0; i < data.length; i++) {
    data[i].key = i;
    data[i].time = moment(data[i].time).format('MMMM Do YYYY, h:mm:ss a');
  }
  return {
    props: {
      data: data
    }, // will be passed to the page component as props
  }
}

// Hook to get window size
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
    

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); 
  return windowSize;
}