import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="team" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the talented individuals who make our company exceptional. Each team member brings unique expertise and passion to everything we do.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let member of teamMembers" class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="aspect-w-1 aspect-h-1">
              <img [src]="member.image" [alt]="member.name" class="w-full h-64 object-cover">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-1">{{ member.name }}</h3>
              <p class="text-blue-600 font-medium mb-3">{{ member.position }}</p>
              <p class="text-gray-600 text-sm leading-relaxed mb-4">{{ member.bio }}</p>
              <div class="flex space-x-3">
                <a *ngIf="member.linkedin" [href]="member.linkedin" class="text-gray-400 hover:text-blue-600 transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
                  </svg>
                </a>
                <a *ngIf="member.twitter" [href]="member.twitter" class="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TeamComponent {
  teamMembers: TeamMember[] = [
    {
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years of experience in technology and business strategy. Passionate about building innovative solutions that drive real impact.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    },
    {
      name: 'Michael Chen',
      position: 'CTO',
      bio: 'Technical architect and full-stack developer with expertise in cloud infrastructure, AI/ML, and scalable system design. Leads our engineering excellence.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Head of Design',
      bio: 'Creative director specializing in user experience and brand design. Transforms complex ideas into intuitive, beautiful interfaces that users love.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    },
    {
      name: 'David Kim',
      position: 'VP of Sales',
      bio: 'Results-driven sales leader with a track record of building lasting client relationships and driving revenue growth across diverse markets.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Lisa Thompson',
      position: 'Head of Marketing',
      bio: 'Strategic marketing professional with expertise in digital campaigns, brand positioning, and growth marketing. Amplifies our story and impact.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    },
    {
      name: 'James Wilson',
      position: 'Senior Developer',
      bio: 'Full-stack engineer passionate about clean code, performance optimization, and mentoring junior developers. Builds robust, scalable applications.',
      image: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://linkedin.com'
    }
  ];
}