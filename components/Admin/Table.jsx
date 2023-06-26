import React, { useState } from 'react';
import styles from './Table.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const EmployeeDetails = () => {
  const router = useRouter()
  const [employees, setEmployees] = useState([
    {
      id: '1',
      FirstName: 'John Doe',
      LastName: 'Administration',
      department: '(171) 555-2222',
      phone: '(171) 555-2222',
    },
    {
      id: '2',
      FirstName: 'John Doe',
      LastName: 'Administration',
      department: '(171) 555-2222',
      phone: '(171) 555-2222',
    },
    {
      id: '3',
      FirstName: 'John Doe',
      LastName: 'Administration',
      department: '(171) 555-2222',
      phone: '(171) 555-2222',
    },
  ]);

  const [newEmployee, setNewEmployee] = useState({
    id: '',
    FirstName: '',
    LastName: '',
    department: '',
    phone: '',
  });

  const handleAddEmployee = () => {
    router.push('/Admin/ViewallTable')
    setEmployees([...employees, newEmployee]);
    setNewEmployee({ name: '', department: '', phone: '' });
    [];
  };

  const handleDeleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  return (
    <div className="container-lg">
      <div className={styles.tableResponsive}>
        <div className={styles.tableWrapper}>
          <div className={styles.tableTitle}>
            <div className="row">
              <div className="col-sm-8">
                <h2>
                  Employee <b>Details</b>
                </h2>
              </div>
              <div className="d-flex justify-content-end  col-sm-4">
                <button
                  type="button"
                  className={`btn  btn-info ${styles['add-new']}`}
                  onClick={handleAddEmployee}
                >
                  See all
                </button>
              </div>
            </div>
          </div>
          <table className={`table table-bordered ${styles.table}`}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Phone</th>
                <th>Data labes</th>
                <th>Data labes</th>
                <th>Data labes</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.id}</td>
                  <td>{employee.FirstName}</td>
                  <td>{employee.LastName}</td>
                  <td>{employee.department}</td>
                  <td>{employee.phone}</td>
                  <td className={styles.crud}>
                    <FontAwesomeIcon
                      icon={faEdit}
                      className={`edit ${styles.edit}`}
                      title="Edit"
                      data-toggle="tooltip"
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      className={`delete ${styles.delete}`}
                      title="Delete"
                      data-toggle="tooltip"
                      onClick={() => handleDeleteEmployee(index)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
