import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();


  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
    } else {
      toast({
        title: "Failed to Send",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  } catch (error) {
    console.error("Error sending message:", error);
    toast({
      title: "Error",
      description: "Network issue or server not available.",
      variant: "destructive",
    });
  }
};


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91-7070879989",
      href: "tel:+917070879989",
      color: "text-primary"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "umangprakash21@gmail.com",
      href: "mailto:umangprakash21@gmail.com",
      color: "text-accent"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Bihar, India",
      href: "#",
      color: "text-primary"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com/Umangpr",
      color: "text-foreground hover:text-accent"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/umang-prakash",
      color: "text-foreground hover:text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to start your next project? Let's connect and discuss how we can work together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="card-gradient border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <MessageCircle className="h-6 w-6 mr-3 text-accent" />
                    Let's Connect
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    I'm always excited to discuss new opportunities, interesting projects, 
                    or just chat about technology. Feel free to reach out through any of 
                    the channels below.
                  </p>

                  {/* Contact Details */}
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center ${info.color}`}>
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          {info.href !== '#' ? (
                            <a 
                              href={info.href} 
                              className="font-medium hover:text-accent transition-colors duration-200"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="mt-8 pt-8 border-t border-border">
                    <h4 className="font-semibold mb-4">Follow me on:</h4>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center ${social.color} transition-all duration-200 hover:scale-110`}
                          title={social.label}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="card-gradient border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Send className="h-6 w-6 mr-3 text-primary" />
                    Send Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-secondary/30 border-border focus:border-accent"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-secondary/30 border-border focus:border-accent"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="bg-secondary/30 border-border focus:border-accent resize-none"
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full hero-gradient hover:opacity-90 transition-opacity font-semibold"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>

                  <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
                    <p className="text-sm text-muted-foreground text-center">
                      <strong>Response Time:</strong> I typically respond within 24 hours
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center">
            <Card className="card-gradient border-border">
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  © 2025 Umang Prakash. Built with ❤️ & passion using React, TypeScript, and Tailwind CSS.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;