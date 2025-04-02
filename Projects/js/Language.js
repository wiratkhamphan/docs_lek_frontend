document.addEventListener("DOMContentLoaded", function () {
    const texts = {
        en: {
            home: "Home",
            about: "About",
            projects: "Projects",
            contact: "Contact",
        },
        th: {
            home: "หน้าหลัก",
            about: "เกี่ยวกับ",
            projects: "โปรเจค",
            contact: "ติดต่อ",
        }
    };

    const langThBtn = document.getElementById("lang-th");
    const langEnBtn = document.getElementById("lang-en");

    function changeLanguage(lang) {
        const elements = {
            home: document.querySelector(".nav-link[data-lang='home']"),
            about: document.querySelector(".nav-link[data-lang='about']"),
            projects: document.querySelector(".nav-link[data-lang='projects']"),
            contact: document.querySelector(".nav-link[data-lang='contact']"),
            hire: document.querySelector(".featured-text-btn .btn.blue-btn"),
            projects:document.querySelector("#projects .top-header h1"),
 

        };

        for (const key in elements) {
            if (elements[key]) {
                elements[key].textContent = texts[lang][key];
            }
        }

        // เพิ่มไอคอนสำหรับ Download CV
        if (elements.downloadCV) {
            elements.downloadCV.innerHTML = texts[lang].downloadCV + ' <i class="uil uil-file-alt"></i>';
        }

        localStorage.setItem("language", lang);
        langThBtn.classList.toggle("active", lang === "th");
        langEnBtn.classList.toggle("active", lang === "en");
    }

    langThBtn.addEventListener("click", () => changeLanguage("th"));
    langEnBtn.addEventListener("click", () => changeLanguage("en"));

    // โหลดภาษาล่าสุดที่เลือกไว้
    const savedLang = localStorage.getItem("language") || "en";
    changeLanguage(savedLang);
});
