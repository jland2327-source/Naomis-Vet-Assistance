
import React from 'react';
import { 
  HeartPulse, 
  Stethoscope, 
  Scissors, 
  Microscope, 
  Truck, 
  ShieldCheck 
} from 'lucide-react';
import { Service } from './types';

export const SERVICES: Service[] = [
  {
    title: "Routine Checkups",
    description: "Preventative care to keep your pets healthy and happy throughout their life.",
    icon: <Stethoscope className="w-6 h-6 text-emerald-600" />
  },
  {
    title: "Emergency Care",
    description: "24/7 critical care services for when the unexpected happens.",
    icon: <HeartPulse className="w-6 h-6 text-rose-600" />
  },
  {
    title: "Diagnostic Imaging",
    description: "Advanced X-ray and ultrasound facilities for precise diagnosis.",
    icon: <Microscope className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Grooming & Spa",
    description: "Professional grooming services to keep your pets looking and feeling their best.",
    icon: <Scissors className="w-6 h-6 text-purple-600" />
  },
  {
    title: "Mobile Clinic",
    description: "We bring our expert care directly to your doorstep for maximum convenience.",
    icon: <Truck className="w-6 h-6 text-amber-600" />
  },
  {
    title: "Vaccinations",
    description: "Comprehensive immunization programs tailored to your pet's lifestyle.",
    icon: <ShieldCheck className="w-6 h-6 text-teal-600" />
  }
];
