import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard = ({ title, description, imageUrl }: ProjectCardProps) => {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg h-[280px] sm:h-[340px] md:h-[380px] lg:h-[400px] cursor-pointer">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white">
        <h3 className="text-xl sm:text-xl md:text-2xl font-bold mb-2 md:mb-3">{title}</h3>
        <p className="text-sm sm:text-base text-gray-200 mb-3 md:mb-4 line-clamp-2">{description}</p>
        <Link
          to="/crops"
          className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-eabono-green-light text-white font-semibold rounded-full hover:bg-eabono-green-light/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Learn More
          <ChevronRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export const ProjectSites = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'La Trinidad',
      description: 'Pioneering sustainable farming practices in the strawberry capital of the Philippines with advanced nitrogen management systems.',
      imageUrl: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80',
    },
    {
      title: 'Atok',
      description: 'Revolutionizing high-altitude vegetable farming through precision agriculture and smart fertilizer application.',
      imageUrl: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80',
    },
    {
      title: 'Mankayan',
      description: 'Empowering local farmers with data-driven insights for improved crop yields and sustainable agricultural practices.',
      imageUrl: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-8 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-eabono-green mb-3 md:mb-4">
            Project Sites
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how E-Abono is transforming agriculture across Benguet province through innovative technology and community partnerships.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};