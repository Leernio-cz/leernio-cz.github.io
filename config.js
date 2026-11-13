// Adresa serveru IS Leernio: URL nasazení Google Apps Script, končí na /exec
window.LEERNIO_API = "https://script.google.com/macros/s/AKfycbyA-HlfXo0VsIQI2rEvd-Lc-B-oUk4HSF6tjDgJ9PiJbmhigSFcHRjH7oS23xRy8Q-gGA/exec";
 
// Aplikace v IS (Aplikace → …). Otevírají se přes celé okno přímo v IS.
// Musí ležet ve stejném repozitáři, jiné adresy IS z bezpečnostních důvodů neotevře.
// Prázdná hodnota "" = aplikace se ukáže jako „Připravujeme“.
window.LEERNIO_APPS = {
  testy: "/opakovacka/",   // Opakovačka
  ucebna: "/ucebna/",      // Učebna
  hovor: ""                // Hovor – až nahraješ složku hovor/, změň na "/hovor/"
};
 
