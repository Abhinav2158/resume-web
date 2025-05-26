
import { FolderOpen, Calendar, ExternalLink, Github, ChevronLeft, Code, Brain, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Projects = () => {
  const mainProjects = [
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
      status: "Completed",
      type: "research",
      github: "https://github.com/Abhinav2158",
      demo: null
    },
    {
      title: "Text Classification and POS Tagging System",
      category: "Academic Project",
      period: "September 2024 – November 2024",
      technologies: ["Python", "Scikit-Learn", "PyTorch", "NLTK", "NumPy"],
      description: "Developed a comprehensive feature extraction pipeline using regex patterns and n-grams for emotion classification and part-of-speech tagging.",
      achievements: [
        "Developed a feature extraction pipeline using regex and n-grams for emotion classification",
        "Trained and evaluated multiple ML models (Naive Bayes, Logistic Regression, Random Forest, SVM) with Scikit-Learn",
        "Implemented deep learning models (FFNN, RNN, LSTM) with custom Word2Vec embeddings and fine-tuned transformer models (BERT, RoBERTa) for emotion classification in PyTorch",
        "Implemented the Viterbi algorithm with Hidden Markov Models for POS tagging, dynamically adjusting emission probabilities to improve accuracy on noisy datasets using NumPy"
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
      technologies: ["Python", "Flask", "Pandas", "Scikit-Learn", "NLTK"],
      description: "Designed and built a multi-domain recommender system across books, music, and movies by preprocessing metadata, cleaning features, and serializing ratings/tags for efficient retrieval.",
      achievements: [
        "Designed and built a multi-domain recommender system across books, music, and movies",
        "Preprocessing metadata, cleaning features, and serializing ratings/tags for efficient retrieval",
        "Implemented hybrid algorithms: popularity and collaborative filtering (cosine similarity) for books",
        "Content-based filtering for music and movies with tag vectorization",
        "Deployed the Flask-based book recommender, while preparing music/movie modules for deployment using pickle-serialized similarity scores and real-time metadata querying"
      ],
      status: "Completed",
      type: "personal",
      github: "https://github.com/Abhinav2158",
      demo: null
    },
    {
      title: "Real Estate Cost Prognostication",
      category: "Machine Learning Project",
      period: "September 2023 – November 2023",
      technologies: ["Python", "Scikit-Learn", "Pandas", "Matplotlib", "NumPy"],
      description: "Developed flat price prediction models using ensemble and neural networks; achieved R² = 0.71, RMSE = 35.5 via optimized feature engineering and hyperparameter tuning.",
      achievements: [
        "Developed flat price prediction models using ensemble and neural networks",
        "Achieved R² = 0.71, RMSE = 35.5 via optimized feature engineering and hyperparameter tuning",
        "Enhanced generalization by integrating categorical and numerical features through scaling, encoding, and dimensionality reduction"
      ],
      status: "Completed",
      type: "ml",
      github: "https://github.com/Abhinav2158",
      demo: null
    }
  ];

  const additionalProjects = [
    {
      title: "Contrastive Boundary Learning for Point Cloud Segmentation",
      category: "Reading Project",
      period: "Research Project",
      technologies: ["Python", "Point Cloud Processing", "3D Computer Vision"],
      description: "Analyzed limitations of 3D point cloud segmentation, focusing on scene boundary precision as a key factor in performance degradation.",
      achievements: [
        "Investigated Contrastive Boundary Learning (CBL) framework",
        "Enhanced feature discrimination at boundaries using multi-scale contrastive optimization",
        "Assessed quantitative improvements in boundary IoU and mIoU across datasets like S3DIS"
      ],
      status: "Completed",
      type: "research",
      github: "https://github.com/Abhinav2158",
      demo: null
    },
    {
      title: "Text Classification System for Spam and Toxicity Detection",
      category: "Data Science Project",
      period: "Data Analysis Project",
      technologies: ["Python", "Pandas", "Scikit-Learn", "NLTK", "Streamlit"],
      description: "Designed a unified text preprocessing pipeline using NLTK for cleaning and transforming SMS and tweet datasets, including duplicate removal and label encoding.",
      achievements: [
        "Exploratory data analysis on SMS spam and tweet toxicity datasets",
        "TF-IDF vectorizers with Naive Bayes, Logistic Regression, and XGBoost models",
        "Deployed via Streamlit web application for real-time prediction"
      ],
      status: "Completed",
      type: "data-science",
      github: "https://github.com/Abhinav2158",
      demo: null
    },
    {
      title: "Mobile Price Forecasting",
      category: "Machine Learning Project",
      period: "Academic Project",
      technologies: ["Python", "Scikit-Learn", "Matplotlib", "NumPy", "Pandas"],
      description: "Developed a comprehensive pipeline for training classifiers, including AdaBoost, Decision Tree, SVM, etc. Employed grid search for hyperparameter optimization.",
      achievements: [
        "Robust model evaluation framework using stratified K-fold cross-validation",
        "Minimum of 5 folds for accurate performance assessment",
        "Visualized classification results via heatmap of confusion matrix"
      ],
      status: "Completed",
      type: "ml",
      github: "https://github.com/Abhinav2158",
      demo: null
    },
    {
      title: "HandWritten Digit Recognition",
      category: "Deep Learning Project",
      period: "Academic Project",
      technologies: ["CNN", "TensorFlow", "Python", "Pandas"],
      description: "Implementing a Convolutional Neural Network architecture for image recognition tailored specifically for handwritten digits.",
      achievements: [
        "Achieved accuracy of 98% with CNN and 95% with ANN",
        "Trained on diverse dataset of handwritten digits",
        "Image segmentation techniques for preprocessing input images"
      ],
      status: "Completed",
      type: "dl",
      github: "https://github.com/Abhinav2158",
      demo: null
    }
  ];

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'research': return Brain;
      case 'academic': return Code;
      case 'data-science': return Database;
      case 'ml': return Database;
      case 'dl': return Brain;
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

      {/* Main Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400">Key projects from my academic and professional work</p>
          </div>

          <div className="space-y-8">
            {mainProjects.map((project, index) => {
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
            <p className="text-xl text-gray-600 dark:text-gray-400">Other notable projects and research work</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {additionalProjects.map((project, index) => {
              const ProjectIcon = getProjectIcon(project.type);
              return (
                <Card key={index} className="shadow-lg border-0 overflow-hidden hover:shadow-xl transition-all h-full">
                  <CardHeader className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white">
                        <ProjectIcon className="w-6 h-6" />
                      </div>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <p className="text-purple-600 font-medium text-sm">{project.category}</p>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.period}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      {project.github && (
                        <Button size="sm" variant="outline" className="flex-1" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button size="sm" className="flex-1" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-purple-600 w-full sm:w-auto" asChild>
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
