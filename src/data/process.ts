import { ProcessStep } from '@/types';

export const processSteps: ProcessStep[] = [
  {
    id: 'step-1',
    step: 1,
    title: 'Consultation',
    description: 'We begin with a free site visit to understand your requirements, lifestyle, and budget constraints.',
    icon: 'MessageSquare',
    duration: 'Day 1'
  },
  {
    id: 'step-2',
    step: 2,
    title: 'Space Analysis',
    description: 'Detailed measurement and constraint mapping of your space, including beams, shafts, and natural light sources.',
    icon: 'Ruler',
    duration: 'Days 2-3'
  },
  {
    id: 'step-3',
    step: 3,
    title: 'Concept Design',
    description: 'Creation of layout proposals, mood boards, and preliminary material selections tailored to your space.',
    icon: 'PenTool',
    duration: 'Days 4-10'
  },
  {
    id: 'step-4',
    step: 4,
    title: '3D Visualization',
    description: 'We provide high-resolution 3D renders for your approval, ensuring you know exactly what to expect before execution begins.',
    icon: 'MonitorPlay',
    duration: 'Days 10-20'
  },
  {
    id: 'step-5',
    step: 5,
    title: 'Execution',
    description: 'Our team handles on-site coordination, civil work, carpentry, and installation with strict quality checks at every stage.',
    icon: 'Hammer',
    duration: 'Days 21-60+'
  },
  {
    id: 'step-6',
    step: 6,
    title: 'Handover',
    description: 'Final punch-list completion, deep cleaning, and the official handover of your newly transformed space.',
    icon: 'Key',
    duration: 'Final Week'
  }
];
