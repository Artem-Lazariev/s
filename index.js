function change(object,index = 0) {
    let all = document.querySelectorAll("all")
    let vars = all[index].querySelectorAll("var")
    for (let varV of vars){
        varV.innerHTML = eval(`object.${varV.innerHTML}`)
    }
}
change({name:"artem"},0);
