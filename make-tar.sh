#!/bin/sh
tar --exclude node_modules \
    --exclude dist \
    --exclude coverage \
    --exclude .DS_Store \
    --exclude make-tar.sh \
    --exclude gulp-es6-module-template.tar \
    -cvf gulp-es6-module-template.tar .
