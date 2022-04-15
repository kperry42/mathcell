#!/bin/sh

cat src/*.js src/march/*.js src/plot/*.js src/render/{[0-s]*,threejs-template,threejs,[u-z]*}.js > build/mathcell.js
cat build/mathcell.js src/package/exports.js > build/mathcell-pkg.js

