FROM node:carbon

#RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

COPY package*.json ./

#COPY . /usr/src/app/
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]


#RUN ["npm", "install"]
#ENTRYPOINT ["npm", "start"]

