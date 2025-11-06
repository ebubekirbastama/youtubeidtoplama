const links = Array.from(document.querySelectorAll("a#video-title"));

// ID’leri ayıkla
const ids = links.map(link => {
  const match = link.href.match(/\/video\/([a-zA-Z0-9_-]{6,})\/edit/);
  return match ? match[1] : null;
}).filter(Boolean);

// Tam YouTube URL'sini oluştur
const fullUrls = ids.map(id => `https://www.youtube.com/watch?v=${id}`);

// Konsola yazdır
console.log("Toplam video:", fullUrls.length);
console.log(fullUrls.join("\n"));

// Panoya kopyala (isteğe bağlı)
copy(fullUrls.join("\n"));
alert("✅ " + fullUrls.length + " YouTube linki panoya kopyalandı!");
