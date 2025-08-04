import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Heart, 
  Star, 
  Instagram, 
  Phone, 
  Mail, 
  MessageCircle, 
  Sparkles, 
  Users, 
  TrendingUp, 
  Play,
  Download,
  Calendar,
  Video,
  Target,
  Zap
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-beauty.jpg";
import iflahPortrait from "@/assets/iflah-portrait.jpg";
import pdfGuide from "@/assets/pdf-guide.jpg";

const Index = () => {
  const [leadForm, setLeadForm] = useState({
    name: "",
    email: "",
    whatsapp: ""
  });

  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    website: "",
    timeSlot: ""
  });

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you!",
      description: "Your free PDF guide will be sent to your email shortly.",
    });
    setLeadForm({ name: "", email: "", whatsapp: "" });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Call Booked!",
      description: "I'll reach out to you within 24 hours.",
    });
    setBookingForm({ name: "", email: "", whatsapp: "", website: "", timeSlot: "" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918750303564"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-luxury hover:shadow-glow transition-all duration-300 transform hover:scale-110 floating-animation"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-xl font-bold text-gradient">UGC & AI Ads by Iflah</div>
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => scrollToSection("about")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("work")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Work
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-animation opacity-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative container mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight">
            Transform Your Beauty Brand with AI & UGC Ads
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            I help beauty brands create viral content that gets real sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="btn-primary text-lg px-8 py-4 rounded-full"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Appointment
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("lead-magnet")}
              className="btn-soft text-lg px-8 py-4 rounded-full"
            >
              <Download className="mr-2 h-5 w-5" />
              Free PDF Guide
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Iflah Section */}
      <section id="about" className="py-20 bg-primary-soft/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
              <img 
                src={iflahPortrait}
                alt="Iflah"
                className="relative w-full max-w-md mx-auto rounded-3xl shadow-luxury"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gradient">Hey, I'm Iflah ✨</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I specialize in UGC videos and AI-powered ad campaigns for beauty brands. 
                I've helped beauty businesses go from unknown to unforgettable — all using 
                content that feels real, relatable, and results-driven.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/inspire_iflah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  @inspire_iflah
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">What I Offer</h2>
            <p className="text-xl text-muted-foreground">Comprehensive solutions for beauty brand growth</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Video,
                title: "UGC Video Creation",
                description: "Authentic user-generated content that converts viewers into customers"
              },
              {
                icon: Zap,
                title: "AI-Powered Ad Strategy",
                description: "Data-driven campaigns with intelligent targeting and optimization"
              },
              {
                icon: TrendingUp,
                title: "Instagram Viral Content",
                description: "Strategic content planning that gets your brand noticed"
              },
              {
                icon: MessageCircle,
                title: "WhatsApp Marketing",
                description: "Direct customer engagement and automated follow-up systems"
              },
              {
                icon: Target,
                title: "PDF & Freebie Funnels",
                description: "Lead magnets that capture and convert your ideal customers"
              },
              {
                icon: Sparkles,
                title: "Brand Strategy",
                description: "Complete beauty brand positioning and growth strategy"
              }
            ].map((service, index) => (
              <Card key={index} className="card-luxury group hover:scale-105 transition-all duration-500">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Samples Section */}
      <section id="work" className="py-20 bg-accent-soft/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">See My Sample Ads</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Explore some of my past UGC and AI-powered ads created for beauty and skincare brands.
            </p>
            <Card className="card-gradient max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <Play className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Portfolio Showcase</h3>
                <p className="text-muted-foreground mb-6">
                  Watch real campaigns that drove thousands in revenue for beauty brands
                </p>
                <Button className="btn-primary">
                  <Play className="mr-2 h-4 w-4" />
                  View Sample Ads
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Free PDF Lead Magnet */}
      <section id="lead-magnet" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-gradient">
                Free Guide: How to Scale Your Beauty Brand to Lakhs Using AI & UGC
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get my 30-page premium PDF showing real strategies for beauty brand growth.
              </p>
              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="lead-name">Name</Label>
                  <Input
                    id="lead-name"
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({...leadForm, name: e.target.value})}
                    className="rounded-full"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lead-email">Email</Label>
                  <Input
                    id="lead-email"
                    type="email"
                    value={leadForm.email}
                    onChange={(e) => setLeadForm({...leadForm, email: e.target.value})}
                    className="rounded-full"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lead-whatsapp">WhatsApp Number</Label>
                  <Input
                    id="lead-whatsapp"
                    value={leadForm.whatsapp}
                    onChange={(e) => setLeadForm({...leadForm, whatsapp: e.target.value})}
                    className="rounded-full"
                    required
                  />
                </div>
                <Button type="submit" className="btn-accent w-full rounded-full">
                  <Download className="mr-2 h-4 w-4" />
                  Send Me the Free PDF
                </Button>
              </form>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl transform -rotate-3"></div>
              <img 
                src={pdfGuide}
                alt="Free PDF Guide"
                className="relative w-full max-w-md mx-auto rounded-3xl shadow-luxury floating-animation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-primary-soft/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">What My Clients Say</h2>
            <p className="text-xl text-muted-foreground">Real results from real beauty brands</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "We saw amazing engagement with Iflah's video ad! She understood our brand perfectly.",
                author: "Skincare Brand Owner",
                rating: 5
              },
              {
                text: "Our sales increased by 300% after implementing Iflah's UGC strategy. Incredible results!",
                author: "Beauty Startup Founder",
                rating: 5
              },
              {
                text: "Professional, creative, and results-driven. Iflah transformed our entire marketing approach.",
                author: "Cosmetics Brand Manager",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="card-luxury">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Book Appointment */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Book a 15-Min Strategy Call</h2>
            <p className="text-xl text-muted-foreground">Let's discuss how to grow your beauty brand</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="card-luxury">
              <CardContent className="p-8">
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="booking-name">Name</Label>
                    <Input
                      id="booking-name"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                      className="rounded-full"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="booking-email">Email</Label>
                    <Input
                      id="booking-email"
                      type="email"
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                      className="rounded-full"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="booking-whatsapp">WhatsApp Number</Label>
                    <Input
                      id="booking-whatsapp"
                      value={bookingForm.whatsapp}
                      onChange={(e) => setBookingForm({...bookingForm, whatsapp: e.target.value})}
                      className="rounded-full"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="booking-website">Brand Website / Instagram</Label>
                    <Input
                      id="booking-website"
                      value={bookingForm.website}
                      onChange={(e) => setBookingForm({...bookingForm, website: e.target.value})}
                      className="rounded-full"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="booking-time">Preferred Time Slot</Label>
                    <Textarea
                      id="booking-time"
                      value={bookingForm.timeSlot}
                      onChange={(e) => setBookingForm({...bookingForm, timeSlot: e.target.value})}
                      className="rounded-2xl"
                      placeholder="Let me know your preferred time and timezone"
                      required
                    />
                  </div>
                  <Button type="submit" className="btn-primary w-full rounded-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book My Call
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="card-gradient">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+91 8750303564</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>iflahlch@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Instagram className="h-5 w-5 text-primary" />
                      <span>@inspire_iflah</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-luxury">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Brand analysis and growth opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Custom UGC and AI strategy roadmap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Actionable next steps for immediate results</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-gradient mb-4">UGC & AI Ads by Iflah</div>
          <p className="text-muted-foreground mb-6">
            High-Converting Beauty Brand Ads with UGC + AI Strategy
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://instagram.com/inspire_iflah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://wa.me/918750303564"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;