# 🎮 Game Streaming Dashboard

> Modern esports streaming platform with real-time statistics, player profiles, and dynamic content management

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass)

## ✨ Features

### 🎯 Core Functionality
- **🔴 Live Stream Cards** - Real-time streaming content with dynamic backgrounds
- **📊 Player Statistics** - Interactive charts and performance metrics
- **👥 Friend Lists** - Social features with avatar management
- **🎨 Dynamic Backgrounds** - Customizable images for streams and statistics
- **💎 Chest of the Day** - Daily rewards section
- **📈 Progress Tracking** - Recent activity and streak monitoring

### 🎨 Design Features
- **Glassmorphism UI** - Modern frosted glass effects
- **Responsive Layout** - Mobile, tablet, and desktop optimized
- **Dark Theme** - Eye-friendly gaming aesthetic
- **Smooth Animations** - Hover effects and transitions
- **CSS Modules** - Scoped styling architecture

## 🖼️ Screenshots

### Dashboard Overview
Main dashboard featuring hero section, live streams, and statistics.

### Components
- **Header**: Navigation and user profile
- **Left Sidebar**: Player profile, activity tracking, favorite channels
- **Main Content**: Hero banner, live streams, Fortnite statistics
- **Right Sidebar**: Metrics, friend updates, betting chart

## 🚀 Getting Started

### Prerequisites
```bash
Node.js 18+ 
npm or yarn
```

### Installation

1. **Clone the repository**
```bash
git clone git@github.com:TamarCoder/Game-streaming-dashboard-.git
cd Game-streaming-dashboard-
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 📁 Project Structure

```
├── public/
│   ├── avatars/          # User avatar images (1.png - 42.png)
│   ├── castleCover.jpg   # Hero banner background
│   ├── fortnite.jpg      # Fortnite statistics card
│   ├── valorante.jpg     # Valorant stream card
│   ├── champion.jpg      # Championship stream card
│   ├── GALAXYCUP.jpg     # Galaxy Cup stream card
│   └── StarChests.jpg    # Chest of the day image
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout with metadata
│   │   └── page.tsx      # Home page
│   ├── components/
│   │   ├── Header/       # Top navigation
│   │   ├── LeftSidebar/  # Profile & channels
│   │   ├── MainContent/  # Streams & statistics
│   │   └── RightSidebar/ # Metrics & friends
│   ├── styles/
│   │   ├── _variables.scss  # Design tokens
│   │   └── index.scss       # Global styles
│   └── types/
│       └── scss.d.ts     # TypeScript declarations
```

## 🎨 Customization

### Adding Custom Avatars
Place your avatar images in `/public/avatars/` directory and reference them:
```typescript
avatar: '/avatars/your-image.png'
```

### Changing Stream Backgrounds
Update background images in component state:
```typescript
setValorantBackground('/your-image.jpg')
setChampionshipBackground('/your-image.jpg')
setGalaxyBackground('/your-image.jpg')
```

### Updating Player Profile
Modify the William_Prince avatar in:
- `Header.tsx`
- `LeftSidebar.tsx`
- `MainContent.tsx` (Statistics section)

## 🛠️ Built With

| Technology | Purpose |
|------------|---------|
| ⚛️ **Next.js 16** | React framework with App Router |
| 📘 **TypeScript** | Type-safe development |
| 🎨 **SCSS Modules** | Modular styling with BEM |
| 🎯 **React 19** | UI component library |
| 🎪 **CSS Variables** | Centralized design tokens |

## 📊 Statistics Features

### Fortnite Card
- Dynamic background image
- Daily/Month/Year tabs
- Interactive wave chart
- 50/50 split layout

### Player Statistics
- Real-time score display
- Ranking information
- Performance trends

## 👥 Social Features

### Friend List
- Live status indicators
- Game information
- Quick access actions
- Dynamic avatars

### Favorite Channels
- Online status
- Viewer counts
- Quick access icons

## 🎯 Activity Tracking

- **Recent Progress** - 436/10,000 tracking
- **Streak Activity** - 15% completion
- **Game Icons** - Visual activity indicators
- **Action Buttons** - List and Aim More

## 🌈 Design System

### Colors
- Primary: `#6c7aff`
- Gradients: Purple to pink, blue variations
- Background: Dark navy with transparency layers

### Typography
- Base: 16px
- Weights: 400, 500, 600, 700

### Spacing
- Base unit: 8px
- Scale: xs(4px), sm(8px), md(12px), lg(16px), xl(24px), 2xl(32px)

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🔧 Configuration

### Next.js Config
```javascript
// next.config.js
const nextConfig = {
  sassOptions: {
    includePaths: ['./src/styles'],
  },
}
```

### TypeScript Config
Strict mode enabled with Next.js optimizations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Tamar**
- GitHub: [@TamarCoder](https://github.com/TamarCoder)

## 🙏 Acknowledgments

- Design inspiration from modern gaming platforms
- Icons: Emoji-based for cross-platform compatibility
- Gradient effects inspired by glassmorphism trends

## 📮 Contact

Project Link: [https://github.com/TamarCoder/Game-streaming-dashboard-](https://github.com/TamarCoder/Game-streaming-dashboard-)

---

<div align="center">
  
### ⭐ Star this repo if you find it helpful!

Made with 💜 by TamarCoder

</div>
