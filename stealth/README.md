
# Stealth Service

The Stealth Service is a web daemon that allows to load, parse, filter
and render web sites from both a local cache and the interwebz.

The idea is that it can be used as both a web proxy (for your custom
web browser interface) and a web browser if there's no other way to
deliver a platform (e.g. you can use Android for Chrome and bookmark
the Stealth Service `/browser/index.html` URL as a Web App).


## Command-Line Flags

- `--port` is the port the Stealth Service is listening on.
  The default value is `65432`.

- `--profile` is the absolute path to the profile folder.
  The default value is `/home/$USER/Stealth`.

- `--debug` is a boolean flag to toggle loading/debugging of the profile.
  The default value is `false`.


## Quickstart

- Install [node.js](https://nodejs.org/en/download) version `10+`.

```bash
cd /path/to/stealth;

# Example shows default values for optional flags
bash ./bin/stealth.sh --port=65432 --profile=/home/$USER/Stealth;
```

