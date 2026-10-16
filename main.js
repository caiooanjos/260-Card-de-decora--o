(function () {
  var O = window.OFERTA || {};

  // --- Pendências: só no console, nunca na interface ---
  var obrigatorios = ["preco", "checkoutUrl", "pagamento", "entrega", "prazoAcesso",
    "reembolso", "suporteContato", "responsavel", "licenca", "termosUrl", "privacidadeUrl"];
  var pendentes = obrigatorios.filter(function (k) { return !O[k]; });
  if (pendentes.length && window.console) {
    console.info("[260 Cards] Condições comerciais pendentes (config.js): " + pendentes.join(", "));
  }

  // --- Checkout com parâmetros de campanha preservados ---
  function checkoutHref() {
    if (!O.checkoutUrl) return null;
    try {
      var url = new URL(O.checkoutUrl);
      new URLSearchParams(window.location.search).forEach(function (v, k) {
        if (!url.searchParams.has(k)) url.searchParams.set(k, v);
      });
      return url.toString();
    } catch (e) { return null; }
  }
  var href = checkoutHref();
  if (href) {
    document.querySelectorAll("[data-cta]").forEach(function (a) { a.href = href; a.rel = "noopener"; });
    var cta = document.getElementById("cta-oferta");
    var aviso = document.getElementById("aviso-compra");
    if (cta) cta.hidden = false;
    if (aviso) aviso.hidden = true;
  }

  // --- Dados comerciais, exibidos só quando confirmados ---
  var bloco = document.getElementById("bloco-preco");
  if (bloco && O.preco) {
    document.getElementById("preco-valor").textContent = O.preco;
    bloco.hidden = false;
  }
  document.querySelectorAll("[data-rodape]").forEach(function (p) {
    var v = O[p.dataset.rodape];
    if (v) { p.querySelector("span").textContent = v; p.hidden = false; }
  });
  var links = document.getElementById("rodape-links");
  if (links && (O.termosUrl || O.privacidadeUrl)) {
    [["Termos", O.termosUrl], ["Privacidade", O.privacidadeUrl]].forEach(function (par, i) {
      if (!par[1]) return;
      var a = document.createElement("a");
      a.href = par[1]; a.textContent = par[0];
      if (links.childNodes.length) links.appendChild(document.createTextNode(" · "));
      links.appendChild(a);
    });
    links.hidden = false;
  }

  // --- Ampliar amostras ---
  var dlg = document.getElementById("zoom");
  if (!dlg) return;
  var img = dlg.querySelector("img");
  var cap = dlg.querySelector("figcaption");
  var ultimo = null;

  function abrir(btn) {
    ultimo = btn;
    var fonte = btn.querySelector("img");
    img.src = fonte.currentSrc || fonte.src;
    img.alt = fonte.alt;
    img.style.width = btn.dataset.zw || "";
    img.style.maxWidth = btn.dataset.max || "100%";
    cap.textContent = btn.dataset.legenda || fonte.alt;
    if (typeof dlg.showModal === "function") dlg.showModal();
    else dlg.setAttribute("open", "");
  }
  document.querySelectorAll("[data-zoom]").forEach(function (btn) {
    btn.addEventListener("click", function () { abrir(btn); });
  });
  dlg.addEventListener("click", function (e) {
    if (e.target === dlg || e.target.hasAttribute("data-fechar")) dlg.close();
  });
  dlg.addEventListener("close", function () { if (ultimo) ultimo.focus(); });
})();
