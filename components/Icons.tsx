
import React from 'react';
import { Network, Server, ShieldAlert, Globe, ChevronDown, ChevronUp, ExternalLink, Trophy, Book, Wrench, X } from 'lucide-react';

export const IconMap: Record<string, React.ReactNode> = {
  Network: <Network className="w-5 h-5 md:w-6 md:h-6" />,
  Server: <Server className="w-5 h-5 md:w-6 md:h-6" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5 md:w-6 md:h-6" />,
  Globe: <Globe className="w-5 h-5 md:w-6 md:h-6" />,
  ChevronDown: <ChevronDown className="w-5 h-5" />,
  ChevronUp: <ChevronUp className="w-5 h-5" />,
  ExternalLink: <ExternalLink className="w-4 h-4" />,
  Trophy: <Trophy className="w-5 h-5 text-white/50" />,
  Book: <Book className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
  X: <X className="w-5 h-5" />
};
