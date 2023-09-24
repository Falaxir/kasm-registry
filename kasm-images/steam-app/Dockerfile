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
    wget gdebi-core libgl1-mesa-glx:i386 lsof && \
      echo "**** Install mesa requirements ****" \
        && apt-get install -y --no-install-recommends \
            libgl1-mesa-dri \
            libgl1-mesa-glx \
            libgles2-mesa \
            libglu1-mesa \
            mesa-utils \
            mesa-utils-extra \
            xdg-utils \
    && \
    echo "**** Install vulkan requirements ****" \
        && apt-get install -y --no-install-recommends \
            libvulkan1 \
            libvulkan1:i386 \
            mesa-vulkan-drivers \
            mesa-vulkan-drivers:i386 \
            vulkan-tools \
    && \
  echo "**** install steam ****" && \
  wget -O ~/steam.deb http://media.steampowered.com/client/installer/steam.deb && \
  gdebi --n ~/steam.deb && \
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