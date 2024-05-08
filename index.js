const all_A = document.querySelectorAll('body a')
for(let i of all_A){
    i.addEventListener('click',(e)=>{
        e.preventDefault()
    })
}








const circle = document.querySelector('.circle')
window.addEventListener('mousemove',(e)=>{
    console.log(`clienX=${e.clientX}`)
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
}) 

const menu = document.querySelector(".menu");
menu.addEventListener('click',()=>{
    menu.classList.toggle("active");
})










// 자기소개 페이지
const photo_click = document.querySelector(".photo h2")
const photo_img = document.querySelector(".photo img")
console.log(photo_click)

photo_click.addEventListener('click',()=>{
    photo_img.style.opacity = '1'
    photo_img.style.transition= '1s'
    photo_click.style.opacity = '0'
    photo_click.style.transition= '1s'
})
photo_img.addEventListener('mouseout',()=>{
    photo_img.style.opacity = '0'
    photo_img.style.transition= '1s'
    photo_click.style.opacity = '1'
    photo_click.style.transition= '1s'
})


// project
const project_wrap = document.querySelectorAll('.project_wavve')
const project_calvin =document.querySelectorAll('.project_calvin')
for(let i of project_wrap){
    i.addEventListener('mouseover',()=>{
        circle.innerHTML = 'view site'
        circle.classList.add('project_active')
    })
    i.addEventListener('mouseout',()=>{
        circle.innerHTML = ''
        circle.classList.remove('project_active')
        circle.style.transition = '0.2s'
    })
}
for(let i of project_calvin){
    i.addEventListener('mouseover',()=>{
        circle.innerHTML = 'view site'
        circle.classList.add('calvin_active')
    })
    i.addEventListener('mouseout',()=>{
        circle.innerHTML = ''
        circle.classList.remove('calvin_active')
        circle.style.transition = '0.2s'
    })
}



// 이미지 변경
const wavve_preview = document.querySelector ('.wavve_preview')
const wavve_img = document.querySelector('.wavve_site img')
wavve_preview.addEventListener('mouseover',()=>{
    wavve_img.style.opacity = '0';
    setTimeout(() => {
        wavve_img.src = './images/FireShot Capture 002 - Wavve(웨이브) - yunaweb.pe.kr.png'
        setTimeout(() => {
            wavve_img.style.opacity = '1';
        }, 100);
    }, 1000);
})
wavve_preview.addEventListener('mouseout',()=>{
    wavve_img.style.opacity = '0';
    setTimeout(() => {
        wavve_img.src = './images/1577623_20220928113354_117_0001.jpg   '
        setTimeout(() => {
            wavve_img.style.opacity = '1';
        }, 100);
    }, 1000);
})
const calvin_preview =document.querySelector('.calvin_preview')
const calvin_img =document.querySelector('.calvin_site img')

calvin_preview.addEventListener('mouseover',()=>{
    calvin_img.style.opacity = '0';
    setTimeout(() => {
        calvin_img.src = "./images/FireShot Capture 001 - 캘빈클라인 공식 온라인 스토어 (한국) - calvinkleinkorea.netlify.app.png"
        setTimeout(() => {
            calvin_img.style.opacity = '1';
        }, 100);
    }, 1000);
})
calvin_preview.addEventListener('mouseout',()=>{
    calvin_img.style.opacity = '0';
    setTimeout(() => {
        calvin_img.src = "./images/jTqLdF.jpg"
        setTimeout(() => {
            calvin_img.style.opacity = '1';
        }, 100);
    }, 1000);
})

// 메뉴바 클릭
const nav_bar =document.querySelector('.nav_bar')
const menu_nav =document.querySelector('.menu_nav')
const menu_bg =document.querySelectorAll('.menu_bg')
let nav_result = true
console.log(nav_bar )



nav_bar.addEventListener('click',()=>{
    nav_result =!nav_result
    console.log(nav_result)

    if(nav_result ==false){
        menu_nav.style.transform = "translateX(0)"
        menu_bg.forEach((target,index)=>{
            target.style.transform = "translateX(0)"
        })

    }else{
        menu_nav.style.transform = "translateX(-3000px)"
        menu_nav.style.transition = '3s'
        menu_bg.forEach((target,index)=>{
            target.style.transform = "translateX(-3000px)"
        })
    }
})

const main_bg = document.querySelectorAll('.main_bg')
const nav_a =document.querySelectorAll('.menu_wrap a')
main_bg.forEach((obj,index)=>{
    console.log(main_bg[index].offsetTop)
})
nav_a.forEach((obj,index)=>{
    obj.addEventListener('click',(e)=>{
        e.preventDefault()
        window.scrollTo(0,main_bg[`${index}`].offsetTop)
        menu_nav.style.transform = "translateX(-3000px)"
        menu.classList.toggle("active");
        nav_result = true
    })
})


// 스크롤 색상
const introduction =document.querySelector('.introduction')
const project_title =document.querySelector('.project_title')
const project =document.querySelector('.project')
const who_been =document.querySelector('.who_been') 
const been_num =document.querySelectorAll('.who_been .number')
const been_imfo =document.querySelector('.been_imfo')
const been_span = document.querySelectorAll('.who_span span')
const last_contents =document.querySelector('.last_contents')
const been_contact =document.querySelectorAll('.been_contact span')
const no_2 =document.querySelectorAll('.no_2')
const project_title_h1 = document.querySelector('.project_title h1')
console.log(project_title_h1)
window.addEventListener('scroll',()=>{
    if(introduction.getBoundingClientRect().top <=700){
        introduction.style.opacity = '1'
    }
    // if(introduction.getBoundingClientRect().top <=200){
    //     project_title.style.backgroundColor = '#fff'
    //     project_title.style.transition = '1s'
    // }
    if(project.getBoundingClientRect().top <=200){
        project_title.style.backgroundColor = '#000'
        project_title.style.transition = '1s'
    }
    if(project_title.getBoundingClientRect().top <=400){
        project_title.style.backgroundColor = '#fff'
        project_title.style.transition = '2s'
        project_title_h1.classList.add('bounce')

    }
    if(project_title.getBoundingClientRect().top >=600){
        project_title.style.backgroundColor = '#000'
        project_title.style.transition = '1s'
    }

    if(who_been.getBoundingClientRect().top <=250){
        who_been.style.backgroundColor = '#fff';
        for(let i of been_num){
            console.log(i)
            i.classList.add('cover_ani')
        }
        for(let i of been_span){
            console.log(i)
            i.classList.add('cover_ani2')
        }
    }
    if(who_been.getBoundingClientRect().top >250 ){
        who_been.style.backgroundColor = '#000';
    }
    if(introduction.getBoundingClientRect().top <=200){
        who_been.style.backgroundColor = '#000';
    }
    // been_info
    if(been_imfo.getBoundingClientRect().top <=250){
        been_imfo.style.backgroundColor = '#fff';
        for(let i of no_2){
            console.log(i)
            i.classList.add('cover_ani')
        }
        for(let i of been_contact){
            console.log(i)
            i.classList.add('cover_ani2')
        }
    }
    if(been_imfo.getBoundingClientRect().top >250 ){
        been_imfo.style.backgroundColor = '#000';
    }
    if(last_contents.getBoundingClientRect().top <=250){
        been_imfo.style.backgroundColor = '#000';
    }
    if(last_contents.getBoundingClientRect().top <=600){ 
        last_contents.style.opacity = '1'
        last_contents.classList.add('cover_ani3')
    }
})

// 링크연결
const web_link = document.querySelectorAll('.project_box')
const git_link =document.querySelectorAll('.figma_link')
let git_figma =['https://www.figma.com/proto/mxTjr6dFNz8v5gaUhxGVzi/Untitled?page-id=0%3A1&type=design&node-id=1-2&viewport=555%2C526%2C0.02&t=iWMGVQz4esDzeEdq-1&scaling=contain&mode=design','https://github.com/leejonghyunbeen/calvinklein']
let web_site = ['https://yunaweb.pe.kr/wave_frontend24/#','https://calvinkleinkorea.netlify.app/']

web_link.forEach((target,index)=>{
    target.addEventListener('click',()=>{
        window.open(web_site[index],'_blank')
    })
})


git_link.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        e.preventDefault()
        window.open(git_figma[index],'_blank')
    })
})