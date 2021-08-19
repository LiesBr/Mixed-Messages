const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
const randomIndex = (arr) => Math.floor(Math.random() * arr.length);


const hannahWords = {
    nouns: ['Beer', 'Papa', 'Die', 'Dat', 'Papf', 'Auto', 'Poepf', 'Huis'],
    verbs: ['oh-oow!', 'boem!', 'auw!', 'nat!', '¯\_(ツ)_/¯', 'bah!', 'ja.']
}


const sentenceGenerator = obj => {
    h1.innerText = `${obj.nouns[randomIndex(obj.nouns)]}, ${obj.verbs[randomIndex(obj.verbs)]}`
}

// btn.addEventListener('click', sentenceGenerator(hannahWords));


