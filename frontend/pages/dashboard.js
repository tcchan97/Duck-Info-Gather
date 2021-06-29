import styles from '../styles/Home.module.css'
import { Table, Tag, Space } from 'antd';
import moment from 'moment';

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
  console.log(props);
  return (
  <div className={styles.container}>
    <Table columns={columns} dataSource={props.data} />
  </div>)

}

export async function getServerSideProps(context) {
  const result = await fetch('http://localhost:8000/getDuckInfo', {method: "GET"})
  const data = await result.json();
  console.log("data",data)
  for (let i = 0; i < data.length; i++){
    data[i].key = i;
    data[i].time = moment(data[i].time).format('MMMM Do YYYY, h:mm:ss a');
  }
  return {
    props: {
      data: data
    }, // will be passed to the page component as props
  }
}