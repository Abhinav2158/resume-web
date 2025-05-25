
import { Mail, Phone, Linkedin, Github, Calendar, MapPin, ExternalLink, Download, Code, Brain, Database, Zap, Menu, X, Moon, Sun } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Student at IISER Bhopal",
    "Data Science Engineer", 
    "Data Analyst",
    "ML Engineer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const technicalSkills = {
    languages: ['Python', 'C', 'SQL', 'HTML', 'CSS', 'Mathematica', 'JavaScript', 'MATLAB'],
    softwareTools: ['LaTeX', 'Excel', 'GitHub', 'Google Colab', 'Jupyter', 'VS Code', 'PyCharm', 'Linux'],
    pythonLibraries: ['TensorFlow', 'Scikit-Learn', 'PyTorch', 'NumPy', 'Pandas', 'SciPy', 'Matplotlib', 'Flask', 'Streamlit'],
    mathML: ['Linear Algebra', 'Probability', 'Statistics', 'Calculus and Optimization'],
    dataScience: ['Python', 'Data Visualization', 'Supervised/Unsupervised Learning', 'ANN', 'CNN', 'RNN-LSTM', 'GANs', 'Transformers']
  };

  const experiences = [
    {
      title: "Project Researcher",
      company: "Advanced Signal and Image Processing Lab, IISER Bhopal",
      period: "January 2025 – Present",
      achievements: [
        "Proposed a deep learning framework for Near-Infrared (NIR) to RGB image colorization",
        "Developed an enhanced GAN-based architecture extending ColorMamba",
        "Achieved PSNR: 24.418, SSIM: 0.71 on VCIP2020 dataset",
        "Evaluated on four public datasets demonstrating robustness across varied lighting"
      ]
    }
  ];

  const projects = [
    {
      title: "Text Classification and POS Tagging System",
      tech: "Python, Scikit-Learn, PyTorch, NLTK",
      period: "Sept 2024 – Nov 2024",
      description: "Developed feature extraction pipeline using regex and n-grams for emotion classification"
    },
    {
      title: "Multi-Domain Recommendation System", 
      tech: "Python, Pandas, Scikit-Learn, NLTK",
      period: "May 2023 – July 2023",
      description: "Built recommender system across books, music, and movies using hybrid algorithms"
    },
    {
      title: "Real Estate Cost Prognostication",
      tech: "Python, Scikit-Learn, Pandas, Matplotlib",
      period: "Sept 2023 – Nov 2023", 
      description: "Developed flat price prediction models achieving R² = 0.71, RMSE = 35.5"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md border-b border-gray-200/20`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="text-2xl font-bold text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Abhinav
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">Home</a>
              <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">About</a>
              
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200/20">
            <div className="px-6 py-4 space-y-4">
              <a href="#home" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">Home</a>
              <a href="#skills" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">Skills</a>
              <a href="#projects" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">Projects</a>
              <a href="#about" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">About</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Social Icons */}
            <div className="flex items-center space-x-6">
              <div className="flex flex-col space-y-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-full">
                <a href="https://www.linkedin.com/in/abhinav-attri-8580i/" className="p-2 hover:text-blue-600 transition-colors relative group">
                  <Linkedin className="w-5 h-5" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-ping group-hover:animate-none"></div>
                </a>
                <a href="https://github.com/Abhinav2158" className="p-2 hover:text-purple-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="mailto:abhinav8580i@gmail.com" className="p-2 hover:text-red-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">Hello, I Am</p>
                  <h1 className="text-5xl lg:text-6xl font-bold">
                    <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                      Abhinav Attri
                    </span>
                  </h1>
                  <div className="h-16 flex items-center">
                    <span className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {roles[currentRole]}
                    </span>
                  </div>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
                  As a 3rd year Data Science Engineer at IISER Bhopal, I'm ready to tackle real-world challenges with powerful tools and a curious mind. Excited to use my skills to make a difference.
                </p>

                <div className="flex space-x-4 pt-4">
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-8 py-3 text-lg">
                    Hire Me
                  </Button>
                  <Button variant="outline" className="px-8 py-3 text-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Animated Circle Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-spin-slow"></div>
            </div>
            
            {/* Profile Image */}
            <div className="relative z-10 w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-6xl font-bold">
                AA
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -left-8 top-1/4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold">50+ Projects</p>
                  <p className="text-sm text-gray-500">Completed</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-8 bottom-1/4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg animate-float delay-1000">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold">2+ Years</p>
                  <p className="text-sm text-gray-500">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400">Proficient in cutting-edge technologies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white">
                    <Code className="w-6 h-6" />
                  </div>
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.languages.map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover:scale-105 transition-transform">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-white">
                    <Zap className="w-6 h-6" />
                  </div>
                  Tools & Software
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.softwareTools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover:scale-105 transition-transform">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white">
                    <Brain className="w-6 h-6" />
                  </div>
                  Python Libraries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.pythonLibraries.slice(0, 6).map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover:scale-105 transition-transform">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400">Innovative solutions and implementations</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-blue-600 font-medium text-sm">{project.tech}</p>
                  <p className="text-gray-500 text-sm">{project.period}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Numbers and data tell stories, and I learn how to read them at IISER Bhopal. My journey 
              fuels my passion for understanding data through Computer Vision, Machine Learning, and 
              deep learning. I'm learning about data science, which is all about understanding information
              and solving problems with it. I'm curious about AI because it can learn and do cool things,
              and I want to help make sure it's used in good ways.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">2+</div>
                <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                <p className="text-gray-600 dark:text-gray-400">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.linkedin.com/in/abhinav-attri-8580i/" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/Abhinav2158" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:abhinav8580i@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400">
            © 2025 Abhinav Attri. Crafted with passion for data science and machine learning.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default Index;
