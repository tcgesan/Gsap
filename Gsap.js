// gsap.from(".box",{
//           x:200,
//           rotate:360,
//           duration:2,
//           borderRadius:50,
//           scale:0.5,
//           opacity:0,
//           repeat:-1,
//           yoyo:true,
//           stagger:0.4,

// })

// gsap.from("h1",{
//           opacity:0,
//           duration:0.6,
//           repeat:2,
//           yoyo:true,
//           stagger:0.4,
// })


// gsap.to(".nav",{
//           x:880,
//           y:30,
//           duration:0.4,
// })


gsap.from(".page1 .box",{
          // x:500,
          rotate:360,
          scale:0,
          duration:1
})

gsap.from(".page2 .box",{
          // x:500,
          rotate:360,
          scale:0,
          duration:1,
          scrollTrigger:{
                    trigger:".page2 .box",
                    scrub:2,
                    markers:true,
                    scroller:"body",
          }
})

gsap.from(".page3 .box",{
          x:-300,
          scale:0,
          duration:1,
          scrollTrigger:{
                    trigger:".page3 .box",
                    scrub:2,
                    scroller:"body",
          }
})