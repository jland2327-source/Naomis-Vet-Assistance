
import React from 'react';

export type TabType = 'home' | 'dogs' | 'cats' | 'other';
export type Theme = 'light' | 'dark';

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
