main()

async function main() {
    const articles = await getArticles()

    for (article of articles) {
    displayArticle(article)
    }
}

function getArticles() {
    return fetch("http://localhost:3000/api/teddies")
    .then(function(httpBodyResponse) {
        return httpBodyResponse.json()
    })
    .then(function(articles) {
        return articles
    })
    .catch(function(error) {
        alert(error)
    })
}

function displayArticle() {
    const templateElt = document.getElementById("templateArticle")
    const cloneElt = document.importNode(templateElt.content, true)

    cloneElt.getElementById("blog_title").textContent = article.title
    cloneElt.getElementById("blog_body").textContent = article.body

    document.getElementById("main").appendChild(cloneElt)
}