# Clusterer — super simple way to cluster your node app.

[![NPM](https://nodei.co/npm/clusterer.png)](https://nodei.co/npm/clusterer/)

## Easy setup

Add Clusterer as a dependency in your package.json

```
npm install clusterer --save
```

Then, add the following to your package.json in the scripts section
```javascript
"start": "node node_modules/clusterer"
```

Example in package.json
```javascript
  "scripts": {
    "start": "node node_modules/clusterer"
  }
```

## Running your app in cluster
Now you can run the app just by running ```npm start```
