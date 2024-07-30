# Dockerfile for Nginx

# Use the official Nginx image from the Docker Hub
FROM nginx:alpine

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the build files from Next.js
COPY --from=nextjs-build /app/.next /usr/share/nginx/html

# Expose the port Nginx runs on
EXPOSE 80
