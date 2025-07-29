import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="home" class="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Building the Future
            <span class="text-blue-600 block">Together</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're a team of passionate professionals dedicated to delivering exceptional results for our clients. 
            Our expertise spans across technology, innovation, and strategic partnerships.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#team" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Meet Our Team
            </a>
            <a href="#clients" class="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              View Our Clients
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}