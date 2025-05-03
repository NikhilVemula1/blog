#!/bin/bash

# Create the main source directory
mkdir -p src

# Create the components directory and files
mkdir -p src/components
touch src/components/Header.astro
touch src/components/Footer.astro
touch src/components/Sidebar.astro
touch src/components/BlogCard.astro

# Create the layouts directory and files
mkdir -p src/layouts
touch src/layouts/MainLayout.astro

# Create the pages directory and files
mkdir -p src/pages
touch src/pages/index.astro
mkdir -p src/pages/blog
touch src/pages/blog/[slug].astro
touch src/pages/blog/index.astro

# Create the content directory and files
mkdir -p src/content
mkdir -p src/content/blog
touch src/content/blog/post1.md
touch src/content/blog/post2.md

# Create the styles directory and files
mkdir -p src/styles
touch src/styles/global.css

echo "Astro project structure has been created."
echo "You can find the files and folders in the 'src' directory."
