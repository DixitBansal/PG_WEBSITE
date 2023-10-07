import React, { useEffect } from 'react'
import useUserLoggedIn from '../hooks/useUserLoggedIn'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from '../reducer/userdata.slice'
import { useNavigate } from 'react-router-dom'
import Adminpostform from './Adminpostform'
import Adminsection from './Adminsection'
import UpdateModel from './UpdateModel'
import { appendNewsFromFront } from '../reducer/newsdata.slice' 

const Admindashboard = () => {

  const showUpdateModel = useSelector(state => state.updateModel)

  const [userData, isLoggedIn, hasFetched] = useUserLoggedIn(`${process.env.REACT_APP_BACKEND_URL}/api/user/profile`)

  const navigator = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isLoggedIn && hasFetched)
      dispatch(setUserData(userData))
    else if (!isLoggedIn && hasFetched)
      navigator("/admin/")
  }, [isLoggedIn, hasFetched])

  async function registerPostHandel(title, description, image) {
    /**
     * used to register new post to the database
     * create a form
     * then register post and then show
     * @param title - title of the news post
     * @param description - description of news post
     * @param image - image selected for news post
     * @returns array with response.status and response
     */
    const registrationForm = new FormData()
    registrationForm.append('title', title)
    registrationForm.append('description', description)
    registrationForm.append('news-img', image)
    let response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/news/post`, {
      method: "POST",
      body: registrationForm,
      credentials: "include"
    })
    if (response.status === 200) {
      response = await response.json()
      dispatch(appendNewsFromFront([response.data]))
      return [200, response]
    }
    return [response.status]
  }

  return (
    <section>
      {
        showUpdateModel.originalData !== null ?
          <UpdateModel show={showUpdateModel.showModel} originalData={showUpdateModel.originalData} /> : null
      }
      <div className='flex flex-col lg:flex-row gap-3'>
        <div className='lg:w-[50%]'>
          <div className='p-3 mx-4 shadow-md rounded-md bg-[#fcfcfc]'>
            <div className='flex justify-center'>
              <p className='subheading text-primary-purple'>Create the News Post</p>
            </div>
            <Adminpostform registerPostHandel={registerPostHandel} title={""} description={""} />
          </div>
        </div>
        <div className='lg:w-[50%]'>
          <Adminsection />
        </div>
      </div>
    </section>
  )
}

export default Admindashboard