import React from 'react'

export const Mapdemo3 = () => {

    var students = [
        {id:1, name:'Rajan', age:22,city:'New York', gender:'M'},
        {id:2, name:'Ronak', age:21, city:'Los Angeles', gender:'M'},
        {id:3, name:'Mahi', age:23 , city:'Chicago', gender:'F'},
        {id:4, name:'Ankita', age:20, city:'Houston', gender:'F'},
    ];


  return (
    <div style={{textAlign:'center'}}>
        <h1>Mapdemo3</h1>
        <table className='table table-warning'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {students.map(student => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.city}</td>
                        <td>{student.gender}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
