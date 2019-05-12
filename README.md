# www.rulianaediogo.com.br

Repositório do Front-End do site do casamento de Ruliana e Diogo.

## TODO

- Mudar mensagem de minimo de caracteres para a mensagem!
- Layout da Página Dashboard;
- Informações adicionais:
  - História;

## DONE

- Layout página de Login;
- Página de Login;
- Pagina Dashboard;
- Dica de Salões;
- Link para o mapa;
- Refatorar html public;
  - Meta tags;
  - Título;
  - Favicon;
  - OG;
- Testar Boleto;
- Enviar para os emails de teste
- Colocar link para o boleto quando funcionar (boleto);
- Ajustar os envios dos e-mails do boleto;
- Criar sender hash;
- Ajustar back-end para envio do boleto;
- Mensagem final com o link do boleto;
- Colocar conta para depósito e valor quando funcionar o envio (depósito);
- Mensagem final com a conta para depósito;
- Mensagem de conclusão das modais;
  - Mensagem;
  - Rsvp;
- Back-End envio do depósito;
- Envio do email na criação do boleto para casal e emissor;
- Envio do email na criação do depósito para o casal e emissor;
- Refatorar template de emails;
- Redux para envio das informações: Depósito e Boleto;
- Validações dos campos das modais;
  - Telefone
  - Data
  - Cpf
  - Valor
- Refatoração colunas mobile;
- Refatoração das modais para caber no celular;
- Refatoração dos tamanhos dos botões mobile;
- Tamanho dos ícones informações adicionais;
- Tamanho da decoração informações adicionais;
- Tamanho dos ícones decorativos mobile;

- Refatorar instagram com redux; [OK]
- Colocar Dashboard como opção do menu; [OK]
- Refatorar sistema de rotas no back-end; [OK]
- Colocar informações padrão no env; [OK]
- Fazer o apache do servidor apontar para uma url sem porta; [OK]
- Criar sistema de passos para contato; [OK]
- Validar formulários com Formik e Yup; [OK]
- Limpar formulário depois de enviar; [OK]
- Remover mensagem de enviado com sucesso depois de iniciar; [OK]
- Sistema de transição de rotas no passo a passo; [OK]
- Animação nas mudanças de estados e mensagems de aviso; [OK]
- Refatorar modulo de email de forma a ter um método para cada chamada de rota; [OK]
- Refatorar o sistema de envio de emails com templates HTML; [OK]
- Sistema de substituição de templates nos htmls dos emails; [OK]
- Sistema automtico de seleção de endpoint baseado na url; [OK]
- Implementar envio de emails para pagamento; [OK]
- Na lista de presentes colocar o valor real (netAmount); [OK]
- Implementar o envio da confirmação de presença; [OK]
- Enviar email para a pessoa que mandou o presente; [OK]
- Tratar erros do http do nodejs; [OK]
- Sistema de adicionar pessoas em uma lista no js; [OK]
  _ Limitar a quantidade máxima de pessoas e crianças; [OK]
  _ Limitar o mínimo de pessoas; [OK]
  _ Não permitir inserir vazio; [OK]
  _ Não permitir entradas duplicadas; [OK]
  _ Transformar todos os nomes para maiúsculas; [OK]
  _ Não permitir enviar o formulário com menos que 1 pessoa na lista; [OK]
- Alterar regras de segurança do Firebase; [OK]
- Formatar as datas com o Moment na Dashboard; [OK]
- Refatorar os nomes dos campos para camelCase; [OK]
- Refatorar os outros formulário para o sistema de passos; [OK]
  _ Refatorar Rsvp; [OK]
  _ Refatorar Gift; [OK]
- Exibir informações de Pagamento após efetuá-lo; [OK]
- Ajustar Envio de Email para o Pagador; [OK]
- Criar Arquivo de Configuração para valores de pagamento; [OK]
- Refatorar exibição das informações da Dashboard; [OK]
- Criar cadastro de usuários; [OK]
- Criar profile para usuários; [OK]
- Formik create users; [OK]
- Nome do usuário no login; [OK]
- Refatorar sistema back-end para MVC; [OK]
- Transformar classe de rotas passando express.Router(); [OK]

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

https://reacttraining.com/react-router/web/example/animated-transitions

https://medium.com/onfido-tech/animations-with-react-router-8e97222e25e1

https://blog.logrocket.com/routes-animation-transitions-in-react-router-v4-9f4788deb964

## Regras Firebase

```
service cloud.firestore {
  match /databases/{database}/documents {
		match /contacts/{contact}{
			allow create
			allow read, write : if request.auth.uid != null
		}
		match /gifts/{gift}{
			allow create
			allow read, write : if request.auth.uid != null
		}
		match /rsvps/{rsvp}{
			allow create
			allow read, write : if request.auth.uid != null
		}
		match /users/{userId}{
			allow create
			allow read: if request.auth.uid != null
			allow write: if request.auth.uid == userId
		}
	}
}

service cloud.firestore {
  match /databases/{database}/documents {
		match /contacts/{contact}{
    	allow write;
			allow read : if request.auth.uid != null;
		}
		match /gifts/{gifts}{
    	allow write;
			allow read : if request.auth.uid != null;
		}
		match /rsvps/{rsvp}{
    	allow write;
			allow read : if request.auth.uid != null;
		}
		match /users/{userId}{
			allow create;
			allow read: if request.auth.uid != null;
			allow write: if request.auth.uid == userId;
		}
	}
}
```

```
service cloud.firestore {
  match /databases/{database}/documents {
		match /messages/{message}{
    	allow write;
			allow read : if request.auth.uid != null;
		}
		match /billets/{billet}{
    	allow write;
			allow read : if request.auth.uid != null;
		}
		match /deposits/{deposit}{
    	allow write;
			allow read : if request.auth.uid != null;
		}
		match /rsvps/{rsvp}{
    	allow write;
			allow read : if request.auth.uid != null;
		}
		match /users/{userId}{
			allow create;
			allow read: if request.auth.uid != null;
			allow write: if request.auth.uid == userId;
		}
	}
}
```
