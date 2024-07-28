import React from 'react'
import { useUser } from './component/UserContext'
import Dashboard from './component/Dashboard';
import ShowUsers from './component/ShowUsers';

const App = () => {

  return (
    <div className='overflow-x-hidden'>
      <Dashboard/>
      <ShowUsers/>
    </div>
  )
}

export default App
