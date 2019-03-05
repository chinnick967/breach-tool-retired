FROM emeqcgames.azurecr.io/node-bionic:8.11.3

ENV APP_ROOT /opt/webapps/breach-cs-site
WORKDIR ${APP_ROOT}

ARG PACKAGE_SHA1=latest

COPY package.json ${APP_ROOT}/
RUN npm install

ADD . ${APP_ROOT}
RUN chmod +x ${APP_ROOT}/docker/entrypoint.sh

EXPOSE 8000

ENTRYPOINT ["/opt/webapps/breach-cs-site/docker/entrypoint.sh"]
CMD ["npm", "run", "start-docker"]