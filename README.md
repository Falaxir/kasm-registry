<h1 align="center">
  <br>
  <img width="150" src="https://user-images.githubusercontent.com/5698566/230345149-ef757e51-6eb9-479d-94f5-a13e4ad33b03.png">
  <br>
  Kasm Workspaces Registry
  <br>
</h1>

<p align="center">This repository is my personal kasm images that i use in my kasm environement</p>

⚠️ Some images may be work in progress, errors might happen or image may not be stable!

# Images

## Firefox international

Just a firefox but with asian locales in it

From: https://github.com/linuxserver/docker-firefox

## Ollama GUI

Add a GUI to the ollama ai api, good for self hosting ai.

If it doesn't display the gui (back screen), just right click ans select ollama-gui to display it

You will need persistant storage to save your settings, i might need to fork the original repository to do some modifications (allow export/import text based instead of file based)

Build process is very long, because it build the entire application (using tauri ) And also opening the image on kasm is long...

I recommand setting up ollama [as a system startup service](https://github.com/jmorganca/ollama/blob/main/docs/linux.md#adding-ollama-as-a-startup-service-optional), you will need to add `Environment="OLLAMA_ORIGINS=*"` & `Environment="OLLAMA_HOST=0.0.0.0:11435"` on your system startup file in order for this workspace to work.

TODO: Reduce the size of the image 😶

From: https://github.com/ollama-interface/Ollama-Gui

## Steam

Wanted to have steam for playing games, but i doesn't work well.

So instead i am using my proxmox server to have a windows vm and connect to it through kasm with rdp

i will not update this image anymore but its staying there for people who want to play with it.

From: https://github.com/linuxserver/docker-webtop
