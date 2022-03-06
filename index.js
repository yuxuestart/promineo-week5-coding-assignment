class book {
    constructor(author, category, title, language='English'){
        this.author = author;
        this.category = category;
        this.title = title;
        this.language = language;
    }
}
class fiction extends book{   
    constructor(author, category, title, language='English', genre){
        super(author,category,title,language);
        this.genre = genre;
    }
}

class nonfiction extends book{
    constructor(author, category, title, language='English',subject){
        super(author,category,title,language);
        this.subject = subject;    
    }
}

const book1 = new fiction("Allan Po","fiction","The Raven","English","thriller");
const book2 = new nonfiction("Plato", "nonfiction","The Republic", "English", "philosophy");
const bookList = [book1, book2];
console.log(bookList);


class bookCheckOut {
    constructor(lender,  book) {
        this.lender = lender;
        this.book = book;
    }

    get numberOfBooksBorrowed(){
        return this.countNumber();
    }
    countNumber() {
        return 2;
    }

    update(lender, book){
        this.lender = lender;
        this.book = book;
    }
}

const bookCheckList1 = new bookCheckOut("Jim", book1);

console.log(`${bookCheckList1['lender']} checked out the book ${book1['title']}, which was written by ${book1['author']}.
It is a ${book1['category']} and ${book1['genre']}, and written in ${book1['language']}. 
${bookCheckList1['lender']} has borrowed this book ${bookCheckList1.numberOfBooksBorrowed} times.)`); 
