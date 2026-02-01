# Usman Ahmed Qureshi - Portfolio Website

A modern, responsive portfolio website built with Next.js 14+, Tailwind CSS, and featuring a functional contact form with email backend.

## Features

- **Modern Dark Theme**: Sleek design with teal accents
- **Responsive Design**: Mobile-first approach, works on all devices
- **Smooth Animations**: Framer Motion for reveal animations
- **Contact Form**: Functional backend with Nodemailer for email delivery
- **Fast Performance**: Optimized with Next.js App Router

## Tech Stack

- **Frontend**: Next.js 14+ (App Router), React, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Next.js API Routes, Nodemailer

## Getting Started

1. **Clone the repository** (if applicable) or navigate to the project directory.

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

## Email Backend Setup

The contact form uses Gmail SMTP for sending emails. To set it up:

### 1. Generate Google App Password

1. Go to your Google Account settings: [https://myaccount.google.com](https://myaccount.google.com)
2. Navigate to **Security** > **2-Step Verification**
3. Scroll down to **App passwords**
4. Select **Mail** and **Other (custom name)**
5. Enter a name like "Portfolio Contact Form"
6. Click **Generate**
7. Copy the 16-character password (this is your `EMAIL_PASS`)

**Important**: Use an App Password, NOT your regular Gmail password.

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```env
EMAIL_USER=usmanahmedq30@gmail.com
EMAIL_PASS=your_16_character_app_password_here
```

### 3. Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. In Vercel Dashboard, go to your project settings
4. Navigate to **Environment Variables**
5. Add the following variables:
   - **Name**: `EMAIL_USER` | **Value**: `usmanahmedq30@gmail.com`
   - **Name**: `EMAIL_PASS` | **Value**: `[Your 16-character App Password]`
6. Redeploy your application

## Project Structure

```
portfolio-app/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── globals.css               # Global styles and Tailwind config
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── public/                       # Static assets
└── README.md
```

## Customization

- **Profile Image**: Replace `/public/profile.jpg` with your actual profile image
- **Projects**: Update the `projects` array in `components/Projects.tsx`
- **Contact Info**: Modify contact details in `components/Hero.tsx` and `components/Contact.tsx`
- **Colors**: Adjust theme colors in `app/globals.css`

## Deployment

Deploy to Vercel for optimal performance:

1. Push code to GitHub
2. Connect to Vercel
3. Add environment variables as described above
4. Deploy!

## License

This project is open source and available under the [MIT License](LICENSE).
