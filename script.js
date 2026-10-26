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
            proj0Title: "Lightweight Dynamic Neural Rendering",
            proj0Desc: "Neural textures plus triplane spherical-harmonic light probes and a dual-MLP shader render dynamic-GI scenes at 25 dB PSNR and 90+ FPS on a Huawei Mate 70 Pro, with 10x less probe storage than voxels.",
            heroEyebrow: "Graphics & AI Engineer",
            heroTrack1: "Research",
            heroTrack2: "Game Development",
            heroBtnResearch: "Research & Pipelines",
            heroBtnGames: "Games & Tools",
            researchTitle: "Research & Pipelines",
            gamesTitle: "Games & Tools",
            badgeFeatured: "Featured",
            proj0Org: "PolyU x Huawei",
            proj0Role: "Research Associate",
            proj7Role: "Backend Pipeline Engineer",
            proj7Title: "Monocular Video to Editable 3D Scene",
            proj7Desc: "Seven foundation models, one pipeline: objects as placed meshes at real scale, people as animated characters, physics-settled, delivered as FBX. Five stages, five human gates.",
            proj8Role: "Tooling",
            proj8Title: "3DGS Object Replacement with Generated Meshes",
            proj8Desc: "Point at an object in a Gaussian-splat room; it is carved out and replaced by a generated, textured mesh refined against seven views until the silhouettes match. About four minutes per object.",
            proj1Role: "Level generation, gameplay",
            proj2Role: "Game Jam, solo",
            proj3Role: "MSc dissertation",
            proj4Role: "Solo",
            proj5Role: "Solo",
            proj6Role: "Solo",
            bgCaption: "Shot at Meili Snow Mountain, 2023",
            navPhotography: "Photography",
            phPageTitle: "Photography | David He",
            phTitle: "Photography",
            phLead: "Mountains, coasts and cities I have walked through. Shot on a phone, mostly at the wrong time of day, which is when the light is interesting.",
            ph1: "Snow ridge under storm light, Sichuan",
            ph2: "First light on Meili Snow Mountain, Yunnan",
            ph3: "Palace of Westminster from the south bank, London",
            ph4: "Valley and peak, Sichuan",
            ph5: "Seven Sisters and Belle Tout lighthouse, East Sussex",
            ph6: "The Ouse at golden hour, York",
            ph7: "Herring gull, Warwick",
            ph8: "Disco balls, on air",
            backHome: "Back to Home",
            navResearch: "Research",
            navGames: "Games",
            proj1Title: "Extreme Sports Game",
            proj1Desc: "Procedural terrain with erosion and a VEX cost-based path generator, driven from UE5 through a custom Houdini bridge tool.",
            proj2Title: "2D Pixel Mecha Shooter",
            proj2Desc: "Twin-stick shooter on a from-scratch C++ engine: data-driven maps, FSM enemies, sprite animation, collision.",
            proj3Title: "PCG City Generator",
            proj3Desc: "Houdini city generator with custom zoning, road networks, a visual parameter panel inside UE5 and external asset import.",
            proj4Title: "CPU Ray Tracer",
            proj4Desc: "Path tracing, light tracing and instant radiosity with MIS, GGX microfacets, BVH, adaptive sampling and OIDN denoising.",
            proj5Title: "3D Rasterization Engine",
            proj5Desc: "DirectX 11 engine with deferred shading, skeletal animation and collision detection.",
            proj6Title: "Survival Game \"Seed of Eden\"",
            proj6Desc: "Inventory, combat, crafting and building systems for a Unity sandbox survival game.",
            education: "Education",
            edu1Title: "Master of Science, Game Engineering",
            edu1School: "University of Warwick",
            edu1Date: "Sept 2024 - Jan 2026",
            edu1Desc1: "Advanced Computer Graphics, Machine Learning, Game Design",
            edu2Title: "Bachelor of Science, Computer Science",
            edu2School: "Hong Kong Baptist University",
            edu2Date: "Sept 2020 - Jul 2024",
            edu2Desc1: "Data Structures and Algorithms, Operating Systems, Deep Learning, Computational Theory",
            experience: "Experience",
            exp1Title: "Backend Pipeline Engineer",
            exp1Company: "WarpEngine, Algorithm & Technology Dept.",
            exp1Date: "Jul 2026 - Present",
            exp1Desc1: "Built an end-to-end pipeline that reconstructs editable, metric-scale 3D scenes from monocular video for world-model training.",
            exp1Desc2: "Maintain an automated scene-scanning and batch-export toolchain, and the dispatch service of a multi-node, multi-GPU rendering cluster.",
            exp2Title: "Research Associate",
            exp2Company: "The Hong Kong Polytechnic University, Department of Computing",
            exp2Date: "Dec 2025 - Jul 2026",
            exp2Desc1: "Huawei lightweight dynamic neural rendering project: neural textures, triplane SH light probes and a dual-MLP shader (see project page).",
            exp2Desc2: "Built Blender / Unreal scenes and the automated G-buffer data pipeline. Paper in preparation for TVCG.",
            exp3Title: "Research Assistant Intern",
            exp3Company: "The Hong Kong University of Science and Technology (Guangzhou)",
            exp3Date: "Jul 2025 - Sept 2025",
            exp3Desc1: "Unity-based VR visualization for Procedural Content Generation (PCG) research projects.",
            exp4Title: "IT Department Intern",
            exp4Company: "BMW Brilliance Automotive",
            exp4Date: "Jul 2022 - Sept 2022",
            exp4Desc1: "Contributed to the update of the internal JOYCHAT application's shuttle route module and ran end-to-end functional tests for all new routes.",
            contact: "Get in Touch",
            contactDesc: "Open to research and engineering roles in graphics, neural rendering and 3D reconstruction. Happy to talk about any of the projects above.",
            footerText: "© 2026 David He. Made using Tailwind CSS and hosted on GitHub Pages.",
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

            // --- NEURAL RENDERING PAGE ---
            nrPageTitle: "Lightweight Dynamic Neural Rendering | David He",
            nrTitle: "Lightweight Dynamic Neural Rendering",
            nrSubtitle: "Research Associate, The Hong Kong Polytechnic University, in collaboration with Huawei (Dec 2025 - Jul 2026)",
            nrOverview1: "A lightweight neural rendering pipeline for scenes with dynamic global illumination, built on rasterization plus neural shading and targeted at mobile GPUs. Base materials are encoded in a neural texture, dynamic lighting is stored in a triplane of spherical-harmonic light probes, and a small dual-branch MLP decodes both into the final colour.",
            nrOverview2: "The result runs at a stable 25 dB PSNR and 90+ FPS on a Huawei Mate 70 Pro for complex dynamic-GI scenes, with 10x less probe storage than voxel probes. A paper is in preparation for TVCG.",
            nrStatFps: "FPS on Mate 70 Pro",
            nrStatPsnr: "PSNR on-device, dynamic GI",
            nrStatMem: "Less probe storage vs. voxels",
            nrStatConv: "Convolutions at runtime",
            nrArchTitle: "Architecture",
            nrArchDesc: "Rasterized G-buffer inputs (UV, normal, depth, albedo, view direction) sample a Laplacian-pyramid neural texture and a triplane light probe. The concatenated features go through a shared trunk MLP, then split into a view-independent diffuse head and a view-dependent specular head. Final colour is albedo x sigmoid(diffuse) + softplus(specular).",
            nrMethodTitle: "Key Contributions",
            nrM1Title: "Material / Lighting Decoupling with Two-Stage Training",
            nrM1Desc: "Base materials are encoded in a neural texture. Stage one learns materials together with static and dynamic GI; stage two jointly optimizes the texture and light probes on an interpolation grid over moving-object positions, so position-dependent shadows are fitted directly and training converges faster.",
            nrM2Title: "Triplane SH Light Probes with Condition Encoding",
            nrM2Desc: "Spherical-harmonic lighting coefficients live in three learnable planes instead of a voxel grid, cutting storage by 10x. Scene conditions (object poses, light switch states) are encoded and fed to a per-plane Conv2D that predicts a lighting residual. Residuals are pre-baked at grid nodes across the condition space and interpolated at runtime, so no convolution runs on the device.",
            nrM3Title: "Dual-MLP Trunk-Head Network",
            nrM3Desc: "A shared trunk feeds separate diffuse and specular heads, decoupling low-frequency diffuse shading from high-frequency view-dependent specular. G-buffer data and the physical shading model give extra supervision while shrinking the network, which is what makes 90+ FPS on a phone possible.",
            nrM4Title: "Scene Construction and Automated Data Pipeline",
            nrM4Desc: "Built high-fidelity scenes with complex materials and dynamic lighting in Blender and Unreal Engine. An automated pipeline samples multi-view cameras and smooth trajectories around scene targets, renders ground truth with exact poses, and extracts G-buffers (BaseColor, normals, depth) aligned to the physical lighting.",
            nrResultsTitle: "Results: Ground Truth vs. Neural Render",
            nrResultsDesc: "Held-out test views on three animated scenes. Left half of each clip is the path-traced ground truth, right half is the neural render. Averages are over 240 test images per scene.",
            nrSceneHk: "Hong Kong Street - moving spotlight drone, wet ground",
            nrSceneAudi: "Audi R8 - opening doors, sun shadows",
            nrSceneLego: "Lego Bulldozer - articulated arm, self-shadowing",
            nrLabelRender: "Render",
            nrLightTitle: "Condition Encoding: Switching Lights at Runtime",
            nrLightDesc: "The living room has two light sources, A and B, whose on/off states are encoded as scene conditions. One trained model renders all three combinations below along the same camera path; the triplane residual shifts the entire indirect lighting without retraining or extra probes.",
            nrLightA: "Light A only",
            nrLightAB: "Light A + B",
            nrLightB: "Light B only",
            nrTech1Label: "Training:",
            nrTech1: "Python, PyTorch, Laplacian-pyramid neural texture, TensoRF-style triplane decode, dual SH evaluation (normal / reflect)",
            nrTech2Label: "Data:",
            nrTech2: "Blender and Unreal Engine scenes, scripted camera sampling, G-buffer export (UV, normal, depth, world position, albedo)",
            nrTech3Label: "Deployment:",
            nrTech3: "Pre-baked residual grid with runtime interpolation, WebGL viewer, on-device evaluation on Huawei Mate 70 Pro",

            // --- SCENE RECON PAGE ---
            srPageTitle: "Monocular Video to Editable 3D Scene | David He",
            srTitle: "Monocular Video to Editable 3D Scene",
            srSubtitle: "Backend Pipeline Engineer, WarpEngine (Aug 2026 - Present). Scene data production for world-model training.",
            srOverview1: "One real-world video goes in; an editable, metric-scale 3D scene comes out. Every object is its own mesh placed with real-world position, orientation and size; people in the footage become skinned, animated characters in the same scene with the original camera. Indoor and outdoor footage share one pipeline.",
            srOverview2: "I designed and built the whole system: model selection, the geometry that ties the models together, the physics-based assembly, the human-in-the-loop gates and the FBX / Blender delivery. It has been validated end to end on dynamic indoor and outdoor scenes with camera motion and moving subjects.",
            srStat1: "foundation models, one job each",
            srStat2: "pipeline stages / human gates",
            srStat3: "animated humans under occlusion",
            srStat4: "scene + people + camera, Blender project",
            srResultsTitle: "Results",
            srResultsDesc: "Each check clip shows the input video, the rebuilt scene rendered through the recovered camera, and a 50/50 blend of the two. If the blend lines up, positions, scale and camera are all right at once.",
            srSceneStreet: "Street crossing (outdoor): taxi, cars, bus shelter, trees, 12 pedestrians",
            srCapStreetStrip: "Real | rebuilt | blend at five frames along the camera path.",
            srCapStreetTop: "Top-down view of the delivered scene: objects and people in metric space.",
            srSceneOffice: "Open-plan office (indoor): desks, chairs, monitors, plants, room shell, 4 people with occlusion",
            srCapOfficeBlender: "The delivered FBX opened in Blender: skinned people animated along the original camera.",
            srCapOfficeStrip: "Video | Blender render | blend at four frames.",
            srArchTitle: "Pipeline: five stages, five gates",
            srArchDesc: "Decisions are split by whether a machine can make them reliably. The pipeline runs automatically up to each gate, lays the numbers and images out on a web page, and asks for a human only where automated judgment is unreliable (is this cutout complete? is this tracked \"person\" really a person?). A changed decision reruns only the affected steps.",
            srMethodTitle: "How it works",
            srM1Title: "Measure position, generate shape, let common sense set scale",
            srM1Desc: "No single model can do this job. Qwen3-VL lists what is in the frame; SAM 3 tracks each instance through the video; Depth Anything 3 / VGGT give per-frame depth and camera pose so masks back-project into gravity-aligned 3D boxes; SAM 3D Objects generates a complete mesh (hidden back included) from one cutout; Qwen3-VL answers \"how tall is this kind of thing\" to fix absolute scale. Boxes own position and orientation, meshes own shape, priors own size. None of them is allowed to overrule another.",
            srM2Title: "Scale and geometric calibration",
            srM2Desc: "Monocular depth is self-consistent but not metric: one car park came out 6.4x too small and looked fine in renders. Global scale is calibrated against VLM size priors and rejected if the per-class agreement is poor. Bad pose frames are caught by cross-frame depth checks and skipped. Two-level deduplication over 2D masks and 3D voxels removes the same object found under different words.",
            srM3Title: "Dynamic humans and physics",
            srM3Desc: "A video 4D human pipeline (segmentation and tracking, diffusion-based occlusion completion, parametric body recovery) outputs temporally consistent people even when they walk behind each other, then aligns them into the scene frame. The room shell or the ground acts as a static collider; rigid-body simulation settles every object and pushes interpenetrating ones apart, so nothing floats and nothing overlaps.",
            srM4Title: "Productionization",
            srM4Desc: "Single-entry driver, checkpoint resumption, status queries, quality gates between stages and a web review desk at each gate. Seven conda environments and about 250 GB of weights are reproducible from a setup doc plus patches against the upstream repos. Delivery is FBX for the scene, scene plus people with the original camera, one file per person, and a Blender project.",
            srGateTitle: "What a gate looks like",
            srGateDesc: "Gate 2 review sheet for the street scene: every candidate cutout with its class, the frame it was picked from and the VLM verdict. The reviewer keeps, drops, merges or re-labels in the browser; the pipeline reruns from the affected step.",
            srLimitTitle: "Known limitations",
            srLimit1: "Point-cloud principal axes give an object's axis but not its front/back, so orientation can be off by 180 degrees.",
            srLimit2: "Person identity is position-based: if one person leaves and another stands in the same spot, they may be merged.",
            srLimit3: "Non-human objects tracked as \"person\" (a coat on a chair) are not removed automatically; they are dropped at the gate.",

            // --- 3DGS2MESH PAGE ---
            gmPageTitle: "3DGS Object Replacement | David He",
            gmTitle: "3DGS Object Replacement with Generated Meshes",
            gmSubtitle: "WarpEngine (Oct 2026). Turn one object in a Gaussian-splat room into an editable, textured mesh that sits exactly where the old one was.",
            gmOverview1: "A 3DGS scene looks great but nothing in it can be moved. This tool takes a panorama, the room's 3DGS, and a prompt or a click, and replaces that object with a generated mesh: the old Gaussians are carved out, the new mesh is placed, scaled and refined until its silhouette matches the original from every view.",
            gmOverview2: "Only two models are involved, both local: SAM 3 for segmentation, SAM 3D Objects for mesh generation. Everything else (placement, point removal, multi-view refinement, checks) is deterministic geometry. A web viewer lets you add objects, watch progress, inspect in 3D and hand-fix point removal.",
            gmStat1: "steps, each a restartable module",
            gmStat2: "per object on one RTX 3090",
            gmStat3: "views vote on every Gaussian",
            gmStat4: "models, no cloud calls",
            gmResultTitle: "Result: coffee table, three cameras",
            gmResultDesc: "Columns: original photo (top row only), the original 3DGS, after carving, after carving with the mesh placed, and the Gaussians that were removed. Rows: the generation camera, then the camera shifted 0.3 m left and right. The mesh holds its place when the camera moves; the carved hole is covered without leaving floaters.",
            gmSliderTitle: "Armchair: before and after",
            gmSliderDesc: "Drag to compare the original 3DGS with the carved scene plus the generated mesh, rendered from the same camera.",
            gmSliderBefore: "Original 3DGS",
            gmSliderAfter: "Carved + mesh",
            gmArchTitle: "Pipeline",
            gmArchDesc: "One entry script reads the object list, claims a GPU, runs each step in its own conda environment and writes a status file the viewer polls. Steps can be rerun from any point; changing a field (which surface the object rests on, a different seed) reruns only what depends on it.",
            gmStepsTitle: "The steps that matter",
            gmS1Title: "1. Segment and generate",
            gmS1Desc: "SAM 3 picks the instance by prompt or click and merges listed parts (pillow, blanket) into the mask. SAM 3D Objects turns that one cutout into a textured mesh with its predicted pose.",
            gmS2Title: "2. Place, vote, carve, refine",
            gmS2Desc: "Scene points inside the mask are the old object: the mesh is uprighted and searched over orientation, scale and position with its lowest point on the floor. Six extra views are rendered around the object, SAM 3 masks each, every Gaussian is voted object / unseen / other, and the object's footprint is extruded and removed as one block. Finally the mesh is refined against all silhouettes: orientation within 15 degrees, uniform scale, per-axis stretch within 10 percent.",
            gmS2Cap: "Yellow: SAM 3 mask. Red: refined mesh silhouette. IoU per view after fitting.",
            gmInputTitle: "Input",
            gmInputDesc: "One panorama and the matching 3DGS. When the panorama centre looks down on an object too steeply (the coffee table), the generation image is rendered from the 3DGS at a better camera instead.",
        },
        zh: {
            pageTitle: "何锦程 | 个人作品集",
            name: "何锦程",
            // 【新增】：中文版介绍标题
            heroTitle: "我是一个 Researcher，Game Developer，Game Artist in my mind.",
            heroDescription: "我热衷于学习各类技术与开发游戏。对于学习新知识、构筑新技能以及将想法勇于付诸实践，我总是充满热情对新鲜事物。认真负责，具备良好的沟通能力。",
            myWork: "我的作品",
            proj0Title: "轻量级动态神经渲染",
            proj0Desc: "神经纹理 + 三平面球谐光照探针 + 双 MLP 着色网络，在华为 Mate 70 Pro 上以 25 dB PSNR、90+ FPS 渲染动态全局光照场景，探针存储比体素少 10 倍。",
            heroEyebrow: "图形 & AI 工程师",
            heroTrack1: "研究",
            heroTrack2: "游戏开发",
            heroBtnResearch: "研究与流水线",
            heroBtnGames: "游戏与工具",
            researchTitle: "研究与流水线",
            gamesTitle: "游戏与工具",
            badgeFeatured: "重点项目",
            proj0Org: "香港理工 × 华为",
            proj0Role: "助理研究员",
            proj7Role: "后端管线工程师",
            proj7Title: "单目视频 → 可编辑三维场景",
            proj7Desc: "七个基础模型串成一条流水线：物体是按真实尺度摆好的网格，人是带动画的角色，经物理落地后以 FBX 交付。五段流程、五道人工闸。",
            proj8Role: "工具",
            proj8Title: "3DGS 物体替换为生成网格",
            proj8Desc: "在高斯泼溅的房间里指一个物体，它会被挖掉并换成生成的带贴图网格，再对着七个视角精修到轮廓吻合。每个物体约四分钟。",
            proj1Role: "关卡生成、玩法",
            proj2Role: "Game Jam，独立完成",
            proj3Role: "硕士毕业设计",
            proj4Role: "独立完成",
            proj5Role: "独立完成",
            proj6Role: "独立完成",
            bgCaption: "摄于梅里雪山，2023",
            navPhotography: "摄影",
            phPageTitle: "摄影 | 何锦程",
            phTitle: "摄影",
            phLead: "走过的山、海岸和城市。手机拍的，大多在不该拍照的时间，光线反而有意思。",
            ph1: "风雪光下的雪脊，四川",
            ph2: "梅里雪山的第一缕光，云南",
            ph3: "南岸望威斯敏斯特宫，伦敦",
            ph4: "山谷与雪峰，四川",
            ph5: "七姐妹白崖与 Belle Tout 灯塔，东萨塞克斯",
            ph6: "黄昏的乌斯河，约克",
            ph7: "银鸥，华威",
            ph8: "迪斯科球，On Air",
            backHome: "返回首页",
            navResearch: "研究",
            navGames: "游戏",
            proj1Title: "极限运动游戏",
            proj1Desc: "带侵蚀的程序化地形与基于 VEX 成本的路径生成器，通过自研 Houdini 桥接工具在 UE5 中驱动。",
            proj2Title: "2D 像素机甲射击",
            proj2Desc: "从零写的 C++ 引擎上的双摇杆射击：数据驱动地图、状态机敌人、精灵动画、碰撞。",
            proj3Title: "程序化城市生成器",
            proj3Desc: "基于 Houdini 的城市生成器：自定义分区、道路网络、UE5 内可视化参数面板、外部资产导入。",
            proj4Title: "CPU 光线追踪器",
            proj4Desc: "路径追踪、光线追踪与瞬时辐射度，含 MIS、GGX 微表面、BVH、自适应采样与 OIDN 降噪。",
            proj5Title: "3D 光栅化引擎",
            proj5Desc: "DirectX 11 引擎：延迟着色、骨骼动画、碰撞检测。",
            proj6Title: "生存游戏《伊甸之种》",
            proj6Desc: "Unity 沙盒生存游戏的物品、战斗、合成与建造系统。",
            education: "教育背景",
            edu1Title: "游戏工程 · 理学硕士",
            edu1School: "华威大学",
            edu1Date: "2024年9月 - 2026年1月",
            edu1Desc1: "计算机图形学, 机器学习, 游戏设计与开发",
            edu2Title: "计算机科学 · 理学学士",
            edu2School: "北师香港浸会大学",
            edu2Date: "2020年9月 - 2024年7月",
            edu2Desc1: "数据结构与算法, 操作系统, 深度学习, 计算理论",
            experience: "经历",
            exp1Title: "后端管线工程师",
            exp1Company: "WarpEngine · 算法技术部",
            exp1Date: "2026年7月 - 至今",
            exp1Desc1: "独立负责从单目视频重建可编辑、真实尺度三维场景的算法流水线，服务于世界模型训练的场景数据生产。",
            exp1Desc2: "开发维护自动化场景扫描与批量导出工具链，以及多机多卡渲染集群的中心分发服务。",
            exp2Title: "助理研究员",
            exp2Company: "香港理工大学 · 电子计算机学系",
            exp2Date: "2025年12月 - 2026年7月",
            exp2Desc1: "华为合作轻量级动态神经渲染项目：神经纹理、三平面球谐光照探针与双 MLP 着色网络（详见项目页）。",
            exp2Desc2: "用 Blender / Unreal 构建高保真场景并开发自动化 G-buffer 数据管线。论文预计投稿 TVCG。",
            exp3Title: "实习研究助理",
            exp3Company: "香港科技大学（广州）",
            exp3Date: "2025年7月 - 2025年9月",
            exp3Desc1: "负责 PCG 生成项目的 Unity VR 可视化工作。",
            exp4Title: "IT 部门实习生",
            exp4Company: "华晨宝马汽车",
            exp4Date: "2022年7月 - 2022年9月",
            exp4Desc1: "参与员工应用 JOYCHAT 班车路线模块的更新，并对所有新路线与时刻表的查询、显示功能执行端到端测试。",
            contact: "联系我",
            contactDesc: "正在寻找图形学、神经渲染与三维重建方向的研究或工程岗位。欢迎就上面任何项目聊聊。",
            contactPhone: "移动电话: +86 18940138815",
            contactWechat: "微信: 同电话号码",
            footerText: "© 2026 何锦程. 使用 Tailwind CSS 构建并托管于 GitHub Pages.",
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

            // --- NEURAL RENDERING PAGE ---
            nrPageTitle: "轻量级动态神经渲染 | 何锦程",
            nrTitle: "轻量级动态神经渲染",
            nrSubtitle: "香港理工大学助理研究员 · 华为合作项目（2025年12月 - 2026年7月）",
            nrOverview1: "面向移动端 GPU 的轻量级神经渲染管线，基于光栅化与神经着色，服务于含动态全局光照的场景。基础材质由神经纹理编码，动态光照存储在三平面球谐光照探针中，一个小型双分支 MLP 将两者解码为最终颜色。",
            nrOverview2: "在华为 Mate 70 Pro 上，复杂动态 GI 场景稳定达到 25 dB PSNR 与 90+ FPS，探针存储量相比体素探针降低 10 倍。论文预计投稿 TVCG。",
            nrStatFps: "Mate 70 Pro 实机帧率",
            nrStatPsnr: "端侧 PSNR（动态 GI）",
            nrStatMem: "探针存储相比体素的压缩比",
            nrStatConv: "运行时卷积次数",
            nrArchTitle: "架构",
            nrArchDesc: "光栅化 G-buffer 输入（UV、法线、深度、反照率、视线方向）分别采样拉普拉斯金字塔神经纹理与三平面光照探针。拼接后的特征先经过共享 Trunk MLP，再分到视角无关的漫反射头与视角相关的高光头。最终颜色 = albedo × sigmoid(diffuse) + softplus(specular)。",
            nrMethodTitle: "核心贡献",
            nrM1Title: "材质与光照解耦 · 两阶段训练",
            nrM1Desc: "基础材质由神经纹理编码。第一阶段同时学习材质与静态 / 动态 GI；第二阶段基于运动物体位置的插值网格，联合优化纹理与光照探针，直接拟合随位置变化的阴影，训练收敛更快。",
            nrM2Title: "三平面球谐光照探针 · 条件编码",
            nrM2Desc: "球谐光照系数存放在三个可学习平面而非体素网格中，存储量降低 10 倍。物体位姿、灯光开关等场景条件经编码后送入逐平面 Conv2D，预测光照残差。残差在条件空间的网格节点上离线烘焙，运行时插值混合，端侧无需任何卷积推理。",
            nrM3Title: "双 MLP Trunk-Head 网络",
            nrM3Desc: "共享 Trunk 后接独立的漫反射头与高光头，把低频漫反射与高频视角相关高光的预测解耦。结合 G-buffer 数据与物理着色模型加强监督，同时压缩网络规模，这是手机上跑到 90+ FPS 的关键。",
            nrM4Title: "场景构建与自动化数据管线",
            nrM4Desc: "用 Blender 与 Unreal Engine 制作包含复杂材质与动态光照的高保真三维场景。自动化管线围绕场景目标进行多视角采样与平滑相机轨迹生成，渲染并导出精确位姿的 GT，同时提取与物理光照严格对齐的 G-buffer（BaseColor、法线、深度）。",
            nrResultsTitle: "结果：真值 vs 神经渲染",
            nrResultsDesc: "三个动画场景的测试视角。每段视频左半为路径追踪真值，右半为神经渲染结果。指标为每场景 240 张测试图的平均值。",
            nrSceneHk: "香港街道 · 移动聚光无人机、湿地面反射",
            nrSceneAudi: "Audi R8 · 车门开合、日光阴影",
            nrSceneLego: "乐高推土机 · 机械臂运动、自遮挡阴影",
            nrLabelRender: "渲染",
            nrLightTitle: "条件编码：运行时切换灯光",
            nrLightDesc: "客厅场景有 A、B 两盏灯，开关状态被编码为场景条件。同一个训练好的模型沿同一相机轨迹渲染出下面三种组合；三平面残差改变整个间接光照，无需重新训练或额外探针。",
            nrLightA: "仅灯 A",
            nrLightAB: "灯 A + B",
            nrLightB: "仅灯 B",
            nrTech1Label: "训练：",
            nrTech1: "Python、PyTorch、拉普拉斯金字塔神经纹理、TensoRF 式三平面解码、双球谐评估（法线 / 反射方向）",
            nrTech2Label: "数据：",
            nrTech2: "Blender 与 Unreal Engine 场景、脚本化相机采样、G-buffer 导出（UV、法线、深度、世界坐标、反照率）",
            nrTech3Label: "部署：",
            nrTech3: "离线烘焙残差网格 + 运行时插值、WebGL 查看器、华为 Mate 70 Pro 端侧评测",

            // --- SCENE RECON PAGE ---
            srPageTitle: "单目视频 → 可编辑三维场景 | 何锦程",
            srTitle: "单目视频 → 可编辑三维场景",
            srSubtitle: "WarpEngine 后端管线工程师（2026年8月 - 至今）。面向世界模型训练的场景数据生产。",
            srOverview1: "一段实拍视频进去，一个真实尺度、可编辑的三维场景出来。每个物体是独立的网格，位置、朝向、尺寸按真实的米摆好；画面里的人变成带骨骼动画的角色，和原视频的相机一起放进同一个场景。室内室外共用一条流水线。",
            srOverview2: "整套系统由我独立设计并落地：模型选型、把各模型串起来的几何、基于物理的组装、人在回路的闸口，以及 FBX / Blender 交付。已在相机移动、含运动目标的动态室内外场景中完成端到端验证。",
            srStat1: "个基础模型，各管一环",
            srStat2: "段流程 / 道人工闸",
            srStat3: "遮挡下仍时序一致的动画人体",
            srStat4: "场景 + 人 + 相机，另附 Blender 工程",
            srResultsTitle: "结果",
            srResultsDesc: "每段核对视频包含输入视频、用恢复出的相机渲染的重建场景、以及两者 50/50 叠加。叠加能对上，说明位置、尺度、相机同时都对了。",
            srSceneStreet: "街口（室外）：出租车、轿车、公交站亭、树、12 个行人",
            srCapStreetStrip: "沿相机轨迹五帧：实拍 | 重建 | 叠加。",
            srCapStreetTop: "交付场景的俯视图：物体与人在米制空间中的位置。",
            srSceneOffice: "开放式办公室（室内）：桌椅、显示器、绿植、房间壳体、4 个有互相遮挡的人",
            srCapOfficeBlender: "交付的 FBX 在 Blender 里打开：带蒙皮的人沿原相机运动。",
            srCapOfficeStrip: "四帧：视频 | Blender 渲染 | 叠加。",
            srArchTitle: "流水线：五段、五闸",
            srArchDesc: "按机器能否可靠判定来划分决策。流水线自动跑到每道闸，把数字和图摆在网页上，只在自动判定不可靠的地方（这张抠图抠全了吗？跟踪到的\"人\"真的是人吗？）请人决定。改了决定只重跑受影响的步骤。",
            srMethodTitle: "怎么做的",
            srM1Title: "测量定位置，生成补形状，常识定尺寸",
            srM1Desc: "没有哪个模型能单独做完。Qwen3-VL 列出画面里有什么；SAM 3 在整段视频里跟踪每个实例；Depth Anything 3 / VGGT 给每帧深度与相机位姿，把 mask 反投影成重力对齐的三维盒子；SAM 3D Objects 用一张抠图生成完整网格（看不见的背面一起补）；Qwen3-VL 回答\"这类东西一般多高\"来定绝对尺度。盒子管位置和朝向，网格管形状，先验管尺寸，互不越界。",
            srM2Title: "尺度与几何校准",
            srM2Desc: "单目深度自洽但不是米制：有个停车场小了 6.4 倍，渲染图上完全看不出来。全局尺度按 VLM 尺寸先验标定，各类一致率不达标就拒绝。位姿错的帧用帧间深度交叉验证挑出并跳过。二维 mask 与三维体素两级去重，消除同一个物体在不同词下被重复检出。",
            srM3Title: "动态人体与物理",
            srM3Desc: "视频 4D 人体流程（分割跟踪、扩散遮挡补全、参数化人体重建）在人互相走过遮挡时仍输出时序一致的序列，再对齐到场景坐标系。房间壳体或地面作为静态碰撞体，刚体仿真让每个物体落地并推开穿模，保证无悬空、无互相穿透。",
            srM4Title: "工程落地",
            srM4Desc: "单入口驱动、断点续跑、状态查询、段间质量门控、每道闸一个网页审核台。七个 conda 环境和约 250 GB 权重可按装机文档加上游补丁复现。交付物：场景 FBX、场景 + 人 + 原相机 FBX、每人一个单独文件，以及 Blender 工程。",
            srGateTitle: "闸口长什么样",
            srGateDesc: "街口场景的闸 2 审核表：每个候选抠图及其类别、取自哪一帧、VLM 判定。审核人在浏览器里保留、丢弃、合并或改类，流水线从受影响的步骤重跑。",
            srLimitTitle: "已知局限",
            srLimit1: "点云主轴只给出物体的轴，判不出正反，朝向可能差 180°。",
            srLimit2: "人体身份靠位置核对：甲走了、乙站到同一位置，可能被并成一个人。",
            srLimit3: "被跟踪成\"人\"的非人物体（搭在椅背上的外套）不会自动去掉，要在闸口点掉。",

            // --- 3DGS2MESH PAGE ---
            gmPageTitle: "3DGS 物体替换 | 何锦程",
            gmTitle: "3DGS 物体替换为生成网格",
            gmSubtitle: "WarpEngine（2026年10月）。把高斯泼溅房间里的一个物体换成可编辑的带贴图网格，位置与原物体严丝合缝。",
            gmOverview1: "3DGS 场景好看，但里面什么都动不了。这个工具输入一张全景图、房间的 3DGS，以及一个提示词或一次点击，把那个物体换成生成的网格：旧的高斯点被挖掉，新网格摆放、缩放、精修，直到从每个视角看轮廓都与原物吻合。",
            gmOverview2: "只用两个模型，都在本机：SAM 3 抠图，SAM 3D Objects 生成网格。其余步骤（摆放、删点、多视角精修、检查）全是确定性几何。网页查看器可以加物体、看进度、3D 检查、手工补删。",
            gmStat1: "个步骤，每步可独立重跑",
            gmStat2: "每个物体（单张 RTX 3090）",
            gmStat3: "个视角对每个高斯点投票",
            gmStat4: "个模型，不调任何云服务",
            gmResultTitle: "结果：茶几，三个机位",
            gmResultDesc: "列：原图（仅第一行）、原来的 3DGS、删点后、删点后 + 网格、删掉的点。行：生成用的相机，再左移、右移 0.3 米。相机移动时网格位置不变；挖出的洞被盖住，没有残留浮点。",
            gmSliderTitle: "沙发：前后对比",
            gmSliderDesc: "拖动对比同一相机下的原 3DGS 与删点后 + 生成网格。",
            gmSliderBefore: "原 3DGS",
            gmSliderAfter: "删点 + 网格",
            gmArchTitle: "流水线",
            gmArchDesc: "一个入口脚本读物体清单、领 GPU、在各自 conda 环境里起每一步、写状态文件供查看器轮询。可以从任意一步重跑；改一个字段（物体落在什么面上、换个种子）只重跑依赖它的部分。",
            gmStepsTitle: "关键步骤",
            gmS1Title: "1. 抠图与生成",
            gmS1Desc: "SAM 3 按提示词或点击选实例，再把列出的部件（抱枕、毯子）并进 mask。SAM 3D Objects 用这一张抠图生成带贴图的网格和预测位姿。",
            gmS2Title: "2. 摆放、投票、挖除、精修",
            gmS2Desc: "落在 mask 里的场景点就是旧物体：网格摆正后搜索朝向、大小和位置，最低点落到地面。围着物体再渲 6 个视角，SAM 3 逐个抠图，每个高斯点投票为物体 / 没看到 / 其他，物体的俯视轮廓竖直挤出、整块删除。最后用所有视角的轮廓精修网格：朝向 ±15°、整体缩放、每轴拉伸 ±10%。",
            gmS2Cap: "黄：SAM 3 mask。红：精修后的网格轮廓。各视角拟合后的 IoU。",
            gmInputTitle: "输入",
            gmInputDesc: "一张全景图和对应的 3DGS。全景中心看物体太俯视时（茶几），改用 3DGS 从更好的机位渲染生成用的图。",
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
        const path = window.location.pathname;
        const isIndex = path.endsWith('/') || path.endsWith('/index.html') || path === '' ;
        if (!isInSubfolder && !isIndex) {
            document.querySelectorAll('nav a').forEach(link => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) link.setAttribute('href', 'index.html' + href);
            });
            const homeLink = document.querySelector('.nav-title-group a');
            if (homeLink) homeLink.setAttribute('href', 'index.html');
            return;
        }
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

    const initCardVideos = () => {
        const vids = document.querySelectorAll('.project-card-content video[data-src]');
        if (!vids.length) return;
        const load = (v) => { if (!v.src) { v.src = v.getAttribute('data-src'); } };
        const play = (v) => { load(v); const p = v.play(); if (p && p.catch) p.catch(() => {}); };
        const canHover = window.matchMedia('(hover: hover)').matches;
        vids.forEach(v => {
            const card = v.closest('.project-card-content');
            if (canHover) {
                card.addEventListener('mouseenter', () => play(v));
                card.addEventListener('mouseleave', () => { v.pause(); });
            }
        });
        if (!canHover && 'IntersectionObserver' in window) {
            const io = new IntersectionObserver(entries => {
                entries.forEach(e => { if (e.isIntersecting) play(e.target); else e.target.pause(); });
            }, { threshold: 0.6 });
            vids.forEach(v => io.observe(v));
        }
    };

    loadNavbar();
    initCardVideos();
});
