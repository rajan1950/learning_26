import React from 'react'

export const Mapdemo5 = () => {


    var students = [
        { id: 1, name: 'Rajan', age: 22, city: 'New York', gender: 'M' },
        { id: 2, name: 'Ronak', age: 21, city: 'Los Angeles', gender: 'M' },
        { id: 3, name: 'Mahi', age: 23, city: 'Chicago', gender: 'F' },
        { id: 4, name: 'Ankita', age: 20, city: 'Houston', gender: 'F' },
    ];

    return (
      <div style={{textAlign:'center'}}>
        <h1>Mapdemo5</h1>
        <table className='table table-dark'>
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
                        <td style={{backgroundColor: student.gender && 'pink'}}>{student.name}</td>
                        <td style={{color: student.age > 21 ? 'red' : 'green'}}>{student.age}</td>
                        <td>{student.city}</td>
                        <td style={{color: student.gender === 'M' ? 'blue' : 'pink'}}>{student.gender}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}
