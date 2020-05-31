#!/usr/bin/env bash
# package up each template into a tar file and put it in the dist folder.
tar --exclude='./dist' --exclude='./node_modules' -czvf dist/vuejs-starter.tar.gz ./vuejs-starter/*
