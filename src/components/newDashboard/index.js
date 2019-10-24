import React from 'react'
import CustomerDashboard from './Customer';
import WorkerDashboard from './ServiceWorker';

function Dashboard (props) {
  const role=localStorage.getItem('role');
  console.log(props);

  const viewWorker = (worker) => {
    localStorage.setItem('worker', JSON.stringify(worker))
    props.history.push('/tipworker')
  }

  return(
    <div>
      {role==='customer' && <CustomerDashboard viewWork={viewWorker} />}
      {role==='worker' && <WorkerDashboard />}
    </div>
  );
}

export default Dashboard;