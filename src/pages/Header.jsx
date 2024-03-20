import React from 'react'

const Header = () => {
  const persons = [
  {  id: 1, 
    name: 'bruce',
    age: 22,
    skill: 'react',
  },

  {  id: 2, 
    name: 'Clark',
    age: 23,
    skill: 'Angular',
  },

  {  id: 3, 
    name: 'diana',
    age: 21,
    skill: 'vue',
  },


]
const personList = persons.map(person => <li>I'm {person.name} I'm {person.age} year old And i have {person.skill} skill </li>)
  return (
    <div>

      <ul>{personList}</ul>
     
      
    </div>
  )
}

export default Header
