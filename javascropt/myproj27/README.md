NPM 의 paskage.json을 이용한 효율적 설치 방법

npm --version

sudo npm install npm -g

npm init

npm init -- yes

npm install <package_name>

npm install <package_name> --save


모듈 설치
npm install
npm update
npm uninstall <package_name>


글로벌 모듈의 설치와 연결
dependecy를 이용하여 필요한 모듈 설치

npm list -g --depth = 0

npm link <packagename>

sudo npm update -g <packagename>

NPM cache Clean
npm cache clean

