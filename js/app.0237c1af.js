(function () {
    "use strict";
    var e = {
        7463: function (e, t, a) {
            var i = a(5130), n = a(2407), d = a(7477), o = (a(4188), a(6768));

            function l(e, t) {
                const a = (0, o.g2)("router-view");
                return (0, o.uX)(), (0, o.Wv)(a)
            }

            var s = a(1241);
            const r = {}, c = (0, s.A)(r, [["render", l]]);
            var b = c, v = a(1387), u = a(4232), p = a.p + "media/bg.01b14b5d.mp4", g = a.p + "media/bg.be34e4eb.mp3",
                h = a(144);
            const f = e => ((0, o.Qi)("data-v-0e3b0d7c"), e = e(), (0, o.jt)(), e),
                m = f((() => (0, o.Lk)("span", null, "顶 部", -1))),
                k = f((() => (0, o.Lk)("span", null, "足 迹", -1))),
                y = f((() => (0, o.Lk)("span", null, "撷 英", -1))),
                _ = f((() => (0, o.Lk)("span", null, "省 思", -1))),
                x = f((() => (0, o.Lk)("span", null, "求 索", -1)));
            var L = (0, o.pM)({
                __name: "SideMenu", setup(e) {
                    const t = (0, h.KR)("top"), a = ["writing", "collection", "footprint", "top"], i = e => {
                        const t = document.querySelector(e);
                        t && t.scrollIntoView({behavior: "smooth"})
                    }, n = (e, t) => {
                        "research" == e ? window.open("https://DukeofCambridge.github.io/research") : i(`#${e}`)
                    }, l = () => {
                        for (const e of a) {
                            const a = document.querySelector(`#${e}`);
                            if (a && a.getBoundingClientRect().top <= 0) {
                                t.value = e;
                                break
                            }
                        }
                    };
                    return (0, o.sV)((() => {
                        document.addEventListener("scroll", l)
                    })), (0, o.hi)((() => {
                        document.removeEventListener("scroll", l)
                    })), (e, a) => {
                        const i = (0, o.g2)("el-icon"), l = (0, o.g2)("el-menu-item"), s = (0, o.g2)("el-menu");
                        return (0, o.uX)(), (0, o.Wv)(s, {
                            "default-active": t.value,
                            onSelect: n,
                            style: {
                                width: "100px",
                                opacity: "0.8",
                                "border-radius": "15px",
                                overflow: "hidden",
                                "box-shadow": "0 4px 8px 0 rgba(25, 14, 109, 0.13)"
                            }
                        }, {
                            default: (0, o.k6)((() => [(0, o.bF)(l, {index: "top"}, {
                                default: (0, o.k6)((() => [(0, o.bF)(i, null, {
                                    default: (0, o.k6)((() => [(0, o.bF)((0, h.R1)(d.Sunrise))])),
                                    _: 1
                                }), m])), _: 1
                            }), (0, o.bF)(l, {index: "footprint"}, {
                                default: (0, o.k6)((() => [(0, o.bF)(i, null, {
                                    default: (0, o.k6)((() => [(0, o.bF)((0, h.R1)(d.Guide))])),
                                    _: 1
                                }), k])), _: 1
                            }), (0, o.bF)(l, {index: "collection"}, {
                                default: (0, o.k6)((() => [(0, o.bF)(i, null, {
                                    default: (0, o.k6)((() => [(0, o.bF)((0, h.R1)(d.Trophy))])),
                                    _: 1
                                }), y])), _: 1
                            }), (0, o.bF)(l, {index: "writing"}, {
                                default: (0, o.k6)((() => [(0, o.bF)(i, null, {
                                    default: (0, o.k6)((() => [(0, o.bF)((0, h.R1)(d.ChatDotRound))])),
                                    _: 1
                                }), _])), _: 1
                            }), (0, o.bF)(l, {index: "research"}, {
                                default: (0, o.k6)((() => [(0, o.bF)(i, null, {
                                    default: (0, o.k6)((() => [(0, o.bF)((0, h.R1)(d.Ship))])),
                                    _: 1
                                }), x])), _: 1
                            })])), _: 1
                        }, 8, ["default-active"])
                    }
                }
            });
            const w = (0, s.A)(L, [["__scopeId", "data-v-0e3b0d7c"]]);
            var S = w;
            const C = {class: "TagGroup"}, j = {class: "TagCard"}, R = {class: "TagCard-img-container"},
                T = ["src", "alt"], F = {class: "Text"};
            var E = (0, o.pM)({
                __name: "TimeLine", setup(e) {
                    const t = [{
                        timestamp: "2023-08",
                        color: "#a58037",
                        img: a(7925),
                        title: "香港科技大学",
                        desc: "CSE Dept.",
                        motto: "先驅新進 求變無間 東西春秋 日月可鑑"
                    }, {
                        timestamp: "2019-10",
                        color: "#b90203",
                        img: a(2540),
                        title: "同济大学学生会",
                        desc: "采写编辑部",
                        motto: "自觉觉人"
                    }, {
                        timestamp: "2019-08",
                        color: "#0059aa",
                        img: a(6277),
                        title: "同济大学",
                        desc: "软件学院",
                        motto: "夫吴人与越人相恶也,当其同舟而济,遇风,其相救也,如左右手"
                    }, {
                        timestamp: "2016-09",
                        color: "#d41920",
                        img: a(4658),
                        title: "康杰中学",
                        desc: "",
                        motto: "问渠那得清如许,为有源头活水来"
                    }];
                    return (e, a) => {
                        const i = (0, o.g2)("el-timeline-item"), n = (0, o.g2)("el-timeline");
                        return (0, o.uX)(), (0, o.Wv)(n, null, {
                            default: (0, o.k6)((() => [((0, o.uX)(), (0, o.CE)(o.FK, null, (0, o.pI)(t, ((e, t) => (0, o.bF)(i, {
                                key: t,
                                color: e.color,
                                timestamp: e.timestamp,
                                placement: "top",
                                size: "large"
                            }, {
                                default: (0, o.k6)((() => [(0, o.Lk)("div", C, [(0, o.Lk)("div", j, [(0, o.Lk)("div", R, [(0, o.Lk)("img", {
                                    src: e.img,
                                    alt: e.title
                                }, null, 8, T)]), (0, o.Lk)("div", F, [(0, o.Lk)("h1", null, (0, u.v_)(e.title), 1), (0, o.Lk)("p", null, [(0, o.Lk)("strong", null, (0, u.v_)(e.desc), 1)]), (0, o.Lk)("p", null, (0, u.v_)(e.motto), 1)])])])])),
                                _: 2
                            }, 1032, ["color", "timestamp"]))), 64))])), _: 1
                        })
                    }
                }
            });
            const I = (0, s.A)(E, [["__scopeId", "data-v-582f7214"]]);
            var A = I;
            const O = ["src", "alt"];
            var M = (0, o.pM)({
                __name: "ShowCase", setup(e) {
                    const t = [{src: a(6040), desc: "家人"}, {src: a(9137), desc: "运城关帝庙"}, {
                        src: a(6938),
                        desc: "故乡"
                    }, {src: a(810), desc: "康杰纪念馆"}, {src: a(979), desc: "祖宅"}, {
                        src: a(5972),
                        desc: "伦敦街头"
                    }, {src: a(4866), desc: "福尔摩斯博物馆"}, {src: a(293), desc: "约克大教堂"}, {
                        src: a(1790),
                        desc: "美赛"
                    }, {src: a(3988), desc: "同舟共济舞台剧"}, {src: a(9439), desc: "学生会"}, {
                        src: a(4891),
                        desc: "四平校区"
                    }, {src: a(2167), desc: "四平校区"}, {src: a(87), desc: "嘉定校区"}, {
                        src: a(271),
                        desc: "俄罗斯国家芭蕾舞团"
                    }, {src: a(4824), desc: "俄罗斯国家芭蕾舞团"}, {src: a(639), desc: "上美影"}, {
                        src: a(8455),
                        desc: "苏州园林"
                    }, {src: a(9540), desc: "志愿者"}, {src: a(7666), desc: "西湖"}, {
                        src: a(6925),
                        desc: "西湖"
                    }, {src: a(5427), desc: "香港红帆游艇"}];
                    return (e, a) => {
                        const i = (0, o.g2)("el-carousel-item"), n = (0, o.g2)("el-carousel");
                        return (0, o.uX)(), (0, o.Wv)(n, {
                            interval: 3e3,
                            type: "card",
                            height: "50vh",
                            "indicator-position": "outside",
                            "pause-on-hover": ""
                        }, {
                            default: (0, o.k6)((() => [((0, o.uX)(), (0, o.CE)(o.FK, null, (0, o.pI)(t, (e => (0, o.bF)(i, {
                                key: e,
                                label: e.desc
                            }, {
                                default: (0, o.k6)((() => [(0, o.Lk)("img", {
                                    src: e.src,
                                    style: {width: "100%", height: "100%", "object-fit": "cover"},
                                    alt: e.desc
                                }, null, 8, O)])), _: 2
                            }, 1032, ["label"]))), 64))])), _: 1
                        })
                    }
                }
            });
            const P = (0, s.A)(M, [["__scopeId", "data-v-21b0e9ca"]]);
            var U = P, K = a(9660);
            const D = e => ((0, o.Qi)("data-v-21b8200e"), e = e(), (0, o.jt)(), e), G = {class: "home"},
                H = {class: "header", id: "top"},
                z = D((() => (0, o.Lk)("video", {autoplay: "", loop: "", muted: ""}, [(0, o.Lk)("source", {
                    src: p,
                    type: "video/mp4"
                })], -1))), V = {class: "greeting"},
                X = {style: {"margin-top": "10vh", width: "50%", "text-align": "center"}},
                B = (0, o.Fv)('<svg class="WaveMultiGroup" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto" data-v-21b8200e><path fill="rgba(255,255,255,0.7)" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" data-v-21b8200e></path><path fill="rgba(255,255,255,0.5)" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" data-v-21b8200e></path><path fill="rgba(255,255,255,0.3)" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" data-v-21b8200e></path><path fill="rgba(255,255,255,1)" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" data-v-21b8200e></path></svg>', 1),
                W = {style: {margin: "auto 25vw"}}, J = {class: "title", id: "footprint"},
                q = D((() => (0, o.Lk)("label", {class: "linear-gradient-text"}, "👣 足 迹 ", -1))),
                Q = D((() => (0, o.Lk)("br", null, null, -1))), Y = D((() => (0, o.Lk)("br", null, null, -1))),
                $ = {style: {margin: "10vh 10vw"}}, N = {class: "title", id: "collection"},
                Z = D((() => (0, o.Lk)("label", {class: "linear-gradient-text"}, "🌸 撷 英 ", -1))),
                ee = D((() => (0, o.Lk)("br", null, null, -1))), te = D((() => (0, o.Lk)("br", null, null, -1))),
                ae = {style: {margin: "10vh 10vw"}}, ie = {class: "title", id: "writing"},
                ne = D((() => (0, o.Lk)("label", {class: "linear-gradient-text"}, "💡 省 思 ", -1))),
                de = D((() => (0, o.Lk)("br", null, null, -1))), oe = D((() => (0, o.Lk)("br", null, null, -1))),
                le = ["href"], se = ["src", "alt"], re = {style: {"padding-bottom": "14px", "text-align": "center"}},
                ce = D((() => (0, o.Lk)("source", {src: g, type: "audio/mpeg"}, null, -1))), be = [ce];
            var ve = (0, o.pM)({
                __name: "HomeView", setup(e) {
                    const t = (0, h.KR)(""), i = (0, h.KR)(""), n = (0, h.KR)(""), d = (0, h.KR)(""), l = (0, h.KR)(!0);
                    let s = null;
                    const r = () => {
                        l.value = !1
                    }, c = () => {
                        l.value = !0, s && clearTimeout(s), s = setTimeout(r, 5e3)
                    }, b = () => {
                        c()
                    }, v = [{
                        picPath: a(5126),
                        text: "荧幕后的万千世界",
                        turnRoute: "https://v6bn1welpm.feishu.cn/docx/Dh2cdd1iOoLvzhxnJJBcq4XqnDI"
                    }, {
                        picPath: a(5776),
                        text: "人类从历史中学到的",
                        turnRoute: "https://www.bilibili.com/video/BV1494y1e7bV"
                    }, {
                        picPath: a(6943),
                        text: "Research Page",
                        turnRoute: "https://DukeofCambridge.github.io/research"
                    }];
                    (0, o.sV)((() => {
                        new K.A(t.value, {
                            speed: 150,
                            deleteSpeed: 50,
                            cursorChar: "<span class='cursorChar'>|<span>",
                            lifeLike: !0,
                            cursor: !1,
                            breakLines: !1,
                            loop: !0
                        }).type("欢迎来到邵国诚的个人网站！", {delay: 2e3}).delete("", {delay: 1e3}).type("点击任意位置以启用背景音乐~", {delay: 2e3}).delete("", {delay: 12e3}).go(), new K.A(i.value, {
                            speed: 150,
                            deleteSpeed: 50,
                            lifeLike: !0,
                            loop: !0
                        }).type("旅程总有一天会迎来终点，所以，不必匆忙", {delay: 5e3}).delete("", {delay: 2e3}).type("风带来故事的种子，时间使之发芽", {delay: 5e3}).delete("", {delay: 2e3}).go(), new K.A(n.value, {
                            speed: 150,
                            deleteSpeed: 50,
                            lifeLike: !0,
                            loop: !0
                        }).type("旅人将遍历的一万个故事，都将成为旅人灵魂的一部分", {delay: 5e3}).delete("", {delay: 2e3}).type("所谓的平凡生活，其实是日复一日的奇迹", {delay: 5e3}).delete("", {delay: 2e3}).type("就算命运是注定的，人在路途中能做的事仍然有很多，而故事的结局也会呈现截然不同的意义", {delay: 5e3}).delete("", {delay: 2e3}).type("岁月流转，唯有思念与归风不变", {delay: 5e3}).delete("", {delay: 2e3}).go(), new K.A(d.value, {
                            speed: 150,
                            deleteSpeed: 50,
                            lifeLike: !0,
                            loop: !0
                        }).type("艺术，让人成为人", {delay: 5e3}).delete("", {delay: 2e3}).type("信息熵即为灵魂", {delay: 5e3}).delete("", {delay: 2e3}).go()
                    }));
                    const p = (0, h.KR)(), g = () => {
                        p.value && p.value.paused && p.value.play()
                    };
                    return (0, o.sV)((() => {
                        document.addEventListener("click", g), window.addEventListener("scroll", b)
                    })), (0, o.hi)((() => {
                        document.removeEventListener("click", g), window.removeEventListener("scroll", b), s && clearTimeout(s)
                    })), (e, a) => {
                        const s = (0, o.g2)("el-card"), r = (0, o.g2)("el-col"), c = (0, o.g2)("el-row");
                        return (0, o.uX)(), (0, o.CE)("div", G, [(0, o.Lk)("div", H, [z, (0, o.Lk)("div", V, [(0, o.Lk)("div", X, [(0, o.Lk)("h1", {
                            ref_key: "text",
                            ref: t,
                            class: "msg"
                        }, null, 512)])]), B]), (0, o.Lk)("div", {class: (0, u.C4)([{hidden: !l.value}, "side-menu"])}, [(0, o.bF)(S)], 2), (0, o.Lk)("div", W, [(0, o.Lk)("div", J, [q, Q, Y, (0, o.Lk)("label", {
                            class: "desc",
                            ref_key: "title1",
                            ref: i
                        }, null, 512)]), (0, o.bF)(A)]), (0, o.Lk)("div", $, [(0, o.Lk)("div", N, [Z, ee, te, (0, o.Lk)("label", {
                            class: "desc",
                            ref_key: "title2",
                            ref: n
                        }, null, 512)]), (0, o.bF)(U)]), (0, o.Lk)("div", ae, [(0, o.Lk)("div", ie, [ne, de, oe, (0, o.Lk)("label", {
                            class: "desc",
                            ref_key: "title3",
                            ref: d
                        }, null, 512)]), (0, o.bF)(c, null, {
                            default: (0, o.k6)((() => [((0, o.uX)(), (0, o.CE)(o.FK, null, (0, o.pI)(v, ((e, t) => (0, o.bF)(r, {
                                key: e,
                                span: 6,
                                offset: t % 3 !== 0 ? 1 : 2
                            }, {
                                default: (0, o.k6)((() => [(0, o.Lk)("a", {
                                    href: e.turnRoute,
                                    target: "_blank",
                                    style: {"text-decoration": "none"}
                                }, [(0, o.bF)(s, {
                                    shadow: "hover",
                                    "body-style": {padding: "5px"},
                                    style: {"margin-bottom": "5vh", height: "50vh"}
                                }, {
                                    default: (0, o.k6)((() => [(0, o.Lk)("img", {
                                        src: e.picPath,
                                        class: "image",
                                        alt: e.text
                                    }, null, 8, se), (0, o.Lk)("div", re, [(0, o.Lk)("h3", null, (0, u.v_)(e.text), 1)])])),
                                    _: 2
                                }, 1024)], 8, le)])), _: 2
                            }, 1032, ["offset"]))), 64))])), _: 1
                        })]), (0, o.Lk)("audio", {
                            autoplay: "",
                            loop: "",
                            hidden: "",
                            ref_key: "bgaudio",
                            ref: p
                        }, be, 512)])
                    }
                }
            });
            const ue = (0, s.A)(ve, [["__scopeId", "data-v-21b8200e"]]);
            var pe = ue, ge = a.p + "img/selfie.8b3bf1fd.jpg", he = a(7925), fe = a(6277),
                me = a.p + "img/pipeline_compare.87beae21.png", ke = a.p + "img/underwater.a9054401.png";
            const ye = {style: {margin: "0 0 auto"}},
                _e = (0, o.Fv)('<div class="ResearchMainContainer" data-v-b0edb464><div class="ResearchHeroContainer" data-v-b0edb464><h1 class="hero-title" style="grid-area:title;" data-v-b0edb464> Guocheng SHAO 邵国诚 </h1><div class="HeroContent" style="grid-area:content;" data-v-b0edb464><p class="hero-info" data-v-b0edb464> I&#39;m a master&#39;s student in CSIT at Hong Kong University of Science and Technology (<a href="https://hkust.edu.hk/" target="_blank" data-v-b0edb464>HKUST</a>). I obtained my bachelor&#39;s degree in School of Software Engineering at Tongji University (<a href="https://www.tongji.edu.cn/" target="_blank" data-v-b0edb464>TJU</a>). My research interests include computer vision and computer graphics, especially in generative models, 3D reconstruction and stylized rendering. </p><div class="hero-socialmedia" data-v-b0edb464><a href="mailto:gshao@connect.ust.hk" data-v-b0edb464>Email</a> / <a href="https://guocheng.github.io/" target="_blank" data-v-b0edb464>Homepage</a> / <a href="https://github.com/DukeofCambridge" target="_blank" data-v-b0edb464>Github</a></div></div><div class="HeroImage" style="grid-area:img;" data-v-b0edb464><img src="' + ge + '" draggable="false" data-v-b0edb464></div></div><div class="ResearchCaption" data-v-b0edb464><h2 data-v-b0edb464>Education</h2></div><div class="ResearchEducationContainer" data-v-b0edb464><div class="School" data-v-b0edb464><div class="school-logo" data-v-b0edb464><img src="' + he + '" draggable="false" alt="HKUST logo" data-v-b0edb464></div><div class="school-info" data-v-b0edb464><h3 data-v-b0edb464><strong data-v-b0edb464>Hong Kong University of Science and Technology</strong></h3><div class="school-time" data-v-b0edb464><div class="left" data-v-b0edb464>M.S. in Information Technology</div><div class="right" data-v-b0edb464>Sep. 2023 - Aug. 2024</div></div><p class="school-gpa" data-v-b0edb464>GPA: 4.03/4.30</p></div></div><div class="School" data-v-b0edb464><div class="school-logo" data-v-b0edb464><img src="' + fe + '" draggable="false" alt="Tongji logo" data-v-b0edb464></div><div class="school-info" data-v-b0edb464><h3 data-v-b0edb464><strong data-v-b0edb464>Tongji University</strong></h3><div class="school-time" data-v-b0edb464><div class="left" data-v-b0edb464>B.Eng in Software Engineering</div><div class="right" data-v-b0edb464>Sep. 2019 - Jul. 2023</div></div><p class="school-gpa" data-v-b0edb464>Overall GPA: 88.35/100.00</p><p class="school-gpa" data-v-b0edb464>Specialized Course GPA: 91.70/100.00</p></div></div></div><div class="ResearchCaption" data-v-b0edb464><h2 data-v-b0edb464>Publications</h2></div><div class="ResearchPublicationContainer" data-v-b0edb464><div class="Publication" data-v-b0edb464><div class="publication-arch-fig" data-v-b0edb464><img src="' + me + '" draggable="false" alt="Rendering Pipeline Comparison" data-v-b0edb464></div><div class="publication-info" data-v-b0edb464><h3 data-v-b0edb464><strong data-v-b0edb464>Advances in 3D Neural Stylization: A Survey</strong></h3><p data-v-b0edb464> Yingshu Chen*, <strong data-v-b0edb464>Guocheng Shao</strong>, Ka Chun Shum, Binh-Son Hua, Sai-Kit Yeung </p><p data-v-b0edb464> Submitted to International Journal of Computer Vision (IJCV) 2024, Under Review </p><div class="publication-links" data-v-b0edb464><a href="https://arxiv.org/abs/2311.18328" target="_blank" data-v-b0edb464>Paper</a> / <a href="https://github.com/chenyingshu/advances_3d_neural_stylization" target="_blank" data-v-b0edb464>Code</a></div></div></div><div class="Publication" data-v-b0edb464><div class="publication-arch-fig" data-v-b0edb464><img src="' + ke + '" draggable="false" data-v-b0edb464></div><div class="publication-info" data-v-b0edb464><h3 data-v-b0edb464><strong data-v-b0edb464>UW-Real: Enhancing Synthetic Underwater Scenes Towards Realism</strong></h3><p data-v-b0edb464>TBD</p><p data-v-b0edb464>Intended to International Conference on 3D Vision (3DV) 2025</p><div class="publication-links" data-v-b0edb464> Tag: <a disabled data-v-b0edb464>3DGS</a> / <a disabled data-v-b0edb464>Style Transfer</a></div></div></div></div><div class="ResearchCaption" data-v-b0edb464><h2 data-v-b0edb464>Intern</h2></div><div class="ResearchInternContainer" data-v-b0edb464><div class="Intern" data-v-b0edb464><div class="intern-header" data-v-b0edb464><div class="intern-logo" data-v-b0edb464><img id="tencent-logo" src="https://images.ctfassets.net/odsfb7g0v9wp/35naAl7ABGazXGYBJyTQ3R/4f126e19be09ae2e6897a48505f9dcac/tencent_logo.png" draggable="false" data-v-b0edb464></div></div><div class="intern-info" data-v-b0edb464><ul data-v-b0edb464><li data-v-b0edb464> Interactive Entertainment Group (IEG) / Unreal Engine Plugin Development </li><li data-v-b0edb464> Explore integrating neural networks in game engine rendering pipeline. Develop plugin for real-time style transfer with neural network inference. </li></ul></div></div></div><div class="ResearchCaption" data-v-b0edb464><h2 data-v-b0edb464>Awards &amp; Honors</h2></div><div class="ResearchAwardContainer" data-v-b0edb464><ol data-v-b0edb464><li data-v-b0edb464><div data-v-b0edb464> Excellent Student Scholarship (Fall 2023), HKUST<span data-v-b0edb464>03/2024</span></div></li><li data-v-b0edb464><div data-v-b0edb464> Taiyuan Scholarship for Undergraduate Student, Tongji University<span data-v-b0edb464>11/2022</span></div></li><li data-v-b0edb464><div data-v-b0edb464> Meritorious Winner in Mathematical Contest in Modeling, COMAP, US<span data-v-b0edb464>05/2022</span></div></li><li data-v-b0edb464><div data-v-b0edb464> Outstanding Undergraduate Student Scholarship, Tongji University<span data-v-b0edb464>11/2021</span></div></li></ol></div><div class="ResearchCaption" data-v-b0edb464><h2 data-v-b0edb464>Others</h2></div><div class="ResearchOthersContainer" data-v-b0edb464><div class="OtherContainer" data-v-b0edb464><h3 class="other-title" data-v-b0edb464>Student Work</h3><ul data-v-b0edb464><li data-v-b0edb464> Outstanding member of Interview and Writing Department, Tongji Univ. Student Union. </li></ul></div><div class="OtherContainer" data-v-b0edb464><h3 class="other-title" data-v-b0edb464>Hobbies</h3><ul data-v-b0edb464><li data-v-b0edb464>🎦 Movie/Gaming/Music</li><li data-v-b0edb464>🏸 Badminton</li><li data-v-b0edb464>🎞️️ Video Editing</li><li data-v-b0edb464>💪 Fitness</li></ul></div></div></div>', 1),
                xe = [_e];

            function Le(e, t) {
                return (0, o.uX)(), (0, o.CE)("div", ye, xe)
            }

            const we = {}, Se = (0, s.A)(we, [["render", Le], ["__scopeId", "data-v-b0edb464"]]);
            var Ce = Se;
            const je = [{path: "/", redirect: "/homepage-guocheng"}, {
                    path: "/homepage-guocheng",
                    name: "home",
                    component: pe
                }, {path: "/research", name: "research", component: Ce}],
                Re = (0, v.aE)({history: (0, v.LA)("/"), routes: je});
            Re.afterEach(((e, t, a) => {
                window.scrollTo(0, 0)
            }));
            var Te = Re, Fe = a(8401),
                Ee = (0, Fe.y$)({state: {}, getters: {}, mutations: {}, actions: {}, modules: {}});
            const Ie = (0, i.Ef)(b);
            for (const [Ae, Oe] of Object.entries(d)) Ie.component(Ae, Oe);
            Ie.use(Ee).use(Te).use(n.A).mount("#app")
        }, 7925: function (e, t, a) {
            e.exports = a.p + "img/HKUST-Logo-Icon.a54e5a45.svg"
        }, 4658: function (e, t, a) {
            e.exports = a.p + "img/Kangjie_Middle_School_Logo.a8fbb3ca.png"
        }, 87: function (e, t, a) {
            e.exports = a.p + "img/campus.ad168d59.jpg"
        }, 6040: function (e, t, a) {
            e.exports = a.p + "img/family.68147531.jpg"
        }, 5427: function (e, t, a) {
            e.exports = a.p + "img/hk.8fce84b2.jpg"
        }, 1790: function (e, t, a) {
            e.exports = a.p + "img/mcm2207862.fabb9c18.png"
        }, 9540: function (e, t, a) {
            e.exports = a.p + "img/volunteer.c0208c8e.png"
        }, 639: function (e, t, a) {
            e.exports = a.p + "img/上美影.ae09a33b.jpg"
        }, 5972: function (e, t, a) {
            e.exports = a.p + "img/伦敦2.57e48b8b.jpg"
        }, 4824: function (e, t, a) {
            e.exports = a.p + "img/俄罗斯国家芭蕾舞团.a1b474e9.jpg"
        }, 271: function (e, t, a) {
            e.exports = a.p + "img/俄罗斯国家芭蕾舞团1.fe88549e.jpg"
        }, 4891: function (e, t, a) {
            e.exports = a.p + "img/四平校区.dd0155b8.jpg"
        }, 9439: function (e, t, a) {
            e.exports = a.p + "img/学生会.b0aea262.jpg"
        }, 810: function (e, t, a) {
            e.exports = a.p + "img/康杰纪念馆.e08e3448.jpg"
        }, 6938: function (e, t, a) {
            e.exports = a.p + "img/故乡.97bc9fdf.jpg"
        }, 9137: function (e, t, a) {
            e.exports = a.p + "img/故乡关帝庙.cb557889.jpg"
        }, 2167: function (e, t, a) {
            e.exports = a.p + "img/济樱.82742d53.jpg"
        }, 979: function (e, t, a) {
            e.exports = a.p + "img/祖宅.8dcac01c.jpg"
        }, 4866: function (e, t, a) {
            e.exports = a.p + "img/福尔摩斯博物馆.dc49cb8f.jpg"
        }, 293: function (e, t, a) {
            e.exports = a.p + "img/约克.65bca32b.jpg"
        }, 3988: function (e, t, a) {
            e.exports = a.p + "img/舞台剧.486a11ab.jpeg"
        }, 8455: function (e, t, a) {
            e.exports = a.p + "img/苏州园林.7afbc35d.jpg"
        }, 7666: function (e, t, a) {
            e.exports = a.p + "img/西湖1.112f7bda.jpg"
        }, 6925: function (e, t, a) {
            e.exports = a.p + "img/西湖2.74d54ba4.jpg"
        }, 5776: function (e, t, a) {
            e.exports = a.p + "img/atk.265efc01.jpg"
        }, 6943: function (e, t, a) {
            e.exports = a.p + "img/cover.56ed732a.png"
        }, 5126: function (e, t, a) {
            e.exports = a.p + "img/suzime.f00d1837.jpeg"
        }, 6277: function (e, t, a) {
            e.exports = a.p + "img/tongji.16b6b572.png"
        }, 2540: function (e, t, a) {
            e.exports = a.p + "img/同济大学学生会.ee06701b.png"
        }
    }, t = {};

    function a(i) {
        var n = t[i];
        if (void 0 !== n) return n.exports;
        var d = t[i] = {exports: {}};
        return e[i].call(d.exports, d, d.exports, a), d.exports
    }

    a.m = e, function () {
        var e = [];
        a.O = function (t, i, n, d) {
            if (!i) {
                var o = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    i = e[c][0], n = e[c][1], d = e[c][2];
                    for (var l = !0, s = 0; s < i.length; s++) (!1 & d || o >= d) && Object.keys(a.O).every((function (e) {
                        return a.O[e](i[s])
                    })) ? i.splice(s--, 1) : (l = !1, d < o && (o = d));
                    if (l) {
                        e.splice(c--, 1);
                        var r = n();
                        void 0 !== r && (t = r)
                    }
                }
                return t
            }
            d = d || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > d; c--) e[c] = e[c - 1];
            e[c] = [i, n, d]
        }
    }(), function () {
        a.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e["default"]
            } : function () {
                return e
            };
            return a.d(t, {a: t}), t
        }
    }(), function () {
        a.d = function (e, t) {
            for (var i in t) a.o(t, i) && !a.o(e, i) && Object.defineProperty(e, i, {enumerable: !0, get: t[i]})
        }
    }(), function () {
        a.g = function () {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window) return window
            }
        }()
    }(), function () {
        a.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
    }(), function () {
        a.r = function (e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }
    }(), function () {
        a.p = "/"
    }(), function () {
        var e = {524: 0};
        a.O.j = function (t) {
            return 0 === e[t]
        };
        var t = function (t, i) {
            var n, d, o = i[0], l = i[1], s = i[2], r = 0;
            if (o.some((function (t) {
                return 0 !== e[t]
            }))) {
                for (n in l) a.o(l, n) && (a.m[n] = l[n]);
                if (s) var c = s(a)
            }
            for (t && t(i); r < o.length; r++) d = o[r], a.o(e, d) && e[d] && e[d][0](), e[d] = 0;
            return a.O(c)
        }, i = self["webpackChunkguocheng_io"] = self["webpackChunkguocheng_io"] || [];
        i.forEach(t.bind(null, 0)), i.push = t.bind(null, i.push.bind(i))
    }();
    var i = a.O(void 0, [504], (function () {
        return a(7463)
    }));
    i = a.O(i)
})();
//# sourceMappingURL=app.0237c1af.js.map