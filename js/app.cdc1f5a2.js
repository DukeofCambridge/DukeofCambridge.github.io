(function(){"use strict";var e={8728:function(e,t,a){var n=a(5130),i=a(2407),o=a(7477),l=(a(4188),a(6768));function s(e,t){const a=(0,l.g2)("router-view");return(0,l.uX)(),(0,l.Wv)(a)}var d=a(1241);const r={},c=(0,d.A)(r,[["render",s]]);var f=c,v=a(1387),u=a(4232),p=a.p+"media/bg.01b14b5d.mp4",g=a.p+"media/bg.be34e4eb.mp3",h=a(144);const m=e=>((0,l.Qi)("data-v-4a5210b2"),e=e(),(0,l.jt)(),e),b=m((()=>(0,l.Lk)("span",null,"顶 部",-1))),k=m((()=>(0,l.Lk)("span",null,"足 迹",-1))),y=m((()=>(0,l.Lk)("span",null,"撷 英",-1))),w=m((()=>(0,l.Lk)("span",null,"省 思",-1))),_=m((()=>(0,l.Lk)("span",null,"求 索",-1)));var L=(0,l.pM)({__name:"SideMenu",setup(e){const t=(0,h.KR)("top"),a=["writing","collection","footprint","top"],n=e=>{const t=document.querySelector(e);t&&t.scrollIntoView({behavior:"smooth"})},i=e=>{"research"==e?window.open("#/research"):n(`#${e}`)},s=()=>{for(const e of a){const a=document.querySelector(`#${e}`);if(a&&a.getBoundingClientRect().top<=0){t.value=e;break}}};return(0,l.sV)((()=>{document.addEventListener("scroll",s)})),(0,l.hi)((()=>{document.removeEventListener("scroll",s)})),(e,a)=>{const n=(0,l.g2)("el-icon"),s=(0,l.g2)("el-menu-item"),d=(0,l.g2)("el-menu");return(0,l.uX)(),(0,l.Wv)(d,{"default-active":t.value,onSelect:i,class:"side-menu"},{default:(0,l.k6)((()=>[(0,l.bF)(s,{index:"top"},{default:(0,l.k6)((()=>[(0,l.bF)(n,null,{default:(0,l.k6)((()=>[(0,l.bF)((0,h.R1)(o.Sunrise))])),_:1}),b])),_:1}),(0,l.bF)(s,{index:"footprint"},{default:(0,l.k6)((()=>[(0,l.bF)(n,null,{default:(0,l.k6)((()=>[(0,l.bF)((0,h.R1)(o.Guide))])),_:1}),k])),_:1}),(0,l.bF)(s,{index:"collection"},{default:(0,l.k6)((()=>[(0,l.bF)(n,null,{default:(0,l.k6)((()=>[(0,l.bF)((0,h.R1)(o.Trophy))])),_:1}),y])),_:1}),(0,l.bF)(s,{index:"writing"},{default:(0,l.k6)((()=>[(0,l.bF)(n,null,{default:(0,l.k6)((()=>[(0,l.bF)((0,h.R1)(o.ChatDotRound))])),_:1}),w])),_:1}),(0,l.bF)(s,{index:"research"},{default:(0,l.k6)((()=>[(0,l.bF)(n,null,{default:(0,l.k6)((()=>[(0,l.bF)((0,h.R1)(o.Ship))])),_:1}),_])),_:1})])),_:1},8,["default-active"])}}});const x=(0,d.A)(L,[["__scopeId","data-v-4a5210b2"]]);var S=x;const j={class:"TagGroup"},C={class:"TagCard"},R={class:"TagCard-img-container"},T=["src","alt"],E={class:"Text"};var F=(0,l.pM)({__name:"TimeLine",setup(e){const t=[{timestamp:"2023-08",color:"#a58037",img:a(3451),title:"香港科技大学",desc:"CSE Dept.",motto:"先驅新進 求變無間 東西春秋 日月可鑑"},{timestamp:"2019-10",color:"#b90203",img:a(2540),title:"同济大学学生会",desc:"采写编辑部",motto:"自觉觉人"},{timestamp:"2019-08",color:"#0059aa",img:a(6277),title:"同济大学",desc:"软件学院",motto:"夫吴人与越人相恶也,当其同舟而济,遇风,其相救也,如左右手"},{timestamp:"2016-09",color:"#d41920",img:a(4658),title:"康杰中学",desc:"",motto:"问渠那得清如许,为有源头活水来"}];return(e,a)=>{const n=(0,l.g2)("el-timeline-item"),i=(0,l.g2)("el-timeline");return(0,l.uX)(),(0,l.Wv)(i,null,{default:(0,l.k6)((()=>[((0,l.uX)(),(0,l.CE)(l.FK,null,(0,l.pI)(t,((e,t)=>(0,l.bF)(n,{key:t,color:e.color,timestamp:e.timestamp,placement:"top",size:"large"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",j,[(0,l.Lk)("div",C,[(0,l.Lk)("div",R,[(0,l.Lk)("img",{src:e.img,alt:e.title},null,8,T)]),(0,l.Lk)("div",E,[(0,l.Lk)("h1",null,(0,u.v_)(e.title),1),(0,l.Lk)("p",null,[(0,l.Lk)("strong",null,(0,u.v_)(e.desc),1)]),(0,l.Lk)("p",null,(0,u.v_)(e.motto),1)])])])])),_:2},1032,["color","timestamp"]))),64))])),_:1})}}});const I=(0,d.A)(F,[["__scopeId","data-v-52455378"]]);var A=I;const O=["src","alt"];var M=(0,l.pM)({__name:"ShowCase",setup(e){const t=[{src:a(6040),desc:"家人"},{src:a(9137),desc:"运城关帝庙"},{src:a(6938),desc:"故乡"},{src:a(810),desc:"康杰纪念馆"},{src:a(979),desc:"祖宅"},{src:a(5972),desc:"伦敦街头"},{src:a(4866),desc:"福尔摩斯博物馆"},{src:a(293),desc:"约克大教堂"},{src:a(1790),desc:"美赛"},{src:a(3988),desc:"同舟共济舞台剧"},{src:a(9439),desc:"学生会"},{src:a(4891),desc:"四平校区"},{src:a(2167),desc:"四平校区"},{src:a(87),desc:"嘉定校区"},{src:a(271),desc:"俄罗斯国家芭蕾舞团"},{src:a(4824),desc:"俄罗斯国家芭蕾舞团"},{src:a(639),desc:"上美影"},{src:a(8455),desc:"苏州园林"},{src:a(9540),desc:"志愿者"},{src:a(7666),desc:"西湖"},{src:a(6925),desc:"西湖"},{src:a(5427),desc:"香港红帆游艇"}],n=(0,h.KR)("50vh"),i=(0,h.KR)("card"),o=()=>{window.innerWidth<=768?(n.value="30vh",i.value=""):(n.value="50vh",i.value="card")};return(0,l.sV)((()=>{o(),window.addEventListener("resize",o)})),(0,l.xo)((()=>{window.removeEventListener("resize",o)})),(e,a)=>{const o=(0,l.g2)("el-carousel-item"),s=(0,l.g2)("el-carousel");return(0,l.uX)(),(0,l.Wv)(s,{interval:3e3,type:i.value,height:n.value,"indicator-position":"outside","pause-on-hover":""},{default:(0,l.k6)((()=>[((0,l.uX)(),(0,l.CE)(l.FK,null,(0,l.pI)(t,(e=>(0,l.bF)(o,{key:e,label:e.desc},{default:(0,l.k6)((()=>[(0,l.Lk)("img",{src:e.src,style:{width:"100%",height:"100%","object-fit":"cover"},alt:e.desc},null,8,O)])),_:2},1032,["label"]))),64))])),_:1},8,["type","height"])}}});const K=(0,d.A)(M,[["__scopeId","data-v-f4ded574"]]);var P=K,U=a(9660);const z=e=>((0,l.Qi)("data-v-4071f4e8"),e=e(),(0,l.jt)(),e),D={class:"home"},G={class:"header",id:"top"},H=z((()=>(0,l.Lk)("video",{autoplay:"",loop:"",muted:"",playsinline:""},[(0,l.Lk)("source",{src:p,type:"video/mp4"})],-1))),V={class:"greeting"},B={style:{"margin-top":"10vh",width:"50%","text-align":"center"}},W=(0,l.Fv)('<svg class="WaveMultiGroup" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto" data-v-4071f4e8><path fill="rgba(255,255,255,0.7)" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" data-v-4071f4e8></path><path fill="rgba(255,255,255,0.5)" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" data-v-4071f4e8></path><path fill="rgba(255,255,255,0.3)" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" data-v-4071f4e8></path><path fill="rgba(255,255,255,1)" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" data-v-4071f4e8></path></svg>',1),X={class:"footprint-div"},J={class:"title",id:"footprint"},q=z((()=>(0,l.Lk)("label",{class:"linear-gradient-text"},"👣 足 迹 ",-1))),Q=z((()=>(0,l.Lk)("br",null,null,-1))),Y=z((()=>(0,l.Lk)("br",null,null,-1))),$={style:{margin:"10vh 10vw"}},N={class:"title",id:"collection"},Z=z((()=>(0,l.Lk)("label",{class:"linear-gradient-text"},"🌸 撷 英 ",-1))),ee=z((()=>(0,l.Lk)("br",null,null,-1))),te=z((()=>(0,l.Lk)("br",null,null,-1))),ae={style:{margin:"10vh 10vw"}},ne={class:"title",id:"writing"},ie=z((()=>(0,l.Lk)("label",{class:"linear-gradient-text"},"💡 省 思 ",-1))),oe=z((()=>(0,l.Lk)("br",null,null,-1))),le=z((()=>(0,l.Lk)("br",null,null,-1))),se=["href"],de=["src","alt"],re={style:{"padding-bottom":"14px","text-align":"center"}},ce=z((()=>(0,l.Lk)("source",{src:g,type:"audio/mpeg"},null,-1))),fe=[ce];var ve=(0,l.pM)({__name:"HomeView",setup(e){const t=(0,h.KR)(""),n=(0,h.KR)(""),i=(0,h.KR)(""),o=(0,h.KR)(""),s=(0,h.KR)(!0);let d=null;const r=()=>{s.value=!1},c=()=>{s.value=!0,d&&clearTimeout(d),d=setTimeout(r,5e3)},f=()=>{c()},v=[{picPath:a(5126),text:"荧幕后的万千世界",turnRoute:"https://v6bn1welpm.feishu.cn/docx/Dh2cdd1iOoLvzhxnJJBcq4XqnDI"},{picPath:a(5776),text:"人类从历史中学到的",turnRoute:"https://www.bilibili.com/video/BV1494y1e7bV"},{picPath:a(6943),text:"Research Page",turnRoute:"#/research"}];(0,l.sV)((()=>{new U.A(t.value,{speed:150,deleteSpeed:50,cursorChar:"<span class='cursorChar'>|<span>",lifeLike:!0,cursor:!1,breakLines:!1,loop:!0}).type("欢迎来到邵国诚的个人网站！",{delay:2e3}).delete("",{delay:1e3}).type("点击任意位置以启用背景音乐~",{delay:2e3}).delete("",{delay:12e3}).go(),new U.A(n.value,{speed:150,deleteSpeed:50,lifeLike:!0,loop:!0}).type("旅程总有一天会迎来终点，所以，不必匆忙",{delay:5e3}).delete("",{delay:2e3}).type("风带来故事的种子，时间使之发芽",{delay:5e3}).delete("",{delay:2e3}).go(),new U.A(i.value,{speed:150,deleteSpeed:50,lifeLike:!0,loop:!0}).type("旅人将遍历的一万个故事，都将成为旅人灵魂的一部分",{delay:5e3}).delete("",{delay:2e3}).type("所谓的平凡生活，其实是日复一日的奇迹",{delay:5e3}).delete("",{delay:2e3}).type("就算命运是注定的，人在路途中能做的事仍然有很多，而故事的结局也会呈现截然不同的意义",{delay:5e3}).delete("",{delay:2e3}).type("岁月流转，唯有思念与归风不变",{delay:5e3}).delete("",{delay:2e3}).go(),new U.A(o.value,{speed:150,deleteSpeed:50,lifeLike:!0,loop:!0}).type("艺术，让人成为人",{delay:5e3}).delete("",{delay:2e3}).type("信息熵即为灵魂",{delay:5e3}).delete("",{delay:2e3}).go()}));const p=(0,h.KR)(),g=()=>{p.value&&p.value.paused&&p.value.play()},m=(0,h.KR)(6),b=()=>{window.innerWidth<=768?m.value=20:m.value=6};return(0,l.sV)((()=>{document.addEventListener("click",g),window.addEventListener("scroll",f),b(),window.addEventListener("resize",b)})),(0,l.hi)((()=>{document.removeEventListener("click",g),window.removeEventListener("scroll",f),window.removeEventListener("resize",b),d&&clearTimeout(d)})),(e,a)=>{const d=(0,l.g2)("el-card"),r=(0,l.g2)("el-col"),c=(0,l.g2)("el-row");return(0,l.uX)(),(0,l.CE)("div",D,[(0,l.Lk)("div",G,[H,(0,l.Lk)("div",V,[(0,l.Lk)("div",B,[(0,l.Lk)("h1",{ref_key:"text",ref:t,class:"msg"},null,512)])]),W]),(0,l.Lk)("div",{class:(0,u.C4)([{hidden:!s.value},"side-menu-div"])},[(0,l.bF)(S)],2),(0,l.Lk)("div",X,[(0,l.Lk)("div",J,[q,Q,Y,(0,l.Lk)("label",{class:"desc",ref_key:"title1",ref:n},null,512)]),(0,l.bF)(A)]),(0,l.Lk)("div",$,[(0,l.Lk)("div",N,[Z,ee,te,(0,l.Lk)("label",{class:"desc",ref_key:"title2",ref:i},null,512)]),(0,l.bF)(P)]),(0,l.Lk)("div",ae,[(0,l.Lk)("div",ne,[ie,oe,le,(0,l.Lk)("label",{class:"desc",ref_key:"title3",ref:o},null,512)]),(0,l.bF)(c,null,{default:(0,l.k6)((()=>[((0,l.uX)(),(0,l.CE)(l.FK,null,(0,l.pI)(v,((e,t)=>(0,l.bF)(r,{key:e,span:m.value,offset:6===m.value&&t%3!==0?1:2},{default:(0,l.k6)((()=>[(0,l.Lk)("a",{href:e.turnRoute,target:"_blank",style:{"text-decoration":"none"}},[(0,l.bF)(d,{shadow:"hover","body-style":{padding:"5px"},style:{"margin-bottom":"5vh"}},{default:(0,l.k6)((()=>[(0,l.Lk)("img",{src:e.picPath,class:"image",alt:e.text},null,8,de),(0,l.Lk)("div",re,[(0,l.Lk)("h4",null,(0,u.v_)(e.text),1)])])),_:2},1024)],8,se)])),_:2},1032,["span","offset"]))),64))])),_:1})]),(0,l.Lk)("audio",{autoplay:"",loop:"",hidden:"",ref_key:"bgaudio",ref:p},fe,512)])}}});const ue=(0,d.A)(ve,[["__scopeId","data-v-4071f4e8"]]);var pe=ue,ge=a.p+"img/selfie.8b3bf1fd.jpg",he=a(3451),me=a(6277),be=a.p+"img/pipeline_compare.87beae21.png",ke=a.p+"img/underwater.a9054401.png";const ye={style:{margin:"0 0 auto"}},we=(0,l.Fv)('<div class="ResearchMainContainer" data-v-f5f03088><div class="ResearchHeroContainer" data-v-f5f03088><h1 class="hero-title" style="grid-area:title;" data-v-f5f03088> Guocheng SHAO 邵国诚 </h1><div class="HeroContent" style="grid-area:content;" data-v-f5f03088><p class="hero-info" data-v-f5f03088> I&#39;m a master&#39;s student in CSIT at Hong Kong University of Science and Technology (<a href="https://hkust.edu.hk/" target="_blank" data-v-f5f03088>HKUST</a>). I obtained my bachelor&#39;s degree in School of Software Engineering at Tongji University (<a href="https://www.tongji.edu.cn/" target="_blank" data-v-f5f03088>TJU</a>). My research interests include computer vision and computer graphics, especially in generative models, 3D reconstruction and stylized rendering. </p><div class="hero-socialmedia" data-v-f5f03088><a href="mailto:gshao@connect.ust.hk" data-v-f5f03088>Email</a> / <a href="https://DukeofCambridge.github.io/" target="_blank" data-v-f5f03088>Homepage</a> / <a href="https://github.com/DukeofCambridge" target="_blank" data-v-f5f03088>Github</a></div></div><div class="HeroImage" style="grid-area:img;" data-v-f5f03088><img src="'+ge+'" draggable="false" data-v-f5f03088></div></div><div class="ResearchCaption" data-v-f5f03088><h2 data-v-f5f03088>Education</h2></div><div class="ResearchEducationContainer" data-v-f5f03088><div class="School" data-v-f5f03088><div class="school-logo" data-v-f5f03088><img src="'+he+'" draggable="false" alt="HKUST logo" data-v-f5f03088></div><div class="school-info" data-v-f5f03088><h3 data-v-f5f03088><strong data-v-f5f03088>Hong Kong University of Science and Technology</strong></h3><div class="school-time" data-v-f5f03088><div class="left" data-v-f5f03088>M.S. in Information Technology</div><div class="right" data-v-f5f03088>Sep. 2023 - Aug. 2024</div></div><p class="school-gpa" data-v-f5f03088>GPA: 4.03/4.30</p></div></div><div class="School" data-v-f5f03088><div class="school-logo" data-v-f5f03088><img src="'+me+'" draggable="false" alt="Tongji logo" data-v-f5f03088></div><div class="school-info" data-v-f5f03088><h3 data-v-f5f03088><strong data-v-f5f03088>Tongji University</strong></h3><div class="school-time" data-v-f5f03088><div class="left" data-v-f5f03088>B.Eng in Software Engineering</div><div class="right" data-v-f5f03088>Sep. 2019 - Jul. 2023</div></div><p class="school-gpa" data-v-f5f03088>Overall GPA: 88.35/100.00</p><p class="school-gpa" data-v-f5f03088>Specialized Course GPA: 91.70/100.00</p></div></div></div><div class="ResearchCaption" data-v-f5f03088><h2 data-v-f5f03088>Publications</h2></div><div class="ResearchPublicationContainer" data-v-f5f03088><div class="Publication" data-v-f5f03088><div class="publication-arch-fig" data-v-f5f03088><img src="'+be+'" draggable="false" alt="Rendering Pipeline Comparison" data-v-f5f03088></div><div class="publication-info" data-v-f5f03088><h3 data-v-f5f03088><strong data-v-f5f03088>Advances in 3D Neural Stylization: A Survey</strong></h3><p data-v-f5f03088> Yingshu Chen*, <strong data-v-f5f03088>Guocheng Shao</strong>, Ka Chun Shum, Binh-Son Hua, Sai-Kit Yeung </p><p data-v-f5f03088> Submitted to International Journal of Computer Vision (IJCV) 2024, Under Review </p><div class="publication-links" data-v-f5f03088><a href="https://arxiv.org/abs/2311.18328" target="_blank" data-v-f5f03088>Paper</a> / <a href="https://github.com/chenyingshu/advances_3d_neural_stylization" target="_blank" data-v-f5f03088>Code</a></div></div></div><div class="Publication" data-v-f5f03088><div class="publication-arch-fig" data-v-f5f03088><img src="'+ke+'" draggable="false" data-v-f5f03088></div><div class="publication-info" data-v-f5f03088><h3 data-v-f5f03088><strong data-v-f5f03088>UW-Real: Enhancing Synthetic Underwater Scenes Towards Realism</strong></h3><p data-v-f5f03088>TBD</p><p data-v-f5f03088>Intended to International Conference on 3D Vision (3DV) 2025</p><div class="publication-links" data-v-f5f03088> Tag: <a disabled data-v-f5f03088>3DGS</a> / <a disabled data-v-f5f03088>Style Transfer</a></div></div></div></div><div class="ResearchCaption" data-v-f5f03088><h2 data-v-f5f03088>Intern</h2></div><div class="ResearchInternContainer" data-v-f5f03088><div class="Intern" data-v-f5f03088><div class="intern-header" data-v-f5f03088><div class="intern-logo" data-v-f5f03088><img id="tencent-logo" src="https://images.ctfassets.net/odsfb7g0v9wp/35naAl7ABGazXGYBJyTQ3R/4f126e19be09ae2e6897a48505f9dcac/tencent_logo.png" draggable="false" data-v-f5f03088></div></div><div class="intern-info" data-v-f5f03088><ul data-v-f5f03088><li data-v-f5f03088> Interactive Entertainment Group (IEG) / Unreal Engine Plugin Development </li><li data-v-f5f03088> Explore integrating neural networks in game engine rendering pipeline. Develop plugin for real-time style transfer with neural network inference. </li></ul></div></div></div><div class="ResearchCaption" data-v-f5f03088><h2 data-v-f5f03088>Awards &amp; Honors</h2></div><div class="ResearchAwardContainer" data-v-f5f03088><ol data-v-f5f03088><li data-v-f5f03088><div data-v-f5f03088> Excellent Student Scholarship (Fall 2023), HKUST<span data-v-f5f03088>03/2024</span></div></li><li data-v-f5f03088><div data-v-f5f03088> Taiyuan Scholarship for Undergraduate Student, Tongji University<span data-v-f5f03088>11/2022</span></div></li><li data-v-f5f03088><div data-v-f5f03088> Meritorious Winner in Mathematical Contest in Modeling, COMAP, US<span data-v-f5f03088>05/2022</span></div></li><li data-v-f5f03088><div data-v-f5f03088> Outstanding Undergraduate Student Scholarship, Tongji University<span data-v-f5f03088>11/2021</span></div></li></ol></div><div class="ResearchCaption" data-v-f5f03088><h2 data-v-f5f03088>Others</h2></div><div class="ResearchOthersContainer" data-v-f5f03088><div class="OtherContainer" data-v-f5f03088><h3 class="other-title" data-v-f5f03088>Student Work</h3><ul data-v-f5f03088><li data-v-f5f03088> Outstanding member of Interview and Writing Department, Tongji Univ. Student Union. </li></ul></div><div class="OtherContainer" data-v-f5f03088><h3 class="other-title" data-v-f5f03088>Hobbies</h3><ul data-v-f5f03088><li data-v-f5f03088>🎦 Movie/Gaming/Music</li><li data-v-f5f03088>🏸 Badminton</li><li data-v-f5f03088>🎞️️ Video Editing</li><li data-v-f5f03088>💪 Fitness</li></ul></div></div></div>',1),_e=[we];function Le(e,t){return(0,l.uX)(),(0,l.CE)("div",ye,_e)}const xe={},Se=(0,d.A)(xe,[["render",Le],["__scopeId","data-v-f5f03088"]]);var je=Se;const Ce=[{path:"/",redirect:"/homepage-guocheng"},{path:"/homepage-guocheng",name:"home",component:pe},{path:"/research",name:"research",component:je}],Re=(0,v.aE)({history:(0,v.Bt)("/"),routes:Ce});Re.afterEach((()=>{window.scrollTo(0,0)}));var Te=Re,Ee=a(8401),Fe=(0,Ee.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}});const Ie=(0,n.Ef)(f);for(const[Ae,Oe]of Object.entries(o))Ie.component(Ae,Oe);Ie.use(Fe).use(Te).use(i.A).mount("#app")},3451:function(e,t,a){e.exports=a.p+"img/HKUST.740f094c.png"},4658:function(e,t,a){e.exports=a.p+"img/Kangjie_Middle_School_Logo.a8fbb3ca.png"},87:function(e,t,a){e.exports=a.p+"img/campus.ad168d59.jpg"},6040:function(e,t,a){e.exports=a.p+"img/family.68147531.jpg"},5427:function(e,t,a){e.exports=a.p+"img/hk.8fce84b2.jpg"},1790:function(e,t,a){e.exports=a.p+"img/mcm2207862.fabb9c18.png"},9540:function(e,t,a){e.exports=a.p+"img/volunteer.c0208c8e.png"},639:function(e,t,a){e.exports=a.p+"img/上美影.ae09a33b.jpg"},5972:function(e,t,a){e.exports=a.p+"img/伦敦2.57e48b8b.jpg"},4824:function(e,t,a){e.exports=a.p+"img/俄罗斯国家芭蕾舞团.a1b474e9.jpg"},271:function(e,t,a){e.exports=a.p+"img/俄罗斯国家芭蕾舞团1.fe88549e.jpg"},4891:function(e,t,a){e.exports=a.p+"img/四平校区.dd0155b8.jpg"},9439:function(e,t,a){e.exports=a.p+"img/学生会.b0aea262.jpg"},810:function(e,t,a){e.exports=a.p+"img/康杰纪念馆.e08e3448.jpg"},6938:function(e,t,a){e.exports=a.p+"img/故乡.97bc9fdf.jpg"},9137:function(e,t,a){e.exports=a.p+"img/故乡关帝庙.cb557889.jpg"},2167:function(e,t,a){e.exports=a.p+"img/济樱.82742d53.jpg"},979:function(e,t,a){e.exports=a.p+"img/祖宅.8dcac01c.jpg"},4866:function(e,t,a){e.exports=a.p+"img/福尔摩斯博物馆.dc49cb8f.jpg"},293:function(e,t,a){e.exports=a.p+"img/约克.65bca32b.jpg"},3988:function(e,t,a){e.exports=a.p+"img/舞台剧.486a11ab.jpeg"},8455:function(e,t,a){e.exports=a.p+"img/苏州园林.7afbc35d.jpg"},7666:function(e,t,a){e.exports=a.p+"img/西湖1.112f7bda.jpg"},6925:function(e,t,a){e.exports=a.p+"img/西湖2.74d54ba4.jpg"},5776:function(e,t,a){e.exports=a.p+"img/atk.265efc01.jpg"},6943:function(e,t,a){e.exports=a.p+"img/cover.56ed732a.png"},5126:function(e,t,a){e.exports=a.p+"img/suzime.f00d1837.jpeg"},6277:function(e,t,a){e.exports=a.p+"img/tongji.16b6b572.png"},2540:function(e,t,a){e.exports=a.p+"img/同济大学学生会.ee06701b.png"}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,i,o){if(!n){var l=1/0;for(c=0;c<e.length;c++){n=e[c][0],i=e[c][1],o=e[c][2];for(var s=!0,d=0;d<n.length;d++)(!1&o||l>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[d])}))?n.splice(d--,1):(s=!1,o<l&&(l=o));if(s){e.splice(c--,1);var r=i();void 0!==r&&(t=r)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,i,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,l=n[0],s=n[1],d=n[2],r=0;if(l.some((function(t){return 0!==e[t]}))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(d)var c=d(a)}for(t&&t(n);r<l.length;r++)o=l[r],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},n=self["webpackChunkguocheng_io"]=self["webpackChunkguocheng_io"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(8728)}));n=a.O(n)})();
//# sourceMappingURL=app.cdc1f5a2.js.map