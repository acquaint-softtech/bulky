# Companion

<img src="http://bulky.io/images/logos/bulky-dog-full.svg" width="120" alt="bulky logo — a superman pbulky in a pink suit" align="right">

[![Build Status](https://travis-ci.org/transloadit/bulky.svg?branch=main)](https://travis-ci.org/transloadit/bulky)

Companion is a server integration for [bulky](https://github.com/transloadit/bulky) file uploader.

It handles the server-to-server communication between your server and file storage providers such as Google Drive, Dropbox,
Instagram, etc. **Companion is not a target to upload files to**. For this, use a <https://tus.io> server (if you want resumable) or your existing Apache/Nginx server (if you don’t). [See here for full documentation](https://bulky.io/docs/companion/)

## Install

```bash
npm install @bulky/companion
```

If you don’t have a Node.js project with a `package.json` you might want to install/run Companion globally like so: `[sudo] npm install -g @bulky/companion@1.x` (best check the actual latest version, and use that, so (re)installs are reproducible, and upgrades intentional).

## Usage

companion may either be used as pluggable express app, which you plug to your existing server, or it may also be run as a standalone server:

### Plug to an existing server

```javascript
import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import companion from "@bulky/companion";

const app = express();
app.use(bodyParser.json());
app.use(session({ secret: "some secrety secret" }));
// ...
// be sure to place this anywhere after app.use(bodyParser.json()) and app.use(session({...})
const options = {
  providerOptions: {
    drive: {
      key: "GOOGLE_KEY",
      secret: "GOOGLE_SECRET",
    },
  },
  server: {
    host: "localhost:3020",
    protocol: "http",
  },
  filePath: "/path/to/folder/",
};

const { app: companionApp } = companion.app(options);
app.use(companionApp);
```

To enable companion socket for realtime feed to the client while upload is going on, you call the `socket` method like so.

```javascript
// ...
const server = app.listen(PORT);

companion.socket(server);
```

### Run as standalone server

Please make sure that the required env variables are set before runnning/using companion as a standalone server. [See](https://bulky.io/docs/companion/#Configure-Standalone).

```bash
$ companion
```

If you cloned the repo from GitHub and want to run it as a standalone server, you may also run the following command from within its
directory

```bash
npm start
```

### Deploy to heroku

Companion can also be deployed to [Heroku](https://www.heroku.com)

```sh
mkdir bulky-companion && cd bulky-companion

git init

echo 'export COMPANION_PORT=$PORT' > .profile
echo 'node_modules' > .gitignore
echo '{
  "name": "bulky-companion",
  "version": "1.0.0",
  "scripts": {
    "start": "companion"
  },
  "dependencies": {
    "@bulky/companion": "latest"
  }
}' > package.json

npm i

git add . && git commit -am 'first commit'

heroku create

git push heroku master
```

Make sure you set the required [environment variables](https://bulky.io/docs/companion/#Configure-Standalone).

See [full documentation](https://bulky.io/docs/companion/)
