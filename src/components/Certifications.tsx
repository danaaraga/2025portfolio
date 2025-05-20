import { FaCertificate } from 'react-icons/fa'; // Import ikon

const Certifications = () => {
  const certifications = [
    { name: 'Sertifikasi [Nama Sertifikasi]', institution: '[Institusi]' },
    { name: 'Juara [Prestasi]', institution: '[Kompetisi]' },
    // Tambahkan sertifikasi lain di sini
  ];

  return (
    <div className="py-8 px-4 mt-8" style={{ backgroundColor: '#F5F5DC' }}>
      <h2 className="text-3xl font-bold mb-4" style={{ color: '#24292F' }}>
        Sertifikasi &amp; Prestasi
      </h2>
      <ul className="list-none">
        {certifications.map((certification, index) => (
          <li key={index} className="flex items-center space-x-2 mb-2" style={{ color: '#24292F' }}>
            <FaCertificate size={20} className="mr-2" />
            <span>{certification.name} - {certification.institution}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;