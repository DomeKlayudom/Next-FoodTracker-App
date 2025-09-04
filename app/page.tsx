// pages/index.tsx

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import banner from './images/banner.png';



const Home = () => {
  return (
    <>
      {/* Main container with a vibrant background. */}
      {/* Tailwind CSS:
        - h-screen: sets height to 100% of the viewport height.
        - flex: enables Flexbox for alignment.
        - flex-col: stacks items vertically.
        - items-center: centers items horizontally.
        - justify-center: centers items vertically.
        - bg-gradient-to-r: creates a gradient background from left to right.
        - from-purple-400 to-pink-600: defines the start and end colors of the gradient.
        - text-white: sets the text color to white.
        - p-4: adds padding on all sides.
      */}
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-pink-600 text-white p-4">

        {/* Main title "Welcome to Food Tracker"
          - font-extrabold: sets the font weight to extra-bold.
          - text-4xl sm:text-5xl md:text-6xl: makes the font size responsive, increasing on larger screens.
          - mb-4: adds margin at the bottom.
        */}
        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl mb-4 text-center">
          Welcome to Food Tracker
        </h1>

        {/* Subtitle "Track your meal!!!"
          - text-xl sm:text-2xl md:text-3xl: sets the font size responsively.
          - font-light: uses a light font weight.
          - mb-8: adds more margin at the bottom for spacing.
        */}
        <p className="text-xl sm:text-2xl md:text-3xl font-light mb-8 text-center">
          Track your meal!!!
        </p>

        {/* Image of a food tracker.
          - Using next/image for optimized images.
          - src: points to the image file.
          - alt: provides alternative text for accessibility.
          - width and height are required for next/image.
          - className: adds a shadow and rounds the corners.
        */}
        <div className="mb-12">
          <Image
            src= {banner}
            alt="Food Tracker logo"
            width={400}
            height={400}
            className="rounded-full shadow-2xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Container for the buttons.
          - flex: enables Flexbox.
          - space-x-4: adds horizontal space between child elements.
          - flex-col sm:flex-row: stacks buttons vertically on mobile and horizontally on larger screens.
          - space-y-4 sm:space-y-0: adds vertical space on mobile and removes it on larger screens.
        */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Register Button */}
          {/* - Link from next/link for client-side navigation.
            - href: specifies the destination path.
            - Button styling:
              - bg-white text-purple-600: sets background to white and text to purple.
              - font-semibold: makes the text semi-bold.
              - py-3 px-6: adds padding.
              - rounded-full: creates a fully rounded button.
              - shadow-lg: adds a large shadow.
              - transition-all duration-300: enables smooth transitions.
              - hover:bg-purple-100: changes background color on hover.
              - focus:outline-none focus:ring-4 focus:ring-purple-300: adds focus ring for accessibility.
          */}
          <Link href="/register">
            <button
              className="w-full sm:w-auto bg-white text-purple-600 font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:bg-purple-100 focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Register
            </button>
          </Link>

          {/* Login Button */}
          <Link href="/login">
            <button
              className="w-full sm:w-auto bg-white text-pink-600 font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:bg-pink-100 focus:outline-none focus:ring-4 focus:ring-pink-300"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;