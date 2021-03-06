#!/usr/bin/env bash
# package up each template into a tar file and put it in the dist folder.
tar --exclude='./dist' --exclude='./node_modules' -czvf dist/vuejs-starter.tar.gz ./vuejs-starter/*
tar --exclude='./dist' --exclude='./node_modules' -czvf dist/react-starter.tar.gz ./react-starter/*
tar --exclude='./dist' --exclude='./node_modules' -czvf dist/vuejs-antdesign-admin.tar.gz ./vuejs-antdesign-admin/*
