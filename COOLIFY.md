# Climatec - Configuração do Coolify

## Variáveis de Ambiente Necessárias

Configure as seguintes variáveis de ambiente no painel do Coolify:

### Build Arguments (Build-time variables)
Estas variáveis são necessárias durante o build da aplicação:

```
VITE_SUPABASE_URL=https://klyhfwulbphflutvhpxa.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtseWhmd3VsYnBoZmx1dHZocHhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzNjg1MjMsImV4cCI6MjA3OTk0NDUyM30.fJ50fRdl477m5Sr7FGgRGZiPVUo44a0G69ty_T6R120
```

## Como Configurar no Coolify

1. Acesse o painel do Coolify
2. Vá para o seu projeto
3. Clique em **Environment Variables**
4. Adicione as variáveis acima
5. **IMPORTANTE**: Marque como **Build-time variables** (não apenas runtime)
6. Salve e force um novo deploy

## Verificação

Após o deploy, verifique se os produtos aparecem em:
- `/admin/products` - Painel administrativo
- `/products` - Catálogo público

Se ainda não aparecer, verifique os logs do container para erros de conexão com o Supabase.
