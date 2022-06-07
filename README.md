## Not

- Vue.js'i en son 4,5 sene önce kullanmıştım(bu durumdan bahsetmiştim). O yüzden vue'yu baştan öğrenerek yaptım diyebilirim özellikle composition api ile beraber köklü bi değişim olmuş :)
- Şu döneme özel vakit darlığım olduğundan testleri çok detaylı yazamadım (açıkçası çok test tecrübemde var diyemem). Daha geniş bir anıma gelseydi test case'leri ile ilgili best practice'leri daha iyi araştırıp uygulardım :)

# Neyi Neden kullandım

### Mock Service Worker(msw)

Dataları çekmek için mock servis worker kurdum. Hem jest tarafında hemde normal component içerisinde burayı api olarak kullandım

### Scss

Projedeki scss variable'larını tüm scss'lerde import etmeden kullanabilmek için vue.config.js içerisinden global olarak import ettim

### Eslint Prettier

Kod düzeninini sağlamak için eslint ve prettier kurdum bunları birbiriyle ilişkilendirdim

### Jest, vue-test-utils

Test işlemlerini jest ve vue test utils ile yaptım. Pages katmanını snapshot test yaptım.

### Husky

Git hookları için husky kurdum. Commit etmeden önce tüm dosyaları prettier configine göre formatlayıp eslint configine göre fixleyip testler'de okeyse commitleme işlemini gerçekleştirir. Eğer bunlardan birince bi hata çıkarsa commitlemez
