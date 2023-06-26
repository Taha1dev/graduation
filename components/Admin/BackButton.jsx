import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React from 'react';

const BackButton = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <div>
      <button className=" btn text-white" onClick={handleGoBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </div>
  );
};

export default BackButton;
