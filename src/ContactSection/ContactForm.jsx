import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { useForm, FormProvider } from "react-hook-form";

const ContactForm = () => {
    const methods = useForm();
  
    const onSubmit = (data) => {
      // Handle the form data (e.g., send it to your server or an email service)
      console.log(data);
    };
  
    return (
        <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full md:p-6 rounded-md"
      >
        <input
          type="text"
          placeholder="Name"
          {...methods.register('name', { required: 'Name is required' })}
          className="p-2  rounded-md w-full bg-gray-700 text-white"
        />
        <input
          type="email"
          placeholder="Email"
          {...methods.register('email', { required: 'Email is required' })}
          className="p-2  rounded-md w-full bg-gray-700 text-white"
        />
        <textarea
          placeholder="Message"
          {...methods.register('message', { required: 'Message is required' })}
          rows="4"
          className="p-2  rounded-md w-full bg-gray-700 text-white"
        />
        <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-md w-1/2  hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
        </div>
      </form>
    </FormProvider>
      
    );
  };
  

  export default ContactForm;