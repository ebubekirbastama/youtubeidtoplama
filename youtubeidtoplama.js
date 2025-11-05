// Tüm video linklerini bul
const links = Array.from(document.querySelectorAll("a#video-title"));

// ID’leri ayıkla
const ids = links.map(link => {
  const match = link.href.match(/\/video\/([a-zA-Z0-9_-]{6,})\/edit/);
  return match ? match[1] : null;
}).filter(Boolean);

// Konsola yazdır
console.log("Toplam video:", ids.length);
console.log(ids.join("\n"));

// Panoya kopyala (isteğe bağlı)
copy(ids.join("\n"));
alert("✅ " + ids.length + " video ID panoya kopyalandı!");
