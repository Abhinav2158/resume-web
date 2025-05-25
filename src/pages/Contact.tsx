
import { MessageCircle, Mail, Phone, Linkedin, Github, MapPin, ChevronLeft, Send, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abhinav8580i@gmail.com",
      href: "mailto:abhinav8580i@gmail.com",
      description: "Best way to reach me"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9111224460",
      href: "tel:+919111224460",
      description: "Available during business hours"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "IISER Bhopal, MP, India",
      href: null,
      description: "Currently based at"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "abhinav-attri-8580i",
      href: "https://www.linkedin.com/in/abhinav-attri-8580i/",
      color: "text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Abhinav2158",
      href: "https://github.com/Abhinav2158",
      color: "text-gray-700 dark:text-gray-300"
    }
  ];

  const availability = [
    {
      type: "Full-time Opportunities",
      status: "Available",
      description: "Open to full-time positions after graduation"
    },
    {
      type: "Internships",
      status: "Currently Available",
      description: "Looking for summer internships and part-time roles"
    },
    {
      type: "Projects & Collaborations",
      status: "Always Open",
      description: "Excited to work on interesting data science projects"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-white/20 rounded-xl">
              <MessageCircle className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">Contact Me</h1>
              <p className="text-xl text-white/90">Let's Connect & Collaborate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
              <Card className="shadow-lg border-0">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <Input placeholder="Your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <Input placeholder="Your last name" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="your.email@example.com" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <Input placeholder="What's this about?" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea 
                        placeholder="Tell me about your project, opportunity, or just say hello!"
                        rows={6}
                      />
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white">
                          <contact.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1">{contact.label}</h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{contact.description}</p>
                          {contact.href ? (
                            <a 
                              href={contact.href} 
                              className="text-orange-600 hover:text-orange-700 font-medium"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{contact.value}</span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <h3 className="text-xl font-semibold mb-4">Connect on Social</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all hover:-translate-y-1">
                    <CardContent className="p-4">
                      <a 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-center"
                      >
                        <social.icon className={`w-6 h-6 ${social.color}`} />
                        <div>
                          <p className="font-medium">{social.label}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{social.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Availability</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400">Current opportunities I'm looking for</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {availability.map((item, index) => (
              <Card key={index} className="shadow-lg border-0 text-center hover:shadow-xl transition-all hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white">
                      <Calendar className="w-6 h-6" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{item.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge 
                    className={`mb-4 ${
                      item.status === 'Currently Available' ? 'bg-green-100 text-green-800' :
                      item.status === 'Always Open' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {item.status}
                  </Badge>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Quick Actions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Choose the best way to connect with me
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 h-16"
              asChild
            >
              <a href="https://www.linkedin.com/in/abhinav-attri-8580i/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="h-16 hover:bg-gray-50 dark:hover:bg-gray-800"
              asChild
            >
              <a href="mailto:abhinav8580i@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </Button>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 h-16"
              asChild
            >
              <a href="https://github.com/Abhinav2158" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
