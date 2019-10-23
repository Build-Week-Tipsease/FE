import React from 'react'
import CustomerDashboard from './Customer';
import WorkerDashboard from './ServiceWorker';

function Dashboard () {
  const role=localStorage.getItem('role');
  console.log(role)
  return(
    <div>
      {role==='customer' && <CustomerDashboard />}
      {role==='worker' && <WorkerDashboard />}
    </div>
  );
}

export default Dashboard;