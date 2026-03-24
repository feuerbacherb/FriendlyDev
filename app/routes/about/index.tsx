const AboutPage = () => {
  return (
    <div className='max-w-5xl mx-auto px-6 py-16 bg-gray-900'>
      {/* Intro */}
      <div className='flex flex-col items-center gap-10 mb-12 md:flex-row md:items-start'>
        <img
          src='/images/profile.jpg'
          alt='Profile'
          className='w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md'
        />
        <div>
          <h1 className='text-3xl font-bold text-white mb-2'>Hi! I'm Brent. 👋</h1>
          <p className='text-gray-300 text-lg'>I'm a passionate web developer and content created who loves building friendly digital experiences and helping others grow into confident, modern developers.</p>
        </div>
      </div>

      {/* Bio Section */}
      <div className='mb-12'>
        <h2 className='text-2xl font-semibold text-white mb-4'>My Mission</h2>
        <p className='text-gray-300 leading-relaxed'>
          After turning my life around, I made it my mission to share what I've learned with others - not just about code, but about building a life you can be proud of. Through tutorials, courses, and real-world projects, I aim to make development
          accessible, friendly, and something you look forward to each day.
        </p>
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className='text-2xl font-semibold text-white mb-4'>🚀Tech I Use</h2>
        <ul className='flex flex-wrap gap-4 text-sm text-gray-300'>
          {["React", "Next.js", "Vue", "Tailwind CSS", "Node.js", "Laravel", "Prisma", "MongoDB", "PostgreSQL", "AppWrite", "Docker"].map((tech) => (
            <li
              key={tech}
              className='bg-gray-700 px-3 py-1 rounded-md'>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
