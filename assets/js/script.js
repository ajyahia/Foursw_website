// ================== TOGGLE HEADER =====================
const toggle = document.querySelector(".nav_toggle");
const mobileMenu = document.querySelector(".mobile_menu");

if (toggle && mobileMenu) {
  toggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
    const icon = toggle.querySelector("i");
    if (icon) {
      if (mobileMenu.classList.contains("show")) {
        icon.className = "fa-solid fa-xmark";
      } else {
        icon.className = "fa-solid fa-bars";
      }
    }
  });
}

// ================== SCROLL HEADER =====================
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ================== PROJECTS LOAD MORE =====================
const loadMoreBtn = document.getElementById("loadMoreProjects");
if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", () => {
    const hiddenCard = document.querySelector(".project_card.hidden");
    if (hiddenCard) {
      hiddenCard.classList.remove("hidden");
      hiddenCard.classList.add("active");
      
      const nextHidden = document.querySelector(".project_card.hidden");
      if (!nextHidden) {
        loadMoreBtn.style.display = "none";
      }
    }
  });
}

// ================== SWIPER ABOUT =====================
const aboutSwiperEl = document.querySelector(".about_swiper");

if (aboutSwiperEl) {
  const swiper_about = new Swiper(".about_swiper", {
    loop: true,
    spaceBetween: 20,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

// ================== SERVICES INTERACTIVE HUD =====================
const servicesData = [
  {
    category: "[مخصص_للأكاديميات_التعليمية]",
    title: "[Quizzes_Plugin]",
    desc: "إضافة متكاملة لأي موقع تعليمي لتمكين الاختبارات التفاعلية والتقييمات الذكية المباشرة لطلابك.",
    status: "نشط",
    version: "[إصدار_2.4_مستقر]",
    badge: "إضافات",
    img: "assets/image/service1.png",
    tags: ["[اختبارات_ذكية]", "[تصحيح_تلقائي]", "[تقارير_فورية]"],
    features: [
      "دعم أكثر من منصة اختبارات بنفس الوقت",
      "تخصيص شكل الامتحان حسب هويتك الخاصة",
      "ربط وتصنيف الاختبارات بالمستويات الدراسية",
      "توحيد حساب الطالب (تسجيل الدخول الموحد)"
    ]
  },
  {
    category: "[مخصص_للمتاجر_الإلكترونية]",
    title: "[Secure_Pay_Gateway]",
    desc: "ربط آمن وسلس لبوابات الدفع الإلكتروني المتعددة مع فواتير تلقائية ونظام تشفير متطور.",
    status: "متصل",
    version: "[إصدار_1.8_مستقر]",
    badge: "ربط برمجيات",
    img: "assets/image/service2.png",
    tags: ["[دفع_آمن]", "[فواتير_تلقائية]", "[دعم_الفيزا]"],
    features: [
      "ربط بوابات الدفع (فيزا، ماستر كارد، فودافون كاش)",
      "إصدار وتوجيه الفواتير الإلكترونية تلقائياً",
      "أعلى معايير الأمان والتشفير لحماية البيانات",
      "لوحة تحكم كاملة لإدارة المبيعات والأرباح"
    ]
  },
  {
    category: "[مخصص_للمواقع_الإخبارية]",
    title: "[SEO_Auto_Analytics]",
    desc: "أرشفة تلقائية فورية للمحتوى في محركات البحث ومتابعة الكلمات المفتاحية للحصول على ترتيب أفضل.",
    status: "مستقر",
    version: "[إصدار_3.0_مستقر]",
    badge: "أدوات سيو",
    img: "assets/image/service3.png",
    tags: ["[أرشفة_تلقائية]", "[تهيئة_سيو]", "[تحليلات_جوجل]"],
    features: [
      "أرشفة تلقائية فورية للمقالات والصفحات",
      "توليد تلقائي لخرائط الموقع وتحديثها",
      "تتبع الكلمات المفتاحية ومراكز الظهور اليومية",
      "تقارير أداء دورية مرسلة لبريدك مباشرة"
    ]
  },
  {
    category: "[مخصص_لخدمة_العملاء]",
    title: "[WhatsApp_CRM_Bot]",
    desc: "روبوت دردشة ذكي مؤتمت لتلقي طلبات الشراء، حجز المواعيد والرد الفوري على عملائك عبر واتساب.",
    status: "قيد الاختبار",
    version: "[إصدار_1.1_تجريبي]",
    badge: "بوتات دردشة",
    img: "assets/image/service4.png",
    tags: ["[رد_تلقائي]", "[تكامل_CRM]", "[حفظ_العملاء]"],
    features: [
      "رد آلي فوري على استفسارات العملاء 24/7",
      "إمكانية إتمام عمليات الشراء بالكامل عبر المحادثة",
      "ربط مباشر مع نظام إدارة العملاء والطلبات",
      "إرسال إشعارات الشحن ومتابعة الطلب للعميل"
    ]
  }
];

const miniCards = document.querySelectorAll(".mini_service_card");
const mainDisplay = document.getElementById("mainServiceDisplay");
const toggleServicesBtn = document.getElementById("toggleServicesGrid");
const servicesSelectorGrid = document.getElementById("servicesSelectorGrid");

if (toggleServicesBtn && servicesSelectorGrid) {
  toggleServicesBtn.addEventListener("click", () => {
    servicesSelectorGrid.classList.toggle("show");
    if (servicesSelectorGrid.classList.contains("show")) {
      toggleServicesBtn.textContent = "[إخفاء_باقي_الخدمات]";
    } else {
      toggleServicesBtn.textContent = "[عرض_باقي_الخدمات]";
    }
  });
}

if (miniCards.length && mainDisplay) {
  miniCards.forEach((card) => {
    card.addEventListener("click", () => {
      // Switch active class
      miniCards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");

      const index = parseInt(card.getAttribute("data-service-index"), 10);
      const data = servicesData[index];

      if (data) {
        // Add digital glitch/transition effect
        mainDisplay.style.opacity = "0.2";
        mainDisplay.style.transform = "scale(0.99) translateY(4px)";
        mainDisplay.style.transition = "all 0.15s ease";

        setTimeout(() => {
          // Update Text Contents
          document.getElementById("mainServiceCategory").textContent = data.category;
          document.getElementById("mainServiceTitle").textContent = data.title;
          document.getElementById("mainServiceDesc").textContent = data.desc;
          document.getElementById("mainServiceStatus").textContent = `الحالة: ${data.status}`;
          document.getElementById("mainServiceVersion").textContent = data.version;
          document.getElementById("mainServiceBadge").textContent = data.badge;
          document.getElementById("mainServiceImg").src = data.img;

          const pathEl = document.getElementById("mainServiceWindowPath");
          if (pathEl) {
            const cleanTitle = data.title.replace(/[\[\]]/g, "").toLowerCase();
            pathEl.textContent = `foursw://services/${cleanTitle}`;
          }

          // Update Tags
          const tagsContainer = document.getElementById("mainServiceTags");
          if (tagsContainer) {
            tagsContainer.innerHTML = "";
            data.tags.forEach((tagText) => {
              const tagSpan = document.createElement("span");
              tagSpan.className = "tag";
              tagSpan.textContent = tagText;
              tagsContainer.appendChild(tagSpan);
            });
          }

          // Update Features list
          const featuresContainer = document.getElementById("mainServiceFeatures");
          if (featuresContainer) {
            featuresContainer.innerHTML = "";
            data.features.forEach((feature) => {
              const li = document.createElement("li");
              li.innerHTML = `<span class="feature_dot">■</span>${feature}`;
              featuresContainer.appendChild(li);
            });
          }

          // Restore display styles
          mainDisplay.style.opacity = "1";
          mainDisplay.style.transform = "scale(1) translateY(0)";
        }, 150);
      }
    });
  });
}

// ================== TESTIMONIALS IDE WINDOW =====================
const fileItems = document.querySelectorAll(".file_item");
const codeContentContainer = document.getElementById("editorCodeContent");
const activeTabTitleEl = document.querySelector("#activeTabName .tab_title");
const editorViewBtn = document.getElementById("editorViewBtn");

let testimonialsTimeout = null;
let currentViewMode = "json"; // "json" or "normal"

function renderTestimonialCode(element) {
  if (!codeContentContainer || !element) return;
  
  const name = element.getAttribute("data-client-name") || "";
  const org = element.getAttribute("data-client-org") || "";
  const rating = element.getAttribute("data-client-rating") || "";
  const feedback = element.getAttribute("data-client-feedback") || "";

  // إلغاء أي عملية كتابة جارية لمنع تداخل النصوص عند النقر المتكرر
  if (testimonialsTimeout) {
    clearTimeout(testimonialsTimeout);
  }

  const lineNumbersContainer = document.querySelector(".editor_code_area .line_numbers");

  if (currentViewMode === "normal") {
    // Hide line numbers in simple view mode
    if (lineNumbersContainer) {
      lineNumbersContainer.style.display = "none";
    }

    // Render beautiful formatted simple layout
    codeContentContainer.innerHTML = `
      <div class="simple_feedback_view">
        <div class="feedback_stars">${rating}</div>
        <div class="feedback_text">"${feedback}"</div>
        <div class="feedback_author">${name}</div>
        <div class="feedback_org">${org}</div>
      </div>
    `;
  } else {
    // Restore line numbers in JSON view mode
    if (lineNumbersContainer) {
      lineNumbersContainer.style.display = "flex";
    }

    const rawHtml = `
<span class="code_comment">/*</span>
<span class="code_comment"> * عميل_شركة_FOURSW</span>
<span class="code_comment"> * الجهة: ${org}</span>
<span class="code_comment"> */</span>
<span class="code_bracket">{</span>
  <span class="code_key">"العميل"</span>: <span class="code_val">"${name}"</span>,
  <span class="code_key">"التقييم"</span>: <span class="code_val">"${rating}"</span>,
  <span class="code_key">"الرأي"</span>: <span class="code_val">"${feedback}"</span>
<span class="code_bracket">}</span>
    `.trim();

    codeContentContainer.innerHTML = "";
    
    const lines = rawHtml.split("\n");
    let currentLineIndex = 0;
    
    function printNextLine() {
      // إزالة مؤشر الكتابة المؤقت السابق إن وجد
      const activeCursor = codeContentContainer.querySelector(".typing_cursor:not(.persistent)");
      if (activeCursor) {
        activeCursor.remove();
      }

      if (currentLineIndex < lines.length) {
        const lineDiv = document.createElement("div");
        lineDiv.className = "code_line";
        
        // إذا كان السطر الأخير نضيف مؤشراً وامضاً دائماً، وإلا نضيف مؤشر كتابة مؤقت
        if (currentLineIndex === lines.length - 1) {
          lineDiv.innerHTML = lines[currentLineIndex] + ' <span class="typing_cursor persistent">█</span>';
        } else {
          lineDiv.innerHTML = lines[currentLineIndex] + ' <span class="typing_cursor">█</span>';
        }
        
        codeContentContainer.appendChild(lineDiv);
        currentLineIndex++;
        testimonialsTimeout = setTimeout(printNextLine, 50);
      }
    }
    
    printNextLine();
  }
}

if (fileItems.length && codeContentContainer) {
  const sidebarTitle = document.querySelector(".editor_sidebar .sidebar_title");
  const editorSidebar = document.querySelector(".editor_sidebar");

  // Toggle collapse state on title click (only runs on mobile width)
  if (sidebarTitle && editorSidebar) {
    sidebarTitle.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        editorSidebar.classList.toggle("collapsed");
      }
    });

    // Default to collapsed state on mobile screens initially
    if (window.innerWidth <= 768) {
      editorSidebar.classList.add("collapsed");
    }
  }

  // Handle View Mode Toggle
  if (editorViewBtn) {
    editorViewBtn.addEventListener("click", () => {
      if (currentViewMode === "json") {
        currentViewMode = "normal";
        editorViewBtn.textContent = "[عرض_الكود]";
      } else {
        currentViewMode = "json";
        editorViewBtn.textContent = "[عرض_مبسط]";
      }
      
      const activeItem = document.querySelector(".file_item.active") || fileItems[0];
      if (activeItem) {
        renderTestimonialCode(activeItem);
      }
    });
  }

  fileItems.forEach((item) => {
    item.addEventListener("click", () => {
      fileItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      const fileName = item.querySelector(".file_name").textContent;

      if (activeTabTitleEl) {
        activeTabTitleEl.textContent = fileName;
      }

      renderTestimonialCode(item);

      // Auto-collapse list after selecting a file on mobile to show the content area
      if (window.innerWidth <= 768 && editorSidebar) {
        editorSidebar.classList.add("collapsed");
      }
    });
  });

  // Initial load
  const initialActive = document.querySelector(".file_item.active") || fileItems[0];
  renderTestimonialCode(initialActive);
}

// ================== TYPING TEXT =====================
function prepareTyping(el) {
  if (!el) return;
  if (!el.dataset.full) {
    el.dataset.full = el.textContent.trim();
  }
}

function stopTyping(el) {
  if (!el) return;
  if (el.timer) clearTimeout(el.timer);
  el.classList.remove("is-typing");
}

function startTyping(el, instant = false) {
  if (!el) return;

  prepareTyping(el);

  if (instant) {
    el.textContent = el.dataset.full || "";
    el.dataset.typed = "true";
    el.classList.add("is-done");
    el.classList.remove("is-typing");
    return;
  }

  if (el.dataset.typed === "true") {
    el.textContent = el.dataset.full || "";
    el.classList.add("is-done");
    el.classList.remove("is-typing");
    return;
  }

  stopTyping(el);

  const full = el.dataset.full || "";
  el.textContent = "";
  el.classList.add("is-typing");
  el.classList.remove("is-done");

  let i = 0;
  const speed = Number(el.dataset.speed || 28);

  function step() {
    const slide = el.closest(".swiper-slide");

    if (!slide || !slide.classList.contains("swiper-slide-active")) {
      stopTyping(el);
      return;
    }

    if (i < full.length) {
      el.textContent += full[i];
      i++;
      el.timer = setTimeout(step, speed);
    } else {
      el.classList.remove("is-typing");
      el.classList.add("is-done");
      el.dataset.typed = "true";
    }
  }

  step();
}

// ================== OUR COMPANY SWIPER =====================
function runTypingOnActiveSlide(swiper, instantFirst = false) {
  if (!swiper || !swiper.slides) return;

  const activeSlide = swiper.slides[swiper.activeIndex];
  if (!activeSlide) return;

  const text = activeSlide.querySelector(".typing_text");
  if (!text) return;

  if (instantFirst && !text.dataset.typed) {
    startTyping(text, true);
  } else {
    startTyping(text, false);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const swiperEl = document.querySelector(".marquee_swiper");
  const wrapper = swiperEl?.querySelector(".swiper-wrapper");
  if (!wrapper) return;

  // عدد مرات النسخ (يعني 3 => هيبقى عندك الأصل + 3 نسخ = 4 مرات)
  const copies = 5;

  // امنع التكرار لو الكود اتنفذ تاني
  if (!swiperEl.dataset.duplicated) {
    swiperEl.dataset.duplicated = "true";

    const original = wrapper.innerHTML;
    let html = original;
    for (let i = 0; i < copies; i++) {
      html += original;
    }
    wrapper.innerHTML = html;
  }

  const marqueeSwiper = new Swiper(".marquee_swiper", {
    slidesPerView: "auto",
    spaceBetween: 80,
    loop: true,
    speed: 7000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    allowTouchMove: false,

    // أنسب للـ marquee مع loop
    freeMode: false,
    slidesPerGroup: 1,
    loopAdditionalSlides: 20,
  });
});

// ================== SCROLL TO TOP BUTTON =====================
const scrollTopBtn = document.querySelector(".scrollTopBtn");
if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ================== WATCH VIDEO =====================
document.addEventListener("DOMContentLoaded", function () {
  const myVideo = document.getElementById("myVideo");

  if (!myVideo) return;

  const iframe = myVideo.querySelector("iframe");
  const closeVideo = document.getElementById("closeVideo");

  if (!iframe || !closeVideo) return;

  document.addEventListener("keydown", function (e) {
    const active = document.activeElement;

    const isTyping =
      active.tagName === "INPUT" ||
      active.tagName === "TEXTAREA" ||
      active.isContentEditable;

    if (!isTyping && e.ctrlKey && e.key.toLowerCase() === "k") {
      e.preventDefault();
      
      const watchVideoBtn = document.getElementById("watchVideo");
      if (watchVideoBtn) {
        watchVideoBtn.classList.add("active-press");
        setTimeout(() => {
          watchVideoBtn.classList.remove("active-press");
        }, 300);
      }

      myVideo.style.display = "flex";
    }
  });

  const watchVideoBtn = document.getElementById("watchVideo");
  if (watchVideoBtn) {
    watchVideoBtn.addEventListener("click", function () {
      myVideo.style.display = "flex";
    });
  }

  closeVideo.addEventListener("click", function () {
    myVideo.style.display = "none";
    // Reset iframe src to stop video play
    const originalSrc = iframe.src;
    iframe.src = "";
    iframe.src = originalSrc;
  });

  // Also close if clicking outside the video window
  myVideo.addEventListener("click", function (e) {
    if (e.target === myVideo) {
      myVideo.style.display = "none";
      const originalSrc = iframe.src;
      iframe.src = "";
      iframe.src = originalSrc;
    }
  });
});

// ================== CONTACT PAGE =====================
const checkbox = document.getElementById("checkbox");
const meetingOptions = document.querySelector(".cta_selecation");

if (checkbox && meetingOptions) {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      meetingOptions.style.display = "flex";
    } else {
      meetingOptions.style.display = "none";
    }
  });
}

// ================== ERROR EMAIL + POPUP =====================
const emailInput = document.getElementById("email");
const emailError = document.querySelector(".email_error");

if (emailInput && emailError) {
  emailInput.addEventListener("input", function () {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (this.value.trim() === "") {
      emailError.textContent = "يرجى إدخال البريد الإلكتروني";
      emailInput.classList.add("error");
    } else if (!emailPattern.test(this.value)) {
      emailError.textContent = "البريد الإلكتروني غير صحيح";
      emailInput.classList.add("error");
    } else {
      emailError.textContent = "";
      emailInput.classList.remove("error");
    }
  });
}

// ================== POPUP CONTACT =====================
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact_form");
  const contactContent = document.querySelector(".contact_content");
  const popupContact = document.querySelector(".popup_contact");

  if (!contactForm || !contactContent || !popupContact) return;

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // اخفاء الفورم
    contactContent.style.display = "none";

    // اظهار البوب اب
    popupContact.style.display = "flex";

    // تصفير الفورم
    contactForm.reset();
  });
});

// ================== ABOUT INTERACTIVE TABS =====================
document.addEventListener("DOMContentLoaded", () => {
  const sidebarItems = document.querySelectorAll(".sidebar_item");
  const tabPanes = document.querySelectorAll(".tab_pane");

  sidebarItems.forEach(item => {
    item.addEventListener("click", () => {
      sidebarItems.forEach(i => i.classList.remove("active"));
      tabPanes.forEach(pane => pane.classList.remove("active"));

      item.classList.add("active");
      const tabId = `tab_${item.getAttribute("data-tab")}`;
      const targetPane = document.getElementById(tabId);
      if (targetPane) {
        targetPane.classList.add("active");
      }
    });
  });
});

// ================== WHY SERVICES INTERACTIVE WIDGET =====================
document.addEventListener("DOMContentLoaded", () => {
  const serviceTabs = document.querySelectorAll("#whyServicesTabsList .service_tab");
  const workspaceTitle = document.getElementById("activeServiceTitleText");
  const workspaceBadge = document.getElementById("activePhaseTitleText");
  const workspaceContent = document.getElementById("serviceWorkspaceContent");
  const slideIndicator = document.getElementById("serviceSlideIndicator");
  const prevBtn = document.getElementById("prevServiceSlideBtn");
  const nextBtn = document.getElementById("nextServiceSlideBtn");

  let activeServiceIndex = 0;
  let activeSlideIndex = 0;

  function loadActiveSlide() {
    // Find the source template for current service index
    const sourceItem = document.querySelector(`.service_source_item[data-service-index="${activeServiceIndex}"]`);
    if (!sourceItem) return;

    // Get the slide template
    const slideSource = sourceItem.querySelector(`.slide_source_item[data-slide-index="${activeSlideIndex}"]`);
    if (!slideSource) return;

    // Update Header Text
    const serviceTitle = sourceItem.getAttribute("data-service-title");
    const phaseTitle = slideSource.getAttribute("data-phase-title");
    if (workspaceTitle) workspaceTitle.textContent = serviceTitle;
    if (workspaceBadge) workspaceBadge.textContent = phaseTitle;

    // Update Content
    if (workspaceContent) {
      workspaceContent.innerHTML = slideSource.innerHTML;
      // Re-initialize any inner elements such as gallery sliders or image clicks
      setupGallerySwipers(workspaceContent);
      
      // Inject cyber corners into newly rendered elements inside the workspace
      if (typeof window.injectCyberCorners === "function") {
        window.injectCyberCorners(workspaceContent);
      }
    }

    // Update Slide Indicator
    if (slideIndicator) {
      slideIndicator.textContent = `0${activeSlideIndex + 1}/03`;
    }

    // Update Footer CTA Button from active slide
    const ctaBtn = document.getElementById("serviceActiveCta");
    const originalCta = slideSource.querySelector(".cta_wrapper a");
    if (ctaBtn && originalCta) {
      ctaBtn.textContent = originalCta.textContent;
      ctaBtn.setAttribute("href", originalCta.getAttribute("href"));
      ctaBtn.style.display = "inline-flex";
    } else if (ctaBtn) {
      ctaBtn.style.display = "none";
    }
  }

  function setupGallerySwipers(container) {
    // Gallery Image Lightbox setup
    const images = container.querySelectorAll(".gallery_thumbnail_img");
    const lightbox = document.getElementById("whyServicesLightbox");
    const lightboxImg = document.getElementById("whyServicesLightboxImg");
    const lightboxClose = document.getElementById("whyServicesLightboxClose");

    if (images.length && lightbox && lightboxImg) {
      images.forEach(img => {
        img.addEventListener("click", () => {
          lightboxImg.src = img.src;
          lightbox.style.display = "block";
        });
      });
    }

    if (lightboxClose && lightbox) {
      lightboxClose.addEventListener("click", () => {
        lightbox.style.display = "none";
      });
      lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
          lightbox.style.display = "none";
        }
      });
    }
    
    // Setup a simple custom sliding/switching for thumbnail track if needed
    const galleryPrev = container.querySelector(".gallery_prev");
    const galleryNext = container.querySelector(".gallery_next");
    const track = container.querySelector(".swiper_images_track");
    
    if (track && galleryPrev && galleryNext) {
      galleryPrev.addEventListener("click", () => {
        track.scrollBy({ left: -200, behavior: "smooth" });
      });
      galleryNext.addEventListener("click", () => {
        track.scrollBy({ left: 200, behavior: "smooth" });
      });
    }
  }

  // Tab Selection
  serviceTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      serviceTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      activeServiceIndex = parseInt(tab.getAttribute("data-service-index"), 10);
      activeSlideIndex = 0; // reset to first slide when switching services
      loadActiveSlide();
    });
  });

  // Slide Navigation (Next / Prev)
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (activeSlideIndex > 0) {
        activeSlideIndex--;
        loadActiveSlide();
      } else {
        // Loop back to last slide
        activeSlideIndex = 2;
        loadActiveSlide();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (activeSlideIndex < 2) {
        activeSlideIndex++;
        loadActiveSlide();
      } else {
        // Loop back to first slide
        activeSlideIndex = 0;
        loadActiveSlide();
      }
    });
  }

  // Initial load
  loadActiveSlide();
});

// ================== DYNAMIC CYBER CORNERS GENERATOR =====================
window.injectCyberCorners = function (container = document) {
  const cornersHTML = `
    <div class="cyber-corner top_left"></div>
    <div class="cyber-corner top_right"></div>
    <div class="cyber-corner bottom_left"></div>
    <div class="cyber-corner bottom_right"></div>
  `;
  container.querySelectorAll(".cyber-corners").forEach(el => {
    // Only inject if they do not already have corners injected
    if (!el.querySelector(".cyber-corner")) {
      el.insertAdjacentHTML("beforeend", cornersHTML);
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  window.injectCyberCorners();
});

// ================== DYNAMIC PARTNER LOGO SHUFFLER =====================
document.addEventListener("DOMContentLoaded", () => {
  const sourceContainer = document.querySelector(".partner_logos_source");
  let logoPool = [];
  if (sourceContainer) {
    logoPool = Array.from(sourceContainer.querySelectorAll("img")).map(img => img.getAttribute("src"));
  }
  
  // Fallback if container is missing or empty
  if (logoPool.length === 0) {
    logoPool = [
      "assets/image/company1.png",
      "assets/image/company2.png",
      "assets/image/company3.png",
      "assets/image/company4.png",
      "assets/image/company5.png"
    ];
  }

  const cards = Array.from(document.querySelectorAll(".partner_node_card"));
  if (cards.length === 0) return;

  // Track which logos are currently visible in which card slots
  let activeLogos = cards.map(card => {
    const img = card.querySelector("img");
    return img ? img.getAttribute("src") : "";
  });

  // Periodically shuffle logos
  setInterval(() => {
    // Filter cards that are NOT hovered by user
    const eligibleCards = cards.filter(card => !card.matches(":hover"));
    if (eligibleCards.length === 0) return;

    // Pick one random card from eligible cards to fade out and swap
    const targetCard = eligibleCards[Math.floor(Math.random() * eligibleCards.length)];
    const targetCardIndex = cards.indexOf(targetCard);
    const img = targetCard.querySelector("img");
    if (!img) return;

    const currentLogo = activeLogos[targetCardIndex];

    // Find logos in the pool that are NOT currently visible on screen
    let availableLogos = logoPool.filter(logo => !activeLogos.includes(logo));

    // If no invisible logos exist (e.g. pool size <= 6), pick any logo from the pool that is different from current one
    if (availableLogos.length === 0) {
      availableLogos = logoPool.filter(logo => logo !== currentLogo);
    }

    if (availableLogos.length === 0) return;

    const nextLogo = availableLogos[Math.floor(Math.random() * availableLogos.length)];

    // Fade out
    targetCard.style.opacity = "0";
    targetCard.style.transform = "scale(0.9)";

    setTimeout(() => {
      // Swap image src
      img.setAttribute("src", nextLogo);
      activeLogos[targetCardIndex] = nextLogo;

      // Fade in
      targetCard.style.opacity = "1";
      targetCard.style.transform = "scale(1)";
    }, 400); // match transition time
  }, 3000); // Shuffles one card every 3 seconds
});

// ================== FOOTER DIGITAL CLOCK & MONITOR =====================
document.addEventListener("DOMContentLoaded", () => {
  const clockEl = document.getElementById("footerDigitalClock");
  const pingEl = document.getElementById("digitalPing");

  if (clockEl) {
    function updateClock() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      clockEl.textContent = `${hours}:${minutes}:${seconds}`;
    }
    updateClock();
    setInterval(updateClock, 1000);
  }

  if (pingEl) {
    setInterval(() => {
      const randomPing = Math.floor(Math.random() * 18) + 8; // 8ms to 25ms
      pingEl.textContent = `الاستجابة: ${randomPing}ms`;
    }, 4000);
  }
});

// ================== LIVE INTERACTIVE FOOTER CANVAS =====================
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("footerCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const footer = canvas.parentElement;

  let width = (canvas.width = footer.clientWidth);
  let height = (canvas.height = footer.clientHeight);

  const particles = [];
  const particleCount = 35;
  const connectionDistance = 90;
  const mouseConnectionDistance = 140;

  const mouse = {
    x: null,
    y: null,
  };

  // Resize handler
  window.addEventListener("resize", () => {
    width = canvas.width = footer.clientWidth;
    height = canvas.height = footer.clientHeight;
  });

  // Mouse move handler relative to footer bounding box
  footer.addEventListener("mousemove", (e) => {
    const rect = footer.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  footer.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Particle Class
  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 1.5 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce off walls
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(50, 138, 241, 0.4)";
      ctx.fill();
    }
  }

  // Initialize particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw grid guide pattern lines subtly
    ctx.strokeStyle = "rgba(50, 138, 241, 0.015)";
    ctx.lineWidth = 1;
    const gridSize = 40;
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Update and draw particles
    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    // Draw connections between nodes
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];

      // Draw connections to mouse
      if (mouse.x !== null && mouse.y !== null) {
        const dx = p1.x - mouse.x;
        const dy = p1.y - mouse.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouseConnectionDistance) {
          const alpha = (1 - dist / mouseConnectionDistance) * 0.35;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(50, 138, 241, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Connective dot highlight
          ctx.beginPath();
          ctx.arc(p1.x, p1.y, p1.radius + 1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(100, 166, 247, ${alpha})`;
          ctx.fill();
        }
      }

      // Draw connections between nodes
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.hypot(dx, dy);

        if (dist < connectionDistance) {
          const alpha = (1 - dist / connectionDistance) * 0.15;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(50, 138, 241, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
});




/* ==================== GLOBAL CYBER DECORATIONS & NAVIGATION ==================== */

  // Global Mobile Menu Matrix Rain Canvas Animation & Sound effects
  const canvas = document.querySelector(".menu_matrix_canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = canvas.offsetWidth || 300);
    let height = (canvas.height = canvas.offsetHeight || 300);

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
      }
    });
    const menuContainer = document.querySelector(".mobile_menu");
    if (menuContainer) resizeObserver.observe(menuContainer);

    const alphabet = "01010101ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$*+-//<>";
    const fontSize = 10;
    const columns = Math.floor(width / fontSize) || 20;
    const rainDrops = Array(columns).fill(1);

    function drawMatrix() {
      ctx.fillStyle = "rgba(3, 5, 19, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "rgba(50, 138, 241, 0.35)";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    }
    setInterval(drawMatrix, 35);
  }

  function playCyberSound(freq, duration, type = "sine") {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.type = type;
      oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
      
      gainNode.gain.setValueAtTime(0.02, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + duration);

      oscillator.start();
      oscillator.stop(audioCtx.currentTime + duration);
    } catch (e) {}
  }

  const menuLinks = document.querySelectorAll(".mobile_menu .nav_link");
  menuLinks.forEach(link => {
    link.addEventListener("mouseenter", () => playCyberSound(950, 0.08, "triangle"));
    link.addEventListener("click", () => playCyberSound(1400, 0.15, "sine"));
  });

  document.addEventListener("click", (event) => {
    const toggleBtn = document.querySelector(".nav_toggle");
    const menu = document.querySelector(".mobile_menu");
    if (menu && menu.classList.contains("show")) {
      if (!menu.contains(event.target) && !toggleBtn.contains(event.target)) {
        menu.classList.remove("show");
        const icon = toggleBtn.querySelector("i");
        if (icon) icon.className = "fa-solid fa-bars";
        playCyberSound(700, 0.08, "sine");
      }
    }
  });



/* ==================== SCRIPTS FROM blog-single.html ==================== */
document.addEventListener("DOMContentLoaded", () => {
        const zoomOverlays = document.querySelectorAll(".blog_zoom_overlay");
        const lightbox = document.getElementById("blogLightbox");
        const lightboxImg = document.getElementById("blogLightboxImg");
        const lightboxClose = document.getElementById("blogLightboxClose");

        if (zoomOverlays.length && lightbox && lightboxImg) {
          zoomOverlays.forEach(overlay => {
            overlay.addEventListener("click", (e) => {
              e.preventDefault();
              e.stopPropagation();

              const img = overlay.parentElement.querySelector("img");
              if (img) {
                lightboxImg.src = img.src;
                lightbox.style.display = "block";
              }
            });
          });

          lightboxClose.addEventListener("click", () => {
            lightbox.style.display = "none";
          });

          lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
              lightbox.style.display = "none";
            }
          });
        }
      });


/* ==================== SCRIPTS FROM blog.html ==================== */
document.addEventListener("DOMContentLoaded", () => {
        const zoomOverlays = document.querySelectorAll(".blog_zoom_overlay");
        const lightbox = document.getElementById("blogLightbox");
        const lightboxImg = document.getElementById("blogLightboxImg");
        const lightboxClose = document.getElementById("blogLightboxClose");

        if (zoomOverlays.length && lightbox && lightboxImg) {
          zoomOverlays.forEach(overlay => {
            overlay.addEventListener("click", (e) => {
              // Prevent navigating to blog-single.html
              e.preventDefault();
              e.stopPropagation();

              // Get original image src
              const img = overlay.parentElement.querySelector("img");
              if (img) {
                lightboxImg.src = img.src;
                lightbox.style.display = "block";
              }
            });
          });
        }

        if (lightboxClose && lightbox) {
          lightboxClose.addEventListener("click", () => {
            lightbox.style.display = "none";
          });
          lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
              lightbox.style.display = "none";
            }
          });
        }
      });


/* ==================== SCRIPTS FROM contact.html ==================== */
document.addEventListener("DOMContentLoaded", () => {
        // Toggle mobile menu script
        const toggle = document.querySelector(".nav_toggle");
        const mobileMenu = document.querySelector(".mobile_menu");
        if (toggle && mobileMenu) {
          toggle.addEventListener("click", (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle("show");
            const icon = toggle.querySelector("i");
            if (icon) {
              if (mobileMenu.classList.contains("show")) {
                icon.className = "fa-solid fa-xmark";
              } else {
                icon.className = "fa-solid fa-bars";
              }
            }
          });
        }

        // Custom Select Dropdowns Logic
        const customSelects = document.querySelectorAll(".custom_select");
        customSelects.forEach(select => {
          const trigger = select.querySelector(".custom_select_trigger");
          const options = select.querySelectorAll(".custom_select_option");

          // Open/Close dropdown
          trigger.addEventListener("click", (e) => {
            e.stopPropagation();
            
            // Close other custom dropdowns
            customSelects.forEach(s => {
              if (s !== select) s.classList.remove("open");
            });

            select.classList.toggle("open");
          });

          // Option selection
          options.forEach(opt => {
            opt.addEventListener("click", (e) => {
              e.stopPropagation();
              const val = opt.getAttribute("data-value");
              const displayVal = opt.getAttribute("data-display") || val;

              // Update trigger text & data-value
              trigger.innerText = displayVal;
              select.setAttribute("data-value", val);

              // Update active selected classes
              options.forEach(o => o.classList.remove("selected"));
              opt.classList.add("selected");

              select.classList.remove("open");
            });
          });
        });

        // Close custom dropdowns when clicking outside
        document.addEventListener("click", () => {
          customSelects.forEach(s => s.classList.remove("open"));
        });

        // Slide toggle meeting area fields
        const meetToggle = document.getElementById("meetToggle");
        const meetingFields = document.getElementById("meetingFields");
        if (meetToggle && meetingFields) {
          meetToggle.addEventListener("change", () => {
            if (meetToggle.checked) {
              meetingFields.classList.add("show");
            } else {
              meetingFields.classList.remove("show");
            }
          });
        }

        // Popup trigger utility
        const popup = document.getElementById("terminalPopup");
        const popupWindow = document.getElementById("popupWindow");
        const popupTerminalTitle = document.getElementById("popupTerminalTitle");
        const popupIcon = document.getElementById("popupIcon");
        const popupMsgTitle = document.getElementById("popupMsgTitle");
        const popupMsgText = document.getElementById("popupMsgText");

        function showStatusPopup(isSuccess, title, message) {
          if (!popup || !popupWindow) return;

          // Clear previous state classes
          popupWindow.className = "terminal_window";

          if (isSuccess) {
            popupWindow.classList.add("success_style");
            popupTerminalTitle.innerText = "SYSTEM // RESPONSE_SUCCESS";
            popupIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
          } else {
            popupWindow.classList.add("error_style");
            popupTerminalTitle.innerText = "SYSTEM // RESPONSE_FAILURE";
            popupIcon.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
          }

          popupMsgTitle.innerText = title;
          popupMsgText.innerText = message;
          popup.classList.add("active");
        }

        // Close popup listeners
        const closePopupBtn = document.getElementById("closePopupBtn");
        const popupActionBtn = document.getElementById("popupActionBtn");
        const closePopup = () => popup.classList.remove("active");

        if (closePopupBtn) closePopupBtn.addEventListener("click", closePopup);
        if (popupActionBtn) popupActionBtn.addEventListener("click", closePopup);
        if (popup) {
          popup.addEventListener("click", (e) => {
            if (e.target === popup) closePopup();
          });
        }

        // Handle Form Submit
        const cyberForm = document.getElementById("cyberContactForm");
        if (cyberForm) {
          cyberForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailVal = document.getElementById("contactEmail").value;
            const phoneVal = document.getElementById("contactPhone").value;

            if (emailVal && phoneVal) {
              let meetDetails = "";
              if (meetToggle && meetToggle.checked) {
                const dayVal = document.getElementById("meetDaySelect").getAttribute("data-value");
                const hourVal = document.getElementById("meetHourSelect").getAttribute("data-value");
                const minuteVal = document.getElementById("meetMinuteSelect").getAttribute("data-value");
                const meridiemVal = document.getElementById("meetMeridiemSelect").getAttribute("data-value");
                const typeVal = document.getElementById("meetTypeSelect").getAttribute("data-value");
                meetDetails = ` وتم حجز موعد المقابلة يوم ${dayVal} الساعة ${hourVal}:${minuteVal} ${meridiemVal} (${typeVal}).`;
              }
              
              showStatusPopup(
                true,
                "تم تسجيل بياناتك بنجاح",
                `لقد استلمنا طلب التواصل الخاص بك بنجاح لبيانات البريد: ${emailVal}.${meetDetails} سيقوم مهندسونا بمراجعته خلال مدة لا تتجاوز ٢٤ ساعة.`
              );
              cyberForm.reset();
              if (meetingFields) meetingFields.classList.remove("show");
            } else {
              showStatusPopup(
                false,
                "فشل في تسجيل البيانات",
                "يرجى التحقق من إدخال جميع الحقول الأساسية بشكل صحيح وإعادة المحاولة مرة أخرى."
              );
            }
          });
        }

        // Instant Meeting Button
        const btnInstantMeet = document.getElementById("btnInstantMeet");
        if (btnInstantMeet) {
          btnInstantMeet.addEventListener("click", () => {
            showStatusPopup(
              true,
              "جاري الاتصال بقنوات البث المباشر",
              "جاري تجهيز ميتنج فوري وسريع للتحدث مع المهندس المختص. يرجى الانتظار لحين تحميل نافذة الاتصال..."
            );
            setTimeout(() => {
              window.open("https://meet.google.com/new", "_blank");
            }, 2000);
          });
        }
      });


/* ==================== SCRIPTS FROM project-single.html ==================== */
document.addEventListener("DOMContentLoaded", () => {
        // Toggle mobile menu script
        const toggle = document.querySelector(".nav_toggle");
        const mobileMenu = document.querySelector(".mobile_menu");
        if (toggle && mobileMenu) {
          toggle.addEventListener("click", (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle("show");
            const icon = toggle.querySelector("i");
            if (icon) {
              if (mobileMenu.classList.contains("show")) {
                icon.className = "fa-solid fa-xmark";
              } else {
                icon.className = "fa-solid fa-bars";
              }
            }
          });
        }

        // Functional Cyber Accordion Tabs System
        const accordionHeaders = document.querySelectorAll(".cyber_accordion_header");

        accordionHeaders.forEach(header => {
          header.addEventListener("click", () => {
            const item = header.parentElement;
            const content = item.querySelector(".cyber_accordion_content");

            // If it is already open, do nothing (keep at least one open) or toggle it.
            // Request said: "ولو ضغط علي غيرها المفتوح يتقفل واللي ضغط عليها تتفتح"
            if (item.classList.contains("open")) {
              return;
            }

            // Close all items
            const allItems = document.querySelectorAll(".cyber_accordion_item");
            allItems.forEach(i => {
              i.classList.remove("open");
              i.querySelector(".cyber_accordion_content").style.maxHeight = null;
            });

            // Open clicked item
            item.classList.add("open");
            content.style.maxHeight = content.scrollHeight + "px";
          });
        });

        // Lightbox Modal trigger
        const zoomOverlays = document.querySelectorAll(".project_zoom_overlay");
        const lightbox = document.getElementById("projectLightbox");
        const lightboxImg = document.getElementById("projectLightboxImg");
        const lightboxClose = document.getElementById("projectLightboxClose");

        if (zoomOverlays.length && lightbox && lightboxImg) {
          zoomOverlays.forEach(overlay => {
            overlay.addEventListener("click", (e) => {
              e.preventDefault();
              const img = overlay.parentElement.querySelector("img");
              if (img) {
                lightboxImg.src = img.src;
                lightbox.style.display = "flex";
              }
            });
          });
        }

        if (lightboxClose && lightbox) {
          lightboxClose.addEventListener("click", () => {
            lightbox.style.display = "none";
          });
          lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
              lightbox.style.display = "none";
            }
          });
        }
      });


/* ==================== SCRIPTS FROM projects.html ==================== */
document.addEventListener("DOMContentLoaded", () => {
        // Toggle mobile menu script
        const toggle = document.querySelector(".nav_toggle");
        const mobileMenu = document.querySelector(".mobile_menu");
        if (toggle && mobileMenu) {
          toggle.addEventListener("click", (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle("show");
            const icon = toggle.querySelector("i");
            if (icon) {
              if (mobileMenu.classList.contains("show")) {
                icon.className = "fa-solid fa-xmark";
              } else {
                icon.className = "fa-solid fa-bars";
              }
            }
          });
        }

        // Functional Filter System with Glitch Transition Effect
        const filterButtons = document.querySelectorAll(".filter_btn");
        const projectCards = document.querySelectorAll(".project_card");
        const projectsGrid = document.getElementById("projectsGrid");

        filterButtons.forEach(btn => {
          btn.addEventListener("click", () => {
            // Remove active class from other buttons
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            // Apply glitch effect to the grid
            if (projectsGrid) {
              projectsGrid.classList.add("glitch-active");
              setTimeout(() => {
                projectsGrid.classList.remove("glitch-active");
              }, 350);
            }

            const filterValue = btn.getAttribute("data-filter");

            projectCards.forEach(card => {
              if (filterValue === "all") {
                card.style.display = "flex";
              } else {
                const category = card.getAttribute("data-category");
                if (category === filterValue) {
                  card.style.display = "flex";
                } else {
                  card.style.display = "none";
                }
              }
            });
          });
        });

        // Lightbox Modal trigger (stoppropagation to avoid triggering card link click)
        const zoomOverlays = document.querySelectorAll(".project_zoom_overlay");
        const lightbox = document.getElementById("projectLightbox");
        const lightboxImg = document.getElementById("projectLightboxImg");
        const lightboxClose = document.getElementById("projectLightboxClose");

        if (zoomOverlays.length && lightbox && lightboxImg) {
          zoomOverlays.forEach(overlay => {
            overlay.addEventListener("click", (e) => {
              e.preventDefault();
              e.stopPropagation(); // Stop link redirection
              const img = overlay.parentElement.querySelector("img");
              if (img) {
                lightboxImg.src = img.src;
                lightbox.style.display = "flex";
              }
            });
          });
        }

        if (lightboxClose && lightbox) {
          lightboxClose.addEventListener("click", () => {
            lightbox.style.display = "none";
          });
          lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
              lightbox.style.display = "none";
            }
          });
        }
      });


/* ==================== SCRIPTS FROM services.html ==================== */
document.addEventListener("DOMContentLoaded", () => {
        // Toggle mobile menu script
        const toggle = document.querySelector(".nav_toggle");
        const mobileMenu = document.querySelector(".mobile_menu");
        if (toggle && mobileMenu) {
          toggle.addEventListener("click", (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle("show");
            const icon = toggle.querySelector("i");
            if (icon) {
              if (mobileMenu.classList.contains("show")) {
                icon.className = "fa-solid fa-xmark";
              } else {
                icon.className = "fa-solid fa-bars";
              }
            }
          });
        }

        // Services Switch HUD HUD Display Logic
        const servicesData = [
          {
            category: "[مخصص_للأكاديميات_التعليمية]",
            title: "[Quizzes_Plugin]",
            desc: "إضافة متكاملة لأي موقع تعليمي لتمكين الاختبارات التفاعلية والتقييمات الذكية المباشرة لطلابك.",
            status: "نشط",
            version: "[إصدار_2.4_مستقر]",
            badge: "إضافات",
            img: "assets/image/service1.png",
            tags: ["[اختبارات_ذكية]", "[تصحيح_تلقائي]", "[تقارير_فورية]"],
            features: [
              "دعم أكثر من منصة اختبارات بنفس الوقت",
              "تخصيص شكل الامتحان حسب هويتك الخاصة",
              "ربط وتصنيف الاختبارات بالمستويات الدراسية",
              "توحيد حساب الطالب (تسجيل الدخول الموحد)",
            ],
          },
          {
            category: "[مخصص_للمتاجر_الإلكترونية]",
            title: "[Secure_Pay_Gateway]",
            desc: "ربط آمن وسلس لبوابات الدفع الإلكتروني المتعددة مع فواتير تلقائية ونظام تشفير متطور.",
            status: "متصل",
            version: "[إصدار_1.8_مستقر]",
            badge: "ربط برمجيات",
            img: "assets/image/service2.png",
            tags: ["[دفع_آمن]", "[فواتير_تلقائية]", "[دعم_الفيزا]"],
            features: [
              "ربط بوابات الدفع (فيزا، ماستر كارد، فودافون كاش)",
              "إصدار وتوجيه الفواتير الإلكترونية تلقائياً",
              "أعلى معايير الأمان والتشفير لحماية البيانات",
              "لوحة تحكم كاملة لإدارة المبيعات والأرباح",
            ],
          },
          {
            category: "[مخصص_للمواقع_الإخبارية]",
            title: "[SEO_Auto_Analytics]",
            desc: "أرشفة تلقائية فورية للمحتوى في محركات البحث ومتابعة الكلمات المفتاحية للحصول على ترتيب أفضل.",
            status: "مستقر",
            version: "[إصدار_3.0_مستقر]",
            badge: "أدوات سيو",
            img: "assets/image/service3.png",
            tags: ["[أرشفة_تلقائية]", "[تهيئة_سيو]", "[تحليلات_جوجل]"],
            features: [
              "أرشفة تلقائية فورية للمقالات والصفحات",
              "توليد تلقائي لخرائط الموقع وتحديثها",
              "تتبع الكلمات المفتاحية ومراكز الظهور اليومية",
              "تقارير أداء دورية مرسلة لبريدك مباشرة",
            ],
          },
          {
            category: "[مخصص_لخدمة_العملاء]",
            title: "[WhatsApp_CRM_Bot]",
            desc: "روبوت دردشة ذكي مؤتمت لتلقي طلبات الشراء، حجز المواعيد والرد الفوري على عملائك عبر واتساب.",
            status: "قيد الاختبار",
            version: "[إصدار_1.1_تجريبي]",
            badge: "بوتات دردشة",
            img: "assets/image/service4.png",
            tags: ["[رد_تلقائي]", "[تكامل_CRM]", "[حفظ_العملاء]"],
            features: [
              "رد آلي فوري على استفسارات العملاء 24/7",
              "إمكانية إتمام عمليات الشراء بالكامل عبر المحادثة",
              "ربط مباشر مع نظام إدارة العملاء والطلبات",
              "إرسال إشعارات الشحن ومتابعة الطلب للعميل",
            ],
          },
        ];

        const miniCards = document.querySelectorAll(".mini_service_card");
        const mainDisplay = document.getElementById("mainServiceDisplay");

        if (miniCards.length && mainDisplay) {
          miniCards.forEach((card) => {
            card.addEventListener("click", () => {
              // Switch active class
              miniCards.forEach((c) => c.classList.remove("active"));
              card.classList.add("active");

              const idx = parseInt(card.getAttribute("data-service-index"), 10);
              const data = servicesData[idx];

              if (data) {
                // Update text elements
                document.getElementById("mainServiceCategory").textContent =
                  data.category;
                document.getElementById("mainServiceTitle").textContent =
                  data.title;
                document.getElementById("mainServiceDesc").textContent =
                  data.desc;
                document.getElementById("mainServiceStatus").textContent =
                  "الحالة: " + data.status;
                document.getElementById("mainServiceVersion").textContent =
                  data.version;
                document.getElementById("mainServiceBadge").textContent =
                  data.badge;
                document.getElementById("mainServiceWindowPath").textContent =
                  "foursw://services/" +
                  data.title.toLowerCase().replace(/\[|\]/g, "");

                // Update Image
                const imgEl = document.getElementById("mainServiceImg");
                if (imgEl) {
                  imgEl.src = data.img;
                }

                // Update tags
                const tagsEl = document.getElementById("mainServiceTags");
                if (tagsEl) {
                  tagsEl.innerHTML = data.tags
                    .map((t) => `<span class="tag">${t}</span>`)
                    .join("");
                }

                // Update Features
                const featuresEl = document.getElementById(
                  "mainServiceFeatures",
                );
                if (featuresEl) {
                  featuresEl.innerHTML = data.features
                    .map(
                      (f) => `<li><span class="feature_dot">■</span>${f}</li>`,
                    )
                    .join("");
                }
              }
            });
          });
        }
      });


// ================== CYBER PRELOADER LOGIC & AUDIO SYNTHESIS =====================
(function() {
  const preloader = document.getElementById('cyber-preloader');
  if (!preloader) return;

  const urlParams = new URLSearchParams(window.location.search);
  const forceIntro = urlParams.get('intro') === 'true';
  const hasVisited = sessionStorage.getItem('foursw_visited');

  // If visited and not forced, remove immediately
  if (hasVisited && !forceIntro) {
    preloader.remove();
    return;
  }

  // Prevent scroll during loading
  document.body.style.overflow = 'hidden';

  const audioInitBtn = document.getElementById('audio-init-btn');
  const audioInitOverlay = document.getElementById('audio-init-overlay');
  const progressBarInner = document.getElementById('progress-bar-inner');
  const progressPercent = document.getElementById('progress-percent');
  const terminal = document.getElementById('preloader-terminal');

  let audioCtx = null;
  let audioEnabled = false;

  // Web Audio Synth Function
  function playBeep(freq, duration, type = 'sine', vol = 0.1) {
    if (!audioEnabled || !audioCtx) return;
    try {
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      osc.type = type;
      osc.frequency.value = freq;
      
      gainNode.gain.setValueAtTime(vol, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch(e) {
      console.warn("Audio play failed:", e);
    }
  }

  function playPowerUpHum() {
    if (!audioEnabled || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(50, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 4.5);
      
      gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.04, audioCtx.currentTime + 3);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 4.8);
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + 4.9);
    } catch(e) {}
  }

  function playGlitchSweep() {
    if (!audioEnabled || !audioCtx) return;
    try {
      // Create a glitchy electronic transition noise sweep
      const duration = 0.8;
      const osc1 = audioCtx.createOscillator();
      const osc2 = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(120, audioCtx.currentTime);
      osc1.frequency.linearRampToValueAtTime(600, audioCtx.currentTime + duration * 0.4);
      osc1.frequency.setValueAtTime(200, audioCtx.currentTime + duration * 0.4);
      osc1.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + duration);

      osc2.type = 'square';
      osc2.frequency.setValueAtTime(80, audioCtx.currentTime);
      osc2.frequency.setValueAtTime(400, audioCtx.currentTime + duration * 0.3);
      osc2.frequency.setValueAtTime(100, audioCtx.currentTime + duration * 0.6);
      osc2.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + duration);
      
      gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.12, audioCtx.currentTime + duration * 0.5);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
      
      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      osc1.start();
      osc1.stop(audioCtx.currentTime + duration);
      osc2.start();
      osc2.stop(audioCtx.currentTime + duration);
    } catch(e) {}
  }

  const logs = [
    { time: 0, text: "> جاري تحميل الخطوط البرمجية والأيقونات الأساسية للموقع...", type: "info" },
    { time: 700, text: "> جاري تهيئة الهيكل البصري وأنماط الصفحة المتوافقة [تمت بنجاح]...", type: "success" },
    { time: 1400, text: "> جاري تحميل وتأمين العناصر الرسومية المخصصة...", type: "info" },
    { time: 2100, text: "> إعداد نصوص التفاعل وواجهات التحريك البرمجية الفعالة...", type: "info" },
    { time: 2800, text: "> التحقق من استقرار ومزامنة الاتصال مع خادم فورسو الخاص...", type: "success" },
    { time: 3500, text: "> تجميع عناصر الواجهة وعرض المحتوى الرقمي النهائي...", type: "info" },
    { time: 4200, text: "> اكتمل بناء وتحميل الصفحة بنجاح. جاري الدخول للموقع...", type: "warning" }
  ];

  function addTerminalLine(text, type) {
    const line = document.createElement('div');
    line.className = 'terminal-line';
    if (type === 'success') line.classList.add('success');
    if (type === 'warning') line.classList.add('warning');
    line.textContent = text;
    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
    
    // Play short log beep
    if (audioEnabled) {
      playBeep(type === 'success' ? 900 : 700, 0.05, 'square', 0.05);
    }
  }

  function startBootSequence() {
    // Hide overlay
    audioInitOverlay.style.opacity = '0';
    setTimeout(() => {
      audioInitOverlay.style.display = 'none';
    }, 500);

    // Play initial boot chime
    setTimeout(() => {
      playBeep(440, 0.15, 'sine', 0.08);
      setTimeout(() => playBeep(880, 0.3, 'sine', 0.08), 150);
      playPowerUpHum();
    }, 300);

    // Print logs
    logs.forEach(log => {
      setTimeout(() => {
        addTerminalLine(log.text, log.type);
      }, log.time);
    });

    // Progress Bar Animation
    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;
      progressBarInner.style.width = progress + '%';
      progressPercent.textContent = progress + '%';

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(completeBootSequence, 400);
      }
    }, 45); // ~4.5 seconds + 0.5s transition = 5s total
  }

  function completeBootSequence() {
    playGlitchSweep();
    preloader.classList.add('preloader-hide');
    document.body.classList.add('body-glitch-active');
    
    sessionStorage.setItem('foursw_visited', 'true');
    
    setTimeout(() => {
      preloader.remove();
      document.body.style.overflow = '';
      // Remove glitch class after some time
      setTimeout(() => {
        document.body.classList.remove('body-glitch-active');
      }, 1000);
    }, 800);
  }

  // Event listener to trigger boot
  audioInitBtn.addEventListener('click', () => {
    // Setup Audio Context
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
      audioEnabled = true;
    } catch(e) {
      console.warn("Audio Context not supported", e);
    }
    startBootSequence();
  });
})();





