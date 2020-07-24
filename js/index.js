const root = document.querySelector('#root');
//root.insertAdjacentHTML('beforeend',title);

function newElement(tag, conteudo){
    const title = `<${tag}>${conteudo}</{$tag}>`;
    root.insertAdjacentHTML('beforeend',title);
}

newElement('h1','Meu nome é Ana, Ana Paula!');
