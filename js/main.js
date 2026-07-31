let head = document.getElementById('head');
console.log(head)
window.addEventListener("scroll", () => {
    if (window.scrollY > 700){
        head.classList.add('bg-nav')
    }else{
        head.classList.remove('bg-nav')
    }
})
const navLinks = document.querySelectorAll('.links a');

// 2. إعداد مبرمج المراقبة (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6 // يعني أن السيكشن يعتبر نشطاً إذا ظهر منه 60% في الشاشة
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // إذا كان السيكشن ظاهرًا حاليًا في الشاشة
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
        
        // إزالة كلاس النشاط من كل اللينكات
            navLinks.forEach(link => link.classList.remove('active-link'));
        
        // إضافة كلاس النشاط للينك الذي يوجه لهذا السيكشن تحديدًا
            const activeLink = document.querySelector(`.links a[href="#${id}"]`);
            if (activeLink) {
            activeLink.classList.add('active-link');
        }
        // تشغيل دالة العدادات إذا وصل المستخدم لسيكشن العدادات ولم يسبق تشغيلها
        if (id === 'count-s') {
        funcount();
        }
    }
    });
}, observerOptions);

  // 3. بدء مراقبة السيكشنز المستهدفة تلقائيًا بناءً على href اللينكات
navLinks.forEach(link => {
    const targetId = link.getAttribute('href');
    if (targetId && targetId.startsWith('#') && targetId !== '#') {
        const section = document.querySelector(targetId);
        if (section) {
            observer.observe(section);
        }
    }
});

  // دالة العدادات معدلة بالأرقام العربية
let funcount = function(){
    if(document.getElementById('years')){
        let years = document.getElementById('years')
        let i = 0
        let set = setInterval(()=>{
            i++
            years.innerText = i.toLocaleString('ar-EG')
            if(i == 5) clearInterval(set)
        } , 50)
    }
    if(document.getElementById('showrrooms')){
        let showrrooms = document.getElementById('showrrooms')
        let i = 0
        let set = setInterval(()=>{
            i++
            showrrooms.innerText = "+" + i.toLocaleString('ar-EG')
            if(i == 200) clearInterval(set)
        } , 6.25)
    }
    if(document.getElementById('count')){
        let counter = document.getElementById('count')
        let i = 0
        let set = setInterval(()=>{
            i++
            counter.innerText =   i.toLocaleString('ar-EG') + "الف"
            if(i == 100) clearInterval(set)
        } , 12.5)
    }
    if(document.getElementById('customers')){
        let customers = document.getElementById('customers')
        let i = 0
        let set = setInterval(()=>{
            i++
            customers.innerText = i.toLocaleString('ar-EG') + "%"
            if(i == 99) clearInterval(set)
        } , 12.5)
    }
}
const offcanvasElement = document.getElementById("offcanvasWithBothOptions");
const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

document.querySelectorAll("#offcanvasWithBothOptions a").forEach(link => {
    link.addEventListener("click", () => {
        offcanvas.hide();
    });
});