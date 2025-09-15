const studentsData = {
  "Green Valley School": {
    class6: [
      { name: "Rahim", roll: 1 },
      { name: "Karim", roll: 2 }
    ],
    class7: [
      { name: "Sadia", roll: 1 },
      { name: "Nusrat", roll: 2 }
    ]
  },
  "Sunrise Academy": {
    class8: [
      { name: "Fahim", roll: 1 },
      { name: "Jahid", roll: 2 }
    ]
  }
}

// Get all school names
const schools = Object.keys(studentsData)
console.log("Schools:", schools)

// Loop through each school and list its classes
schools.forEach(school => {
  console.log(`\nSchool: ${school}`)
  const classes = Object.keys(studentsData[school])
  console.log("Classes:", classes)

  classes.forEach(cls => {
    console.log(`  Class: ${cls}`)
    const students = studentsData[school][cls]
    students.forEach(student => {
      console.log(`    ${student.name} (Roll: ${student.roll})`)
    })
  })
})
