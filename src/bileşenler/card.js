import axios from "axios";
// GÖREV 5
// ---------------------
// Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
// Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
// Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
//
// <div class="card">
//   <div class="headline">{ anabaslik }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ yazarFoto }>
//     </div>
//     <span>{ yazarAdı } tarafından</span>
//   </div>
// </div>

//
const Card = (makale) => {
  const div = document.createElement("div");
  div.classList.add("card");

  const div2 = document.createElement("div");
  div2.classList.add("headline");
  div.appendChild(div2);
  div2.textContent = makale.anabaslik;

  const div3 = document.createElement("div");
  div3.classList.add("author");
  div.appendChild(div3);

  const div4 = document.createElement("div");
  div4.classList.add("img-container");
  div3.appendChild(div4);

  const img = document.createElement("img");
  img.setAttribute("src", makale.yazarFoto);
  div4.appendChild(img);

  const span = document.createElement("span");
  div3.appendChild(span);
  span.textContent = makale.yazarAdi + "tarafından";

  div.addEventListener("click", () => {
    console.log(makale.anabaslik);
  });
  return div;
};

// GÖREV 6
// ---------------------
// Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
// Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
// Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
// Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
// Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//

const cardEkleyici = function (secici) {
  const cardcontainer = document.querySelector(secici);
  axios({
    method: "get",
    url: "http://localhost:5001/api/makaleler",
  }).then(function (response) {
    console.log(response);
    const datalar = response.data.makaleler;
    for (let key in datalar) {
      for (let i = 0; i < datalar[key].length; i++) {
        cardcontainer.appendChild(Card(datalar[key][i]));
      }
    }
  });
};
export { Card, cardEkleyici };
