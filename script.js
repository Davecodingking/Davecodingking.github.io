document.addEventListener("DOMContentLoaded", () => {

    const isInSubfolder = window.location.pathname.includes('projectset');
    const basePath = isInSubfolder ? '../' : './';

    const translations = {
        en: {
            pageTitle: "David He | Portfolio",
            name: "David He",
            // 【新增】：英文版介绍标题
            heroTitle: "Researcher, Game Developer, Game Artist in my mind.",
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
            edu1Date: "Sept 2024 - Jan 2026",
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
            
            // --- EXTREME SPORTS PAGE ---
            esPageTitle: "Extreme Sports Game | David He",
            esIntro: "This project is a procedural level generation system for a mountain biking game inspired by 'Riders Republic'. My primary role was designing the pipeline for realistic terrain generation and an advanced procedural pathfinding system, utilizing Houdini for generation and Unreal Engine 5 for real-time gameplay.",
            esBridge: "A critical achievement of this project was bridging offline procedural generation with real-time level design. I developed a custom Scriptable Tool using Blueprints in Unreal Engine 5 that communicates directly with the Houdini Digital Asset (HDA). This effectively bridges the gap between FX software and the Game Engine.",
            esBridge1: "Two-Way Data Flow: Designers can manipulate splines in UE5, triggering instant re-cooks in Houdini.",
            esBridge2: "Custom Gizmos: Intuitive handles in UE5 for dragging and modifying path waypoints in real-time.",
            esBridge3: "Instant Feedback: The HDA recalculates terrain and paths in the background and updates geometry immediately.",
            esTerrain: "The terrain system uses a constructive approach. It starts with curve-based silhouette definition, followed by primitive blocking. Realistic details are added using Worley Cellular noise and erosion simulations (Thermal/Hydraulic) to carve out natural flow patterns.",
            esMaterial: "A custom auto-material was created in UE5 that reads mask data exported from Houdini. It blends four distinct layers (Bedrock, Sediment, Debris, Water Flow) based on the erosion simulation results.",
            esPath: "The pathfinding system is powered by a custom VEX cost engine. Instead of simple shortest-path algorithms, this engine calculates traversal costs based on slope and direction (ascent vs. descent).",
            esPath1: "Dynamic Cost Engine: Analyzes local geometry to assign weights. Uphill movement is costlier than downhill.",
            esPath2: "Optimization: Uses a 'Scatter Points' technique to create a lightweight topological mesh for calculation.",

            // --- PCG DETAIL PAGE ---
            pcgPageTitle: "PCG City Generator | David He",
            backToProjects: "Back to Projects",
            overviewTitle: "Project Overview",
            featuresTitle: "Key Features",
            techTitle: "Technologies",
            linksTitle: "Links",
            viewOnGithub: "View on GitHub",
            pcgOverview1: "Developed a Procedural Content Generation (PCG) city generator based on Houdini for my graduation project. This tool allows users to generate complex city layouts with custom zoning, road networks, and building placements efficiently.",
            pcgOverview2: "The system supports visualized parameter panels within Unreal Engine 5 via Houdini Engine, enabling real-time adjustments and iterations.",
            pcgFeat1: "Custom City Zoning Algorithms",
            pcgFeat2: "Procedural Road Network Generation",
            pcgFeat3: "Visualized Parameter Panel in UE5",
            pcgFeat4: "External Asset Import Support",

            // --- RAY TRACER DETAIL PAGE (UPDATED) ---
            rtPageTitle: "Ray Tracer | David He",
            misComparisonTitle: "Multiple Importance Sampling (MIS)",
            misDesc: "Multiple Importance Sampling (MIS) is a technique used to improve the convergence of Monte Carlo integration by combining different sampling strategies. In my ray-tracer, I implemented MIS to effectively sample both light source and bsdf contributions.",
            rtOverview: "A CPU-based ray tracer developed from scratch using C++ and DirectX 11. This project explores advanced rendering concepts found in the PBRT book, implementing physically based materials and various global illumination algorithms.",
            rtAlgoTitle: "Rendering Algorithms",
            rtAlgoDesc: "Three algorithms are implemented in this ray-tracer: Monte Carlo Path Tracing, Light Tracing, and Instant Radiosity.",
            rtMatTitle: "Materials",
            rtMatDesc: "Multiple material brdf are implemented in this ray-tracer, including diffuse (OrenNayar), metal (Conductor), plastic (Phong), glass (Fresnel), specular (Mirror) etc.",
            rtPerfTitle: "Performance Optimizations",
            // Future Work Keys
            rtFutureTitle: "Future Work",
            rtFuturePhoton: "Currently implementing and optimizing Photon Mapping to better handle caustics and difficult lighting scenarios (SDS paths).",
            rtFutureGPU: "Porting the core path tracing architecture from CPU to GPU (CUDA/OptiX) to leverage parallel computing power for real-time rendering performance.",

            // --- MECHA WAR DETAIL PAGE ---
            mechaPageTitle: "2D Pixel Mecha Shooter | David He",
            mechaIntro: "This project is a 2D top-down shooter game engine built from scratch using C++. The goal was to understand the low-level architecture of game engines, avoiding the use of pre-made engines like Unity or Unreal. It features a custom ECS-like component system, a finite state machine for AI, and a grid-based physics system.",
            mechaAttackTitle: "Diverse Attack Modes",
            mechaAttackDesc: "To enhance gameplay variety, I implemented a flexible weapon system supporting multiple attack patterns. Each weapon type has unique properties affecting fire rate, damage, and projectile behavior.",
            mechaHeroTitle: "Hero Character & Animation",
            mechaHeroDesc: "The player character features a robust animation state machine. Animations are handled via a sprite sheet system that synchronizes with player input and movement states (Idle, Run, Shoot).",
            mechaNPCTitle: "NPC Logic & Settings",
            mechaNPCDesc: "The game features distinct enemy types, each with unique behaviors driven by a Finite State Machine (FSM). The AI evaluates player distance and line-of-sight to transition between Idle, Chase, and Attack states.",
            mechaMap: "The game supports loading level data from external JSON/XML files. This data-driven approach allows for rapid iteration of level design (Tilemaps, Enemy Spawns, Collision Layers) without recompiling the C++ code. The map rendering uses a Tilemap system optimized for batch rendering.",
        },
        zh: {
            pageTitle: "何锦程 | 个人作品集",
            name: "何锦程",
            // 【新增】：中文版介绍标题
            heroTitle: "我是一个 Researcher，Game Developer，Game Artist in my mind.",
            heroDescription: "我热衷于学习各类技术与开发游戏。对于学习新知识、构筑新技能以及将想法勇于付诸实践，我总是充满热情对新鲜事物。认真负责，具备良好的沟通能力。",
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
            edu1Date: "2024年9月 - 2026年1月",
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

            // --- EXTREME SPORTS PAGE ---
            esPageTitle: "极限运动游戏 | 何锦程",
            esIntro: "该项目是一个受《极限国度》(Riders Republic) 启发的山地自行车游戏程序化关卡生成系统。我的主要职责是设计真实地形生成的管线以及高级程序化寻路系统，利用 Houdini 进行生成，并在 Unreal Engine 5 中实现实时游玩。",
            esBridge: "该项目的一个关键成就是连接了离线程序化生成与实时关卡设计。我在 UE5 中使用蓝图开发了一个自定义的 Scriptable Tool (脚本化工具)，它可以直接与 Houdini Digital Asset (HDA) 通信。这有效地架起了特效软件与游戏引擎之间的桥梁。",
            esBridge1: "双向数据流：设计师可以在 UE5 中直接操作样条线，触发 Houdini 的即时重新计算 (Re-cook)。",
            esBridge2: "自定义 Gizmos：实现了直观的 UE5 视口句柄，用于实时拖拽、添加和修改路径航点。",
            esBridge3: "即时反馈：HDA 在后台重新计算地形和路径，并立即更新 UE5 中的几何体。",
            esTerrain: "地形系统采用构建式方法。首先通过曲线定义轮廓，然后使用几何体体素化阻挡山脉。最后使用 Worley Cellular 噪声以及热力侵蚀和水力侵蚀模拟来雕刻出自然的地质细节和水流纹理。",
            esMaterial: "我们在 UE5 中创建了一个自定义自动地形材质，它读取 Houdini 导出的遮罩数据。根据侵蚀模拟的结果，自动混合四个不同的图层（基岩、沉积物、碎石、水流痕迹）。",
            esPath: "寻路系统由自定义的 VEX 成本引擎驱动。该引擎不使用简单的最短路径算法，而是基于坡度和方向（上坡与下坡）计算通行成本。",
            esPath1: "动态成本引擎：分析局部几何体结构以分配权重。上坡运动的成本被设定为高于下坡。",
            esPath2: "优化：使用“散点”技术创建轻量级拓扑网格进行计算，避免了在高分辨率地形上进行昂贵的操作。",

            // --- PCG DETAIL PAGE ---
            pcgPageTitle: "程序化城市生成器 | 何锦程",
            backToProjects: "返回项目列表",
            overviewTitle: "项目概览",
            featuresTitle: "核心特性",
            techTitle: "技术栈",
            linksTitle: "链接",
            viewOnGithub: "查看 GitHub 仓库",
            pcgOverview1: "为我的毕业设计开发了一款基于Houdini的程序化城市生成器。该工具允许用户高效生成复杂的城市布局，支持自定义区域划分、道路网络和建筑布局。",
            pcgOverview2: "该系统通过 Houdini Engine 支持虚幻引擎 5 内的可视化参数面板，实现了实时调整和快速迭代。",
            pcgFeat1: "自定义城市分区算法",
            pcgFeat2: "程序化道路网络生成",
            pcgFeat3: "UE5 内可视化参数面板",
            pcgFeat4: "支持外部资产导入",

             // --- RAY TRACER DETAIL PAGE ---
            rtPageTitle: "光线追踪渲染器 | 何锦程",
            misComparisonTitle: "多重重要性采样 (MIS) 对比",
            misDesc: "多重重要性采样 (MIS) 是一种用于改善蒙特卡洛积分收敛性的技术，通过结合不同的采样策略来实现。在我的光线追踪器中，我实现了 MIS 以有效采样光源和 BSDF 的贡献。",
            rtOverview: "完全使用 C++ 和 DirectX 11 开发的 CPU 光线追踪器。本项目深入研究了 PBRT 书籍中的高级渲染概念，实现了基于物理的材质和多种全局光照算法。",
            rtAlgoTitle: "渲染算法",
            rtAlgoDesc: "该光线追踪器实现了三种算法：蒙特卡洛路径追踪 (Path Tracing)、光线追踪 (Light Tracing) 和 瞬时辐射度 (Instant Radiosity)。",
            rtMatTitle: "材质系统",
            rtMatDesc: "实现了多种材质 BRDF，包括漫反射 (OrenNayar)、金属 (Conductor)、塑料 (Phong)、玻璃 (Fresnel) 和镜面 (Mirror) 等。",
            rtPerfTitle: "性能优化",
            // Future Work Keys
            rtFutureTitle: "未来计划",
            rtFuturePhoton: "目前正在致力于实现光子映射 (Photon Mapping) 算法，以更好地处理焦散现象和复杂的光照场景（如 SDS 路径）。",
            rtFutureGPU: "正在将核心路径追踪架构从 CPU 移植到 GPU (CUDA/OptiX)，利用并行计算能力实现实时渲染性能。",

            // --- MECHA WAR DETAIL PAGE ---
            mechaPageTitle: "2D 像素机甲射击 | 何锦程",
            mechaIntro: "本项目是一个完全使用 C++ 从零构建的 2D 俯视角射击游戏引擎。目标是理解游戏引擎的底层架构，避免使用 Unity 或 Unreal 等现成引擎。它具有自定义的 ECS 类组件系统、用于 AI 的有限状态机和基于网格的物理系统。",
            mechaAttackTitle: "多样化攻击模式",
            mechaAttackDesc: "为了增强游戏玩法的多样性，我实现了一个支持多种攻击模式的灵活武器系统。每种武器类型都有独特的属性，影响射速、伤害和弹道行为。",
            mechaHeroTitle: "主角与动画系统",
            mechaHeroDesc: "玩家角色配备了强大的动画状态机。动画通过精灵表（Sprite Sheet）系统进行处理，并与玩家的输入和移动状态（空闲、奔跑、射击）实时同步。",
            mechaNPCTitle: "NPC 逻辑与设定",
            mechaNPCDesc: "游戏包含多种独特的敌人类型，每种敌人的行为都由有限状态机 (FSM) 驱动。AI 会评估玩家距离和视线，从而在空闲、追逐和攻击状态之间切换。",
            mechaMap: "游戏支持从外部 JSON/XML 文件加载关卡数据。这种数据驱动的方法允许快速迭代关卡设计（瓦片地图、敌人生成点、碰撞层），而无需重新编译 C++ 代码。地图渲染使用了针对批量渲染优化的瓦片地图系统。",
        }
    };

    const updateVideoPlayers = (lang) => {
        const wrappers = document.querySelectorAll('.video-responsive-wrapper');
        wrappers.forEach(wrapper => {
            const youtubeId = wrapper.getAttribute('data-youtube-id');
            const bilibiliId = wrapper.getAttribute('data-bilibili-id');
            
            if (!youtubeId && !bilibiliId) return;
            if (youtubeId === "REPLACE_WITH_YOUR_YOUTUBE_ID") return;

            let iframeHTML = '';
            
            if (lang === 'zh' && bilibiliId) {
                iframeHTML = `<iframe src="//player.bilibili.com/player.html?bvid=${bilibiliId}&page=1&high_quality=1&danmaku=0&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>`;
            } else if (youtubeId) {
                iframeHTML = `<iframe src="https://www.youtube.com/embed/${youtubeId}?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            }

            if (iframeHTML) {
                wrapper.innerHTML = iframeHTML;
            }
        });
    };

    const setLanguage = (lang) => {
        document.querySelectorAll('[data-lang-key]').forEach(elem => {
            const key = elem.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                elem.textContent = translations[lang][key];
            }
        });

        // Update links in index.html
        const seedOfEdenLink = document.getElementById('project-seed-of-eden-link');
        const resumeLink = document.getElementById('resume-link');
        const zhContactInfo = document.getElementById('zh-contact-info');
        
        const resumePrefix = basePath; 

        if (lang === 'zh') {
            if(seedOfEdenLink) seedOfEdenLink.href = "https://www.bilibili.com/video/BV14Gpuz1Eqm/";
            if(resumeLink) resumeLink.href = resumePrefix + "个人简历_何锦程.pdf"; 
            if(zhContactInfo) zhContactInfo.classList.remove('hidden');
        } else {
            if(seedOfEdenLink) seedOfEdenLink.href = "https://youtu.be/riH4wzVhWWE?si=Yx-EPM6aKFZYzFa9";
            if(resumeLink) resumeLink.href = resumePrefix + "Resume_David_HE.pdf";
            if(zhContactInfo) zhContactInfo.classList.add('hidden');
        }

        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('data-lang', lang);
        
        const switcher = document.getElementById('lang-switcher');
        if (switcher) {
            switcher.textContent = lang === 'zh' ? 'ENG' : '中文';
        }

        updateVideoPlayers(lang);
        
        localStorage.setItem('language', lang);
    };

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
    
    const getElement = (selector, all = false) =>
        all ? document.querySelectorAll(selector) : document.querySelector(selector);

    const fixNavbarLinksForSubfolder = () => {
        if (!isInSubfolder) return; 

        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                link.setAttribute('href', '../index.html' + href);
            } else if (href && href.startsWith('./')) {
                 link.setAttribute('href', '.' + href);
            }
        });
        
        const homeLink = document.querySelector('.nav-title-group a');
        if(homeLink) {
            homeLink.setAttribute('href', '../index.html');
        }
    };

    const loadNavbar = async () => {
        const navbarPlaceholder = getElement("#navbar-placeholder");
        if (!navbarPlaceholder) return;
        try {
            const fetchPath = basePath + "navbar.html";
            const response = await fetch(fetchPath);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            navbarPlaceholder.innerHTML = await response.text();
            
            fixNavbarLinksForSubfolder();
            initializeLanguage(); 

        } catch (err) {
            console.error("Error loading navbar:", err);
            if (navbarPlaceholder) navbarPlaceholder.innerHTML = "<p style='color:red; text-align:center;'>Navbar loading failed.</p>";
        }
    };

    loadNavbar();
});
