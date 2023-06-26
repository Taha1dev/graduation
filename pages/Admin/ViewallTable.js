import React from 'react';
import BigTable from '@/components/Admin/DynamicTable';
import Layout from '@/components/Admin/Layout';
import NewsCardBtn from '@/components/newsPage/NewsCardBtn';
const ViewallTable = (props) => {
  return (
    <>
      <BigTable name={props.name} />
      <div
        className="d-flex justify-content-center btn-group me-5"
        role="group"
        aria-label="First group"
      >
        <NewsCardBtn value={1} />
        <NewsCardBtn value={2} />
        <NewsCardBtn value={'...'} />
        <NewsCardBtn value={'>'} />
      </div>
    </>
  );
};

export default ViewallTable;
