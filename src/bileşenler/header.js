// GÖREV 1
// ---------------------
// Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
// Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//
//  <div class="header">
//    <span class="date">{ tarih }</span>
//    <h1>{ baslik }</h1>
//    <span class="temp">{ yazi }</span>
//  </div>
//
const Header = (baslik, tarih, yazi) => {
  const divEkle = document.createElement("div");
  divEkle.classList.add("header");

  const spanEkle = document.createElement("span");
  spanEkle.classList.add("date");
  divEkle.appendChild(spanEkle);
  spanEkle.textContent = tarih;

  const h1Ekle = document.createElement("h1");
  divEkle.appendChild(h1Ekle);
  h1Ekle.textContent = baslik;

  const spanEkle2 = document.createElement("span");
  spanEkle2.classList.add("temp");
  divEkle.appendChild(spanEkle2);
  spanEkle2.textContent = yazi;

  return divEkle;
};

// GÖREV 2
// ---------------------
// Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
// Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
// Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
//
// İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
// fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
const headerEkleyici = (secici) => {
  document
    .querySelector(secici)
    .appendChild(
      Header(
        "Workintech Aralık programına",
        "16.12.2022",
        "tarihinde başladık."
      )
    );
};

export { Header, headerEkleyici };
