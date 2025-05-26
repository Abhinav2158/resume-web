
import { GraduationCap, Calendar, MapPin, Award, BookOpen, ChevronLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Education = () => {
  const education = [
    {
      degree: "BS, Data Science and Engineering",
      institution: "Indian Institute of Science Education and Research, Bhopal",
      period: "2021 - 2025",
      location: "Bhopal, Madhya Pradesh",
      description: "Pursuing an integrated BS-MS program in Data Science and Engineering with focus on machine learning, artificial intelligence, and computational methods.",
      highlights: [
        "Current Year: Graduated",
        "Focus Areas: Machine Learning, Computer Vision, Deep Learning",
        "Research Experience in ASIP Lab, DSE Department"
      ]
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "BD DAV Public School",
      period: "2019 - 2021",
      location: "Dharamshala, Himachal Pradesh",
      description: "Completed higher secondary education under CBSE board with Physics, Chemistry, and Mathematics as main subjects.",
      highlights: []
    }
  ];

  const courses = [
    {
      category: "Core Data Science",
      subjects: [
        "Statistics and Probability",
        "Linear Algebra", 
        "Calculus and Optimization",
        "Data Structures and Algorithms",
        "Machine Learning Fundamentals"
      ]
    },
    {
      category: "Programming & Tools",
      subjects: [
        "Python Programming",
        "SQL and Database Management",
        "MATLAB & Mathematica",
        "Version Control (Git)",
        "Jupyter Notebooks"
      ]
    },
    {
      category: "Advanced AI & ML",
      subjects: [
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
        "Neural Networks",
        "GANs and Transformers"
      ]
    },
    {
      category: "Modern Development",
      subjects: [
        "LangChain Framework",
        "FastAPI Development",
        "Docker & Containerization",
        "RESTful API Design",
        "Vector Databases"
      ]
    }
  ];

  const skills = [
    {
      category: "Programming Languages",
      skills: ["Python", "C", "SQL", "HTML", "CSS", "Mathematica", "JavaScript", "MATLAB"]
    },
    {
      category: "Software and Tools",
      skills: ["LaTeX", "Excel", "GitHub", "Google Colab", "Jupyter", "VS Code", "PyCharm", "Linux"]
    },
    {
      category: "Python Libraries & Frameworks",
      skills: ["TensorFlow", "PyTorch", "NumPy", "Pandas", "SciPy", "Matplotlib", "Flask", "Streamlit"]
    },
    {
      category: "Mathematics for DL and ML",
      skills: ["Linear Algebra", "Probability", "Statistics", "Calculus and Optimization"]
    },
    {
      category: "Data Science, ML, DL",
      skills: ["Data Visualization", "Supervised/Unsupervised Learning", "ANN", "CNN", "RNN-LSTM", "GANs", "Transformers", "Feature Engineering"]
    }
  ];

  const achievements = [
    {
      title: "Research Position",
      description: "Project Researcher at Advanced Signal and Image Processing Lab",
      date: "January 2025",
      icon: Award
    },
    {
      title: "Academic Excellence",
      description: "Consistent performance in core data science subjects",
      date: "2021-2025",
      icon: BookOpen
    },
    {
      title: "Tests Qualified",
      description: "GATE, IAT, JEE, JEE Advanced, CUET, ICAR, NEST",
      date: "2019-2025",
      icon: GraduationCap
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-white/20 rounded-xl">
              <GraduationCap className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">Education</h1>
              <p className="text-xl text-white/90">My Academic Journey & Learning Path</p>
            </div>
          </div>
        </div>
      </div>

      {/* Education Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Academic Background</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          </div>

          {education.map((edu, index) => (
            <Card key={index} className="mb-8 shadow-lg border-0 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">
                      {edu.institution}
                    </h4>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.period}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {edu.description}
                </p>
                
                <div>
                  <h5 className="font-semibold mb-3">Key Highlights:</h5>
                  <div className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400">Technologies and tools I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-center text-blue-600">
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillGroup.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
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

      {/* Coursework */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Relevant Coursework</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400">Key subjects and areas of study</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-center text-blue-600">
                    {course.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {course.subjects.map((subject, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">{subject}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Academic Achievements</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white">
                      <achievement.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{achievement.description}</p>
                  <Badge variant="secondary">{achievement.date}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in My Academic Journey?</h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how my education and skills can contribute to your projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto">
                Get In Touch
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-blue-600 w-full sm:w-auto">
                View My Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
