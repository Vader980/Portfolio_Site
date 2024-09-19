import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, Code, Mail, Book, Award, Star, Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';
import emailjs from 'emailjs-com';
import discoveryImage from '../images/discoveryImage.jpg';
import zaidImage from '../images/DSCN6614.JPG';
import jimmyJabs from '../images/Jimmy Jabs - Zaid.jpg';
import ObjectDetectionusingTensorFlowandCNN from '../images/Object Detection using TensorFlow and CNN.png';
import ecoLogisticsImage from '../images/Eco.png';

const HomePage = () => {
  const [typedText, setTypedText] = useState('');
  const [formStatus, setFormStatus] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const fullText = "  Developer | AI Enthusiast | F1 Fan | Lifelong Learner";

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const theme = isDarkMode
    ? { primary: '#1a202c', secondary: '#2d3748', text: '#e2e8f0', accent: '#4299e1' }
    : { primary: '#f7fafc', secondary: '#edf2f7', text: '#2d3748', accent: '#3182ce' };

    const TimelineItem = ({ date, title, description, imageSrc }) => (
      <motion.div 
        className="flex mb-8 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex-shrink-0 w-32 text-right mr-8">
          <span className="font-bold" style={{ color: theme.accent }}>{date}</span>
        </div>
        <div className="flex-grow pl-8 border-l-2 relative" style={{ borderColor: theme.accent }}>
          <motion.div 
            className="absolute left-0 top-0 w-4 h-4 rounded-full -ml-2 mt-1"
            style={{ backgroundColor: theme.accent }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <h4 className="text-xl font-semibold mb-2">{title}</h4>
          <p style={{ color: theme.text }}>{description}</p>
          {imageSrc && (
            <EnlargeableImage 
              src={imageSrc}
              alt={title}
              className="w-full h-80 object-cover rounded-md mt-4"
            />
          )}
        </div>
      </motion.div>
    );

  const EnlargeableImage = ({ src, alt, className }) => {
    const [isEnlarged, setIsEnlarged] = useState(false);
  
    return (
      <>
        <motion.img 
          src={src}
          alt={alt}
          className={`${className} cursor-pointer`}
          whileHover={{ scale: 1.05 }}
          onClick={() => setIsEnlarged(true)}
        />
        <AnimatePresence>
          {isEnlarged && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={() => setIsEnlarged(false)}
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                className="relative"
                onClick={(e) => e.stopPropagation()}
              >
                <img src={src} alt={alt} className="max-w-full max-h-[90vh] object-contain" />
                <button
                  className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
                  onClick={() => setIsEnlarged(false)}
                >
                  <X size={24} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Sending...');

    emailjs.sendForm('service_tbkxez6', 'template_6kv9cdh', e.target, 'QB1bT4k4OdFemBwdN')
      .then((result) => {
        console.log(result.text);
        setFormStatus('Message sent successfully!');
        e.target.reset();
      }, (error) => {
        console.log(error.text);
        setFormStatus('Failed to send message. Please try again.');
      });
  };
  

  const ProjectCard = ({ title, description, imageSrc }) => {
    const [isEnlarged, setIsEnlarged] = useState(false);
  
    return (
      <motion.div 
        className="rounded-lg p-6 shadow-lg relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{ backgroundColor: theme.secondary }}
      >
        <h4 className="text-xl font-semibold mb-4">{title}</h4>
        <p className="mb-4">{description}</p>
        <motion.img 
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsEnlarged(true)}
        />
        <a href="#" className="hover:underline flex items-center" style={{ color: theme.accent }}>
          Learn More <ChevronRight size={16} className="ml-1" />
        </a>
        
        <AnimatePresence>
          {isEnlarged && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={() => setIsEnlarged(false)}
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                className="relative"
                onClick={(e) => e.stopPropagation()}
              >
                <img src={imageSrc} alt={title} className="max-w-full max-h-[90vh] object-contain" />
                <button
                  className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
                  onClick={() => setIsEnlarged(false)}
                >
                  <X size={24} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.primary, color: theme.text }}>
      <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: theme.secondary }}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ color: theme.accent }}
          >
            Zaid Ismail Asvat
          </motion.h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">{item}</a>
                </motion.li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center">
            <motion.button 
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mr-4"
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </motion.button>
            <motion.button 
              className="md:hidden"
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed top-0 right-0 h-full w-64 z-40 pt-16"
            style={{ backgroundColor: theme.secondary }}
          >
            <nav>
              <ul className="space-y-4 p-4">
                {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="block py-2 px-4 hover:bg-gray-700 rounded" onClick={toggleMenu}>{item}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="container mx-auto px-4 pt-20">
        <section id="hero" className="py-20 flex flex-col items-center justify-center min-h-screen">
          <motion.h1 
            className="text-5xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Zaid Ismail Asvat
          </motion.h1>
          <motion.p 
            className="text-2xl mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {typedText}
          </motion.p>
          <EnlargeableImage 
            src={zaidImage}
            alt="Zaid Ismail Asvat" 
            className="w-64 h-64 rounded-full object-cover mb-8"
          />
        </section>

        <section id="about" className="py-20">
          <h3 className="text-3xl font-bold mb-8 flex items-center" style={{ color: theme.accent }}>
            <User className="mr-2" /> About Me
          </h3>
          <div className="flex flex-col md:flex-row items-center">
            <EnlargeableImage 
              src={zaidImage}
              alt="Zaid Ismail Asvat" 
              className="w-64 h-64 rounded-full object-cover mb-8 md:mr-8"
            />
            <motion.p 
              className="text-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              As a recent BSc I.T. graduate from North-West University, I'm currently pursuing my Honours in Computer Science, driven by a passion for leveraging technology to create innovative solutions. My journey has been fueled by a fascination with the transformative power of AI and machine learning, and I'm constantly seeking opportunities to apply these technologies to solve complex challenges. I'm excited to connect with like-minded individuals and collaborate on projects that leverage technology to make a positive impact on the world.
            </motion.p>
          </div>
        </section>

        <section id="experience" className="py-20">
          <h3 className="text-3xl font-bold mb-8 flex items-center" style={{ color: theme.accent }}>
            <Briefcase className="mr-2" /> Professional Experience
          </h3>
          <div className="space-y-8">
            <TimelineItem 
              date="Jan 2024 - Present"
              title="Software Developer Internship - Youth Employment Service (YES) South Africa"
              description="Currently honing my skills as a Software Developer Intern, working on various projects and contributing to the development of innovative solutions."
            />
            <TimelineItem 
              date="Mar 2023 - Present"
              title="Teaching Assistant - North-West University"
              description="Assisting in AI, Decision Support Systems, Python, and C++ courses. Mentoring over 100 students and marking papers, strengthening my technical expertise and leadership abilities."
            />
            <TimelineItem 
              date="Jul 2023 - Dec 2023"
              title="System Analyst / DevOps Intern - North-West University"
              description="Optimized software development and deployment processes using industry-standard tools. Wrote and debugged over 5,000 lines of Java and Python code, improving system stability by 40%."
            />
            <TimelineItem 
              date="Jun 2024 - Jul 2024"
              title="Software Developer Internship - Singular Systems"
              description="Gained valuable experience utilizing C# skills, working with APIs, and solving complex problems in a collaborative and fast-paced environment."
              imageSrc={jimmyJabs}
            />
          </div>
        </section>

        <section id="projects" className="py-20">
          <h3 className="text-3xl font-bold mb-8 flex items-center" style={{ color: theme.accent }}>
            <Code className="mr-2" /> Notable Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="AI-Powered Lung Disease Detection System"
              description="Developed during the Discovery GradHack Hackathon, this project involved creating and training an AI model integrated with an Electronic Health Record (EHR) system to assist in diagnosing lung diseases from X-ray images. Our team finished in the top 3."
              imageSrc={discoveryImage}
            />
            <ProjectCard 
              title="Object Detection using TensorFlow and CNN"
              description="Implemented real-time object tracking and classification, boosting recognition accuracy to 75% using advanced machine learning techniques."
              imageSrc={ObjectDetectionusingTensorFlowandCNN}
            />
            <ProjectCard 
              title="EcoLogistics API Project"
              description="Created a REST API with 99.9% uptime, utilizing Azure Cloud Services for efficient and reliable data management in logistics operations."
              imageSrc={ecoLogisticsImage}
            />
          </div>
        </section>

        <section id="skills" className="py-20">
          <h3 className="text-3xl font-bold mb-8 flex items-center" style={{ color: theme.accent }}>
            <Star className="mr-2" /> Skills & Technologies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Languages", skills: "Python, JavaScript, C++, Java, C, C#, R, HTML, CSS, Kotlin" },
              { title: "Frameworks", skills: "Node.js, Express, React, Angular, Bootstrap, Swift" },
              { title: "Cloud Computing", skills: "AWS, Azure, Firebase, Google Cloud" },
              { title: "Databases", skills: "MySQL, MongoDB, PostgreSQL, Oracle, NoSQL, SQLite" },
              { title: "Developer Tools", skills: "Git, Docker, Jira, Jenkins, Maven, Linux, Mac OS, Virtual Machines, Android Development, Power BI, UiPath, Tableau" },
              { title: "Other Skills", skills: "Apache Flink, Neo4j, Data Warehousing, Stream Processing, Object-Oriented Programming" }
            ].map((category, index) => (
              <motion.div 
                key={index}
                className="p-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{ backgroundColor: theme.secondary }}
              >
                <h4 className="font-semibold mb-2" style={{ color: theme.accent }}>{category.title}</h4>
                <p>{category.skills}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="awards" className="py-20">
          <h3 className="text-3xl font-bold mb-8 flex items-center" style={{ color: theme.accent }}>
            <Award className="mr-2" /> Awards & Certifications
          </h3>
          <motion.ul 
            className="space-y-4 columns-1 md:columns-2 lg:columns-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {[
              "Member of Golden Key International Honour Society",
              "Apache Flink: Batch Mode Data Engineering",
              "Data Engineering Foundations",
              "Neo4j Fundamentals",
              "AWS Certified Cloud Practitioner",
              "Microsoft Certified: Azure Fundamentals",
              "Google IT Support Professional Certificate",
              "Coursera Machine Learning Specialization",
              "HackerRank Problem Solving (Intermediate) Certificate"
            ].map((award, index) => (
              <motion.li 
                key={index}
                className="p-3 rounded-md mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{ backgroundColor: theme.secondary }}
              >
                {award}
              </motion.li>
            ))}
          </motion.ul>
        </section>

        <section id="contact" className="py-20">
      <h3 className="text-3xl font-bold mb-8 flex items-center" style={{ color: theme.accent }}>
        <Mail className="mr-2" /> Get in Touch
      </h3>
      <motion.form 
        className="max-w-lg mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2" style={{ backgroundColor: theme.secondary, color: theme.text, borderColor: theme.accent }} required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2" style={{ backgroundColor: theme.secondary, color: theme.text, borderColor: theme.accent }} required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
          <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2" style={{ backgroundColor: theme.secondary, color: theme.text, borderColor: theme.accent }} required></textarea>
        </div>
        <motion.button 
          type="submit" 
          className="w-full py-2 px-4 rounded-md font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ backgroundColor: theme.accent, color: theme.primary }}
        >
          Send Message
        </motion.button>
        {formStatus && (
          <p className="mt-4 text-center" style={{ color: formStatus.includes('success') ? theme.accent : 'red' }}>
            {formStatus}
          </p>
        )}
      </motion.form>
    </section>
      </main>

      <footer className="py-8 text-center" style={{ backgroundColor: theme.secondary }}>
        <p>&copy; 2024 Zaid Ismail Asvat. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/Vader980" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <motion.svg whileHover={{ scale: 1.2 }} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </motion.svg>
          </a>
          <a href="https://www.linkedin.com/in/asvat/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <motion.svg whileHover={{ scale: 1.2 }} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </motion.svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;