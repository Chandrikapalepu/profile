import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Client {
  name: string;
  logo: string;
  description: string;
  industry: string;
  testimonial?: string;
  testimonialAuthor?: string;
}

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="clients" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Clients</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to partner with industry leaders and innovative companies across various sectors. 
            Here are some of the amazing organizations we've had the privilege to work with.
          </p>
        </div>



        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div *ngFor="let client of featuredClients" class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div class="flex items-center mb-4">
              <img [src]="client.logo" [alt]="client.name" class="h-10 w-auto mr-4">
              <div>
                <h3 class="text-xl font-semibold text-gray-900">{{ client.name }}</h3>
                <p class="text-blue-600 text-sm">{{ client.industry }}</p>
              </div>
            </div>
            <p class="text-gray-600 mb-6">{{ client.description }}</p>
            <div *ngIf="client.testimonial" class="border-l-4 border-blue-600 pl-4">
              <p class="text-gray-700 italic mb-2">"{{ client.testimonial }}"</p>
              <p class="text-sm text-gray-500">— {{ client.testimonialAuthor }}</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div class="text-3xl font-bold text-blue-600 mb-2">150+</div>
              <div class="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div class="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div class="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div class="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ClientsComponent {
  clients: Client[] = [
    {
      name: 'TCS',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Global IT services and consulting',
      industry: 'Technology Services'
    },
    {
      name: 'Deloitte',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Professional services and consulting',
      industry: 'Consulting'
    }
  ];

  featuredClients: Client[] = [
    {
      name: 'TCS',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'We partnered with TCS to enhance their digital transformation capabilities and implement innovative solutions that improved their client delivery efficiency by 40%.',
      industry: 'Technology Services',
      testimonial: 'The collaboration was outstanding. Their technical expertise and innovative approach helped us accelerate our digital initiatives significantly.',
      testimonialAuthor: 'Rajesh Kumar, VP at TCS'
    },
    {
      name: 'Deloitte',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Developed comprehensive consulting solutions for Deloitte that streamlined their client engagement processes and enhanced their service delivery capabilities.',
      industry: 'Consulting',
      testimonial: 'Their strategic approach and technical excellence helped us optimize our consulting processes and deliver better value to our clients.',
      testimonialAuthor: 'Sarah Johnson, Partner at Deloitte'
    }
  ];
}