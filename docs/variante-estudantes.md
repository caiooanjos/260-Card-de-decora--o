# Variante para estudantes (`/estudantes/`)

Criada em 06/11/2026 a partir de briefing de Caio no chat.

## Autorização de público
`AGENTS.md` e `docs/briefing-lp.md` definem moradores como público
inicial. O briefing diz que "profissionais, estudantes e estagiários
não serão o foco principal desta primeira página".
O briefing de Caio de 06/11/2026 autoriza uma **variante separada**
para estudantes, sem alterar a página dos moradores.

Público da variante:
- estudantes iniciantes de Design de Interiores;
- estudantes de Arquitetura e Urbanismo interessados em interiores.

Posicionamento em teste, como **hipótese comercial**: "Consulta visual
de decoração para quem está começando em interiores".
Não há eficácia acadêmica comprovada. Não afirmar isso.

## Arquivos
- `estudantes/index.html`: a página.
- `estudantes/estudantes.css`: somente o que a variante acrescenta.
  Ela carrega antes `../styles.css`.
- Reaproveitados por caminho relativo:
  - `../config.js`, com preço, checkout e condições;
  - `../main.js`, com checkout, UTMs, Pixel e ampliação;
  - `../public/images/`.
- `main.js`: o `CheckoutClick` acrescenta `landing_variant` somente
  quando o `<body>` declara `data-landing-variant`. A página original
  não declara variante, então o evento dela não mudou.

Publicação: a pasta `estudantes/` deve ir junto com os arquivos da
lista C4 (`index.html`, `styles.css`, `main.js`, `config.js`,
`public/`), mantendo a mesma estrutura.
Nunca publicar `materiais-produto/` nem a pasta inteira.

## Rastreamento
- Mesmo Pixel `1414401270807362`, copiado do original.
- Um `init` e um `PageView` por carregamento.
- O projeto não tem banner de consentimento. O Pixel carrega direto,
  como na página original.
- `CheckoutClick` (`trackCustom`) só no clique ou no clique do meio
  em links reais da Cakto. Parâmetros:
  - `content_name`;
  - `content_ids`;
  - `cta_location`, com os valores `hero`, `amostras` ou `oferta_final`;
  - `landing_variant: 'estudantes'`.
- Sem `Purchase`, `InitiateCheckout` ou API de Conversões.
- Todos os parâmetros da URL (UTMs, `fbclid`) seguem para o checkout.

## Fontes de conteúdo
- **Manual** (`materiais-produto/Manual_de_Uso_dos_260_Cards.pdf`),
  conferido em 06/11/2026:
  - 4 páginas;
  - 260 cards em 29 folhas A4, sendo 28 folhas com nove cards e uma
    com oito;
  - mapa com 13 faixas de vinte cards;
  - zoom na tela e marcadores por faixa numérica;
  - orientações de impressão e o roteiro "Seu primeiro teste".
- **PDF dos 260 cards: ausente do disco.** O conteúdo dos cards foi
  conferido apenas nas três amostras (022, 047 e 085) e na prévia da
  folha 10 (cards 082 a 090).
- Os textos "No card" reproduzem o que está escrito em cada amostra.
- As perguntas de observação e as aplicações são **sugestões da
  página** e estão rotuladas assim. Não estão no PDF.
- O card 085 se chama "Teste o tamanho do tapete". O briefing o
  chamou de "proporção do tapete", e a página usa o título real.

## Decisões
- O guia de impressão **não** aparece como bônus. O manual tem uma
  página de impressão, citada apenas como parte do manual, e
  `docs/oferta.md` diz que o bônus não está confirmado.
- O mapa mostra as 13 faixas reais. A página informa que não há
  capítulos de estruturas, urbanismo, legislação, normas técnicas ou
  representação gráfica.
- Abertura no celular: o texto e o CTA vêm primeiro, e a faixa de
  cards reais rolável vem logo abaixo, com cards de cerca de 260 px de
  largura. A 390 × 844, o primeiro card começa em 597 px. A 360 × 780,
  começa em 681 px e só a parte de cima fica visível na primeira tela.
  Para mostrar os cards antes do CTA, mover a `.prancheta` para logo
  depois do `h1`.
- A seção "Para quem atende clientes" do manual não foi usada, porque
  o público da variante são estudantes.

## Alteração de 09/11/2026: ângulo B
Pedido de Caio no chat, a partir da pesquisa de copy.
O ângulo B é "decidir cor, layout ou circulação no trabalho".

Abertura:
- Linha de cima: "Você é estudante de Arquitetura ou Design de Interiores?"
- Headline: "Na hora de montar um ambiente, por onde você começa?"
- Novo subtítulo.
- Oferta: "260 cards ilustrados em PDF + manual de uso por R$ 19,99." O preço continua vindo de `config.js`.
- Saiu a faixa com os três cards.

Primeira demonstração, logo após a abertura: seção `.e-demo`.
- Mostra o card 047 ampliável, com o texto do próprio card.
- A sugestão de aplicação está rotulada como sugestão desta página, que não faz parte do PDF.

Amostras mais abaixo:
- A ficha do 047 saiu para não repetir o card.
- Ficam o 022 e o 085, com o título "Veja outros dois assuntos que você pode explorar".

Não mudaram:
- checkout;
- Pixel;
- `cta_location` (`hero`, `amostras`, `oferta_final`);
- página dos moradores.

Ajuste do mesmo dia:
- **Desktop (≥ 960 px):** a abertura e a demonstração do 047 ficam em duas colunas, dentro do contêiner `.e-topo`.
  - À esquerda, a abertura, fixa no topo (sticky) durante a rolagem.
  - À direita, um painel com o 047 e a sugestão.
  - O card não é duplicado.
- **Celular:** continua empilhado, abertura e depois demonstração.
- `<title>` e `meta description` foram atualizados para o público de estudantes.

## Pendências antes de publicar
- Prazo de acesso, reembolso, suporte, licença, termos e privacidade
  continuam PENDENTES em `config.js`.
- Ícones de pagamento: a conformidade com as marcas continua pendente
  (ver `STATUS.md`).
- Consentimento e LGPD: o Pixel carrega sem banner, nas duas páginas.
- Conferir no Gerenciador de Eventos se o `CheckoutClick` chega com
  `landing_variant`. Isso não foi verificado.
- Disponibilizar o PDF dos cards para conferir o restante da coleção.
- Não há favicon. O servidor registra um 404 inofensivo.
