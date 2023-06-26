import Layout from '@/components/Admin/Layout';
import React, { useState } from 'react';
import styles from '@/styles/Admin/Deaths.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import ViewallTable from './ViewallTable';
import { Container } from 'react-bootstrap';
import { useRouter } from 'next/router';
import BackButton from '@/components/Admin/BackButton';
import DynamicTable from '@/components/Admin/DynamicTable';
const BloodBank = () => {
  const router = useRouter();
  const handleAddCrad = () => {
    router.push('/Admin/AddBlood');
  };
  
  const [data, setData] = useState([
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
  const columns = 
  [
    'Name',
    'Type',
    'Quantity',
    'RoomID',
  ]

  return (
    <Layout>
      <BackButton />
      <Container>
        <div className="col m-2">
          <Link
            style={{ display: 'inline-block' }}
            href="/Admin/Deaths"
            className={`${styles['link-none']}`}
          >
            <div className={`card ${styles['card-type']}`}>
              <div className="card-body d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <p className={`${styles['card-tit']} ms-2 mb-0`}>Add New</p>
                </div>
                <div className="me-2 d-flex align-items-center">
                  <FontAwesomeIcon
                    onClick={handleAddCrad}
                    icon={faAdd}
                    className={`${styles['card-icon']} ms-2`}
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
        <DynamicTable
        name={'Blood Bank'}
        data={data}
        columns={columns}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      </Container>
    </Layout>
  );
};

export default BloodBank;
