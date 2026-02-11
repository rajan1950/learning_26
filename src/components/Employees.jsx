import React from 'react'
import { EmployeeList } from './EmployeeList'

export const Employees = () => {
    var title = "EMPLOYEE APP"
    var company = {
        name : "TCS",
        year : "2026",
        location : "India"
    }

    var employees = [
      {  id: 1, name:"John", age:30, department:"HR"},
      {  id: 2, name:"Jane", age:25, department:"Finance"},
      {  id: 3, name:"Bob", age:35, department:"IT"},
      {  id:  4, name:"Alice", age:28, department:"Marketing"},
    ]

  return (
    <div style={{textAlign:"center"}}>
        <h1>Employees</h1>
        <EmployeeList title = {title} company = {company} location = {company.location} employees = {employees}></EmployeeList>
    </div>
  )
}
