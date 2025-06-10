# Skip Selection Page Redesign - Coding Challenge

A complete redesign of the "Choose Your Skip Size" page for We Want Waste, transforming the original dark interface into a modern, responsive, and user-friendly experience.

## 🎯 Challenge Overview

**Original Page**: Dark-themed skip selection interface from wewantwaste.co.uk
**Goal**: Complete redesign with improved UI/UX while maintaining all functionality
**Requirements**: 
- Clean, maintainable React code
- Responsive design (mobile + desktop)
- API integration with provided endpoint
- Modern UI/UX improvements

## 📋 Assignment Requirements Met

### ✅ Complete Redesign
- **Before**: Dark theme with cramped layout
- **After**: Light, modern design with clean card-based interface
- **Transformation**: Complete visual overhaul while preserving all functionality

### ✅ Clean, Maintainable React Code
- **Component Architecture**: Modular, reusable components
- **TypeScript**: Full type safety throughout
- **CSS Modules**: Scoped styling with clear separation of concerns
- **State Management**: Clean React hooks implementation
- **Code Organization**: Logical file structure and naming conventions

### ✅ Responsive Design
- **Mobile-First**: Optimized for mobile web browsers
- **Adaptive Layout**: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
- **Touch-Friendly**: Large tap targets and thumb-friendly navigation
- **Flexible Grid**: CSS Grid with responsive breakpoints

### ✅ UI/UX Improvements
- **Visual Hierarchy**: Clear information architecture
- **Interactive Feedback**: Hover states, selection indicators, smooth transitions
- **Progress Indicator**: Step-by-step progress visualization
- **Enhanced Readability**: Better typography and spacing
- **Accessibility**: Proper contrast ratios and semantic HTML

### ✅ API Integration
- **Endpoint**: `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`

## 🎨 Design Approach

### Design Philosophy
- **User-Centric**: Prioritized ease of use and clear decision-making
- **Modern Aesthetic**: Clean, professional appearance
- **Information Clarity**: Better presentation of pricing and details
- **Mobile-First**: Designed primarily for mobile users

### Key Design Decisions

1. **Color Palette**
   - Primary Blue (#3b82f6) for actions and selection
   - Success Green (#10b981) for completed states
   - Neutral grays for text hierarchy
   - Gradient background for visual interest

2. **Layout Strategy**
   - Card-based design for better content organization
   - Responsive grid system
   - Clear visual separation between sections
   - Consistent spacing and alignment

3. **Typography**
   - Clear hierarchy with appropriate font sizes
   - Readable body text with proper contrast
   - Emphasized pricing with larger, bold typography

4. **Interactive Elements**
   - Immediate visual feedback on selection
   - Smooth hover animations
   - Clear call-to-action buttons
   - Progress indication

## 🛠 Technical Implementation

### Technology Stack
- **React 18**: Modern React with hooks
- **TypeScript**: Type safety and better DX
- **Vite**: Fast development and build tool
- **CSS Modules**: Scoped component styling
- **Lucide React**: Consistent icon system

### Component Architecture
\`\`\`
App.tsx (Main Component)
├── Progress Steps (Inline)
├── Skip Grid
│   └── Card Components (Skip options)
├── Selected Skip Summary
└── Navigation Controls
\`\`\`

### Responsive Strategy
- **Mobile (< 768px)**: Single column, simplified UI
- **Tablet (768px - 1024px)**: Two-column grid
- **Desktop (> 1024px)**: Three-column grid with enhanced interactions

### Performance Considerations
- **Lightweight**: No CSS framework dependencies
- **Optimized Bundle**: Only essential dependencies
- **Fast Loading**: Vite's optimized build process
- **Efficient Rendering**: Minimal re-renders with proper state management

## 🚀 Setup Instructions

### Prerequisites
- Node.js (version 16+)
- npm or yarn

### Installation
\`\`\`bash
# Clone the repository
git clone https://github.com/lahbibsemlali/rem-waste-management-assignment.git
cd skip-selection-app

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
\`\`\`

## 📱 Mobile Optimization

### Mobile-Specific Features
- **Single Column Layout**: Prevents overcrowding
- **Large Touch Targets**: Minimum 44px for accessibility
- **Simplified Navigation**: Bottom-aligned action buttons
- **Readable Text**: Appropriate font sizes for mobile screens
- **Thumb-Friendly**: Easy one-handed operation

### Cross-Browser Testing
- ✅ Chrome Mobile
- ✅ Safari iOS
- ✅ Firefox Mobile
- ✅ Samsung Internet

## 🎯 Key Improvements Over Original

| Aspect | Original | Redesigned |
|--------|----------|------------|
| **Theme** | Dark, cramped | Light, spacious |
| **Layout** | Grid with poor spacing | Card-based with proper hierarchy |
| **Mobile UX** | Poor mobile experience | Mobile-first design |
| **Visual Feedback** | Minimal selection indication | Clear selection states |
| **Information Architecture** | Cluttered presentation | Clean, organized content |
| **Accessibility** | Limited contrast | Proper contrast ratios |
| **Performance** | Heavy framework | Lightweight, fast loading |

## 🔄 Future Enhancements

- **Animations**: Enhanced micro-interactions
- **Accessibility**: Screen reader optimization
- **PWA Features**: Offline capability
- **Advanced Filtering**: Size and price filters
- **Comparison Tool**: Side-by-side skip comparison


This redesign successfully transforms the original interface into a modern, user-friendly experience that works beautifully across all devices while maintaining complete functionality.
