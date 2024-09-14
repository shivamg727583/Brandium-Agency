function locomotiveScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

function page1Heading(){
  
var h1text=document.querySelectorAll(".h1-text h1");
h1text.forEach(function(elem){
  var text= elem.textContent;
  var splittedText=text.split("");
  var clutter="";
  splittedText.forEach(function(val){
    clutter+=`<span>${val}</span>`;
  })
  elem.innerHTML=clutter;
})

gsap.from(".page1 h1 span",{
  y:500,
  opacity:0,
  delay:.5,
  duration:.5,
  stagger:.1,
  
})
gsap.from(".heading2 h1 span",{
  x:-300,
  y:500,
  opacity:0,
  stagger:.1,
  scrollTrigger:{
    trigger:".heading2",
    scroller:".main",
    // markers:true,
    start:"top 70%",
    end:"top 20%",
    scrub:2,
  }
  
})

}

function cardAnimation(){
  
var crsr=document.querySelector(".cursor");
var cardImg = document.querySelectorAll(".card-img img,.card-img video");
cardImg.forEach(function(elem){
  var h1=document.createElement("h2");
  var h2=document.createElement("h2");
  var text=elem.getAttribute("data-text");
  h1.innerHTML=text
  h2.innerHTML=text
  elem.addEventListener("mouseenter",function(){
  crsr.appendChild(h1);
  crsr.appendChild(h2);
gsap.to(".cursor",{
  width:"120px",
  height:"fit-content",
  borderRadius:"30px",
  padding:"10px",
})
  //  crsr.style.width="120px"
  //  crsr.style.height="fit-content"
  //  crsr.style.borderRadius="30px"
  //  crsr.style.padding="10px"

  })
  elem.addEventListener("mouseleave",function(){
    gsap.to(".cursor",{
      width:"15px",
      height:"15px",
    })
  crsr.removeChild(h1);
  crsr.removeChild(h2);

  })
})
}

function page2Content1(){
  
  var h2text=document.querySelector(".page2-content1 h2");
  var text= h2text.textContent;
    var splittedText=text.split("");
    var clutter="";
    splittedText.forEach(function(val){
      clutter+=`<span>${val}</span>`;
    })
    h2text.innerHTML=clutter;
  
  gsap.from(".page2-content1 h2 span",{
    opacity:0,
    duration:.5,
    stagger:.1,
    scrollTrigger:{
      trigger:".page2-content1",
      scroller:".main",
      // markers:true,
      start:"top 60%",
      end:"top 10%",
      scrub:true,
    }
    
  })
  }
 
function page2Content2(){
  
  var h4text=document.querySelector(".page2-content2 h4");
  var text= h4text.textContent;
    var splittedText=text.split("");
    var clutter="";
    splittedText.forEach(function(val){
      clutter+=`<span>${val}</span>`;
    })
    h4text.innerHTML=clutter;
  
  gsap.from(".page2-content2 h4 span",{
    opacity:0,
    duration:.5,
    stagger:.1,
    scrollTrigger:{
      trigger:".page2-content2",
      scroller:".main",
      // markers:true,
      start:"top 70%",
      end:"top 20%",
      scrub:true,
    }
    
  })
  }

 function elementAnimation(){
  var elementContainer = document.querySelector(".elem-container")
  const allElements=document.querySelectorAll(".elem");
const imgDiv=document.querySelector(".elem-img img");

document.querySelector(".elem-container").addEventListener("mouseenter",function(){
  gsap.to(".elem-img",{
    opacity:1,
  })
 
})
document.querySelector(".elem-container").addEventListener("mouseleave",function(){
  gsap.to(".elem-img",{
    opacity:0,
  })
})
  allElements.forEach(function(elem){
elem.addEventListener("mouseenter",function(dets){
var imgSrc=elem.getAttribute("data-img");
imgDiv.setAttribute("src",imgSrc)
})

elementContainer.addEventListener("mousemove",function(dets){
  gsap.to(".elem-img",{
    left:`${dets.x - elementContainer.getBoundingClientRect().x}`,
    top:`${dets.y - elementContainer.getBoundingClientRect().y}`,
    duration:3,
    ease:"power1.out"
  })
 
})
 
// console.log(-extraY)

})





 } 

 function page4Animation(){
gsap.from(".page4-heading1 h1",{
  y:600,
  stagger:.2,
  rotate:10,
  duration:1,
  opacity:0,
  scrollTrigger:{
    trigger:".page4-heading1",
    scroller:".main",
    start:"top 30%",
    end:"top -100%",
    // markers:true  
  }
})

gsap.from(".page4-heading2 h1",{
  y:600,
  stagger:.2,
  opacity:0,
  rotate:10,
  duration:1,
  scrollTrigger:{
    trigger:".page4-heading2",
    scroller:".main",
    start:"top 40%",
    end:"top -100%",
    // markers:true
  }
})
 }

function scrollerAnimation(){
  window.addEventListener("wheel",function(dets){
   
    if(dets.deltaY > 0){
      gsap.to(".scroll-bar .scroller",{
        transform:"translateX(-200%)",
        repeat:-1,
        duration:6,
        ease:"linear"
       })
       gsap.to(".scroll-bar .scroller i",{
       rotate:180
       })
    }
    else{
  
      gsap.to(".scroll-bar .scroller",{
        transform:"translateX(0%)",
        repeat:-1,
        duration:6,
        ease:"linear"
       })
       gsap.to(".scroll-bar .scroller i",{
        rotate:0
        })
    }
  })

  window.addEventListener("keydown",function(dets){
   
    if(dets.key == "ArrowDown"){
      gsap.to(".scroll-bar .scroller",{
        transform:"translateX(-200%)",
        repeat:-1,
        duration:6,
        ease:"linear"
       })
       gsap.to(".scroll-bar .scroller i",{
       rotate:180
       })
    }
    else if(dets.key == "ArrowUp"){
  
      gsap.to(".scroll-bar .scroller",{
        transform:"translateX(0%)",
        repeat:-1,
        duration:6,
        ease:"linear"
       })
       gsap.to(".scroll-bar .scroller i",{
        rotate:0
        })
    }
  })
}

function page5Animation(){
  var page5=document.querySelector(".page5");
 var page5Part1=document.querySelector("#page5-part1");
 var page5Part2=document.querySelector("#page5-part2");
var img=document.querySelector(".page5-img img");
var imgBox=document.querySelector(".page5-img")
var img1=page5Part1.getAttribute("data-src");
var img2=page5Part2.getAttribute("data-src");

document.addEventListener("mousemove",function(dets){
  gsap.to(".cursor",{
    x:dets.x+"px",
    y:dets.y+"px",
  })
  gsap.to(imgBox,{
    x:dets.x+"px",
    y:dets.y+"px",
  
  })
  })
  


page5.addEventListener("mouseenter",function(){
 gsap.to(imgBox,{
  display:"block"
  
 })
})
page5.addEventListener("mouseleave",function(){
  gsap.to(imgBox,{
    display:"none"
  })
})

page5Part1.addEventListener("mouseenter",function(){
  img.setAttribute("src",img1)

  gsap.to(page5,{
    backgroundColor:`rgb(255,215,231)`
  })
 gsap.to(page5Part2,{
  opacity:.5
 })
})
page5Part1.addEventListener("mouseleave",function(){
  gsap.to(page5,{
    backgroundColor:`white`
  })
  gsap.to(page5Part2,{
    opacity:1
   })
 })
 page5Part2.addEventListener("mouseenter",function(){
  img.setAttribute("src",img2)
  gsap.to(page5,{
    backgroundColor:`rgb(186,196,226)`
  })
  gsap.to(page5Part1,{
    opacity:.5
   })
 })
 page5Part2.addEventListener("mouseleave",function(){
  
  gsap.to(page5,{
    backgroundColor:`white`
  })
  gsap.to(page5Part1,{
    opacity:1
   })
 })

}


locomotiveScroll();
page1Heading();
cardAnimation();
page2Content1();
page2Content2();
elementAnimation();
page4Animation();
scrollerAnimation();
page5Animation();


var roti = 0;
document.addEventListener("wheel", function (dets) {   
    gsap.to(".rotate-circle svg",{
rotate:`${roti}deg`,
ease:"none"
})
if(dets.deltaY>0){
roti++;
}
else{
roti--;
}


})

// document.addEventListener("wheel",function(dets){
//   // console.log(dets)
//   gsap.to(".circle .cir-layer",{
//     height:`${dets.clientY}%`,


//   })
// })


  window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    console.log(scrollPosition)
    var innerLayer = document.querySelector('.circle .cir-layer');
    innerLayer.style.transform = 'translateY(' + (-100 + scrollPosition / 12.5) + '%)';
  });
