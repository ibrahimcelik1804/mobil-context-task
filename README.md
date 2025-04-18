<h1>React Native Todo App - & Use Context</h1>

<p>Bu proje, <strong>React Native</strong> ile geliştirilmiş bir <strong>Task Todo</strong> uygulamasıdır. Uygulama, <strong>useContext</strong> ile global state yönetimi sağlar. Ayrıca <strong>jsonplaceholder API</strong> ile görev (task) verileri çekilerek dinamik bir yapı oluşturulmuştur.</p>

<h2>📱 Oluşturulan Ekranlar</h2>
<ul>
  <li>User List Ekranı</li>
  <li>User Detail Ekranı</li>
  <li>Task Ekranı</li>
</ul>

<h2>🛠 Kullanılan Teknolojiler</h2>
<ul>
  <li><strong>React Native</strong> – Temel mobil uygulama geliştirme kütüphanesi.</li>
  <li><strong>React Navigation (Native Stack)</strong> – Sayfalar arası geçiş için kullanıldı.</li>
  <li><strong>React Context API</strong> – Global state yönetimi için kullanıldı.</li>
  <li><strong>Axios</strong> – Jsonplaceholder üzerinden API verisi çekmek için kullanıldı.</li>
  <li><strong>React Native SVG</strong> – SVG ikonları bileşen olarak kullanmak için tercih edildi.</li>
  <li><strong>React Native Safe Area Context</strong> – Çentikli cihazlarda içerik hizalaması için kullanıldı.</li>
  <li><strong>React Native Screens</strong> – Performanslı ekran yapıları oluşturmak için kullanıldı.</li>
</ul>

<h2>📦 Kurulum ve Çalıştırma</h2>
<pre>
npm install
npm run android 
npm run ios    
</pre>

<h2>🧠 Özellikler</h2>
<ul>
  <li>Görev listesi API'den dinamik olarak çekilir.</li>
  <li><strong>Context API</strong> sayesinde global veri yönetimi kolaylaştırılmıştır.</li>
</ul>

<h2>🎨 Proje Görseli</h2>
<img src="./src/assets/images/Gorsel.gif" alt="Proje Görseli" width="300"/>

<h2>🗃 Paket Yapısı</h2>
<ul>
  <li><strong>context/</strong> – Uygulama geneli için context dosyaları</li>
  <li><strong>screens/</strong> – Home, Detail, Onboarding gibi ekranlar</li>
  <li><strong>components/</strong> – Buton, kart gibi yeniden kullanılabilir bileşenler</li>
  <li><strong>services/</strong> – API istekleri için Axios servisleri</li>
</ul>
