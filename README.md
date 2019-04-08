# Store Apps - Scrapper
Recuperar dados de reviews das lojas de aplicativos. 
  - AppStore
  - Google Play
  
[![N|NodeJs](https://www.shareicon.net/data/256x256/2015/10/06/112727_development_512x512.png)](https://nodejs.org/)

# Bibliotecas
* [Google Play] - https://github.com/facundoolano/google-play-scraper
* [App Store] - https://github.com/facundoolano/app-store-scraper

# Instalação
```sh
$ npm install 
```

# Execução - Google Play
1. Procurar id e **nome** do **pacote**. No diretório do projeto executar:
```sh
$ node googleplay-search-app --term='Mundo Bita' --results=10
```
**Obs:** o parâmetro --term é obrigatório.
2. Copiar o resultado de appId
3. Executar o comando 
```sh
$ node googleplay --appId=[appId recuperado da consulta anterior]
```
4. O resultado da consulta de reviews do projeto serão gerados no diretório csv/googleplay.csv

# Execução - App Store
1. Recuperar o id na url da App Store e utilizar como parâmetro
```sh
$ node appstore --id=553834731
```
2. O resultado da consulta de reviews do projeto serão gerados no diretório csv/applestore.csv
