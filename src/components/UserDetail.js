import React from 'react'

export default function UserDetail(props) {
  console.log("props ", props);
  const {
    firstname,
    home,
    nameChangeHandler,
    homeChangeHandler
  } = props;
  return (
    <div>
      <div>
        <h1>{firstname}</h1>
        <h2>{home}</h2>
      </div>
      <hr />
      <form action="">
        <input type="text" name="name" placeholder="Name" value={firstname} onChange={e => nameChangeHandler(e)} />
        <br/>
        <br/>
        <input type="text" name="address" placeholder="Address" value={home} onChange={e => homeChangeHandler(e)} />
      </form>
    </div>
  )
}
