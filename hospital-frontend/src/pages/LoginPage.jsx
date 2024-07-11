import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import loginvalidation from '../validation/loginvalidation'
import userservice from '../services/userservice'

function LoginPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errmsg, setErrmsg] = useState(null)

  const [user, setUser] = useState()
  const [errors, setErrors] = useState({})

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleReset = (e) => {
    e.preventDefault()
    document.querySelector('#f1').reset()
    setUser(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(loginvalidation(user))
    console.log(Object.keys(errors))
    console.log(user)
    if (Object.keys(errors).length === 0) {
      console.log(user)
      userservice
        .validate(user)
        .then((resp) => {
          let result = resp.data
          console.log(result)
          sessionStorage.setItem('userid', result.userid)
          sessionStorage.setItem('uname', result.uname)
          sessionStorage.setItem('role', result.role)
          sessionStorage.setItem('id', result.uid)
          sessionStorage.setItem('token', result.accessToken)
          dispatch({ type: 'IsLoggedIn' })
          if (result.role === 'Admin') navigate('/doctors')
          else navigate('/uhome')
        })
        .catch((error) => {
          console.log('Error', error)
          setErrmsg('Invalid username or password')
        })
    }
  }

  return (
    <div className=''>
      <div className='jumbotron p-4 shadow text-center border-bottom mb-0 bg-transparent'>
        <h4>Hospital Management System</h4>
      </div>
      <div className='container pt-4'>
        <div className='row'>
          <div className='col-sm-5 mx-auto'>
            <form className='card shadow mt-5' id='f1' onSubmit={handleSubmit}>
              <div className='card-header'>
                <h5 className='text-center'>Login Page</h5>
              </div>
              <div className='card-body'>
                <div className='form-group form-row'>
                  <label className='col-sm-4 col-form-label'>User Id</label>
                  <div className='col-sm-8'>
                    <input
                      type='text'
                      name='userid'
                      required
                      className='form-control'
                      placeholder='User Id'
                      value={user?.userid}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className='form-group form-row'>
                  <label className='col-sm-4 col-form-label'>Password</label>
                  <div className='col-sm-8'>
                    <input
                      type='password'
                      required
                      className='form-control'
                      name='pwd'
                      placeholder='Password'
                      value={user?.pwd}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <button className='btn btn-primary float-right'>Login</button>
                <button
                  onClick={handleReset}
                  className='btn btn-primary float-right mr-2'
                >
                  Reset
                </button>
              </div>
              <div className='card-footer bg-white'>
                {errmsg != null ? (
                  <div className='alert text-danger text-center font-weight-bold'>
                    {errmsg}
                  </div>
                ) : null}
                <Link to='/register'>Patient Registration</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
