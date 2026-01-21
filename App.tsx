
import React, { useState } from 'react';
import Layout from './components/Layout';
import ChatBot from './components/ChatBot';
import { TabType } from './types';
import { SERVICES } from './constants';
import { CheckCircle, Award, Users, Calendar, ArrowRight, Activity, Bone } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  const renderHome = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:h-[600px] flex items-center overflow-hidden py-16 md:py-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1600&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-6 text-white">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 rounded-full text-emerald-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
              Voted #1 Clinic in 2024
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-6 leading-tight md:leading-[1.1]">
              Compassionate Care for Your <span className="text-emerald-400 underline decoration-emerald-500/30 underline-offset-4 md:underline-offset-8">Best Friend.</span>
            </h1>
            <p className="text-base md:text-xl text-slate-300 mb-8 md:mb-10 leading-relaxed max-w-xl">
              From the smallest hamster to the biggest hound, we provide expert medical attention with a soft touch. Experience modern veterinary medicine with heart.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setActiveTab('dogs')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-base md:text-lg transition-all flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                Explore Services <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-base md:text-lg transition-all w-full sm:w-auto">
                Meet the Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: 'Happy Patients', value: '15k+', icon: <Users className="text-emerald-600 dark:text-emerald-400" /> },
              { label: 'Specialists', value: '24', icon: <Award className="text-amber-500 dark:text-amber-400" /> },
              { label: 'Years of Care', value: '30+', icon: <Calendar className="text-blue-500 dark:text-blue-400" /> },
              { label: 'Success Rate', value: '99%', icon: <CheckCircle className="text-teal-500 dark:text-teal-400" /> }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 md:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:shadow-xl dark:hover:shadow-emerald-900/10 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4 border border-slate-100 dark:border-slate-600">
                  {stat.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">{stat.value}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium text-xs md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Our Premium Services</h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">We offer a comprehensive range of veterinary services using state-of-the-art technology to ensure your pets live long, healthy lives.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((service, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-emerald-900/5 dark:hover:shadow-emerald-400/5 transition-all group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/30 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 dark:text-slate-100">{service.title}</h3>
                <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed mb-6">{service.description}</p>
                <button className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1 hover:gap-2 transition-all text-sm md:text-base">
                  Learn more <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-emerald-900 dark:bg-emerald-950 text-white overflow-hidden relative">
        <div className="absolute -top-24 -right-24 w-64 h-64 md:w-96 md:h-96 bg-emerald-800 dark:bg-emerald-900/50 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 md:w-96 md:h-96 bg-emerald-800 dark:bg-emerald-900/50 rounded-full blur-3xl opacity-50" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">What Pet Parents Say</h2>
              <div className="space-y-6 md:space-y-8">
                <div className="bg-emerald-800/40 dark:bg-emerald-900/20 backdrop-blur-sm p-6 md:p-8 rounded-2xl md:rounded-3xl border border-emerald-700/50 dark:border-emerald-800/50">
                  <p className="text-lg md:text-xl italic mb-6">"Paws & Whiskers literally saved my dog Cooper's life. Their emergency response was incredible and the surgeons are top-tier. I wouldn't trust anyone else."</p>
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-emerald-500 object-cover" alt="Avatar" />
                    <div className="text-left">
                      <p className="font-bold text-sm md:text-base">Sarah Jenkins</p>
                      <p className="text-emerald-400 text-xs md:text-sm">Golden Retriever Parent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-3 md:gap-4 w-full">
              <img src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=400&auto=format&fit=crop" className="rounded-2xl md:rounded-3xl shadow-2xl hover:scale-105 transition-transform h-40 md:h-auto object-cover" alt="Clinic Life" />
              <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=400&auto=format&fit=crop" className="rounded-2xl md:rounded-3xl shadow-2xl mt-6 md:mt-8 hover:scale-105 transition-transform h-40 md:h-auto object-cover" alt="Happy Cat" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderDogs = () => (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="py-12 md:py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24">
            <div>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-4 block">Specialized Care</span>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 dark:text-white">Comprehensive Care for Every Breed.</h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-6 md:mb-8 leading-relaxed">
                From high-energy Labradors to delicate Chihuahuas, our canine specialists understand the unique medical and behavioral needs of dogs at every stage of life.
              </p>
              <ul className="space-y-3 md:space-y-4">
                {[
                  'Joint & Arthritis Management',
                  'Dental Cleaning & Surgery',
                  'Flea, Tick & Heartworm Prevention',
                  'Puppy Socialization & Nutrition',
                  'Behavioral Counseling'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-medium text-slate-700 dark:text-slate-300 text-sm md:text-base">
                    <div className="bg-emerald-100 dark:bg-emerald-900/50 p-1 rounded-full text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                      <CheckCircle size={16} md:size={18} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-2 md:-inset-4 bg-emerald-600/10 dark:bg-emerald-400/5 rounded-2xl md:rounded-[3rem] -rotate-2 md:-rotate-3" />
              <img 
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop" 
                alt="Happy Dog" 
                className="rounded-2xl md:rounded-[2.5rem] shadow-2xl relative z-10 w-full h-[300px] md:h-[500px] object-cover"
              />
              <div className="absolute -bottom-4 md:-bottom-6 -left-2 md:-left-6 bg-white dark:bg-slate-800 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl z-20 border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 md:p-3 rounded-xl md:rounded-2xl">
                    <Bone size={20} className="text-emerald-600 dark:text-emerald-400 md:w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-slate-100 text-xs md:text-base">Health Tip</p>
                    <p className="text-[10px] md:text-sm text-slate-500 dark:text-slate-400">Daily walks reduce stress!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
             {[
               { title: 'Puppy Care', img: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?q=80&w=400&auto=format&fit=crop', desc: 'Starting your pup on the right paw with vaccines and growth tracking.' },
               { title: 'Senior Wellness', img: 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=400&auto=format&fit=crop', desc: 'Comfort-focused care for aging dogs, managing pain and mobility.' },
               { title: 'Surgical Excellence', img: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=400&auto=format&fit=crop', desc: 'Precision soft tissue and orthopedic surgery for canine patients.' }
             ].map((card, i) => (
               <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-emerald-900/10 transition-all border border-slate-100 dark:border-slate-800">
                 <img src={card.img} className="w-full h-40 md:h-48 object-cover" alt={card.title} />
                 <div className="p-6 md:p-8">
                   <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 dark:text-white">{card.title}</h3>
                   <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mb-4">{card.desc}</p>
                   <button className="text-emerald-600 dark:text-emerald-400 font-bold text-sm md:text-base">Read more →</button>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderCats = () => (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="py-12 md:py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-2 md:-inset-4 bg-purple-600/10 dark:bg-purple-400/5 rounded-2xl md:rounded-[3rem] rotate-2 md:rotate-3" />
              <img 
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop" 
                alt="Chill Cat" 
                className="rounded-2xl md:rounded-[2.5rem] shadow-2xl relative z-10 w-full h-[300px] md:h-[500px] object-cover"
              />
              <div className="absolute -top-4 md:-top-6 -right-2 md:-right-6 bg-white dark:bg-slate-800 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl z-20 border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-2 md:p-3 rounded-xl md:rounded-2xl">
                    <Activity size={20} className="text-purple-600 dark:text-purple-400 md:w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-slate-100 text-xs md:text-base">Fear-Free</p>
                    <p className="text-[10px] md:text-sm text-slate-500 dark:text-slate-400">Certified cat-friendly</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-4 block">Feline Experts</span>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 dark:text-white">Quiet, Calm, and Specialized Care.</h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-6 md:mb-8 leading-relaxed">
                Cats aren't just small dogs. They require a specific clinical environment and handling techniques. Our "Gold Standard" cat-friendly clinic ensures a stress-free visit.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {[
                  'Cat-Only Waiting Area',
                  'Feline Internal Medicine',
                  'Kidney Disease Monitoring',
                  'Hyperthyroidism Treatment',
                  'Weight Management Plans',
                  'Feline Dentistry'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white dark:bg-slate-900 p-3 md:p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                    <CheckCircle size={16} className="text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    <span className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 shadow-sm border border-slate-100 dark:border-slate-800 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">Why Cat Parents Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12">
              <div>
                <div className="text-3xl md:text-4xl mb-4">🤫</div>
                <h4 className="font-bold text-sm md:text-lg mb-2 dark:text-slate-200">Pheromone Therapy</h4>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">Feliway diffusers throughout the clinic to calm nervous visitors.</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl mb-4">🦷</div>
                <h4 className="font-bold text-sm md:text-lg mb-2 dark:text-slate-200">Cat Dentistry</h4>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">Specialized equipment for cat-specific tooth extractions.</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl mb-4">🩺</div>
                <h4 className="font-bold text-sm md:text-lg mb-2 dark:text-slate-200">Senior Feline Care</h4>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">Comprehensive screening for kidney and thyroid health.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderOther = () => (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="py-12 md:py-20 bg-emerald-50/30 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-6">
          <div className="text-center mb-12 md:mb-20">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 dark:text-white">Avian, Exotic & Small Mammal Care</h1>
            <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              From feathers and scales to fur and fins, our exotic pet specialists provide the expert knowledge these unique creatures deserve.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
            {[
              { type: 'Birds', icon: '🦜', species: 'Parrots, Budgies, Canaries', services: 'Wing trimming, beak care, nutrition' },
              { type: 'Reptiles', icon: '🦎', species: 'Lizards, Snakes, Turtles', services: 'Habitat audits, skin issues, respiratory' },
              { type: 'Small Mammals', icon: '🐰', species: 'Rabbits, Hamsters, Guinea Pigs', services: 'Dental filing, spaying/neutering' },
              { type: 'Aquatic Pets', icon: '🐠', species: 'Koi, Goldfish, Tropical Fish', services: 'Water quality analysis, fungal treatment' },
              { type: 'Hedgehogs', icon: '🦔', species: 'African Pygmy Hedgehogs', services: 'Weight checks, mite treatment' },
              { type: 'Ferrets', icon: '🦦', species: 'Domestic Ferrets', services: 'Vaccinations, adrenal health' }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] shadow-md border border-slate-100 dark:border-slate-800 hover:-translate-y-2 transition-transform">
                <div className="text-4xl md:text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 dark:text-white">{item.type}</h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-xs md:text-sm mb-4">{item.species}</p>
                <div className="h-px bg-slate-100 dark:bg-slate-800 w-full mb-4" />
                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                  <span className="font-bold text-slate-700 dark:text-slate-300">Services:</span> {item.services}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-emerald-900 dark:bg-emerald-950 rounded-2xl md:rounded-[3rem] overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-8 md:p-20 text-white text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Specialized Diagnostics</h2>
                <p className="text-emerald-100 dark:text-emerald-200 mb-8 leading-relaxed text-sm md:text-lg">
                  Treating exotic pets requires specialized tools. We utilize micro-surgical instruments and ultra-high-resolution imaging for patients as small as 50 grams.
                </p>
                <button className="bg-white text-emerald-900 px-8 py-3 rounded-full font-bold hover:bg-emerald-50 transition-colors w-full sm:w-auto">
                  Contact Exotic Specialist
                </button>
              </div>
              <div className="flex-1 h-60 md:h-auto">
                <img src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Exotic Vet" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === 'home' && renderHome()}
      {activeTab === 'dogs' && renderDogs()}
      {activeTab === 'cats' && renderCats()}
      {activeTab === 'other' && renderOther()}
      
      {/* Floating Action Button for Help */}
      <ChatBot />
    </Layout>
  );
};

export default App;
