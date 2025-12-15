# Build the image
docker build -t yakiwood-storefront:latest .

# Stop and remove existing container if it exists
docker stop yakiwood-storefront-3001 2>$null
docker rm yakiwood-storefront-3001 2>$null

# Run the container
docker run -d `
  --name yakiwood-storefront-3001 `
  -p 3001:3001 `
  -e PORT=3001 `
  -e NODE_ENV=production `
  --restart unless-stopped `
  yakiwood-storefront:latest

Write-Host "Container started! Access at http://localhost:3001"
docker logs yakiwood-storefront-3001
