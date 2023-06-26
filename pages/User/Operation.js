import Layout from '@/Layout/User/Layout';
import React from 'react';
import styles from '@/styles/user/all.module.css';
import BackButton from '@/components/Admin/BackButton';
const Operation = () => {
  return (
    <Layout>
      <BackButton/>
      <div className="container py-5">
        <div className="table-responsive">
          <table
            className={`table table-striped table-bordered ${styles.table}`}
          >
            <thead>
              <tr className={`${styles.tr}`}>
                <th className={`${styles.th}`}>Operation Name</th>
                <th className={`${styles.th}`}>Operation Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className={`${styles.tr}`}>
                <td className={`${styles.td}`}>data</td>
                <td className={`${styles.td}`}>data</td>
              </tr>
              <tr className={`${styles.tr}`}>
                <td className={`${styles.td}`}>data</td>
                <td className={`${styles.td}`}>data</td>
              </tr>
              <tr className={`${styles.tr}`}>
                <td className={`${styles.td}`}>data</td>
                <td className={`${styles.td}`}>data</td>
              </tr>
              <tr className={`${styles.tr}`}>
                <td className={`${styles.td}`}>data</td>
                <td className={`${styles.td}`}>data</td>
              </tr>
              <tr className={`${styles.tr}`}>
                <td className={`${styles.td}`}>data</td>
                <td className={`${styles.td}`}>data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Operation;
