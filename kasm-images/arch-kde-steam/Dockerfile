# Base from linuxserver.io images
FROM ghcr.io/linuxserver/webtop:arch-kde

# set version label
ARG BUILD_DATE
ARG VERSION
LABEL build_version="version:- ${VERSION} Build-date:- ${BUILD_DATE}"
LABEL maintainer="falaxir"

RUN \
  echo "**** install flatpack ****" && \
  pacman -Sy --noconfirm --needed \
    xdg-desktop-portal-kde flatpak && \
  echo "**** installing steam ****" && \
  flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo && \
  flatpak install flathub com.valvesoftware.Steam -y && \
  flatpak update -y && \
  echo "**** cleanup ****" && \
  rm -rf \
    /config/.cache \
    /tmp/* \
    /var/cache/pacman/pkg/* \
    /var/lib/pacman/sync/*

ENV XDG_DATA_DIRS=/var/lib/flatpak/exports/share

# ports and volumes
EXPOSE 3000

VOLUME /config