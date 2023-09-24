# Base from linuxserver.io images
FROM ghcr.io/linuxserver/baseimage-kasmvnc:ubuntujammy

# set version label
ARG BUILD_DATE
ARG VERSION
LABEL build_version="version:- ${VERSION} Build-date:- ${BUILD_DATE}"
LABEL maintainer="falaxir"

ENV TITLE=Steam

ARG DEBIAN_FRONTEND="noninteractive"

RUN \
  echo "**** install packages ****" && \
  apt-get update && \
  dpkg --add-architecture i386 && \
  apt update && \
  apt-get install --no-install-recommends -y \
    wget gdebi-core libgl1-mesa-glx:i386 && \
  wget -O ~/steam.deb http://media.steampowered.com/client/installer/steam.deb && \
  gdebi ~/steam.deb && \
  sed -i 's|</applications>|  <application title="*Steam" type="normal">\n    <maximized>yes</maximized>\n  </application>\n</applications>|' /etc/xdg/openbox/rc.xml && \
  echo "**** cleanup ****" && \
  apt-get autoclean && \
  rm -rf \
    /var/lib/apt/lists/* \
    /var/tmp/* \
    /tmp/*

# ports and volumes
EXPOSE 3000

VOLUME /config