# Base from linuxserver.io images
FROM ghcr.io/linuxserver/firefox:latest

# set version label
ARG BUILD_DATE
ARG VERSION
LABEL build_version="version:- ${VERSION} Build-date:- ${BUILD_DATE}"
LABEL maintainer="falaxir"

# title
ENV TITLE=Firefox

RUN \
  echo "**** install font packages ****" && \
    apk add --no-cache \
    font-noto-all \
    font-noto-cjk \
    font-noto-emoji \
    font-ipa \
    font-isas-misc \
    lang && \
  echo "**** cleanup ****" && \
  rm -rf \
    /tmp/*

# ports and volumes
EXPOSE 3000

VOLUME /config