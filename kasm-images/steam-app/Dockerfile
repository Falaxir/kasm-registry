# Base from linuxserver.io images
FROM ghcr.io/linuxserver/webtop:ubuntu-xfce

# set version label
ARG BUILD_DATE
ARG VERSION
LABEL build_version="version:- ${VERSION} Build-date:- ${BUILD_DATE}"
LABEL maintainer="falaxir"

ENV TITLE=Steam

ARG DEBIAN_FRONTEND="noninteractive"

# from docker-steam-headless
# Install mesa and vulkan requirements
# TODO: Strip this section back to only what is required for all GPU types.
#       Anything only required for Intel/AMD/NVIDIA should go in the container init.
RUN \
    echo "**** Update apt database ****" \
        && dpkg --add-architecture i386 \
        && apt-get update \
    && \
    echo "**** Install mesa requirements ****" \
        && apt-get install -y --no-install-recommends \
            libgl1-mesa-dri \
            libgl1-mesa-glx \
            libgles2-mesa \
            libglu1-mesa \
            mesa-utils \
            mesa-utils-extra \
    && \
    echo "**** Install vulkan requirements ****" \
        && apt-get install -y --no-install-recommends \
            libvulkan1 \
            libvulkan1:i386 \
            mesa-vulkan-drivers \
            mesa-vulkan-drivers:i386 \
            vulkan-tools \
    && \
    echo "**** Install desktop requirements ****" \
        && apt-get install -y --no-install-recommends \
            libdbus-1-3 \
            libegl1 \
            libgtk-3-0 \
            libgtk2.0-0 \
            libsdl2-2.0-0 \
    && \
    echo "**** Section cleanup ****" \
        && apt-get clean autoclean -y \
        && apt-get autoremove -y \
        && rm -rf \
            /var/lib/apt/lists/* \
            /var/tmp/* \
            /tmp/* \
    && \
    echo

# Install Steam
RUN \
    echo "**** Install requirements ****" \
        && apt-get update && apt-get install -y --no-install-recommends \
            wget \
            gdebi \
    && \
  echo "**** install steam ****" && \
  add-apt-repository multiverse && \
  apt update -y && \
  apt upgrade -y && \
  apt install steam -y && \
  sed -i 's|</applications>|  <application title="*Steam" type="normal">\n    <maximized>yes</maximized>\n  </application>\n</applications>|' /etc/xdg/openbox/rc.xml && \
  echo "**** cleanup ****" && \
        apt-get clean autoclean -y \
        && apt-get autoremove -y \
        && rm -rf \
            /var/lib/apt/lists/* \
            /var/tmp/* \
            /tmp/* \
    && \
    echo

ENV \
    NVIDIA_DRIVER_CAPABILITIES="all" \
    NVIDIA_VISIBLE_DEVICES="all"

# ports and volumes
EXPOSE 3000

VOLUME /config