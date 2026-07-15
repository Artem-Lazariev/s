async function getLinks(link){
    return await fetch(link).then(res => res.text()).catch(err => console.log(err));
}
for (let i of document.querySelectorAll("l")){
    await getLinks(i.innerHTML).then(async res => i.outerHTML = res);
}////.