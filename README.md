# 🍽️ React Restoran Kartı Komponenti

## 📋 Layihə Haqqında

Bu layihə React ilə yaradılmış professional restoran kartı komponenti və siyahısı demo tətbiqidir. Komponent tam responsive dizayna malikdir və müasir UI/UX standartlarına uyğun hazırlanmışdır.

## ✨ Xüsusiyyətlər

### RestaurantCard Komponenti
- **Props dəstəyi**: name, imageUrl, rating, cuisine, price, deliveryTime
- **Ulduz reytinq sistemi**: Dinamik ulduz göstərimi (tam, yarım və boş ulduzlar)
- **Hover effektləri**: Kart üzərinə gəldikdə animasiyalar və zoom effekti
- **Responsive dizayn**: Mobil və desktop cihazlarda mükəmməl görünüş
- **Loading state**: Şəkil yüklənməsi zamanı placeholder

### Əlavə Xüsusiyyətlər
- **useState istifadəsi**: Restoran məlumatlarının saxlanması
- **map() funksiyası**: Dinamik siyahı yaratma
- **CSS animasiyaları**: Smooth hover və loading effektləri
- **Gradient dizaynlar**: Modern görünüş üçün CSS gradient-lər
- **Accessibility**: Keyboard naviqasiyası və focus state-lər

## 🛠️ Texniki Detallar

### İstifadə olunan texnologiyalar:
- **React 18.2.0** - Komponent əsaslı arxitektura
- **React Hooks** - useState və useEffect istifadəsi  
- **Modern CSS** - Flexbox, Grid, CSS Custom Properties
- **Responsive Design** - Mobile-first approach

### Komponent strukturu:
```jsx
<RestaurantCard 
  name="Restoran adı"
  imageUrl="şəkil_linki" 
  rating={4.5}
  cuisine="Mətbəx növü"
  price="₼₼"
  deliveryTime={25}
/>
```

## 🚀 Quraşdırma və İstifadə

### 1. Dependency-ləri yükləyin:
```bash
npm install
```

### 2. Development server-ini başladın:
```bash
npm start
```

### 3. Brauzerdə açın:
```
http://localhost:3000
```

## 📁 Qovluq Strukturu

```
restaurant-cards/
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   └── RestaurantCard/
│   │       ├── RestaurantCard.jsx
│   │       └── RestaurantCard.css
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## 🎨 Dizayn Yanaşması

- **Modern gradient-lər**: Vizual cazibədarlıq üçün
- **Soft shadows**: Dərinlik hissi yaradan kölgələr
- **Micro-interactions**: Hover və click effektləri
- **Typography**: Oxunaqlı font seçimi və ölçüləri

## 📱 Responsive Breakpoint-lər

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px  
- **Mobile**: <768px

## 🔧 Kodun Xüsusiyyətləri

### State Management:
```javascript
const [restaurants, setRestaurants] = useState([]);
const [loading, setLoading] = useState(true);
```

### Map istifadəsi:
```javascript
{restaurants.map((restaurant, index) => (
  <RestaurantCard key={restaurant.id} {...restaurant} />
))}
```

### Error handling:
```javascript
onError={(e) => {
  e.target.src = 'placeholder_image_url';
}}
```

## 🏆 Nəticə

Bu komponent tam professional standartlarda hazırlanmışdır və aşağıdakı məqsədləri qarşılayır:

1. ✅ **Structural kod**: Təmiz və oxunaqlı komponent arxitekturası
2. ✅ **Responsive dizayn**: Bütün cihazlarda mükəmməl görünüş  
3. ✅ **Dinamika**: useState və map() ilə interaktiv məzmun
4. ✅ **Yaradıcı yanaşma**: Unique dizayn elementləri və animasiyalar

---

**Müəllif**: Nurlan Məmmədli 
**Tarix**: May 2024  
**React Version**: 18.2.0
