import React, { useState } from 'react'
import styles from './Table.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const DynamicTable = ({ data, columns, onDelete, onEdit, name }) => {
  const [showAddNew, setShowAddNew] = useState(false)

  const handleAddNew = () => {
    // Handle adding new data
  }

  return (
    <div className="container-lg">
      <div className={styles.tableResponsive}>
        <div className={styles.tableWrapper}>
          <div className={styles.tableTitle}>
            <div className="row">
              <div className="col-sm-8">
                <h2>
                  {name} <b>Details</b>
                </h2>
              </div>
              <div className="col-sm-4 d-flex justify-content-end align-items-center">
                {showAddNew ? (
                  <button
                    className="btn btn-outline-secondary me-3"
                    onClick={() => setShowAddNew(false)}
                  >
                    Cancel
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => setShowAddNew(true)}
                  >
                    Add New
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className={styles.tableContainer}>
            <table
              className={`table table-responsive striped hover table-bordered ${styles.table}`}
            >
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id}>
                    {columns.map((column) => (
                      <td key={column}>{row[column.toLowerCase()]}</td>
                    ))}
                    <td>
                      <div
                        className={`d-flex justify-content-evenly ${styles.actions}`}
                      >
                        <button
                          className={`delete ${styles.delete}`}
                          onClick={() => onDelete(row.id)}
                        >
                          <FontAwesomeIcon icon={faTrash} title="Delete" />
                        </button>
                        <button
                          className={`edit ${styles.edit}`}
                          onClick={() => onEdit(row.id)}
                        >
                          <FontAwesomeIcon icon={faEdit} title="Edit" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {showAddNew && (
              <button className={styles.addButton} onClick={handleAddNew}>
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DynamicTable
