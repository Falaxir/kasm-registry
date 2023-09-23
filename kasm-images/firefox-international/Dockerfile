# Base from linuxserver.io images
FROM ghcr.io/linuxserver/firefox:latest

# set version label
ARG BUILD_DATE
ARG VERSION
LABEL build_version="version:- ${VERSION} Build-date:- ${BUILD_DATE}"
LABEL maintainer="falaxir"

# title
ENV TITLE=Firefox
ENV DOCKER_MODS=linuxserver/mods:universal-internationalization

RUN \
  echo "**** install packages ****" && \
  echo "**** no package to install ****" && \
  echo "**** cleanup ****" && \
  rm -rf \
    /tmp/*

# ports and volumes
EXPOSE 3000

VOLUME /config