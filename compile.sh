tsc src/application.ts --target ES5 --module amd
cd src
node ../r.js -o name=main_web out=../app/js/application.js baseUrl=.