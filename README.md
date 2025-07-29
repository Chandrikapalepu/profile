# TechCorp - Corporate Website

A modern, responsive corporate website built with Angular 18 and Tailwind CSS. This project showcases a professional company website with team profiles, client testimonials, and contact functionality.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and hover effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Team Showcase**: Professional team member profiles with social links
- **Client Testimonials**: Featured client stories and testimonials
- **Contact Form**: Interactive contact form with validation
- **Smooth Navigation**: Sticky header with smooth scrolling to sections
- **Mobile-Friendly**: Responsive mobile menu and optimized mobile experience

## 🛠️ Tech Stack

- **Angular 18**: Modern Angular framework with standalone components
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Responsive Design**: Mobile-first approach
- **Modern Web Standards**: ES2022, semantic HTML

## 📁 Project Structure

```
src/
├── components/           # Angular standalone components
│   ├── header.component.ts     # Navigation header
│   ├── hero.component.ts       # Hero section
│   ├── team.component.ts       # Team showcase
│   ├── clients.component.ts    # Client testimonials
│   ├── contact.component.ts    # Contact form
│   └── footer.component.ts     # Footer section
├── main.ts              # Application bootstrap
├── index.html           # Main HTML template
└── global_styles.css    # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd techcorp-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

### Available Scripts

- `npm start` - Start the development server
- `npm run build` - Build the project for production
- `npm run ng` - Run Angular CLI commands

## 🎨 Customization

### Adding Team Members

Edit the `teamMembers` array in `src/components/team.component.ts`:

```typescript
{
  name: 'Your Name',
  position: 'Your Position',
  bio: 'Your bio description',
  image: 'https://your-image-url.com',
  linkedin: 'https://linkedin.com/in/yourprofile',
  twitter: 'https://twitter.com/yourhandle'
}
```

### Adding Clients

Edit the `featuredClients` array in `src/components/clients.component.ts`:

```typescript
{
  name: 'Client Name',
  logo: 'https://client-logo-url.com',
  description: 'Project description',
  industry: 'Industry Type',
  testimonial: 'Client testimonial',
  testimonialAuthor: 'Author Name, Title'
}
```

### Styling

The project uses Tailwind CSS for styling. You can:

- Modify colors and themes in the component templates
- Add custom CSS in `src/global_styles.css`
- Customize the Tailwind configuration if needed

## 📱 Responsive Design

The website is fully responsive with breakpoints for:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌟 Key Components

### Header Component
- Sticky navigation with smooth scrolling
- Mobile hamburger menu
- Responsive design

### Hero Component
- Eye-catching gradient background
- Call-to-action buttons
- Responsive typography

### Team Component
- Grid layout for team members
- Professional profile cards
- Social media links

### Clients Component
- Featured client testimonials
- Company statistics
- Client logos and descriptions

### Contact Component
- Interactive contact form
- Form validation
- Contact information display

## 🎯 Performance Features

- Lazy loading of images
- Optimized bundle size
- Smooth animations and transitions
- Mobile-optimized performance

## 🔧 Development

### Code Structure

- **Standalone Components**: Uses Angular 18's standalone components
- **TypeScript**: Fully typed for better development experience
- **Modular Design**: Each component is self-contained
- **Responsive First**: Mobile-first design approach

### Best Practices

- Component-based architecture
- TypeScript interfaces for type safety
- Responsive design patterns
- Accessibility considerations
- SEO-friendly structure

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please contact:
- Email: hello@techcorp.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ using Angular and Tailwind CSS