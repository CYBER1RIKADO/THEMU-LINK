# Nginx base image එක භාවිතා කරනවා
FROM nginx:alpine

# වෙබ් අඩවි ගොනු Nginx html folder එකට copy කරනවා
COPY . /usr/share/nginx/html

# Port 80 expose කරනවා
EXPOSE 80

# Nginx start කරනවා
CMD ["nginx", "-g", "daemon off;"]
