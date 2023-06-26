import React, { useState } from 'react';
import Layout from '@/components/Admin/Layout';
import BackButton from '@/components/Admin/BackButton';
import styles from '@/styles/Admin/Department.module.css'
import { Link } from 'react-scroll';
import DynamicTable from '@/components/Admin/DynamicTable';
import { useRouter } from 'next/router';

const Departments = () => {
  const router = useRouter();
  const handleAddDeath = () => {
    router.push('/Admin/AddDeath');
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
  const columns = ['ID', 'Patient-Id', 'Patient Name', 'Death Date']
  return (
    <>
      <Layout>
      <BackButton />
      <div className={styles.container}>
      <div className={styles.row}>
        <div className={`${styles.col} m-2`}>
          <Link href="#" className={styles.linkNone}>
            <div className={`${styles.card} ${styles.cardType}`}>
              <div className={styles.cardBody}>
                <img src='/svgs/eye.svg' alt="Eye department icon" className={`${styles.eye} mb-2`} />
                <p className={`${styles.cardTit} text-center`}>EYE</p>
              </div>
            </div>
          </Link>
        </div>
        <div className={`${styles.col} m-2`}>
          <Link href="#" className={styles.linkNone}>
            <div className={`${styles.card} ${styles.cardType}`}>
              <div className={styles.cardBody}>
                <img src='/svgs/res.svg' alt="Respiratory department icon" className={`${styles.res} mb-2 ms-3`} />
                <p className={`${styles.cardTit} text-center`}>Respiratory</p>
              </div>
            </div>
          </Link>
        </div>
        <div className={`${styles.col} m-2`}>
          <Link href="#" className={styles.linkNone}>
            <div className={`${styles.card} ${styles.cardType}`}>
              <div className={styles.cardBody}>
                <img src='/svgs/test-pic.svg' alt="Laboratory department icon" className={`${styles.testPic} ms-3 mb-3`} />
                <p className={`${styles.cardTit}`}>laboratory</p>
              </div>
            </div>
          </Link>
        </div>
        <div className={`${styles.col} m-2`}>
          <Link href="#" className={styles.linkNone}>
            <div className={`${styles.card} ${styles.cardType}`}>
              <div className={styles.cardBody}>
                <img src='/svgs/bone.svg' alt="Osteomyelitis department icon" className={`${styles.bone} ms-4 mb-3`} />
                <p className={`${styles.cardTit}`}>osteomyelitis</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.col} m-2`}>
          <Link href="#" className={styles.linkNone}>
            <div className={`${styles.card} ${styles.cardType}`}>
              <div className={styles.cardBody}>
                <img src='/svgs/heart.svg' alt="Heart department icon" className={`${styles.heart} mb-3`} />
                <p className={`${styles.cardTit} text-center my-0`}>heart</p>
              </div>
            </div>
          </Link>
        </div>
        <div className={`${styles.col} m-2`}>
          <Link href="#" className={styles.linkNone}>
            <div className={`${styles.card} ${styles.cardType}`}>
              <div className={styles.cardBody}>
                <img src='/svgs/ner.svg' alt="Nerves department icon" className={`${styles.ner} ms-1 mb-3`} />
                <p className={`${styles.cardTit}`}>nerves</p>
              </div>
            </div>
          </Link>
        </div>
        <div className={`${styles.col} m-2`}>
          <Link href="#" className={styles.linkNone}>
            <div className={`${styles.card} ${styles.cardType}`}>
              <div className={styles.cardBody}>
                <img src='/svgs/stomach.svg' alt="Digestive department icon" className={`${styles.stomach} ms-2 mb-3`} />
                <p className={`${styles.cardTit} text-center`}>digestive</p>
              </div>
            </div>
          </Link>
        </div>
        <div className={`${styles.col} m-2`}>
          <Link href="#" className={styles.linkNone}>
            <div className={`${styles.card} ${styles.cardType}`}>
              <div className={styles.cardBody}>
                <img src='/svgs/child.svg' alt="Children department icon" className={`${styles.child} ms-1`} />
                <p className={`${styles.cardTit} text-center mb-2`}>children</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.col} col-3 m-2`}>
          <Link href="#" className={styles.linkNone}>
            <div className={`${styles.card} ${styles.cardType}`}>
              <div className={styles.cardBody}>
                <img src='/svgs/Ambulance.svg' alt="Emergency department icon" className={`${styles.ambulance} mb-3`} />
                <p className={`${styles.cardTit} text-center`}>emergency</p>
              </div></div>
          </Link>
        </div>
        <div className={`${styles.col} col-3 m-2`}>
          <Link href="#" className={styles.linkNone}>
            <div className={`${styles.card} ${styles.cardType}`}>
              <div className={styles.cardBody}>
                <img src='/svgs/sur.svg' alt="Surgery department icon" className={`${styles.surgery} mb-3`} />
                <p className={`${styles.cardTit} text-center`}>surgery</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
      <DynamicTable
        name={'Deaths'}
        data={data}
        columns={columns}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      </Layout>
    </>
  );
};

export default Departments;