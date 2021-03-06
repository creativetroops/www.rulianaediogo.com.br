# www.rulianaediogo.com.br

Repositório do sistema para o site do casamento de Ruliana e Diogo.

## TODO

## DONE

- Informações adicionais:
  - História;
  - Dicas de Salão;
- Imagens Dashboard;
- Ajustes Reponsivos no Dashboard;
- Layout Menu de Opções;
- Layout Detalhes;
- Layout Resumo;
- Alterar imagem do email para um png;
- Mudar mensagem de minimo de caracteres para a mensagem!
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
- Refatorar instagram com redux;
- Colocar Dashboard como opção do menu;
- Refatorar sistema de rotas no back-end;
- Colocar informações padrão no env;
- Fazer o apache do servidor apontar para uma url sem porta;
- Criar sistema de passos para contato;
- Validar formulários com Formik e Yup;
- Limpar formulário depois de enviar;
- Remover mensagem de enviado com sucesso depois de iniciar;
- Sistema de transição de rotas no passo a passo;
- Animação nas mudanças de estados e mensagems de aviso;
- Refatorar modulo de email de forma a ter um método para cada chamada de rota;
- Refatorar o sistema de envio de emails com templates HTML;
- Sistema de substituição de templates nos htmls dos emails;
- Sistema automtico de seleção de endpoint baseado na url;
- Implementar envio de emails para pagamento;
- Na lista de presentes colocar o valor real (netAmount);
- Implementar o envio da confirmação de presença;
- Enviar email para a pessoa que mandou o presente;
- Tratar erros do http do nodejs;
- Sistema de adicionar pessoas em uma lista no js;
  _ Limitar a quantidade máxima de pessoas e crianças;
  _ Limitar o mínimo de pessoas;
  _ Não permitir inserir vazio;
  _ Não permitir entradas duplicadas;
  _ Transformar todos os nomes para maiúsculas;
  _ Não permitir enviar o formulário com menos que 1 pessoa na lista;
- Alterar regras de segurança do Firebase;
- Formatar as datas com o Moment na Dashboard;
- Refatorar os nomes dos campos para camelCase;
- Refatorar os outros formulário para o sistema de passos;
  _ Refatorar Rsvp;
  _ Refatorar Gift;
- Exibir informações de Pagamento após efetuá-lo;
- Ajustar Envio de Email para o Pagador;
- Criar Arquivo de Configuração para valores de pagamento;
- Refatorar exibição das informações da Dashboard;
- Criar cadastro de usuários;
- Criar profile para usuários;
- Formik create users;
- Nome do usuário no login;
- Refatorar sistema back-end para MVC;
- Transformar classe de rotas passando express.Router();

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
