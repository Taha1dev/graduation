// pages/my-chart-page.js

import Layout from '@/components/Admin/Layout';
import dynamic from 'next/dynamic';
import styles from '@/styles/Admin/Patient.module.css'
import { useState } from 'react';
import BackButton from '@/components/Admin/BackButton';
import DynamicTable from '@/components/Admin/DynamicTable';
[];
const DynamicBarChart = dynamic(
  () => import('@/components/Admin/Charts/BarChart'),
  {
    ssr: false,
  }
);

const Patients = ({ data }) => {
  const [chartData, setChartData] = useState(data);

  const handleDataChange = (newData) => {
    setChartData(newData);
  };
  const [values, setValues] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'janedoe@example.com' },
    {
      id: 3,
      firstName: 'Bob',
      lastName: 'Smith',
      email: 'bobsmith@example.com',
    },
    {
      id: 4,
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alicejohnson@example.com',
    },
  ]);

  const handleDelete = (id) => {
    // Handle deleting data
  };

  const handleEdit = (id) => {
    // Handle editing data
  };
  const columns = [
    'user_id',
    'FirstName',
    'LastName',
    'PhoneNumber',
    'email',
    'NationalNumber',
    'Gender',
    'PatientStatus',
    'BirthDate',
    'PatientLength',
    'PatientWeight',
]
  return (
    <Layout>
      <BackButton/>
      <center>
        <DynamicBarChart data={chartData} onDataChange={handleDataChange} />
        <div className={styles.btm}>
        <DynamicTable
        name={'Patients'}
        data={values}
        columns={columns}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
        </div>
      </center>
    </Layout>
  );
};

export async function getServerSideProps() {
  // Fetch data from an API or database
  const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  ];

  return {
    props: {
      data,
    },
  };
}

export default Patients;
