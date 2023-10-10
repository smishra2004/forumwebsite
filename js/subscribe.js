const prices=document.querySelectorAll(".prices >ul li"),
         faqs=document.querySelectorAll(".faq");

faqs.forEach((faq)=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
    })
})

// function to handle click event on a price element
function handleClick(e){
    const cl=e.currentTarget.dataset.price;
    const allCl=document.querySelectorAll(`.${cl}`);

    // remove "active class from all prices"
    prices.forEach((price)=>{
        price.classList.remove("active");
    });

    // add active class to clicked price element
    e.currentTarget.classList.add("active");

    // remove remove active class from all elements with the same class as the clicked element
    allCl.forEach((c)=>{
        c.classList.add("active");
    });

    // if clicked element has yearly
    if(cl=="yearly"){
        document.querySelectorAll(".monthly").forEach((m)=>{
            m.classList.remove("active");
        });
    }else{
        document.querySelectorAll(".yearly").forEach((y)=>{
            y.classList.remove("active");
        });
    }
}

price.forEach((price)=>{
    price.addEventListener("click",handleClick);
})