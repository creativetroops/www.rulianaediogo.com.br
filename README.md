# www.rulianaediogo.com.br
Repositório do Front-End do site do casamento de Ruliana e Diogo.

## TODO

* Refatorar instagram com redux; [OK]
* Colocar Dashboard como opção do menu; [OK]
* Refatorar sistema de rotas no back-end; [OK]
* Colocar informações padrão no env; [OK]
* Fazer o apache do servidor apontar para uma url sem porta; [OK]
* Criar sistema de passos para formulários;
* Refatorar modulo de email de forma a ter um método para cada chamada de rota;
* Refatorar o sistema de envio de emails com templates HTML;
* Enviar email para a pessoa que mandou o presente;
* Sistema de substituição de templates nos htmls dos emails;
* Trater erros do http do nodejs;
* Sistema de adicionar pessoas em uma lista no js;
* Criar tempaltes de email;
* Refatorar exibição das informações da Dashboard;
* Criar o design das telas;
* Criar os estilos com styled components;
* Validar formulários com Formik e Yup;

# Template .env

```
SERVER_PORT = 8888

PAGSEGURO_EMAIL         =
PAGSEGURO_TOKEN         =
PAGSEGURO_SANDBOX_TOKEN =
PAGSEGURO_SANDBOX_EMAIL =
PAGSEGURO_SANDBOX       = true

PAGSEGURO_DEFAULT_SHIPPING_STREET           =
PAGSEGURO_DEFAULT_SHIPPING_NUMBER           =
PAGSEGURO_DEFAULT_SHIPPING_DISTRICT         =
PAGSEGURO_DEFAULT_SHIPPING_CITY             =
PAGSEGURO_DEFAULT_SHIPPING_STATE            =
PAGSEGURO_DEFAULT_SHIPPING_POSTAL_CODE      =
PAGSEGURO_DEFAULT_SHIPPING_SAME_FOR_BILLING = true
PAGSEGURO_DEFAULT_SHIPPING_SHIPPING_COST    = 0

PAGSEGURO_DEFAULT_ITEM_QTDE = 1
PAGSEGURO_DEFAULT_ITEM_DESCRIPTION =

PAGSEGURO_DEFAULT_TRANSACTION_METHOD = boleto

MAIL_SMTP    = smtp.gmail.com
MAIL_PORT    = 587
MAIL_USER    =
MAIL_PASS    =
MAIL_TO      =
MAIL_FROM    =
MAIL_SUBJECT =

```

## PM2

http://pm2.keymetrics.io/docs/usage/quick-start/

http://pm2.keymetrics.io/docs/usage/watch-and-restart/

## PM2 on Apache

https://vedmant.com/setup-node-js-production-application-apache-multiple-virtual-host-server/

```
<VirtualHost *:80>
  ServerName theproject.com
  ServerAlias www.theproject.com
  ErrorLog /home/theproject/logs/error_log
  CustomLog /home/theproject/logs/access_log combined

  ProxyRequests Off
  ProxyPreserveHost On

  ProxyPass / http://localhost:3000/
  ProxyPassReverse / http://localhost:3000/

  # This is needed only if you want to use web sockets
  RewriteEngine On
  RewriteCond %{REQUEST_URI}  ^/socket.io            [NC]
  RewriteCond %{QUERY_STRING} transport=websocket    [NC]
  RewriteRule /(.*)           ws://localhost:3000/$1 [P,L]
</VirtualHost>
```

# Configuração utilizada

```
<IfModule mod_ssl.c>
<VirtualHost *:80>
        ServerName rulianaediogo.diogocezar.com
        ServerAlias rulianaediogo.diogocezar.com
        ErrorLog /var/www/ruliana-diogo/logs/error_log
        CustomLog /var/www/ruliana-diogo/logs/access_log combined
        ProxyRequests Off
        ProxyPreserveHost On
        ProxyPass / http://localhost:8888/
        ProxyPassReverse / http://localhost:8888/
</VirtualHost>
</IfModule>
```

https://codedaily.io/tutorials/50/Create-a-Form-Wizard-with-Data-Loss-Prevention-using-Formik-and-React-Router