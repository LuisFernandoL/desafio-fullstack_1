# Projeto Full stack

Projeto criado full stack para criação de usuários e cadastro de contato paras os mesmos!

## Índice

- <a href="https://www.figma.com/file/HJGB1qDYZ3QrCYk4VJkpz1/Untitled?type=design&node-id=3-8&mode=design&t=e9kI9GL37Fii2vEC-0">Figma</a>

## Funcionalidades do Projeto

- [x] Cadastro do usuário
- [x] Login
- [x] Página do usuário

## Como rodar este Projeto?

```bash
# Clone este repositório
$ git clone linkrepo

# Acesse a pata do projeto no seu terminal
$ cd desafio-fullstack_LuisFernandoL


# Acessar pasta back
$ ls -la
$ cd back

# Intale as dependências na pasta back
$ npm install
# Configure a pasta .env para que ela possa rodar as migrações


# Acessar pasta front
$ ls -la
$ cd front

# Intale as dependências na pasta front
$ npm install

# Execute a aplicação na pasta back
$ npm run dev
# A aplicação será iniciada na porta 3000, http://localhost:3000/

# Execute a aplicação na pasta front
$ npm run dev
# A aplicação será iniciada  na porta 5173, http://localhost:5173/
```

# Rota de criação de usuário, POST

### rota "/users"

## Dados enviados:

```
{
	"fullName": "Luis ",
	"email": "luifm@mail.com",
	"password": "Ab#12345",
	"phone": "11111111111"
}
```

## Respostas esperada, status 201

```
{
	"fullName": "Luis ",
	"email": "luifm@mail.com",
	"phone": "11111111111",
	"id": 1,
	"date": "2023-11-20"
}
```

# Rota de Login, Post

### /login

## Dados enviados

```
{
	"email": "luislima@mail.com",
	"password": "Ab#12345"
}
```

## Resposta esperada, status 201

```
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwMTE4NTIyMSwiZXhwIjoxNzAxMTk2MDIxLCJzdWIiOiIxIn0m2f44sss25CpE2UXSSXQhvDfmdsyic8WeWo2cLyVRbw",
	"id": 1
}
```

# Rota de leitura de usuários, GET

### rota "/users"

## Resposta esperada, status 200

```
[
	{
		"id": 1,
		"fullName": "Luis ",
		"email": "luifm@mail.com",
		"phone": "11111111111",
		"date": "2023-11-20",
		"contacts": [
			{
				"id": 6,
				"fullName": "jpl",
				"email": "jplm@mail.com",
				"phone": "88888888888",
				"date": "2023-11-23"
			}
		]
	},
	{
		"id": 2,
		"fullName": "Luis Fernando",
		"email": "luidsflmo@mail.com",
		"phone": "11111111111",
		"date": "2023-11-21",
		"contacts": []
	}
]

```

# Rota de edição de um usuário, Patch

### rota "/users/:id"

## Dados enviados

```
{
	"email": "luislima@mail.com"
}
```

## Resposta esperada, status 200

```
{
	"id": 1,
	"fullName": "Luis ",
	"email": "luislima@mail.com",
	"phone": "11111111111",
	"date": "2023-11-20"
}
```

# Rota de deleção de usuarios, DELETE

### rota "/users/:id"

## Resosta esperada, status 204

```
No body returned for response
```

# Rota de criação de contatos, POST

### rota "/contacts/:id/user"

## Dados enviados, status 201

```
{
	"fullName": "João ",
	"email": "joaolfm@mail.com",
	"phone": "66666666666"
}

```

## Resposta esperada:

```
{
"id": 2,
"fullName": "João ",
"email": "joaolfm@mail.com",
"phone": "66666666666",
"date": "2023-11-20",
"user": {
"id": 1,
"fullName": "Luis ",
"email": "luislima@mail.com",
"phone": "11111111111",
"date": "2023-11-20"
}
}

```

# Roda de edição de cotantato, PATCH

### rota "contacts/:id/"

## Dados enviados, status 200

```
{
	"email": "joaolima@mail.com"
}
```

## Resposta esperada:

```
{
	"id": 6,
	"fullName": "jpl",
	"email": "joaolima@mail.com",
	"phone": "88888888888",
	"date": "2023-11-23"
}
```

## Rota de deleção de contato, DELETE

### rota "contacts/:id"

## Resposta esperada, status 204

```
No body returned for response
```
