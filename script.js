// script.js

document.addEventListener("DOMContentLoaded", () => {

    // --- DICTIONARY FOR TRANSLATION ---
    const translations = {
        en: {
            pageTitle: "David He | Portfolio",
            name: "David He",
            heroDescription: "I enjoy learning various technologies and developing games. I'm always enthusiastic on learning, building new skills, and bringing ideas to life.",
            myWork: "My Work",
            proj1Title: "Extreme Sports Game (2025)",
            proj1Desc: "A collaborative development project where I was responsible for level design and generation, as well as core gameplay implementation.",
            proj2Title: "2D Pixel Mecha Shooter (2024)",
            proj2Desc: "Fully implemented a 2D dual joystick shooter in C++ for the Warwick University Game Jam, including custom NPC data, a data-driven map, collision detection, and animations.",
            proj3Title: "PCG City Generator (2024-2025)",
            proj3Desc: "Developed a PCG city generator based on Houdini for my graduation project. It supports custom city zoning, roads, visualized parameter panel, and external asset import.",
            proj4Title: "Basic Ray Tracing Renderer (2024)",
            proj4Desc: "Implemented core rendering functions like PBR and path tracing, along with the GGX microfacet model, importance sampling, and adaptive sampling.",
            proj5Title: "3D Game Rasterization Engine (2024)",
            proj5Desc: "Developed a basic 3D engine using C++/DirectX 11, implementing key rendering features like deferred shading, skeletal animation, and collision detection.",
            proj6Title: "Unity3D Survival Game \"Seed of Eden\" (2022)",
            proj6Desc: "Implemented core game systems for a survival game, including item management, combat, crafting, and building systems.",
            education: "Education",
            edu1Title: "Master of Science, Game Engineering",
            edu1School: "University of Warwick",
            edu1Date: "Sept 2024 - Sept 2025",
            edu1Desc1: "C++, Computer Graphics, Game Development",
            edu2Title: "Bachelor of Science, Computer Science",
            edu2School: "Hong Kong Baptist University",
            edu2Date: "Sept 2020 - Jul 2024",
            edu2Desc1: "Operation System, Data Structure and Algorithm",
            experience: "Professional Experience",
            exp1Title: "IT Department Intern",
            exp1Company: "BMW Brilliance Automotive",
            exp1Date: "Jul 2022 - Oct 2022",
            exp1Desc1: "Contributed to the 6th update of the internal JOYCHAT application's bus route module (launched Aug 1st).",
            contact: "Get in Touch",
            contactDesc: "I'm always open to new opportunities, collaborations, and conversations. Feel free to reach out!",
            footerText: "© 2025 David He. Made using Tailwind CSS and hosted on GitHub Pages.",
            navProjects: "Projects",
            navEducation: "Education",
            navExperience: "Experience",
            navContact: "Contact",
            navResume: "Resume",
        },
        zh: {
            pageTitle: "何锦程 | 个人作品集",
            name: "何锦程",
            heroDescription: "我热衷于学习各类技术与开发游戏。对于学习新知识、构筑新技能以及将想法付诸实践，我总是充满热情对新鲜事物。认真负责，具备良好的沟通能力。",
            myWork: "我的作品",
            proj1Title: "极限运动游戏 (2025)",
            proj1Desc: "在一个合作开发项目中，我负责关卡设计与生成，以及核心玩法的实现。",
            proj2Title: "2D像素机甲射击游戏 (2024)",
            proj2Desc: "在华威大学游戏创作节中，我完全用C++实现了一款2D双摇杆射击游戏，包括自定义NPC数据、数据驱动地图、碰撞检测和动画。",
            proj3Title: "程序化城市生成器 (2024-2025)",
            proj3Desc: "为我的毕业设计开发了一款基于Houdini的程序化城市生成器。它支持自定义城市分区、道路、可视化参数面板和外部资产导入。",
            proj4Title: "基础光线追踪渲染器 (2024)",
            proj4Desc: "实现了核心渲染功能，如PBR和路径追踪，以及GGX微表面模型、重要性采样和自适应采样。",
            proj5Title: "3D游戏光栅化引擎 (2024)",
            proj5Desc: "使用 C++/DirectX 11 开发了一个基础3D引擎，实现了延迟着色、骨骼动画和碰撞检测等关键渲染特性。",
            proj6Title: "Unity3D 生存游戏《伊甸之种》(2022)",
            proj6Desc: "为一款生存游戏实现了核心游戏系统，包括物品管理、战斗、合成和建造系统。",
            education: "教育背景",
            edu1Title: "游戏工程 · 理学硕士",
            edu1School: "华威大学",
            edu1Date: "2024年9月 - 2025年9月",
            edu1Desc1: "C++, 计算机图形学, 游戏开发",
            edu2Title: "计算机科学 · 理学学士",
            edu2School: "香港浸会大学",
            edu2Date: "2020年9月 - 2024年7月",
            edu2Desc1: "操作系统, 数据结构与算法",
            experience: "专业经历",
            exp1Title: "IT部门实习生",
            exp1Company: "华晨宝马汽车",
            exp1Date: "2022年7月 - 2022年10月",
            exp1Desc1: "参与了内部应用JOYCHAT第六次更新中的巴士路线模块（8月1日上线）。",
            contact: "联系我",
            contactDesc: "我随时欢迎新的机遇、合作与交流。请随时与我联系！",
            contactPhone: "移动电话: +86 18940138815",
            contactWechat: "微信: 同电话号码",
            footerText: "© 2025 何锦程. 使用 Tailwind CSS 构建并托管于 GitHub Pages.",
            navProjects: "项目",
            navEducation: "教育",
            navExperience: "经历",
            navContact: "联系",
            navResume: "简历",
        }
    };

    // --- TRANSLATION LOGIC ---
    const setLanguage = (lang) => {
        document.querySelectorAll('[data-lang-key]').forEach(elem => {
            const key = elem.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                elem.textContent = translations[lang][key];
            }
        });

        const extremeSportsLink = document.getElementById('project-extreme-sports-link');
        const seedOfEdenLink = document.getElementById('project-seed-of-eden-link');
        const resumeLink = document.getElementById('resume-link');
        const zhContactInfo = document.getElementById('zh-contact-info');

        if (lang === 'zh') {
            if(extremeSportsLink) extremeSportsLink.href = "https://www.bilibili.com/video/BV1AHpuzzE7d/";
            if(seedOfEdenLink) seedOfEdenLink.href = "https://www.bilibili.com/video/BV14Gpuz1Eqm/";
            if(resumeLink) resumeLink.href = "./个人简历_何锦程.pdf";
            if(zhContactInfo) zhContactInfo.classList.remove('hidden');
        } else {
            if(extremeSportsLink) extremeSportsLink.href = "https://www.youtube.com/watch?v=3ATgUoj90eo";
            if(seedOfEdenLink) seedOfEdenLink.href = "https://youtu.be/riH4wzVhWWE?si=Yx-EPM6aKFZYzFa9";
            if(resumeLink) resumeLink.href = "./Resume_David_HE.pdf";
            if(zhContactInfo) zhContactInfo.classList.add('hidden');
        }

        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('data-lang', lang);
        const switcher = document.getElementById('lang-switcher');
        
        if (switcher) {
            switcher.textContent = lang === 'zh' ? 'ENG' : '中文';
        }
        
        localStorage.setItem('language', lang);
    };

    // --- EVENT LISTENERS AND INITIALIZATION ---
    const initializeLanguage = () => {
        const savedLang = localStorage.getItem('language') || 'en';
        setLanguage(savedLang);

        const langSwitcher = document.getElementById('lang-switcher');
        if (langSwitcher) {
            langSwitcher.addEventListener('click', () => {
                const currentLang = document.documentElement.getAttribute('data-lang') || 'en';
                const newLang = currentLang === 'en' ? 'zh' : 'en';
                setLanguage(newLang);
            });
        }
    };
    
    // --- ORIGINAL SCRIPT LOGIC (MODIFIED) ---

    const getElement = (selector, all = false) =>
        all ? document.querySelectorAll(selector) : document.querySelector(selector);

    const loadNavbar = async () => {
        const navbarPlaceholder = getElement("#navbar-placeholder");
        if (!navbarPlaceholder) return;
        try {
            const response = await fetch("navbar.html");
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            navbarPlaceholder.innerHTML = await response.text();
            
            initializeLanguage(); 

        } catch (err) {
            console.error("Error loading navbar:", err);
            if (navbarPlaceholder) navbarPlaceholder.innerHTML = "<p style='color:red; text-align:center;'>错误：无法载入 navbar.html。请检查档案路径并使用 Live Server 预览。</p>";
        }
    };

    loadNavbar();
});

