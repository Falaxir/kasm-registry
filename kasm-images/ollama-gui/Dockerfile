FROM ghcr.io/linuxserver/baseimage-kasmvnc:debianbullseye
# build is long, take a coffee :)
# it took 6m on a 9750h 6c cpu (WSL)

# Change this variable to your prefered ollama api url
ENV OLLAMA_HOST_ENDPOINT_URL http://127.0.0.1:11435

# Install build requirements
RUN apt update -y && apt install nodejs curl jq findutils libwebkit2gtk-4.0-dev \
    build-essential \
    curl \
    wget \
    file \
    libssl-dev \
    libgtk-3-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev -y --fix-missing
RUN curl https://sh.rustup.rs -sSf | bash -s -- -y
RUN curl -fsSL https://get.pnpm.io/install.sh | bash -s -- -y

# Get Ollama-Gui latest RELEASE
RUN curl -s https://api.github.com/repos/ollama-interface/Ollama-Gui/releases/latest | jq -r '.tag_name' | xargs -I {} curl -LJ --output "ollama-gui.tar.gz"  https://github.com/ollama-interface/Ollama-Gui/archive/refs/tags/{}.tar.gz
RUN tar -xvf ollama-gui.tar.gz
RUN curl -s https://api.github.com/repos/ollama-interface/Ollama-Gui/releases/latest | jq -r '.tag_name' | xargs -I {} mv Ollama-Gui-{} Ollama-Gui

RUN sed -i 's@http://127.0.0.1:11435@'"$OLLAMA_HOST_ENDPOINT_URL"'@g' Ollama-Gui/src/core/core.ts

# Compiling to a linux pkg
RUN . $HOME/.bashrc && cd Ollama-Gui/ && pnpm i
RUN . $HOME/.bashrc && cd Ollama-Gui/ && pnpm build
RUN . $HOME/.bashrc && . $HOME/.cargo/env && cd Ollama-Gui/ && npm run tauri build
RUN dpkg -i Ollama-Gui/src-tauri/target/release/bundle/deb/ollama-chat_0.1.0_amd64.deb

#Cleanup
RUN apt purge build-essential jq libssl-dev libgtk-3-dev libayatana-appindicator3-dev libwebkit2gtk-4.0-dev librsvg2-dev -y
RUN apt autoremove -y
RUN rm -rf Ollama-Gui/ /tmp/* ollama-gui.tar.gz

COPY /root /

EXPOSE 3000

VOLUME /config
