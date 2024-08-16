// import React from 'react'

// const Contact = () => {
//   return (
//     <div name='contact' className='w-full h-full bg-[#0a192f] flex justify-center items-center p-4'>
//         <form method='POST' action='https://getform.io/f/navvgyja' className='flex flex-col max-w-[600px] w-full'>
//             <div className='pb-8'>
//             <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
//             <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - myemail@gmail.com</p>
//             </div>
//             <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'/>
//             <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email'/>
//             <textarea className='bg-[#ccd6f6] p-2' name='message' rows="10" placeholder='Message'/>
//             <button className='text-white border-2 border-slate-100 rounded hover:bg-purple-600 hover:border-purple-600  px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
//         </form>
//     </div>
//   )
// }


// export default Contact


// service-id = service_7pljy3p 

// templete-id = __ejs-test-mail-service__

// service-id = service_7pljy3p

// public key or userId = -1keXGKQl28bgz44Q






import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY
    )
    .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
    }, (error) => {
        console.log(error.text);
        alert('Failed to send the message. Please try again later.');
    });

    e.target.reset(); // Reset the form after submission
  };

  return (
    <div name='contact' className='w-full h-full bg-[#0a192f] flex justify-center items-center p-4'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - myemail@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' required />
            <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' required />
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows="10" placeholder='Message' required />
            <button type='submit' className='text-white border-2 border-slate-100 rounded hover:bg-purple-600 hover:border-purple-600  px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
        </form>
    </div>
  );
}

export default Contact;
