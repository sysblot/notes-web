SHELL := /bin/bash

install: 
	npm install

start: 
	npm start

test: 
	npm test

all:
	make install

build:
	npm run build