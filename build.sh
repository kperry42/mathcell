#!/bin/sh

cat src/*.js src/march/*.js src/plot/*.js src/render/{[0-s]*,threejs-template,threejs,[u-z]*}.js src/package/*.js > build/mathcell.js
