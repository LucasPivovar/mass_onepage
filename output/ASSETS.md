# Imagens do MassFlow

Ferramenta: geração de imagens integrada (image_gen), sem API externa ou credenciais no projeto.

## Arquivos usados pelo site

- `public/icons/conexoes.jpg`
- `public/icons/painel.jpg`
- `public/icons/campanhas.jpg`
- `public/icons/automacao.jpg`
- `public/app/dashboard-demo.jpg`
- `public/app/campanhas.png`
- `public/app/central-ia.png`
- `public/favicon.svg` (vetor de compartilhamento na paleta da marca).

Os ícones foram convertidos para JPEG para reduzir o peso. As capturas de Campanhas e Central de IA excluem a barra lateral com dados da conta. O dashboard foi editado a partir da captura fornecida pelo usuário e contém dados ilustrativos; não representa resultados reais. Nenhuma credencial foi adicionada ao projeto.

## Prompts finais dos ícones

Base utilizada em quatro gerações independentes:

> Use case: stylized-concept. Create one premium 3D clay icon for a MassFlow SaaS website card: [subject]. Soft rounded lavender ceramic and vivid purple #a020f0 accents, white details, subtle ambient shadows, soft studio lighting, isometric front view. One centered isolated composition with generous padding on pure white background. Similar to polished friendly 3D SaaS illustrations. No text, no letters, no watermark. Square image.

Subjects:

1. a connected plug and socket representing multiple connections
2. a dashboard with sliders and a small bar chart representing real-time control
3. a paper plane with chat bubbles representing messaging campaigns
4. a friendly robot with connected workflow nodes representing automation

## Tratamento do dashboard

Preservar layout, tipografia, logo e cores da captura original. Substituir workspace e usuário por Demonstração e Equipe, plano por Plano Demo, período por Últimos 30 dias e timestamp por Ambiente de demonstração. Substituir os oito indicadores por 1200, 840, 3600, 2100, 4, 12, 8 e 4. Não adicionar moldura à imagem: o notebook é construído no CSS do site.
