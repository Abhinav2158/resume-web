
import { FolderOpen, Calendar, ExternalLink, Github, ChevronLeft, Code, Brain, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Projects = () => {
  const featuredProjects = [
    {
      title: "Near-Infrared to RGB Image Colorization",
      category: "Research Project",
      period: "January 2025 – Present",
      technologies: ["Python", "TensorFlow", "GANs", "ColorMamba", "Computer Vision"],
      description: "Proposed a deep learning framework for Near-Infrared (NIR) to RGB image colorization using an enhanced GAN-based architecture extending ColorMamba.",
      achievements: [
        "Achieved PSNR: 24.418, SSIM: 0.71 on VCIP2020 dataset",
        "Evaluated on four public datasets demonstrating robustness",
        "Enhanced architecture for varied lighting conditions"
      ],
      status: "In Progress",
      type: "research",
      github: "https://github.com/Abhinav2158",
      demo: null
    },
    {
      title: "Text Classification and POS Tagging System",
      category: "Academic Project",
      period: "September 2024 – November 2024",
      technologies: ["Python", "Scikit-Learn", "PyTorch", "NLTK", "NLP"],
      description: "Developed a comprehensive feature extraction pipeline using regex patterns and n-grams for emotion classification and part-of-speech tagging.",
      achievements: [
        "Implemented advanced NLP preprocessing techniques",
        "Built custom feature extraction pipeline",
        "Achieved high accuracy in emotion classification"
      ],
      status: "Completed",
      type: "academic",
      github: "https://github.com/Abhinav2158",
      demo: null
    },
    {
      title: "Multi-Domain Recommendation System",
      category: "Personal Project",
      period: "May 2023 – July 2023",
      technologies: ["Python", "Pandas", "Scikit-Learn", "NLTK", "LangChain", "FastAPI"],
      description: "Built a comprehensive recommender system across books, music, and movies using hybrid algorithms combining collaborative and content-based filtering with LangChain integration.",
      achievements: [
        "Implemented hybrid recommendation algorithms",
        "Cross-domain recommendation capabilities",
        "Scalable FastAPI backend architecture",
        "LangChain integration for enhanced recommendations"
      ],
      status: "Completed",
      type: "personal",
      github: "https://github.com/Abhinav2158",
      demo: null
    },
    {
      title: "Real Estate Cost Prognostication",
      category: "Data Science Project",
      period: "September 2023 – November 2023",
      technologies: ["Python", "Scikit-Learn", "Pandas", "Matplotlib", "Regression"],
      description: "Developed machine learning models for flat price prediction using advanced regression techniques and feature engineering.",
      achievements: [
        "Achieved R² = 0.71, RMSE = 35.5",
        "Comprehensive feature engineering",
        "Multiple regression model comparison"
      ],
      status: "Completed",
      type: "data-science",
      github: "https://github.com/Abhinav2158",
      demo: null
    },
    {
      title: "Intelligent Chat Application with RAG",
      category: "AI Project",
      period: "August 2024 – October 2024",
      technologies: ["Python", "LangChain", "FastAPI", "ChromaDB", "OpenAI"],
      description: "Built an intelligent chat application using Retrieval-Augmented Generation (RAG) architecture with LangChain and FastAPI backend.",
      achievements: [
        "Implemented RAG pipeline for accurate responses",
        "FastAPI backend with real-time chat capabilities",
        "Vector database integration with ChromaDB",
        "Contextual document retrieval system"
      ],
      status: "Completed",
      type: "ai",
      github: "https://github.com/Abhinav2158",
      demo: null
    },
    {
      title: "Automated Stock Price Prediction System",
      category: "Financial ML Project",
      period: "June 2024 – August 2024",
      technologies: ["Python", "LSTM", "TensorFlow", "FastAPI", "Streamlit"],
      description: "Developed an automated stock price prediction system using LSTM neural networks with real-time data processing and FastAPI backend.",
      achievements: [
        "LSTM model with 85% accuracy on test data",
        "Real-time data fetching and processing",
        "FastAPI backend for model serving",
        "Interactive Streamlit dashboard"
      ],
      status: "Completed",
      type: "financial",
      github: "https://github.com/Abhinav2158",
      demo: null
    }
  ];

  const additionalProjects = [
    {
      title: "Book Recommender System",
      technologies: ["Python", "Pandas", "Scikit-Learn", "Collaborative Filtering"],
      description: "Collaborative filtering based book recommendation system with user preference analysis"
    },
    {
      title: "Mobile Price Forecasting",
      technologies: ["Python", "Machine Learning", "Regression", "Feature Engineering"],
      description: "Predicting mobile phone prices using comprehensive feature analysis and ML models"
    },
    {
      title: "Hand-written Digit Recognition",
      technologies: ["Python", "CNN", "TensorFlow", "Computer Vision"],
      description: "Deep learning model for MNIST digit classification with 99% accuracy"
    },
    {
      title: "Movie Recommendation System",
      technologies: ["Python", "Collaborative Filtering", "Matrix Factorization", "NLP"],
      description: "Advanced movie recommendation using user preferences and content-based filtering"
    },
    {
      title: "Sentiment Analysis Tool",
      technologies: ["Python", "NLTK", "Transformers", "FastAPI"],
      description: "Real-time sentiment analysis tool with FastAPI backend and transformer models"
    },
    {
      title: "Image Classification API",
      technologies: ["Python", "FastAPI", "TensorFlow", "Docker"],
      description: "Scalable image classification API with Docker containerization"
    },
    {
      title: "Data Pipeline Automation",
      technologies: ["Python", "Apache Airflow", "PostgreSQL", "Docker"],
      description: "Automated ETL pipeline for large-scale data processing and analytics"
    },
    {
      title: "LangChain Document QA System",
      technologies: ["Python", "LangChain", "ChromaDB", "Streamlit"],
      description: "Question-answering system for documents using LangChain and vector databases"
    }
  ];

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'research': return Brain;
      case 'academic': return Code;
      case 'data-science': return Database;
      case 'ai': return Brain;
      case 'financial': return Database;
      default: return FolderOpen;
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'In Progress' ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800';
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-white/20 rounded-xl">
              <FolderOpen className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">Projects</h1>
              <p className="text-xl text-white/90">Innovative Solutions & Research Work</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400">Detailed showcase of my major works</p>
          </div>

          <div className="space-y-8">
            {featuredProjects.map((project, index) => {
              const ProjectIcon = getProjectIcon(project.type);
              return (
                <Card key={index} className="shadow-lg border-0 overflow-hidden hover:shadow-xl transition-all">
                  <div className="flex flex-col lg:flex-row">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 lg:w-1/3 p-6 flex items-center justify-center">
                      <div className="text-center">
                        <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white inline-block mb-4">
                          <ProjectIcon className="w-12 h-12" />
                        </div>
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="lg:w-2/3 p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                          <p className="text-purple-600 font-semibold mb-2">{project.category}</p>
                          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                            <Calendar className="w-4 h-4 mr-2" />
                            {project.period}
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          {project.github && (
                            <Button size="sm" variant="outline" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </a>
                            </Button>
                          )}
                          {project.demo && (
                            <Button size="sm" asChild>
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {project.description}
                      </p>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold mb-2">Key Achievements:</h5>
                        <div className="space-y-1">
                          {project.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                              <span className="text-gray-600 dark:text-gray-400 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Projects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Additional Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400">Other notable works and implementations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalProjects.map((project, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all hover:-translate-y-2 h-full">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white">
                      <Code className="w-6 h-6" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-center">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 text-center">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in Collaborating?</h2>
          <p className="text-xl mb-8 text-white/90">
            Let's work together on innovative data science and AI projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 w-full sm:w-auto">
                Start a Project
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 w-full sm:w-auto" asChild>
              <a href="https://github.com/Abhinav2158" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All Code
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
