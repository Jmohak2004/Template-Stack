import React from 'react'

const Form = () => {
  return (
    <div>
      <form action="/api/form" method="post">
      <input type="text" name="name" placeholder="Enter Name"/>
      <input type="text" name="email" placeholder="Enter Email"/>
      <input type="text" name="password" placeholder="Enter Password"/>
      <input type="number" name="age" placeholder="Confirm Age"/>
      <button type="submit">Submit form</button>
      </form>
    </div>
  )
}

export default Form
