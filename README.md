# Sign Speech App

Kar va soqovlar uchun professional darajadagi web ilova: ovozli nutqni real vaqtda matnga aylantirish va 2D imo-ishora animatsiyasi orqali vizual ko'rsatish.

## Ishga tushirish

```bash
npm install
node server.js
```

Brauzerda: **http://localhost:3000**

- **1-sahifa:** Ovozdan matnga (Web Speech API, uz-UZ)
- **2-sahifa:** Imo-ishora animatsiyasi (Canvas 2D)

## Loyiha tuzilishi

```
sign-speech-app/
├── package.json
├── server.js
├── README.md
└── public/
    ├── index.html      # Speech to Text
    ├── sign.html       # 2D imo-ishora
    ├── css/
    │   └── style.css
    └── js/
        ├── script.js   # Speech recognition
        └── sign.js     # Modulli animatsiya tizimi
```

## Imo-ishora lug'ati

| So'z   | Animatsiya              |
|--------|-------------------------|
| salom  | Qo'l silkish            |
| rahmat | Ko'krakka qo'l qo'yish  |
| ha     | Boshni yuqoriga-pastga  |
| yo'q   | Boshni chap-o'ng        |
| Boshqa | Umumiy qo'l harakati    |

## Kengaytirish

- **Backend:** `server.js` da `/api` route'lar qo'shish mumkin (tarjima, avatar).
- **Animatsiya:** `sign.js` da `SIGN_DICTIONARY` va `ANIMATION_CLIPS` orqali yangi so'z va harakatlar.
- Kelajakda: 3D avatar, AI sign recognition ulash mumkin.
