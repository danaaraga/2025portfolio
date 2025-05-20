interface Project {
    title: string;
    description: string;
    imageUrl: string;
  }
  
  const Projects = () => {
    const projects: Project[] = [
      {
        title: 'Website Portofolio (Saat Ini)',
        description: 'Website portofolio pribadi yang dibuat menggunakan React, TypeScript, dan Tailwind CSS.',
        imageUrl: '/portfolio.png', // Ganti dengan gambar proyek
      },
      {
        title: 'Aplikasi Todo Sederhana',
        description: 'Aplikasi todo sederhana dengan fitur tambah, hapus, dan tandai selesai.',
        imageUrl: '/todo.png', // Ganti dengan gambar proyek
      },
    ];
  
    return (
      <div className="py-8 px-4">
        <h2 className="text-3xl font-bold mb-8" style={{ color: '#c9d1d9' }}>
          Contoh Proyek
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300" style={{ backgroundColor: '#FFFFFF' }}>
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#24292F' }}>{project.title}</h3>
                <p className="text-gray-500" style={{ color: '#24292F' }}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;