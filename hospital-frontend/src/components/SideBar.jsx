import { Link } from 'react-router-dom'

function SideBar() {
  const role = sessionStorage.getItem('role')
  console.log('Role ', role)
  const isadmin = role === 'Admin'
  const isdoctor = role === 'Doctor'
  const ispatient = role === 'Patient'
  return (
    <div className='list-group list-group-flush'>
      {isadmin ? (
        <>
          <Link
            to='/doctors'
            className='list-group-item list-group-item-action p-2 text-left'
          >
            Doctors
          </Link>
          <Link
            to='/patients'
            className='list-group-item list-group-item-action p-2 text-left'
          >
            Patients
          </Link>
          {/* <Link
            to='/tests'
            className='list-group-item list-group-item-action p-2 text-left'
          >
            Tests
          </Link>
          <Link
            to='/medicines'
            className='list-group-item list-group-item-action p-2 text-left'
          >
            Medicines
          </Link> */}
          {/* <Link
            to='/results'
            className='list-group-item list-group-item-action p-2 text-left'
          >
            Test Result
          </Link> */}
          <Link
            to='/bills'
            className='list-group-item list-group-item-action p-2 text-left'
          >
            Bills
          </Link>
        </>
      ) : null}

      {isdoctor ? (
        <>
          <Link
            to='/uhome'
            className='list-group-item list-group-item-action p-2 text-left'
          >
            Profile
          </Link>
          <Link
            to='/patients'
            className='list-group-item list-group-item-action p-2 text-left'
          >
            Patients
          </Link>
          <Link
            to='/appointments'
            className='list-group-item list-group-item-action p-2 text-left'
          >
            Appointments
          </Link>
          <Link
            to='/changepwd'
            className='list-group-item list-group-item-action p-2 text-left'
          >
            Change Password
          </Link>
        </>
      ) : null}
      {ispatient ? (
        <>
          <Link
            to='/uhome'
            className='list-group-item list-group-item-action p-2 text-left'
          >
            Profile
          </Link>
          <Link
            to='/book'
            className='list-group-item list-group-item-action p-2 text-left'
          >
            Book Appointment
          </Link>
          <Link
            to='/myappointments'
            className='list-group-item list-group-item-action p-2 text-left'
          >
            My Appointments
          </Link>
          {/* <Link
            to='/testreq'
            className='list-group-item list-group-item-action p-2 text-left'
          >
            Test Request
          </Link>
          <Link
            to='/mytests'
            className='list-group-item list-group-item-action p-2 text-left'
          >
            My Tests
          </Link>
          <Link
            to='/history'
            className='list-group-item list-group-item-action p-2 text-left'
          >
            Treatment History
          </Link> */}
        </>
      ) : null}
    </div>
  )
}

export default SideBar
