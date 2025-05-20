import '../index.css'

const Contact = () => {
  return (
    <div className="bg-[#F5F5DC] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl mb-4">
          Kontak
        </h2>
        <p className="text-gray-500">
          Anda dapat menghubungi saya melalui:
        </p>
        <ul className="list-none">
          <li>Email: dana.araga@example.com</li>
          <li>LinkedIn: linkedin.com/in/danaaraga</li>
          <li>GitHub: github.com/danaaraga</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;