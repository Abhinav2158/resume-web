
import { Mail, Phone, Linkedin, Github, Calendar, MapPin, ExternalLink, Download, Code, Brain, Database, Zap, Menu, X, Moon, Sun, GraduationCap, FolderOpen, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Data Science Engineer", 
    "Data Analyst",
    "AI Engineer"
  ];

  // Initialize theme from localStorage and system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark', newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  const quickStats = [
    { label: "Years of Learning", value: "3+", icon: Brain },
    { label: "Projects Completed", value: "15+", icon: Code },
    { label: "Technologies", value: "10+", icon: Database },
    { label: "Research Experience", value: "1+", icon: Zap }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md border-b border-gray-200/20`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="text-2xl font-bold text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Abhinav Attri
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/education" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Education
              </Link>
              <Link to="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors flex items-center gap-2">
                <FolderOpen className="w-4 h-4" />
                Projects
              </Link>
              <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Contact
              </Link>
              
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
              <Link to="/" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">Home</Link>
              <Link to="/education" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">Education</Link>
              <Link to="/projects" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">Projects</Link>
              <Link to="/contact" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">Contact</Link>
              <div className="pt-4 border-t border-gray-200/20">
                <button 
                  onClick={toggleTheme} 
                  className="flex items-center space-x-2 w-full p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  <span className="text-gray-700 dark:text-gray-300">
                    {isDark ? 'Light Mode' : 'Dark Mode'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex items-center relative overflow-hidden">
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
                <a href="tel:+919111224460" className="p-2 hover:text-green-600 transition-colors">
                  <Phone className="w-5 h-5" />
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
                  As a 4th year Data Science Engineer at IISER Bhopal, I'm ready to tackle real-world challenges with powerful tools and a curious mind. Excited to use my skills to make a difference.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/contact">
                    <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-8 py-3 text-lg w-full sm:w-auto">
                      Hire Me
                    </Button>
                  </Link>
                  <Button variant="outline" className="px-8 py-3 text-lg hover:bg-gray-50 dark:hover:bg-gray-800 w-full sm:w-auto">
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative z-10 w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-6xl font-bold">
                AA
              </div>
            </div>

            {/* Second overlapping animated circle - moved to left and added scale animation */}
            <div className="absolute z-5 w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl opacity-50 transform -translate-x-20 animate-scale">
              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-6xl font-bold">
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
              </div>
            </div>

            {/* Floating Achievement Cards */}
            <div className="absolute -left-8 top-1/4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold">15+ Projects</p>
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
                  <p className="font-semibold">3+ Years</p>
                  <p className="text-sm text-gray-500">Learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Quick Overview</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400">My journey in numbers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white">
                      <stat.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Explore My Portfolio</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400">Discover more about my journey and work</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/education">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl text-white">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                  </div>
                  <CardTitle className="text-center group-hover:text-green-600 transition-colors">
                    Education & Learning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    My academic journey at IISER Bhopal and continuous learning in data science and AI.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/projects">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white">
                      <FolderOpen className="w-8 h-8" />
                    </div>
                  </div>
                  <CardTitle className="text-center group-hover:text-purple-600 transition-colors">
                    Projects & Work
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Explore my machine learning projects, research work, and innovative solutions.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/contact">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white">
                      <MessageCircle className="w-8 h-8" />
                    </div>
                  </div>
                  <CardTitle className="text-center group-hover:text-orange-600 transition-colors">
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Let's connect! Reach out for collaborations, opportunities, or just to say hello.
                  </p>
                </CardContent>
              </Card>
            </Link>
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
    </div>
  );
};

export default Index;
