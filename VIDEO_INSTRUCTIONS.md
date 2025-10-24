# Instrukcje dodania wideo w tle

## 🎥 Jak dodać prawdziwe wideo w tle strony głównej

### 1. Przygotowanie wideo

**Wymagania techniczne:**
- Format: MP4 (H.264)
- Rozdzielczość: 1920x1080 (Full HD)
- Czas trwania: 10-30 sekund (dla płynnego zapętlenia)
- Rozmiar pliku: maksymalnie 5MB (dla szybkiego ładowania)
- Audio: wyciszone (muted)

**Zalecane treści:**
- Wóz strażacki w akcji
- Operacje gaśnicze
- Ratownictwo techniczne
- Ćwiczenia strażackie
- Wyjazd na interwencję

### 2. Optymalizacja wideo

**Kompresja:**
```bash
# Użyj FFmpeg do kompresji
ffmpeg -i input_video.mp4 -vcodec h264 -acodec aac -crf 28 -preset fast -vf "scale=1920:1080" -an fire-hero-bg.mp4
```

**Parametry:**
- `-crf 28`: jakość kompresji (18-28, wyższe = mniejszy plik)
- `-preset fast`: szybkość kompresji
- `-vf "scale=1920:1080"`: skalowanie do Full HD
- `-an`: usunięcie audio

### 3. Zastąpienie pliku

1. Usuń obecny plik: `public/videos/fire-hero-bg.mp4`
2. Dodaj nowy plik: `public/videos/fire-hero-bg.mp4`
3. Upewnij się, że nazwa pliku jest identyczna

### 4. Testowanie

Po dodaniu wideo:
1. Uruchom `npm run dev`
2. Sprawdź czy wideo się odtwarza
3. Przetestuj na różnych urządzeniach
4. Sprawdź czas ładowania strony

### 5. Alternatywne źródła wideo

**Darmowe zasoby:**
- [Pexels Videos](https://www.pexels.com/videos/) - darmowe wideo
- [Pixabay Videos](https://pixabay.com/videos/) - darmowe wideo
- [Unsplash Videos](https://unsplash.com/videos) - darmowe wideo

**Wyszukiwanie:**
- "fire truck"
- "firefighting"
- "emergency response"
- "rescue operation"

### 6. Fallback

Jeśli wideo się nie załaduje, strona automatycznie wyświetli:
- Gradient tło w kolorach OSP
- Animowane cząsteczki
- Logo OSP

### 7. Optymalizacja wydajności

**Lazy loading:**
```html
<video class="video-bg" autoplay muted loop playsinline preload="metadata">
```

**Preload options:**
- `preload="none"`: nie ładuj wideo z góry
- `preload="metadata"`: ładuj tylko metadane
- `preload="auto"`: ładuj całe wideo (domyślne)

### 8. Dostępność

**Dla użytkowników z ograniczeniami:**
- Wideo jest wyciszone (muted)
- Automatyczne odtwarzanie jest wyłączone na urządzeniach mobilnych
- Dostępne są alternatywne style CSS

### 9. Troubleshooting

**Problemy z odtwarzaniem:**
1. Sprawdź format pliku (musi być MP4)
2. Sprawdź rozmiar pliku (maksymalnie 5MB)
3. Sprawdź czy plik nie jest uszkodzony
4. Sprawdź konsolę przeglądarki pod kątem błędów

**Problemy z wydajnością:**
1. Zmniejsz rozdzielczość wideo
2. Zwiększ kompresję (wyższy CRF)
3. Skróć czas trwania wideo
4. Użyj `preload="none"`

### 10. Przykładowe komendy FFmpeg

```bash
# Podstawowa kompresja
ffmpeg -i input.mp4 -vcodec h264 -crf 28 -preset fast -an fire-hero-bg.mp4

# Z skalowaniem
ffmpeg -i input.mp4 -vcodec h264 -crf 28 -preset fast -vf "scale=1920:1080" -an fire-hero-bg.mp4

# Z przycinaniem do 15 sekund
ffmpeg -i input.mp4 -vcodec h264 -crf 28 -preset fast -t 15 -an fire-hero-bg.mp4

# Zoptymalizowane dla web
ffmpeg -i input.mp4 -vcodec h264 -crf 23 -preset medium -profile:v baseline -level 3.0 -vf "scale=1920:1080" -an fire-hero-bg.mp4
```

---

**Uwaga:** Pamiętaj o prawach autorskich! Używaj tylko wideo, do których masz prawa lub które są dostępne na licencji Creative Commons.
