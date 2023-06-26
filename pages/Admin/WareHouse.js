import Layout from '@/components/Admin/Layout';
import React from 'react';
import ViewallTable from './ViewallTable';
import BackButton from '@/components/Admin/BackButton';

const WareHouse = () => {
  return (
    <>
      <Layout>
        <BackButton />
        <ViewallTable name="WareHouse" />
      </Layout>
    </>
  );
};

export default WareHouse;
