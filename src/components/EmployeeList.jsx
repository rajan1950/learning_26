import React from 'react'
import { SubEmployeeList } from './SubEmployeeList'


export const EmployeeList = (props) => {
    console.log("emplist", props)
    return (
        <div style={{ textAlign: "center" }}>
            <h1>{props.title}</h1>
            <h2>{props.company.name}</h2>
            <h2>{props.company.year}</h2>
            <h2>{props.location}</h2>
            <table className='table table-striped' style={{ margin: "0 auto", width: "50%" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employees.map((emp) => {
                        return <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                            <td>{emp.department}</td>
                        </tr>
                    })}
                </tbody>
        </table>
                <SubEmployeeList title={props.title}></SubEmployeeList>
        </div >
    )
}
