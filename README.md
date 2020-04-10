# create-react-app-with-lerna
Sample application to verify if lerna works well with create-react-app projects in a monorepo.

## Getting started
1. Install required dependencies for development.
```javascript
yarn
```

2. Bootstrap all packages that are inside `/packages` directory. Note that this command will also install local dependencies by creating sym links among packages. This may take upto few mins.
```javascript
yarn bootstrap
```

3. Build the `web` package. Note that this command will build `common` package prior to building `web` package.
```javascript
yarn build-web
```

4. Now start the web server.
```javascript
yarn start-web
```

5. Goto [http://localhost:3000/](http://localhost:3000/) to verify page is rendered without any issues.
