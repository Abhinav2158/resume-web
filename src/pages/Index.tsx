
import { Mail, Phone, Linkedin, Github, Calendar, MapPin, ExternalLink } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Abhinav Attri</h1>
            <p className="text-xl text-gray-600 mb-6">Data Scientist & Machine Learning Engineer</p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 82629-95011</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:abhinav@gmail.com" className="text-blue-600 hover:text-blue-800">
                  abhinav@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  LinkedIn/Abhinav
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600">abhinav</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-blue-700">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.languages.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-green-700">Software & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.softwareTools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-green-100 text-green-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-purple-700">Python Libraries & Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.pythonLibraries.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-purple-100 text-purple-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-orange-700">Mathematics for DL and ML</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.mathML.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-orange-100 text-orange-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 md:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg text-red-700">Data Science, ML, DL</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.dataScience.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-red-100 text-red-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Experience</h2>
          {experiences.map((exp, index) => (
            <Card key={index} className="mb-6 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-gray-900">{exp.title}</CardTitle>
                    <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Projects</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                      <p className="text-blue-600 font-medium">{project.tech}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600 text-sm">{project.period}</span>
                      {project.github && (
                        <Button variant="outline" size="sm" className="ml-2">
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
                      <li key={idx} className="flex gap-3">
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="text-gray-700">{point}</span>
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
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Education</h2>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-gray-900">{education.institution}</CardTitle>
                  <p className="text-lg text-blue-600 font-medium">{education.degree}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{education.location}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold text-gray-900 mb-3">Key Courses</h4>
              <div className="flex flex-wrap gap-2">
                {education.courses.map((course) => (
                  <Badge key={course} variant="outline" className="bg-gray-50">
                    {course}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Abhinav Attri. Built with passion for data science and machine learning.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
