/*
    Buscando e contando dados em um array
 */

const booksByCategory = [
    {
        category : "Auto-ajuda barata",
        books:[
            {
                title : "Os segredos da mente milionária",
                author : "T. Harv Eker"
            },
            {
                title : "O homem mais rico da Babilônia",
                author : "George S. Clason"
            },
            {
                title : "Pai rico, pai pobre",
                author : "Robert T."
            }
            
        ]
    },
    {
        category : "Inteligência Emocional",
        books:[
            {
                title : "Você é insubstituível",
                author : "Augusto Cury"
            },
            {
                title : "Ansiedade : como enfrentar o mal do século",
                author : "Augusto Cury"
            },
            {
                title : "Os hábitos das pessoas altamente eficazes",
                author : "Stephen R. Covey"
            }
        ]
    },
    {
        category : "Ciência Imortal do Proletariado",
        books : [
            {
                title : "Revolução Chinesa", 
                author : "Wladimir Pomar"
            }, 
            {
                title : "Revolução Vietnamita",
                author : "Paulo Fagundes Visentin"
            }
        ]
    }
];


const totalCategories = booksByCategory.length;//quantidade de categorias
console.log(totalCategories)


for(let category of booksByCategory){
    console.log(category.category)//categoria e quantidade de livros
    console.log(category.books.length)
}


function countAuthor(){
    let authors = [];

    for(let category of booksByCategory){//percorre a categoria
       for(let books of category.books){//percore os livros dentro de cada categoria
           if(authors.indexOf(books.author)==-1){
               authors.push(books.author);

               /*
                O indexOf retorna -1 se um elemento não for encontrado dentro do array. Ou seja, neste if, se o array n conter o author passado dentro do indexof, ele adiciona o mesmo ao array
                */
           }
       }
    }
    console.log("Total autores:"+authors.length);
}
countAuthor();

//busca de livros por autor
function booksOfAuthor(author){
    let booksOfAuthor = [];
    //array para armazenar os exemplares do autor

    for(let categorias of booksByCategory){//percorre a categoria
        for(let books of categorias.books){//percorre os livros dentro da categoria. A variável conterá todos os livros 
            if(books.author === author){//verifica se tem livros com o nome do autor passado via parâmetro
                booksOfAuthor.push(books.title)// se houver autor com o nome informado, adiciona o nome do livro a um array
            }
        }
    }

    console.log(`Livros do autor (${author}): ${booksOfAuthor.join(", ")}`);
    //transforma o array em uma string e separa os elementos com virgula

}
booksOfAuthor("Wladimir Pomar");


//Função que busca todas categorias, autores e livros
function viewBooksAndAuthors(){
    for(let categoria of booksByCategory){
        console.log(`\n\nCategoria : ${categoria.category} `)
        for(let books of categoria.books){
            console.log(`Livros : ${books.title} || Author : ${books.author}`)
        }
    }
}
viewBooksAndAuthors();