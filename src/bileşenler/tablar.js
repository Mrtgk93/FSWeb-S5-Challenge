import axios from "axios";

// GÖREV 3
// ---------------------
// Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
// Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
// fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//
// <div class="topics">
//   <div class="tab">javascript</div>
//   <div class="tab">bootstrap</div>
//   <div class="tab">teknoloji</div>
// </div>
//

const Tablar = (konu) => {
  const divekle = document.createElement("div");
  divekle.classList.add("topics");

  const div1 = document.createElement("div");
  divekle.appendChild(div1);
  div1.classList.add("tab");
  div1.textContent = konu[0];

  const div2 = document.createElement("div");
  divekle.appendChild(div2);
  div2.classList.add("tab");
  div2.textContent = konu[1];

  const div3 = document.createElement("div");
  divekle.appendChild(div3);
  div3.classList.add("tab");
  div3.textContent = konu[2];

  const div4 = document.createElement("div");
  divekle.appendChild(div4);
  div4.classList.add("tab");
  div4.textContent = konu[3];

  const div5 = document.createElement("div");
  divekle.appendChild(div5);
  div5.classList.add("tab");
  div5.textContent = konu[4];

  return divekle;
};

// GÖREV 4
// ---------------------
// Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
// Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
// Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
// Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//

const tabEkleyici = function (secici) {
  const tabscontainer = document.querySelector(secici);
  axios({
    method: "get",
    url: "http://localhost:5001/api/konular",
  }).then(function (response) {
    console.log(response);
    tabscontainer.appendChild(Tablar(response.data.konular));
  });
};

export { Tablar, tabEkleyici };
