// "use client"

// import React, { useState, useEffect } from 'react';
// import { Wifi, DollarSign, BarChart3, Smartphone, Users, Ticket, Menu, X, ArrowRight, CheckCircle, Star, Mail, Phone, MapPin } from 'lucide-react';

// const BillingSystemLanding = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'features', 'pricing', 'contact'];
//       const scrollPosition = window.scrollY + 100;

//       sections.forEach(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//           }
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsMenuOpen(false);
//   };

//   const features = [
//     {
//       icon: <DollarSign className="w-8 h-8" />,
//       title: "Most Affordable Solution",
//       description: "Get the best value for money with our competitively priced billing system that doesn't compromise on quality.",
//       color: "from-green-400 to-emerald-600"
//     },
//     {
//       icon: <Wifi className="w-8 h-8" />,
//       title: "Simple & Intuitive",
//       description: "User-friendly interface designed for easy navigation. No technical expertise required to get started.",
//       color: "from-blue-400 to-cyan-600"
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Real-time Traffic Monitoring",
//       description: "Monitor internet usage, track active users, and manage bandwidth allocation with comprehensive analytics.",
//       color: "from-purple-400 to-violet-600"
//     },
//     {
//       icon: <Smartphone className="w-8 h-8" />,
//       title: "M-Pesa Integration",
//       description: "Seamless mobile money integration for easy payments. Your customers can pay instantly via M-Pesa.",
//       color: "from-orange-400 to-red-600"
//     },
//     {
//       icon: <BarChart3 className="w-8 h-8" />,
//       title: "Sales Tracking",
//       description: "Advanced analytics and reporting tools to track your revenue, customer growth, and business performance.",
//       color: "from-teal-400 to-cyan-600"
//     },
//     {
//       icon: <Ticket className="w-8 h-8" />,
//       title: "Ticket Management",
//       description: "Efficient customer support system with ticket creation, tracking, and resolution capabilities.",
//       color: "from-pink-400 to-rose-600"
//     }
//   ];

//   const pricingPlans = [
//     {
//       name: "Starter",
//       price: "KSh 2,500",
//       period: "/month",
//       description: "Perfect for small ISPs and hotspot providers",
//       features: [
//         "Up to 50 users",
//         "Basic traffic monitoring",
//         "M-Pesa integration",
//         "Email support",
//         "Basic reporting"
//       ],
//       popular: false
//     },
//     {
//       name: "Professional",
//       price: "KSh 5,000",
//       period: "/month",
//       description: "Ideal for growing internet service providers",
//       features: [
//         "Up to 200 users",
//         "Advanced traffic monitoring",
//         "M-Pesa integration",
//         "Priority support",
//         "Advanced analytics",
//         "Ticket management",
//         "Custom branding"
//       ],
//       popular: true
//     },
//     {
//       name: "Enterprise",
//       price: "KSh 10,000",
//       period: "/month",
//       description: "For large-scale operations and enterprises",
//       features: [
//         "Unlimited users",
//         "Real-time monitoring",
//         "Full M-Pesa integration",
//         "24/7 phone support",
//         "Custom reports",
//         "API access",
//         "White-label solution",
//         "Dedicated account manager"
//       ],
//       popular: false
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
//       {/* Header */}
//       <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-2">
//               <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
//                 <Wifi className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
//                 NetBill Pro
//               </span>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex space-x-8">
//               {['Home', 'Features', 'Pricing', 'Contact'].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item.toLowerCase())}
//                   className={`transition-all duration-300 hover:text-cyan-400 ${
//                     activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-white/70'
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </nav>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm"
//             >
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>

//           {/* Mobile Navigation */}
//           {isMenuOpen && (
//             <nav className="md:hidden mt-4 py-4 bg-black/40 rounded-lg backdrop-blur-sm">
//               {['Home', 'Features', 'Pricing', 'Contact'].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item.toLowerCase())}
//                   className="block w-full text-left px-4 py-2 hover:bg-white/10 transition-colors"
//                 >
//                   {item}
//                 </button>
//               ))}
//             </nav>
//           )}
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section id="home" className="pt-24 pb-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 animate-pulse"></div>
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="text-center max-w-4xl mx-auto">
//             <div className="animate-fade-in-up">
//               <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
//                 Revolutionary Internet Billing System
//               </h1>
//               <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
//                 The most affordable, feature-rich billing solution for ISPs and hotspot providers in Kenya
//               </p>
//             </div>
            
//             <div className="animate-fade-in-up animation-delay-300 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
//               <button 
//                 onClick={() => scrollToSection('pricing')}
//                 className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 w-full sm:w-auto"
//               >
//                 <span>Get Started Today</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button 
//                 onClick={() => scrollToSection('features')}
//                 className="border-2 border-white/30 hover:border-cyan-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm w-full sm:w-auto"
//               >
//                 Learn More
//               </button>
//             </div>

//             <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up animation-delay-600">
//               {[
//                 { number: "500+", label: "Happy Clients" },
//                 { number: "99.9%", label: "Uptime" },
//                 { number: "24/7", label: "Support" },
//                 { number: "KSh 2,500", label: "Starting Price" }
//               ].map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-3xl font-bold text-cyan-400">{stat.number}</div>
//                   <div className="text-white/60">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Floating elements */}
//         <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full animate-bounce animation-delay-1000"></div>
//         <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-400/20 rounded-full animate-bounce animation-delay-2000"></div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-20 relative">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
//               Powerful Features
//             </h2>
//             <p className="text-xl text-white/70 max-w-3xl mx-auto">
//               Everything you need to manage your internet billing business efficiently and profitably
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl"
//               >
//                 <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors">
//                   {feature.title}
//                 </h3>
//                 <p className="text-white/70 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section id="pricing" className="py-20 relative">
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20"></div>
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
//               Simple, Transparent Pricing
//             </h2>
//             <p className="text-xl text-white/70 max-w-3xl mx-auto">
//               Choose the perfect plan for your business. No hidden fees, no surprises.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {pricingPlans.map((plan, index) => (
//               <div
//                 key={index}
//                 className={`relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-500 hover:transform hover:scale-105 ${
//                   plan.popular
//                     ? 'bg-gradient-to-b from-cyan-500/20 to-purple-600/20 border-cyan-400/50 shadow-xl shadow-cyan-500/25'
//                     : 'bg-white/5 border-white/10 hover:border-purple-400/50'
//                 }`}
//               >
//                 {plan.popular && (
//                   <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                     <div className="bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
//                       <Star className="w-4 h-4" />
//                       <span>Most Popular</span>
//                     </div>
//                   </div>
//                 )}

//                 <div className="text-center mb-8">
//                   <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
//                   <div className="mb-4">
//                     <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
//                     <span className="text-white/60">{plan.period}</span>
//                   </div>
//                   <p className="text-white/70">{plan.description}</p>
//                 </div>

//                 <ul className="space-y-4 mb-8">
//                   {plan.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center space-x-3">
//                       <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
//                       <span className="text-white/80">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
//                   plan.popular
//                     ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
//                     : 'border-2 border-white/30 hover:border-cyan-400 hover:bg-white/10'
//                 }`}>
//                   Get Started
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 relative">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
//               Get In Touch
//             </h2>
//             <p className="text-xl text-white/70 max-w-3xl mx-auto">
//               Ready to transform your internet billing business? Contact us today for a free consultation.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//             {/* Contact Info */}
//             <div className="space-y-8">
//               <div className="flex items-center space-x-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
//                 <Phone className="w-8 h-8 text-cyan-400" />
//                 <div>
//                   <h3 className="font-semibold mb-1">Phone</h3>
//                   <p className="text-white/70">+254 700 123 456</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
//                 <Mail className="w-8 h-8 text-cyan-400" />
//                 <div>
//                   <h3 className="font-semibold mb-1">Email</h3>
//                   <p className="text-white/70">hello@netbillpro.co.ke</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
//                 <MapPin className="w-8 h-8 text-cyan-400" />
//                 <div>
//                   <h3 className="font-semibold mb-1">Address</h3>
//                   <p className="text-white/70">Westlands, Nairobi, Kenya</p>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-white/50"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-white/50"
//                 />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Subject"
//                 className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-white/50"
//               />
//               <textarea
//                 rows={6}
//                 placeholder="Your Message"
//                 className="w-full px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-white/50 resize-none"
//               ></textarea>
//               <button
//                 onClick={() => alert('Thank you for your interest! We will contact you soon.')}
//                 className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
//               >
//                 <span>Send Message</span>
//                 <ArrowRight className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-12 border-t border-white/10 bg-black/20 backdrop-blur-sm">
//         <div className="container mx-auto px-6">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
//                   <Wifi className="w-5 h-5 text-white" />
//                 </div>
//                 <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
//                   NetBill Pro
//                 </span>
//               </div>
//               <p className="text-white/60 text-sm">
//                 The most affordable and feature-rich internet billing system for Kenyan ISPs.
//               </p>
//             </div>

//             <div>
//               <h4 className="font-semibold mb-4">Product</h4>
//               <ul className="space-y-2 text-white/60 text-sm">
//                 <li><a href="#features" className="hover:text-cyan-400 transition-colors">Features</a></li>
//                 <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
//                 <li><a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a></li>
//                 <li><a href="#" className="hover:text-cyan-400 transition-colors">API</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-semibold mb-4">Company</h4>
//               <ul className="space-y-2 text-white/60 text-sm">
//                 <li><a href="#" className="hover:text-cyan-400 transition-colors">About</a></li>
//                 <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
//                 <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
//                 <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-semibold mb-4">Support</h4>
//               <ul className="space-y-2 text-white/60 text-sm">
//                 <li><a href="#" className="hover:text-cyan-400 transition-colors">Help Center</a></li>
//                 <li><a href="#" className="hover:text-cyan-400 transition-colors">Community</a></li>
//                 <li><a href="#" className="hover:text-cyan-400 transition-colors">Status</a></li>
//                 <li><a href="#" className="hover:text-cyan-400 transition-colors">Security</a></li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
//             <p>&copy; 2025 NetBill Pro. All rights reserved. Made with ❤️ in Kenya.</p>
//           </div>
//         </div>
//       </footer>

//       <style jsx>{`
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//         }

//         .animation-delay-300 {
//           animation-delay: 0.3s;
//           opacity: 0;
//         }

//         .animation-delay-600 {
//           animation-delay: 0.6s;
//           opacity: 0;
//         }

//         .animation-delay-1000 {
//           animation-delay: 1s;
//         }

//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default BillingSystemLanding;

import BillingSystemLanding from "./components/BillingSystemLanding";

export default function Home() {
  return <BillingSystemLanding />;
}