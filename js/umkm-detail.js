(() => {
  const DATA = {
    "kerupuk-tahu": {
      category: "Kuliner",
      name: "Kerupuk Tahu Bagus Hasby",
      short: "Kerupuk Tahu Bagus Hasby merupakan salah satu produk UMKM masyarakat Desa Buah Berak. Produk ini mengolah bahan sederhana menjadi camilan yang cocok dinikmati sendiri maupun dijadikan pelengkap hidangan. Kami berkomitmen untuk memberikan produk terbaik kepada pelanggan kami.",
      description: "Kerupuk Tahu Bagus Hasby merupakan salah satu produk kuliner masyarakat Desa Buah Berak. Produk ini mengolah bahan sederhana menjadi camilan yang cocok dinikmati sendiri maupun dijadikan pelengkap hidangan.",
      owner: "Tubagus Habibi",
      address: "Jl. Way Belerang,jl. Veteran Atas, Sumur Kumbang, Kec.Kalianda, kabupaten Lampung Selatan",
      phone: "0831-8771-5916",
      wa: "6283187715916",
      gallery: [
        { src: "img/kerupuktahu.png", alt: "Kerupuk Tahu Bagus Hasby", title: "Logo", desc: "Logo UMKM Kerupuk Tahu Bagus Hasby yang mencerminkan kualitas dan keaslian produk" },
        { src: "img/kerupuktahu-2.jpg", alt: "Kerupuk Tahu Bagus Hasby", title: "Kerupuk Tahu Bagus Hasby", desc: "Kerupuk tahu gurih dan renyah, cocok untuk camilan maupun pelengkap hidangan." },
        { src: "img/kerupuktahu-3.jpg", alt: "Kerupuk Tahu Bagus Hasby", title: "Emping Bagus Hasby", desc: "Makanan ringan Indonesia berupa kerupuk yang terbuat dari biji melinjo atau belinjo." }
      ]
    },
    "emping": {
      category: "Kuliner",
      name: "Emping Semoga Jaya",
      short: "Emping Semoga Jaya adalah camilan tradisional khas Indonesia yang terbuat dari biji melinjo pilihan. Emping ini memiliki cita rasa gurih dan tekstur renyah yang khas. Cocok sebagai pelengkap hidangan atau camilan sehari-hari.",
      description: "Emping Semoga Jaya merupakan produk olahan melinjo yang dibuat oleh masyarakat Desa Buah Berak. Produk lokal ini dapat menjadi pilihan oleh-oleh maupun pelengkap berbagai hidangan.",
      owner: "Suhaernah",
      address: "Desa Buah Berak, Kec. Kalianda, Kab. Lampung Selatan",
      phone: "0822-8268-2288",
      wa: "6282282682288",
      gallery: [
        { src: "img/emping.jpg", alt: "Emping Semoga Jaya", title: "Logo", desc: "Emping renyah dari biji melinjo pilihan, diolah dengan bahan berkualitas." },
        { src: "img/emping-1.jpg", alt: "Emping Semoga Jaya", title: "Emping Original", desc: "Emping renyah dari biji melinjo pilihan, diolah dengan bahan berkualitas." }
      ]
    },
    "batu-ulekan": {
      category: "Kerajinan",
      name: "Batu Ulekan Masdi",
      short: "Batu Ulekan Masdi adalah sebuah UMKM yang berfokus pada produksi batu ulekan tradisional. Terletak di Desa Buah Berak, Kalianda, Lampung Selatan, UMKM ini mengolah batu alam menjadi ulekan berkualitas tinggi yang digunakan dalam berbagai keperluan masakan tradisional. Dengan pengalaman bertahun-tahun, Batu Ulekan Masdi telah menjadi pilihan utama bagi masyarakat lokal dan wisatawan yang mencari produk autentik dan berkualitas.",
      description: "Batu Ulekan Masdi menghadirkan peralatan dapur berbahan batu yang dibuat untuk kebutuhan rumah tangga. Produk kerajinan ini menjadi salah satu potensi usaha masyarakat Desa Buah Berak.",
      owner: "Masdi",
      address: "Desa Buah Berak, Jl. Way Belerang, Dusun 4, RT.04, Pematang Landak",
      phone: "0812-2893-0645",
      wa: "6281228930645",
      gallery: [
        { src: "img/masdi.jpg", alt: "Batu Ulekan Masdi", title: "Logo Batu Ulekan Masdi", desc: "Peralatan dapur berbahan batu yang kokoh dan cocok untuk kebutuhan rumah tangga." },
        { src: "img/ulekan1.jpg", alt: "Batu Ulekan Masdi", title: "Ulekan Bulat", desc: "Peralatan dapur berbahan batu yang kokoh dan cocok untuk kebutuhan rumah tangga." },
        { src: "img/ulekan2.jpg", alt: "Batu Ulekan Masdi", title: "Ulekan Kecil", desc: "Peralatan dapur berbahan batu yang kokoh dan cocok untuk kebutuhan rumah tangga." },
        { src: "img/ulekan3.jpeg", alt: "Batu Ulekan Masdi", title: "Ulekan Lonjong", desc: "Peralatan dapur berbahan batu yang kokoh dan cocok untuk kebutuhan rumah tangga." }
      ]
    },
    "anyaman-lidi": {
      category: "Kerajinan",
      name: "Anyaman Lidi",
      short: "Anyaman Lidi adalah kerajinan tangan tradisional yang terbuat dari lidi kelapa yang dianyam menjadi berbagai bentuk seperti piring, keranjang dan dekorasi rumah. Produk ini dikenal karena keindahan dan keunikan desainnya, serta ramah lingkungan karena menggunakan bahan alami.",
      description: "Anyaman Lidi merupakan kerajinan masyarakat yang memanfaatkan bahan lidi menjadi produk yang bernilai guna. Karya seperti ini menjadi bagian dari potensi ekonomi kreatif Desa Buah Berak.",
      owner: "Herman",
      address: "Desa Buah Berak, Kec. Kalianda, Kab. Lampung Selatan",
      phone: "08xxxxxxxxxx",
      wa: "",
      gallery: [
        { src: "img/anyamanlidi.jpeg", alt: "Anyaman Lidi", title: "Anyaman Lidi", desc: "Kerajinan berbahan lidi yang dibuat dengan rapi dan memiliki nilai guna." },
        { src: "img/anyaman1.jpeg", alt: "Anyaman Lidi", title: "Piring Anyaman", desc: "Kerajinan berbahan lidi yang dibuat dengan rapi dan memiliki nilai guna." }
      ]
    },
    "kulit-lumpia": {
      category: "Kuliner",
      name: "Kulit Lumpia Erlangga",
      short: "Kulit Lumpia Erlangga adalah produk unggulan dari UMKM di Desa Buah Berak, Kalianda, Lampung Selatan. Terbuat dari bahan berkualitas tinggi, kulit lumpia ini memiliki tekstur yang lembut dan elastis, cocok untuk berbagai isian lumpia. Diproduksi secara tradisional dengan resep terbaik, kulit lumpia Erlangga menjadi pilihan favorit masyarakat lokal dan wisatawan.",
      description: "Kulit Lumpia Erlangga menyediakan kulit lumpia untuk kebutuhan rumah tangga maupun pelaku usaha kuliner. Produk ini menjadi salah satu pilihan produk pangan lokal dari Desa Buah Berak.",
      owner: "Erlangga",
      address: "Dusun 4, Desa Buah Berak, Kalianda, Lampung Selatan",
      phone: "08xxxxxxxxxx",
      wa: "",
      gallery: [
        { src: "img/lumpia.jpeg", alt: "Kulit Lumpia Erlangga", title: "Kulit Lumpia", desc: "Kulit lumpia tipis dan praktis untuk kebutuhan rumah tangga maupun usaha kuliner." }
      ]
    }
  };

  const id = new URLSearchParams(window.location.search).get("id") || "kerupuk-tahu";
  const item = DATA[id] || DATA["kerupuk-tahu"];

  const $ = (selector) => document.querySelector(selector);

  document.title = `${item.name} | UMKM Desa Buah Berak`;
  $("#umkmCategory").textContent = item.category;
  $("#umkmName").textContent = item.name;
  $("#umkmShortDesc").textContent = item.short;
  $("#umkmDescription").textContent = item.description;
  $("#infoBusiness").textContent = item.name;
  $("#infoOwner").textContent = item.owner;
  $("#infoAddress").textContent = item.address;
  $("#infoPhone").textContent = item.phone;

  // Galeri produk: desktop 3 kartu, tablet 2, HP 1.
  // Mendukung tombol, mouse drag, touch swipe, dan trackpad/wheel.
  const track = $("#galleryTrack");
  const carousel = $("#galleryCarousel");
  const dots = $("#galleryDots");
  const prev = $("#galleryPrev");
  const next = $("#galleryNext");

  let currentIndex = 0;
  let dragStartX = 0;
  let dragStartIndex = 0;
  let isDragging = false;
  let hasDragged = false;

  item.gallery.forEach((image, index) => {
    const card = document.createElement("article");
    card.className = "umkm-product-card";
    card.innerHTML = `
      <div class="umkm-product-image-wrap">
        <span class="umkm-product-number">${String(index + 1).padStart(2, "0")}</span>
        <img src="${image.src}" alt="${image.alt}" loading="lazy" draggable="false">
      </div>
      <div class="umkm-product-body">
        <h3>${image.title || image.alt}</h3>
        <p>${image.desc || "Produk pilihan dari UMKM Desa Buah Berak."}</p>
      </div>
    `;
    track.appendChild(card);

    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "umkm-gallery-dot";
    dot.setAttribute("aria-label", `Lihat foto ${index + 1}`);
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel();
    });
    dots.appendChild(dot);
  });

  function getVisibleCount() {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  }

  function getMaxIndex() {
    return Math.max(0, item.gallery.length - getVisibleCount());
  }

  function updateCarousel() {
    const cards = [...track.querySelectorAll(".umkm-product-card")];
    const maxIndex = getMaxIndex();
    currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));

    if (cards.length) {
      const gap = parseFloat(getComputedStyle(track).gap) || 16;
      const cardWidth = cards[0].getBoundingClientRect().width;
      track.style.transform = `translate3d(-${currentIndex * (cardWidth + gap)}px, 0, 0)`;
    }

    dots.querySelectorAll("button").forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });

    prev.disabled = currentIndex <= 0;
    next.disabled = currentIndex >= maxIndex;
    const canSlide = item.gallery.length > getVisibleCount();
    prev.hidden = !canSlide;
    next.hidden = !canSlide;
    dots.hidden = item.gallery.length <= getVisibleCount();
  }

  prev.addEventListener("click", () => {
    currentIndex--;
    updateCarousel();
  });

  next.addEventListener("click", () => {
    currentIndex++;
    updateCarousel();
  });

carousel.addEventListener("wheel", (e) => {

  // Jika gerakannya vertikal, jangan ganggu scroll halaman
  if (Math.abs(e.deltaY) >= Math.abs(e.deltaX)) {
    return;
  }

  // Kalau tidak ada lebih dari 1 halaman carousel
  if (item.gallery.length <= getVisibleCount()) {
    return;
  }

  // Scroll horizontal saja yang digunakan untuk carousel
  if (Math.abs(e.deltaX) < 8) {
    return;
  }

  e.preventDefault();

  currentIndex += e.deltaX > 0 ? 1 : -1;

  updateCarousel();

}, { passive: false });

carousel.addEventListener("pointerdown", (e) => {
  if (item.gallery.length <= getVisibleCount()) {
    return;
  }
  if (e.pointerType === "mouse" && e.button !== 0) {
    return;
  }
    isDragging = true;
    hasDragged = false;
    dragStartX = e.clientX;
    dragStartIndex = currentIndex;
    carousel.setPointerCapture?.(e.pointerId);
    carousel.classList.add("is-dragging");
    track.style.transition = "none";
  });

  carousel.addEventListener("pointermove", (e) => {
    if (!isDragging) return;
    const distance = e.clientX - dragStartX;
    if (Math.abs(distance) > 6) hasDragged = true;

    const cards = track.querySelectorAll(".umkm-product-card");
    if (!cards.length) return;
    const gap = parseFloat(getComputedStyle(track).gap) || 16;
    const cardWidth = cards[0].getBoundingClientRect().width;
    const base = -(dragStartIndex * (cardWidth + gap));
    track.style.transform = `translate3d(${base + distance}px, 0, 0)`;
  });

  function endDrag(e) {
    if (!isDragging) return;
    const distance = e.clientX - dragStartX;
    const threshold = 40;
    isDragging = false;
    carousel.classList.remove("is-dragging");
    track.style.transition = "";

    if (Math.abs(distance) >= threshold) {
      currentIndex = dragStartIndex + (distance < 0 ? 1 : -1);
    } else {
      currentIndex = dragStartIndex;
    }
    updateCarousel();
  }

  carousel.addEventListener("pointerup", endDrag);
  carousel.addEventListener("pointercancel", endDrag);
  carousel.addEventListener("lostpointercapture", () => {
    if (isDragging) {
      isDragging = false;
      carousel.classList.remove("is-dragging");
      track.style.transition = "";
      updateCarousel();
    }
  });

  window.addEventListener("resize", updateCarousel);
  updateCarousel();

  // WhatsApp: isi nomor pada properti "wa" di DATA jika sudah tersedia.
  const waButton = $("#waButton");
  const waText = $("#waButtonText");
  const cleanNumber = (item.wa || "").replace(/\D/g, "");

  if (cleanNumber) {
    const message = encodeURIComponent(`Halo, saya melihat profil ${item.name} di website Desa Buah Berak. Saya ingin menanyakan produk yang tersedia.`);
    waButton.href = `https://wa.me/${cleanNumber}?text=${message}`;
    waText.textContent = "Pesan penjual sekarang";
  } else {
    waButton.href = "#";
    waButton.classList.add("disabled");
    waText.textContent = "Nomor WhatsApp belum diisi";
    waButton.addEventListener("click", (e) => e.preventDefault());
  }


})();