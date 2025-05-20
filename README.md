# Nashville Singles Conference 2025 - Landing Page

A simple, responsive landing page for the Nashville Singles Conference 2025 built with Next.js and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern UI with Tailwind CSS
- Registration link to Eventbrite
- Information about the conference, highlights, and accommodations
- Easy to deploy to Vercel or Netlify

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd nashville-conference
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/pages` - Next.js pages
- `/components` - Reusable React components
- `/public` - Static assets like images
- `/styles` - Global CSS and Tailwind configuration

## Deployment

### Deploying to Vercel (Recommended)

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com/), the platform from the creators of Next.js.

1. Push your code to a GitHub repository
2. Import your project into Vercel
3. Vercel will detect that you're using Next.js and will set up the build configuration for you

### Deploying to Netlify

You can also deploy to [Netlify](https://www.netlify.com/):

1. Push your code to a GitHub repository
2. Import your project into Netlify
3. Set the build command to `npm run build` and the publish directory to `out`

## Customization

- Update the Eventbrite registration link in `pages/index.tsx`
- Add your own images to the `/public/images` directory
- Modify the content in each section as needed

## License

This project is licensed under the MIT License.
