import Title from "../utils/Title";

function Contact() {
  return (
    <div id="contact" className="flex flex-col justify-center mx-auto h-screen">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/05bd9738-b58a-4cea-a7f4-5b27aa5df5e3"
          method="POST"
          className="flex flex-col w-full md:w-11/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={10}
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-900 to-cyan-400 drop-shadow-md hover:scale-105 duration-300"
          >
            Contact Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
