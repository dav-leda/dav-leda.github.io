


**Deploy de Proyecto MEVN en VPS:**


**1. Ingresar al Droplet de DO:**

ssh usuario@ip



**2. Clonar repositorio:**

cd /var/www/html/prueba-mevn

git clone https://github.com/dav-leda/proyecto-mevn.git



**3. Configurar variables de entorno del cliente:**

cd /var/www/html/proyecto-mevn/client

ls -a (chequear si existe el archivo .env.example)

cp .env.example .env (copiar a .env)

vim .env

i (insertar texto en VIM)

VUE\_APP\_API\_URL=https://proyecto-mevn.com.ar (NO http://localhost:puerto como sería en DEV)

esc (para salir de insert) :wq (para guardar y salir de VIM)

cat .env (para chequear que está todo bien)



**4. Build de Vue:**

cd /var/www/html/proyecto-mevn/client

npm install (instala los módulos de vue-cli y los demás módulos del proyecto)

npm run build (crea el directorio "dist" con el archivo index.html)



**5. Crear archivo de configuración de NGINX:**

cd /etc/nginx/sites-available

touch proyecto-mevn

vim proyecto-mevn

i (para insertar texto en VIM)



**6. Insertar configuración en el archivo:**

server {

`        `listen 80;

`		`listen [::]:80; server\_name proyecto-mevn.com.ar www.proyecto-mevn.com.ar;

`		`root /var/www/html/proyecto-mevn/client/dist; 

`		`index index.html;

`        `location / {

`                 `try\_files $uri $uri/ =404;

`		`}

`	`location /api { 

`		`proxy\_pass http://localhost:8081; 

`		`proxy\_http\_version 1.1; 

`		`proxy\_set\_header Upgrade $http\_upgrade; 

`		`proxy\_set\_header Connection 'upgrade'; 

`		`proxy\_set\_header Host $host; 

`		`proxy\_cache\_bypass $http\_upgrade;

`	`}

}



esc (para salir de INSERT)

:wq (para guardar y salir de VIM)



**7. Habilitar sitio:**

ln -s /etc/nginx/sites-available/proyecto-mevn /etc/nginx/sites-enabled/

sudo systemctl restart nginx.service


**8. Configurar variables de entorno del BackEnd:**

cd /var/www/html/proyecto-mevn/backend

ls -a (chequear si existe el archivo .env.example)

cp .env.example .env (copiar a .env)

vim .env

i (insertar texto)

MONGO\_URI\_CLUSTER=mongodb+srv://user:password@url-cluster.mongodb.net/proyecto-mevn?authSource=admin

MONGO\_URI\_VPS=mongodb://ip-del-droplet:27017/proyecto-mevn

MONGO\_POOL\_SIZE=5

PORT=8081

esc :wq

cat .env (para chequear que está todo bien)



**9. Activar BackEnd:**

cd /var/www/html/proyecto-mevn/backend

npm install

pm2 start index.js --name api-mevn



**10. Instalar Certificado SSL**

cd /etc/nginx/sites-available 

grep -rl proyecto-mevn.com.ar

certbot --nginx -d proyecto-mevn.com.ar -d www.proyecto-mevn.com.ar

systemctl restart nginx





