# GenzTech - Modern Landing Page

A high-conversion landing page for GenzTech, a modern software solutions company. Built with React, Tailwind CSS, and designed for exceptional user experience.

## Features

✨ **Modern Design**
- Gradient backgrounds with subtle animations
- Responsive layout for all devices
- Smooth scroll animations and transitions
- Dark theme with accent colors (secondary: #E11D48, accent: #06B6D4)

📱 **Sections**
- Hero section with compelling headline and CTA
- Services showcase (Custom Software, Web Apps, Automation, AI)
- How It Works step-by-step guide
- Interactive requirement form for quotations
- Testimonials from satisfied clients
- Final CTA section
- Comprehensive footer with links and contact info

🎯 **High Conversion Focus**
- Clear call-to-action buttons throughout
- Modal form with validation
- Trust indicators and social proof
- Smooth user experience with animations

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx           # Hero section with main CTA
│   ├── Services.jsx       # Services showcase
│   ├── HowItWorks.jsx     # Process explanation
│   ├── RequirementForm.jsx # Form modal for quotations
│   ├── Testimonials.jsx   # Client testimonials
│   ├── FinalCTA.jsx       # Final call-to-action
│   ├── Footer.jsx         # Footer with links
│   └── index.js           # Component exports
├── App.jsx                # Main app component
├── App.css                # App styles and animations
├── index.jsx              # React entry point
├── index.css              # Global styles
public/
├── index.html             # HTML template
```

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd GenzTech
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` folder.

## Technologies Used

- **React 18** - UI library
- **Tailwind CSS 3** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **PostCSS** - CSS processing
- **React Scripts** - Build tools and development server

## Design System

### Colors
- **Primary:** `#0F172A` (Dark slate)
- **Secondary:** `#E11D48` (Red/Pink)
- **Accent:** `#06B6D4` (Cyan)
- **Slate variants:** Various opacity levels for hierarchy

### Typography
- **Headings:** Bold fonts ranging from 2xl to 7xl
- **Body:** Clear readable sans-serif at 16px base
- **Small text:** 14px for secondary information

### Animations
- `fadeIn` - Opacity transition (0.6s)
- `slideUp` - Vertical slide with fade (0.6s)
- `slideDown` - Reverse slide (0.4s)
- `pulse` - Continuous breathing effect
- `glow` - Box shadow pulse

## Form Fields

The requirement form includes:
- **Personal Info:** Name, Email, Phone
- **Business Info:** Company name
- **Project Details:** Type, Budget, Timeline, Description
- **Validation:** Real-time error checking with visual feedback
- **Success State:** Confirmation message after submission

## Customization

### Update Company Info
Edit `src/components/Footer.jsx` to update:
- Contact email
- Phone number
- Physical address
- Social media links

### Modify Services
Edit the `services` array in `src/components/Services.jsx`

### Change Testimonials
Update the `testimonials` array in `src/components/Testimonials.jsx`

### Adjust Colors
Edit the theme colors in `tailwind.config.js`:
```javascript
colors: {
  primary: "#0F172A",
  secondary: "#E11D48",
  accent: "#06B6D4",
}
```

## File Size and Performance

- Minimal dependencies (only React and Lucide icons)
- Optimized Tailwind CSS with purge
- Smooth 60fps animations
- Responsive images and lazy loading ready

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Support

For issues or questions, please contact: hello@genztech.com