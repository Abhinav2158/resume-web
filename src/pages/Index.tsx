
import { Mail, Phone, Linkedin, Github, Calendar, MapPin, ExternalLink, Download, Code, Brain, Database, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Index = () => {
  const technicalSkills = {
    languages: ['Python', 'C', 'SQL', 'HTML', 'CSS', 'Mathematica', 'JavaScript', 'MATLAB'],
    softwareTools: ['LaTeX', 'Excel', 'GitHub', 'Google Colab', 'Jupyter', 'VS Code', 'PyCharm', 'Linux'],
    pythonLibraries: ['TensorFlow', 'Scikit-Learn', 'PyTorch', 'NumPy', 'Pandas', 'SciPy', 'Matplotlib', 'Flask', 'Streamlit'],
    mathML: ['Linear Algebra', 'Probability', 'Statistics', 'Calculus and Optimization'],
    dataScience: ['Python', 'Data Visualization', 'Supervised/Unsupervised Learning', 'ANN', 'CNN', 'RNN-LSTM', 'GANs', 'Transformers', 'Feature Engineering', 'Feature Selection and extraction etc.']
  };

  const experiences = [
    {
      title: "Project Researcher",
      company: "Advanced Signal and Image Processing Lab, IISER Bhopal",
      period: "January 2025 – Present",
      achievements: [
        "Proposed a deep learning framework for Near-Infrared (NIR) to RGB image colorization, enhancing visibility and realism in low-light and night-time scenes.",
        "Developed an enhanced GAN-based architecture extending ColorMamba, incorporating Visual State Space Blocks (VSSBs) and an HSV-based sub-network to capture fine-grained spatial-semantic dependencies.",
        "Designed a novel multi-objective loss function combining VGG perceptual loss, histogram loss, and cosine loss, improving texture realism and perceptual sharpness.",
        "Achieved PSNR: 24.418, SSIM: 0.71 on VCIP2020, outperforming baselines in fidelity and detail reconstruction with full pipeline optimized using patch-wise adaptive inference and mixed precision training.",
        "Evaluated on four public datasets (VCIP2020, RGB2NIR Scene, OMSIV, FANVID), demonstrating robustness across varied lighting and scene."
      ]
    }
  ];

  const projects = [
    {
      title: "Text Classification and POS Tagging System",
      tech: "Python, Scikit-Learn, PyTorch, NLTK, NumPy",
      period: "Sept 2024 – Nov 2024",
      points: [
        "Developed a feature extraction pipeline using regex and n-grams for emotion classification, training and evaluating multiple ML models (Naive Bayes, Logistic Regression, Random Forest, SVM) with Scikit-Learn.",
        "Implemented deep learning models (FFNN, RNN, LSTM) with custom Word2Vec embeddings and fine-tuned transformer models (BERT, RoBERTa) for emotion classification in PyTorch.",
        "Implemented the Viterbi algorithm with Hidden Markov Models for POS tagging, dynamically adjusting emission probabilities to improve accuracy on nosy datasets using NumPy."
      ],
      github: "GitHub"
    },
    {
      title: "Multi-Domain Recommendation System",
      tech: "Python, Pandas, Scikit-Learn, NLTK",
      period: "May 2023 – July 2023",
      points: [
        "Designed and built a multi-domain recommender system across books, music, and movies by preprocessing metadata, cleaning features, and serializing ratings/tags for efficient retrieval.",
        "Implemented hybrid algorithms: popularity and collaborative filtering (cosine similarity) for books, and content-based filtering using tag vectorization for music and movies.",
        "Deployed the Flask-based book recommender, while preparing music/movie modules for deployment using pickle-serialized similarity scores and real-time metadata querying."
      ]
    },
    {
      title: "Real Estate Cost Prognostication",
      tech: "Python, Scikit-Learn, Pandas, Matplotlib, NumPy",
      period: "Sept 2023 – Nov 2023",
      points: [
        "Developed flat price prediction models using ensemble and neural networks; achieved R² = 0.71, RMSE = 35.5 via optimized feature engineering and hyperparameter tuning.",
        "Enhanced generalization by integrating categorical and numerical features through scaling, encoding, and dimensionality reduction."
      ]
    }
  ];

  const education = {
    institution: "Indian Institute of Science Education and Research Bhopal",
    degree: "Bachelor of Science in Data Science and Engineering",
    period: "Aug 2021 – May 2025",
    location: "Bhopal, M.P",
    courses: [
      "Artificial Intelligence (AI)", "Machine Learning (ML)", "Deep Learning", "Natural Language Processing (NLP)",
      "Computer Vision (CV)", "Applied Accelerated Artificial Intelligence", "Data Structures and Algorithms (DSA)",
      "Database Management Systems (DBMS)", "Programming in C", "Discrete Mathematics", "Linear Algebra",
      "Probability and Statistics", "Calculus", "Group Theory", "Econometrics"
    ]
  };

  const skillCategories = [
    { title: "Languages", items: technicalSkills.languages, icon: Code, color: "from-blue-500 to-cyan-500" },
    { title: "Software & Tools", items: technicalSkills.softwareTools, icon: Zap, color: "from-emerald-500 to-teal-500" },
    { title: "Python Libraries", items: technicalSkills.pythonLibraries, icon: Brain, color: "from-purple-500 to-pink-500" },
    { title: "Mathematics for ML/DL", items: technicalSkills.mathML, icon: Database, color: "from-orange-500 to-red-500" },
    { title: "Data Science & ML", items: technicalSkills.dataScience, icon: Brain, color: "from-indigo-500 to-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
                  Abhinav Attri
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <p className="text-2xl text-gray-600 font-light">Data Scientist & ML Engineer</p>
                <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
                  Transforming complex data into intelligent solutions through cutting-edge machine learning and deep learning technologies.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                <Button variant="outline" className="border-2 border-gray-300 hover:border-blue-500 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                <a href="tel:+918262995011" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+91 82629-95011</span>
                </a>
                <a href="mailto:abhinav@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>abhinav@gmail.com</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-slate-100 to-white rounded-full shadow-xl">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-6xl font-bold text-gray-400">AA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Proficient in cutting-edge technologies and frameworks</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={category.title} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-gray-900">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-200 hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          </div>

          {experiences.map((exp, index) => (
            <Card key={index} className="mb-8 hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-gray-900 mb-2">{exp.title}</CardTitle>
                    <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 bg-white px-4 py-2 rounded-full shadow-md">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-4 group">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-700 leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Innovative solutions and research implementations</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <p className="text-blue-600 font-medium text-sm">{project.tech}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 text-sm">{project.period}</span>
                      {project.github && (
                        <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-300">
                          <Github className="w-4 h-4 mr-1" />
                          {project.github}
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.points.map((point, idx) => (
                      <li key={idx} className="flex gap-3 group">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          </div>

          <Card className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl text-gray-900 mb-2">{education.institution}</CardTitle>
                  <p className="text-lg text-blue-600 font-semibold">{education.degree}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-gray-600 mb-2 bg-white px-4 py-2 rounded-full shadow-md">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{education.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 bg-white px-4 py-2 rounded-full shadow-md">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">{education.location}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <h4 className="font-semibold text-gray-900 mb-4 text-lg">Key Courses</h4>
              <div className="flex flex-wrap gap-3">
                {education.courses.map((course) => (
                  <Badge 
                    key={course} 
                    variant="outline" 
                    className="bg-gray-50 hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200 hover:scale-105 px-3 py-1"
                  >
                    {course}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:abhinav@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400">
            © 2025 Abhinav Attri. Crafted with passion for data science and machine learning innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
