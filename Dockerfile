# ใช้ official Node.js image
FROM node:16

# ตั้ง working directory เป็น /app
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json เข้ามา
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกไฟล์ทั้งหมดในโปรเจกต์เข้า container
COPY . .

# สร้างโปรเจกต์ Vue.js
RUN npm run build

# สั่งให้โปรเจกต์ใช้ web server เช่น nginx สำหรับ serve dist/
FROM nginx:alpine

# คัดลอกไฟล์ dist จาก build ในขั้นตอนก่อนหน้าไปยัง nginx
COPY --from=0 /app/dist /usr/share/nginx/html

# เปิด port 80 สำหรับการเข้าถึง
EXPOSE 80

# รัน nginx server
CMD ["nginx", "-g", "daemon off;"]

