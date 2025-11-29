# Climatec - Dashboard Administrativo

Sistema de gerenciamento de produtos para ar-condicionado com dashboard administrativo completo.

## 🚀 Tecnologias

- **React** + **TypeScript** + **Vite**
- **Tailwind CSS** para estilização
- **Supabase** para backend (Auth + Database)
- **React Router** para navegação
- **Lucide React** para ícones

## 📋 Pré-requisitos

- Node.js 18+
- Docker (opcional, para deploy)
- Conta Supabase

## 🔧 Instalação Local

1. Clone o repositório:
```bash
git clone https://github.com/andersonpompeu/ar.git
cd ar
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais do Supabase.

4. Execute o projeto:
```bash
npm run dev
```

Acesse: `http://localhost:3000`

## 🐳 Deploy com Docker

### Build e execução local:

```bash
# Build da imagem
docker build -t climatec-ar .

# Executar container
docker run -p 3000:80 climatec-ar
```

### Usando Docker Compose:

```bash
docker-compose up -d
```

Acesse: `http://localhost:3000`

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`.

## 🔐 Credenciais Admin (Padrão)

- **Email**: admin@climatec.com
- **Senha**: admin123

⚠️ **Importante**: Altere as credenciais após o primeiro login!

## 📁 Estrutura do Projeto

```
ar-main/
├── components/          # Componentes React
│   ├── admin/          # Componentes do admin
│   └── ...
├── pages/              # Páginas da aplicação
│   ├── admin/         # Páginas do dashboard
│   └── ...
├── services/          # Serviços (Supabase)
├── types.ts           # Tipos TypeScript
├── Dockerfile         # Configuração Docker
└── docker-compose.yml # Orquestração Docker
```

## 🌐 Funcionalidades

### Área Pública
- Catálogo de produtos
- Calculadora de BTU
- Formulário de contato
- Depoimentos de clientes

### Dashboard Admin
- ✅ Login com Supabase Auth
- ✅ CRUD completo de produtos
- ✅ Dashboard com estatísticas
- ✅ Interface responsiva

## 🗄️ Banco de Dados

O projeto usa Supabase com as seguintes tabelas:
- `products` - Produtos do catálogo
- `testimonials` - Depoimentos
- `services` - Serviços oferecidos
- `leads` - Solicitações de contato

## 📝 Licença

Este projeto é privado e de uso exclusivo da Climatec.

## 👨‍💻 Desenvolvedor

Anderson Pompeu
