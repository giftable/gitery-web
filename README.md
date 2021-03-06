# gitery-web
Gitery web app

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```
## Deploy

### Prerequisites
1. An account of Linux machine with sudo privileges
2. Authorited SSH access to the remote machine
3. Docker installed on remote machine
4. Docker Compose installed on remote machine

### On the local machine
1. Remove the `.sample` extension of `*.sample` files (folders) in root and `/deployment` directory, setup with your own configuration.
2. run `sh build.sh` to make a production build and upload `/deployment` and `/dist` to remote server via ssh connection.

### Use SSH to get a bash shell of remote machine
1. `cd ~/gitery`
2. run `sh deploy.sh` to start the service on a Nginx server
