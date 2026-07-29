
//base.innerHTML = ''

function change(obj,index = 0,inAll) {
    let base = document.querySelectorAll('all')[inAll];
    let array = []
    let i = base

        i = i.querySelectorAll('var')[index]
        if (!i || !(obj[i.innerHTML.trim()]) ) {
            array.push(-1)
        }else {
            i.innerHTML = obj[i.innerHTML.trim()]
            array.push(1)
        }
    
    return array
}
change({name:"Artem"},0,0);
