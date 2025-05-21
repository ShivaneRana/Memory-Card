# Memory-Card

**Memory-Card** is a game for testing memory by clicking on unique Pokémon cards without repeating any selection. If you click the same card twice, the game resets.

![Pc Preview](/src/assets/images/pc.png)
![Mobile Preview](/src/assets/images/mobile.png)

## Features

- **Multi-Resume Management**: Switch between multiple resume slots with ease.
- **Live Editing Interface**:
  - **Personal Details**: Full name, GitHub, LinkedIn, email, phone number, address, personal website.
  - **About Me**: A concise personal bio.
  - **Education**: Academic background.
  - **Additional**: Unique talents, certifications, or other highlights.
  - **Skills**: Categorized into technical, frontend, and backend.
  - **Work Experience**: Job roles, accomplishments, and timelines.
  - **Projects**: Showcase major projects with descriptions and links.
- **Real-Time Preview**: View your resume update instantly as you edit.
- **LocalStorage Support**: Your changes persist between sessions and page reloads.
- **Templates & Management Options**:
  - Add a **clean template**.
  - Load an **example template**.
  - **Duplicate** an existing resume.
  - **Clear** current content.
  - **Delete** active resume slot.
- **Flexible Editor**:
  - Hide or reveal individual sections.
  - Collapse or expand sections for convenience.

## Tech Stack

- **React**
- **ModularCSS**
- **Javascript**
- **HTML**

## 

## Installation

Follow these steps to get **Resume Canvas** running locally on your machine:

### 1. Clone the Repository

```bash
git clone https://github.com/ShivaneRana/Resume-Canvas.git
cd Resume-Canvas
```

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev 
```

This will launch the app in your browser at [http://localhost:5173](http://localhost:5173).

### 4. Build for Production

To create an optimized production build:

```bash
npm run build
```

This will generate static files in the `dist/` directory.
