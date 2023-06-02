import React from 'react';
import Swal from 'sweetalert';

const MyComponent = () => {
  const handleClick = () => {
    Swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        Swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        Swal("Your imaginary file is safe!");
      }
    });
  }

  return (
    <button onClick={handleClick}>Delete file</button>
  );
};

export default MyComponent;