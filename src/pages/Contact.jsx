import { PageTitlte } from "../component/PageTitlte"
import {FaLocationDot} from 'react-icons/fa6'
import {BiPhoneCall} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'
import { Title } from "../component/Title"
import { useRef } from 'react';
import {CustomInput} from '../component/CustomInput'
import * as Yup from 'yup'; 
import {useFormik} from 'formik'
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom"

let contactSchema = Yup.object({
  name: Yup.string().min(10,"Full name at least 10 char").required('Full name is required'),
  email: Yup.string().required('Email is required'),
  subject: Yup.string().min(10,"subject at least 10 char").required('subject is required'),
  desc: Yup.string().min(25,"description at least 25 char").required('description is required'),
});



export const Contact = () => {

  const form = useRef();

  const sendEmail = () => {

  emailjs.sendForm(import.meta.env.VITE_SERVICE_KEY, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  };

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues:  {
      name:'',
      email:'',
      desc:'',
      subject:''
    },
    validationSchema: contactSchema,
    onSubmit: (values,{resetForm}) => {
      sendEmail(values)
      resetForm();
      setTimeout(() => {
        navigate('/');
      },2000);
    },
  })

  return (
    <section>
      <PageTitlte title={'Contact'} desc={'Get in touch'} />
      <div className="container py-20">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d173867.2920544374!2d4.89028787661351!3d35.930064003491054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128cace3c911151f%3A0x560b498ef8b564b9!2sRas%20El%20Oued!5e0!3m2!1sfr!2sdz!4v1699003340137!5m2!1sfr!2sdz" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[300px] mb-14"
        >
        </iframe>
        <div className="flex lg:justify-between justify-center flex-wrap ">
          {/* Location , number , Email */}
          <div className="">
            <div className="flex hover:shadow-2xl hover:scale-[1.05] sm:hover:scale-[1.1] bg-[#fdfdfd] dark:bg-[#252525] mb-6 px-3 rounded-2xl  py-8 gap-4 sm:gap-8 w-[300px] sm:w-[350px] items-center">
              <BiPhoneCall className="w-16 h-16 text-[#007ced]"/>
              <div>
                <h1 className="font-bold text-[19px]">+213668581327</h1>
                <p className="indent-4">
                  Available for job opportunities and professional networking. Let&apos;s connect
                </p>
              </div>
            </div>
            <div className="flex hover:shadow-2xl hover:scale-[1.05] sm:hover:scale-[1.1]  bg-[#fdfdfd] dark:bg-[#252525] mb-6 px-3 rounded-2xl py-8 gap-4 sm:gap-8 w-[300px] sm:w-[350px] items-center">
              <FaLocationDot className="w-10 h-10 text-[#007ced]"/>
              <div>
                <h1 className="font-bold text-[19px]">Algeria</h1>
                <p className="indent-4">
                  You can find me in Ras El Oued ,Bordj Bou Arreridj
                </p>
              </div>
            </div>
            <div className="flex hover:shadow-2xl hover:scale-[1.05] sm:hover:scale-[1.1] bg-[#fdfdfd] dark:bg-[#252525] mb-6 px-3 rounded-2xl  py-8 gap-4 sm:gap-8 w-[300px] sm:w-[350px] items-center">
              <AiOutlineMail className="w-16 h-12 text-[#007ced]"/>
              <div>
              <a href="mailto:zakaryasaoual@gmail.com" className="font-bold text-[19px]">zakaryasaoual@gmail.com</a>
                <p className="indent-4">
                  Feel free to reach out! I&apos;m available for freelance projects and collaborations.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <Title ele={'How can I help You  ?'} />
            <form 
              onSubmit={formik.handleSubmit}
              ref={form} 
            >
              <div className="flex flex-col gap-5 w-[300px] sm:w-[420px]">
                <CustomInput 
                  name='user_name' 
                  type='text'
                  placeHolder={'Enter your Full Name'}
                  onChange={(e) => formik.handleChange('name')(e)} 
                  value={formik.values.name}
                />
                <div className='error'>
                  {formik.touched.name && formik.errors.name ? (
                    <div> { formik.errors.name } </div>
                    ) : null }
                </div>
                <CustomInput 
                  name='Email' 
                  type='email'  
                  placeHolder={'Enter your Email'} 
                  onChange={(e) => formik.handleChange('email')(e)} 
                  value={formik.values.email}
                />
                <div className='error'>
                  {formik.touched.email && formik.errors.email ? (
                    <div> { formik.errors.email } </div>
                    ) : null }
                </div>
                <CustomInput 
                  name='Subject' 
                  type='text' 
                  placeHolder={'Subject '} 
                  onChange={(e) => formik.handleChange('subject')(e)} 
                  value={formik.values.subject}
                />
                <div className='error'>
                  {formik.touched.subject && formik.errors.subject ? (
                    <div> { formik.errors.subject } </div>
                    ) : null }
                </div>
                <textarea
                  className=" text-inherit h-[160px] font-semibold w-full p-3 rounded-xl border-2 dark:bg-[#222] bg-white outline-none border-[#bfbfbf] dark:border-[#555] border-solid"
                  placeholder="Enter Your Message Here..."
                  name='message'
                  onChange={(e) => formik.handleChange('desc')(e)} 
                  value={formik.values.desc}
                > </textarea>
                <div className='error'>
                  {formik.touched.desc && formik.errors.desc ? (
                    <div> { formik.errors.desc } </div>
                    ) : null }
                </div>
                <button 
                  type="submit" 
                  className="px-6 font-bold w-fit py-3 rounded-[40px] border-solid border-2 transition duration-500 ease-in-out dark:text-white hover:bg-[#007bff] hover:text-white border-[#007bff]" 
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  )
}
