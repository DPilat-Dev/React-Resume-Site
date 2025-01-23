import { useRef, useState } from 'react'
import SectionWrapper from '../hoc/SectionWrapper';
import { styles } from '../styles';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  return (
    <div
      className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden"
    >
      <div className='flex-[0.8] md:pb-40 mx-4 sm:mx-auto' >
        <h3 className={`${styles.sectionText} text-center`}>Contact</h3>

        <form
          action="https://getform.io/f/8b086558-47d4-49d0-852d-ec8c22da40f7"
          method="POST"
          className="mt-12 gap-4 flex flex-col"
        >
          <span className='text-white font-medium mt-3'>Full Name</span>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="bg-tertiary p-4 text-white border font-medium"
          />
          <span className='text-white font-medium mt-3'>Email Address</span>
          <input
            type="text"
            name="email"
            placeholder="Enter your email address"
            className="bg-tertiary p-4 text-white border font-medium"
          />
          <span className='text-white font-medium mt-3'>Message</span>
          <textarea
            name="message"
            rows={10}
            placeholder="Enter your message"
            className="bg-tertiary p-4 text-white border font-medium"
          />
          <button
            type='submit'
            className='bg-sky-700 py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary '
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact,"contact");