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

You will need to edit the image if you want your custom endpoint api url, you can do that (directly on kasm)[https://kasmweb.com/docs/latest/guide/sessions.html]()

Build process is very long, because it build the entire application (using tauri )

TODO: Reduce the size of the image 😶

From: https://github.com/ollama-interface/Ollama-Gui

## Steam

Wanted to have steam for playing games, but i doesn't work well.

So instead i am using my proxmox server to have a windows vm and connect to it through kasm with rdp

i will not update this image anymore but its staying there for people who want to play with it.

From: https://github.com/linuxserver/docker-webtop
