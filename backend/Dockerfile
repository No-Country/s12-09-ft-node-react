# Usamos la imagen oficial de Node.js
FROM node:16-alpine

# Establecemos el directorio de trabajo en /app
WORKDIR /app

# Copiamos package.json y package-lock.json al directorio de trabajo
COPY package.json package-lock.json ./

# Instalamos las dependencias del proyecto
RUN npm install

# Copiamos el resto de los archivos del proyecto al directorio de trabajo
COPY . .

# Compilamos el proyecto
RUN npm run build

# Ejecutamos la aplicación
CMD ["node", "dist/index.js"]
