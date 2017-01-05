# Symfony3 - Angular2

I try to combine [Symfony3](https://symfony.com/) and [Angular2](https://angular.io/) from scratch and with the [Angular Quickstart](https://angular.io/docs/ts/latest/quickstart.html).

## Getting started
For apache, run the following commands:
```bash
cd sf-a
ln -s /var/www/html/sf-a/config/vhosts/sf-a.conf /etc/apache2/sites-available/
sudo a2ensite sf-a.conf 
sudo service apache2 restart
```

To install dependencies:
```bash
cd application/be
composer install
cd ../fe
npm install
```

To auto-compile typescript files, run the following command:
```bash
npm start
```

### Don't forget...
Install your database manager and edit the Symfony "parameters.yml".
Add the following line in /etc/hosts
```
127.0.0.1 	sf-a.dev
```
Enable "rewrite" module:
```bash
sudo a2enmod rewrite
sudo service apache2 restart
```
===================================

I hope you will enjoy it!
