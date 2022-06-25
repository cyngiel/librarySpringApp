set names utf8;
DROP SCHEMA IF EXISTS library;
CREATE SCHEMA library;

CREATE TABLE library.user
(
	user_id             INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
    username            VARCHAR(30) NOT NULL,
    email               VARCHAR(30) NOT NULL,
    password            VARCHAR(100) NOT NULL,
    
    PRIMARY KEY (user_id)
);

CREATE TABLE library.book
(
	book_id             INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
    title               VARCHAR(300) NOT NULL,
    author              VARCHAR(200) NOT NULL,
    category            VARCHAR(300) NOT NULL,
    publish_year        VARCHAR(50) NOT NULL,
    publishing_house    VARCHAR(50), 
    description         VARCHAR(10000), 
    catalog_number      VARCHAR(50), 
    items               INT(3) UNSIGNED NOT NULL DEFAULT 0, 
    
    PRIMARY KEY (book_id)
);

CREATE TABLE library.book_item
(
	book_item_id		INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
    status				VARCHAR(20) DEFAULT 'stock',
    book_id             INT(3) UNSIGNED NOT NULL,

    PRIMARY KEY (book_item_id),
    FOREIGN KEY (book_id) REFERENCES book(book_id)
);

DELIMITER $$
CREATE TRIGGER library.update_book_items_counter_on_insert
    AFTER INSERT ON library.book_item
FOR EACH ROW
BEGIN
  UPDATE library.book SET items = items + 1 WHERE book_id = NEW.book_id;
END $$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER library.update_book_items_number_on_delete
    AFTER DELETE ON book_item
FOR EACH ROW
BEGIN
  UPDATE library.book SET items = items - 1 WHERE library.book_id = OLD.book_id;
END $$
DELIMITER ;

CREATE TABLE library.borrowing
(
	borrowing_id		INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
    date				date, 
    book_item_id        INT(3) UNSIGNED NOT NULL,
    user_id             INT(3) UNSIGNED NOT NULL,

    PRIMARY KEY (borrowing_id),
    FOREIGN KEY (book_item_id) REFERENCES book_item(book_item_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);

CREATE TABLE library.news
(
	news_id		        INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
    title               VARCHAR(50) NOT NULL,    
    content             VARCHAR(1000),

    PRIMARY KEY (news_id)
);


#########################################################
#########################################################

insert into library.news (title, content)
values ("Meeting with awsome author", "We invite you to a meeting with new popular novel writer. The meeting will take place next sunday");

insert into library.news (title, content)
values ("Plant collections grows up!", "Library's plant collections meets new beautyfull plant from New Quinea! We invite you to come for live wattering.");

insert into library.news (title, content)
values ("Our community is growing!", "We would like to announce that our local bookshop has reached 100 readers - thank you <3");


#########################################################
#########################################################

insert into library.book (title, author, category, publish_year, publishing_house, catalog_number, items, description)
values ("Harry Potter i Kamień Filozoficzny", "J.K. Rowling", "Fantasy", "2016", "Media Rodzina", "9788380084322", 0, 
    "Książka „Harry Potter i Kamień Filozoficzny” rozpoczyna cykl o młodym czarodzieju i jego licznych przygodach. Tytułowy Harry Potter wychowywany jest przez nieprzychylnych mu ciotkę i wuja. Jego rodzice zginęli w tajemniczych okolicznościach, a jedyne, co mu po nich pozostało to blizna na czole w kształcie błyskawicy. W dniu swoich 11. urodzin bohater dowiaduje się, że istnieje świat, o którym nie miał pojęcia.");





insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Agile Web Development with Rails",
"Sam Ruby, Dave Thomas, David Heinemeier Hansson",
"Web development",
"2010",
"AE49D9BB94118632DF0691DF18706319",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Flask Web Development",
"Miguel Grinberg",
"python,pyhton web development,flask",
"0",
"d82228cfe8385d6b1e117f87e0c3406f",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Agile web development with rails: a Pragmatic guide",
"Dave Thomas, David Heinemeier Hansson, Leon Breedt, Mike Clark, Thomas Fuchs, Andrea Schwarz",
"'Web site development -- Handbooks, manuals, etc.','Ruby (Computer program language) -- Handbooks, manuals, etc.','Sites Web -- DeРњРѓveloppement -- Guides, manuels, etc.','Ruby (Langage de programmation) -- Guides, manuels, etc.'",
"2005",
"AF5F2F07C3BF2FD005FC4189B6945FEB",
"Pragmatic Programmers",
0,
"Rails is a full-stack, open source web framework that enables you to create full-featured, sophisticated web-based applications, but with a twist... A full Rails application probably has less total code than the XML you'd need to configure the same application in other frameworks. With this book you'll learn how to use \"ActiveRecord\" to connect business objects and database tables. No more painful object-relational mapping. Just create your business objects and let Rails do the rest. You'll learn how to use the \"Action Pack\" framework to route incoming requests and render pages using easy-to-write templates and components. See how to exploit the Rails service frameworks to send emails, implement web services, and create dynamic, user-centric web-pages using built-in Javascript and Ajax support. There are extensive chapters on testing, deployment, and scaling. You'll see how easy it is to install Rails using your web server of choice (such as Apache or lighttpd) or using its own included web server. You'll be writing applications that work with your favorite database (MySQL, Oracle, Postgres, and more) in no time at all. You'll create a complete online store application in the extended tutorial section, so you'll see how a full Rails application is developed---iteratively and rapidly. Rails strives to honor the Pragmatic Programmer's \"DRY Principle\" by avoiding the extra work of configuration files and code annotations. You can develop in real-time: make a change, and watch it work immediately. Forget XML. Everything in Rails, from templates to control flow to business logic, is written in Ruby, the language of choice for programmers who like to get the job done well (and leave work ontime for a change). Rails is the framework of choice for the new generation of Web 2.0 developers. Agile Web Development with Rails is the book for that generation, written by Dave Thomas (Pragmatic Programmer and author of Programming Ruby) and David Heinemeier Hansson, who created Rails."
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"CakePHP Application Development: Step-by-step introduction to rapid web development using the open-source MVC CakePHP framework",
"Ahsanul Bari, Anupom Syam",
"Computer Science/Web/Server Side Scripting/PHP",
"2008",
"0130DD963CCA48D57BFE2252C2A521F7",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Alex Homer, ASP.NET 2.0 Visual Web Developer 2005",
"David Sussman",
"Компьютерная литература\\11 web строительство\\Web - строительство, ASP.NET\\",
"2006",
"F317BC40EC89D98E867B2099C4341A68",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"PHP Oracle Web Development: Data processing, Security, Caching, XML, Web Services, and Ajax: A practical guide to combining the power, performance, scalability, ... time, and high performance of PHP",
"Yuli Vasiliev",
"Computer Science/Web/Server Side Scripting/PHP",
"2007",
"D930B9CE10509818A14659BC607DAB78",
"",
0,
"Based on the title, the book has so many things to discuss but it actually has less than 400 pages that even include the glossary of terms. The reader might have a second thought about the book since it might not promise to discuss the things written in the chapter.\r\rBut if you go through the chapters, you will be surprised how each topic could be discussed thoroughly in this book. Using the traditional structures in most web and application development books, it slowly introduces each concept before they are brought together in the final chapters. \r\rPHP and Oracle are discussed separately at first with sample codes and situations to ensure that the reader understands each concept. It then goes to discuss who they could be efficiently integrated. The final chapter which is about Ajax is very impressive as it gives the developers a chance to develop an Ajax based application using popular practices in web development. The robustness of Oracle and efficiency of PHP is actually shown in an Ajax based application.\r\rPHP Oracle Web Development: Data processing, Security, Caching, XML, Web Services, and Ajax is a good starting book for any web development professionals and enthusiasts. It covers the basics of web development using PHP and database management of Oracle including an installation guide for Oracle and PHP. If you are looking for a book to start with PHP and Oracle, this book offers a good start. \r\rFor developers who are experienced in this discipline, the book could be a good reference point for developing an application. The sample codes that helps the reader understands the underlying concept of the application with actual scenarios, this PHP and Oracle book is almost too good to pass on."
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"WordPress for Web Developers: An Introduction for Web Professionals",
"Stephanie Leary (auth.)",
"Computers\\\\Web-design",
"2013",
"5e9210c7793553e45a1a3f306c42f642",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"MODx Web Development",
"Antano Solar John, Antano Solar John",
"Computer Science/Web/Server Side Scripting/PHP",
"2009",
"DFB074A1D600635E8B92C4BD948F0C3A",
"",
0,
"Like someone else said, you can learn MODx by finding resources on the internet. I started reading this book to get introduced to the system, and it was OK for that, but I found I didn't really use it or need it when I actually started making my MODx site. It's a good overview/introduction that may help you understand what MODx is and how it functions, but not totally needed if you just want to jump right in and make a site with MODx. Also, since the release of MODx 1.0/1.0.1, the terminology used in this book is no longer correct, so it may actually confuse you (Resources are now Elements, Documents are now Resources, etc.) And I found some of the writing to be awkward."
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Grok 1.0 Web Development",
"Carlos de la Guardia",
"Computing -Web",
"2010",
"3D19832E2EABC88C4079244FC8D56DC1",
"",
0,
"Grok 1.0 Web Development is a great introduction to what I think is a very powerful web technology stack: the Zope Toolkit.  Grok provides a way for newcomers and those familiar with other Python web stacks to get started with ZTK, which can often seem insular, cryptic, and inaccessible.  When a user is ready to \"move up\", they can start leveraging the power that underlies Grok.  This book is a good introduction to that stack.  \r\rGrok 1.0 Web Development takes what as I think of as a customary approach to framework introductions, instructing the user on the basic features of the framework by building an application (in this case a to do list manager) and adding features and refining the code as it goes. This works well for Grok -- the amount of boilerplate code is kept to a minimum, by design, so the text can focus on first implementing the feature, then delving deeper to discuss the \"best practice\" around that tool if needed. For example, Chapter 6 covers ZODB Catalogs (index). It starts by defining the search view and user interface so that the reader has a functioning search tool to work with, then takes a diversion to discuss how one best structures their application to support search. These detailed drill downs are one of the most valuable parts of Grok 1.0 Web Development: they help the reader expand their understand beyond just implementing a feature, to implementing in a way that will be flexible and easy to support in the future. The [somewhat brief] advice on when to use the ZODB versus a relational database is another example of practical advice that I appreciated in the book.\r\rGrok 1.0 Web Development is not perfect. In particular I wish the chapter on testing were earlier (the author's admonition that it \"should not be treated as an afterthought\" doesn't seem to jibe with its placement among the advanced topics towards the end of the book. I suppose I'm also a little sensitive to slogging on Zope 3 and it's \"lack\" of agility. I can probably be described as a Zope 3 / Zope component architecture apologist, but it seems the type of agility described is a rather narrow, specific definition. The sprints I did on Zope 3 at PyCon several years contributed more to my understanding and appreciation of test driven development and agile planning than just about anything. Yes, Grok gets it done without the ZCML; I think it's an exercise for the reader as to whether that's better or worse for your application.\r\rI think that the Zope derived frameworks such as Grok and repoze.bfg are some of the most interesting in development today. Grok 1.0 Web Development does a great job of introducing Grok to developers who are new to web programming, or who already have some familiarity with another framework. I recommend it to anyone interested in building extensible web applications with a minimum of boilerplate."
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Professional JavaScript for Web Developers",
"Nicholas C. Zakas",
"Computing -Web",
"2009",
"B07ADFCAF9641B17FE76115BF174F44C",
"Wrox Programmer to Programmer",
0,
"Probably the most complete and updated book that you may find about Javascript.The author made a great job writting about some of the most important topics on javascript development and highlighting the difference among browsers.Most of the topics are already covered in other javascript books I have read before, but not in the way Nicholas does, he usually goes deeper on every topic.If you have some knowledge on javascript and want to reach another level, this is the book for you. If you consider yourself a guru, you may enjoy it as well, but definitely, not for newbies."
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Art of Java Web Development: Struts, Tapestry, Commons, Velocity, JUnit, Axis, Cocoon, InternetBeans, WebWork",
"Neal Ford",
"computers, computers/web",
"2003",
"2D822F49188D9EDAA78F2085F8E2737F",
"",
0,
"A guide to the topics required for state of the art Web development, this book covers wide-ranging topics, including a variety of web development frameworks and best practices. Beginning with coverage of the history of the architecture of Web applications, highlighting the uses of the standard web API to create applications with increasingly sophisticated architectures, developers are led through a discussion on the development of industry accepted best practices for architecture. Described is the history and evolution towards this architecture and the reasons that it is superior to previous efforts. Also provided is an overview of the most popular Web application frameworks, covering their architecture and use. Numerous frameworks exist, but trying to evaluate them is difficult because their documentation stresses their advantages but hides their deficiencies. Here, the same application is built in six different frameworks, providing a way to perform an informed comparison. Also provided is an evaluation of the pros and cons of each framework to assist in making a decision or evaluating a framework on your own. Finally, best practices are covered, including sophisticated user interface techniques, intelligent caching and resource management, performance tuning, debugging, testing, and Web services."
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Agile.Web.Development.with.Rails.4th.Edition",
"the pragmatic programmers",
"web programming",
"0",
"1e1082ced7f59e0d92c047d465a37578",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Beginning CSS Web Development: From Novice to Professional",
"Simon Collison",
"Компьютеры//Web-дизайн",
"2006",
"ee845efa4da1004f1177ae9b498eca22",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Beginning PHP 6, Apache, MySQL 6 Web Development",
"Timothy Boronczyk",
"КНИГИ  WEB-СОЗИДАНИЕ",
"2009",
"2D53E184F32B5CAD6FE01E581DCDAE2C",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Web development solutions : Ajax, APIs, libraries, and hosted services made easy",
"Christian Heilmann; Mark Norman Francis",
"Computers\\\\Web-design",
"0",
"b544a6be89e10bc5dfe00e48d9fdd429",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Instant Web Scraping with Java",
"Ryan Mitchell",
"Web Development",
"0",
"88792de34a41a1f321012853ebb94c51",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Beginning Smartphone Web Development: Building Javascript, CSS, HTML and Ajax-Based Applications for iPhone, Android, Palm Pre, Blackberry, Windows Mobile and Nokia S60",
"Gail Frederick, Rajesh Lal",
"Computers / Programming / Software Development",
"2010",
"5F6BAA45BC35A360CB0C4702FCAF1CF5",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Full Stack Web Development with Backbone.js",
"Patrick Mulder",
"Development",
"0",
"97e1014f6a13249d93081e96dcf2cdaf",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"The Microsoft Expression Web Developer's Guide to ASP.NET 3.5: Learn to create ASP.NET applications using Visual Web Developer 2008",
"Jim Cheshire",
"Computer science",
"2007",
"053202C3311E1754DDDDD1F5D55F3414",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Tapestry 5: Building Web Applications: A step-by-step guide to Java Web development with the developer-friendly Apache Tapestry framework",
"Alexander Kolesnikov",
"Computer science",
"2008",
"77A9A95C504DEDCA6A5D7EC418491432",
"",
0,
"The author Alexander Kolesnikov has significant experience in programming, dating back to 1979 and Fortran. This is his second book that follows the one published in 2007.\rThe book contains elegant introduction to Tapestry 5 with additional focus on building high performing  scalable web apps. The first chapter is introductory, serves as a advert of Tapestry and a taste of things to come. The second helps reader to configure IDE, because practical exercises are encouraged through out the book.\rFrom the next chapter starts the description of the framework. The third illustrates basic Tapestry mechanics that revolve around \"Page classes\". Author shows how to link them with corresponding views that are enriched html files. Moreover passing data between pages, events and using components is presented. The following chapters provide info on using other parts of the framework like localization, validation etc. and act as a tutorial for building your own components.\rThe book was very easy to read. I can't recall anything that would be difficult to comprehend. Boring parts were rare. Global focus on scalability made it fun to read, because it is not a common part of web app tutorials to remind you how session management influences performance.\rOverall the composition of the book is very neat. The most important stuff is put first although you can skip the parts you are familiar with like I did with IDE configuration.\rHoward Levis-Ship the author of Tapestry says that in a good framework \"the right thing to do is the easiest one\". You can find that idea in every aspect of the framework that is well represented in the book. The focus on scalability is a nice addition to thorough Tapestry 5 description.\rI am not an expert on web apps, so I value the parts that revolve around basics too. Reading the book was fun. Since I did not made any effort into practically using Tapestry during the course of reading it, I was unable tell whether it is better that say JSF with Facelets. However  it provided much insight into web app development with Tapestry. Definitely Tapestry is easier to use, but the real difficulties lie in merging pages with code which I am unable to compare. As usual one needs to try it out in at least medium sized application to find out. Anyway I can recommend this book to anyone who wishes to find out what Tapestry 5 has to offer and anyone who does not feel like an expert in web app development ant would like to go through an introduction on scalable web app development."
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Tapestry 5: Building Web Applications: A step-by-step guide to Java Web development with the developer-friendly Apache Tapestry framework",
"Alexander Kolesnikov",
"",
"2008",
"C8947AA69D6E824CB5DEAA23FEB615F4",
"",
0,
"The author Alexander Kolesnikov has significant experience in programming, dating back to 1979 and Fortran. This is his second book that follows the one published in 2007.\rThe book contains elegant introduction to Tapestry 5 with additional focus on building high performing  scalable web apps. The first chapter is introductory, serves as a advert of Tapestry and a taste of things to come. The second helps reader to configure IDE, because practical exercises are encouraged through out the book.\rFrom the next chapter starts the description of the framework. The third illustrates basic Tapestry mechanics that revolve around \"Page classes\". Author shows how to link them with corresponding views that are enriched html files. Moreover passing data between pages, events and using components is presented. The following chapters provide info on using other parts of the framework like localization, validation etc. and act as a tutorial for building your own components.\rThe book was very easy to read. I can't recall anything that would be difficult to comprehend. Boring parts were rare. Global focus on scalability made it fun to read, because it is not a common part of web app tutorials to remind you how session management influences performance.\rOverall the composition of the book is very neat. The most important stuff is put first although you can skip the parts you are familiar with like I did with IDE configuration.\rHoward Levis-Ship the author of Tapestry says that in a good framework \"the right thing to do is the easiest one\". You can find that idea in every aspect of the framework that is well represented in the book. The focus on scalability is a nice addition to thorough Tapestry 5 description.\rI am not an expert on web apps, so I value the parts that revolve around basics too. Reading the book was fun. Since I did not made any effort into practically using Tapestry during the course of reading it, I was unable tell whether it is better that say JSF with Facelets. However  it provided much insight into web app development with Tapestry. Definitely Tapestry is easier to use, but the real difficulties lie in merging pages with code which I am unable to compare. As usual one needs to try it out in at least medium sized application to find out. Anyway I can recommend this book to anyone who wishes to find out what Tapestry 5 has to offer and anyone who does not feel like an expert in web app development ant would like to go through an introduction on scalable web app development."
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"PHP 5 Fast and Easy Web Development (Fast and Easy Web Development)",
"Julie C. Meloni",
"Компьютеры//Программирование//Языки программирования",
"2008",
"be897bd1bfd4dab38767db24da2a794b",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Macromedia Flash MX 2004 Fast & Easy Web Development (Fast & Easy Web Development)",
"Lisa A. Bucki",
"Компьютеры//Программы//Продукты Macromedia",
"2006",
"ac3818a5c99cee02d2e9f91b9ce5e693",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"PHP Fast & Easy Web Development, 2nd Edition (Fast & Easy Web Development)",
"Julie C. Meloni",
"",
"2002",
"D6BB2B23B44DE18BE1344ED659044D7F",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Perl Fast & Easy Web Development (Fast & Easy Web Development)",
"Leslie W. Bate",
"",
"2002",
"854BBDC8D5895E7E5DE6A260D9CA1745",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"PHP Oracle web development : data processing, security, caching, XML, web services and AJAX : a practical guide to combining the power, performance, scalability, and reliability of Oracle Database with the ease of use, short development time, and high per",
"Yuli Vasiliev",
"Computers\\\\Programming: Programming Languages",
"2007",
"1402dce1dbcbf160ad63472ca6bc5de0",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"PHP Oracle Web Development: Data processing, Security, Caching, XML, Web Services, and Ajax: A practical guide to combining the power, performance, ... development time, and high performance of PHP",
"Yuli Vasiliev",
"Computers\\\\Programming",
"2007",
"07acfe7cfe5752b032a8ea8739441048",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
".NET Mobile Web Developers Guide. Web Developer's Guide",
"Steve Milroy, Ken Cox, Doug Safford, Laura Barker, Amit Kalani and Wei Meng Lee (Auth.)",
"",
"2001",
"80e1a0cd6adabf64d9f4a2bfaaa5e4da",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Tapestry 5: Building Web Applications: A step-by-step guide to Java Web development with the developer-friendly Apache Tapestry framework",
"Alexander Kolesnikov",
"",
"2008",
"b97b7bdc33123ccc81a689f7a0b079dd",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Learn Java for Web Development: Modern Java Web Development",
"Vishal Layka",
"",
"2014",
"2399df2930020fa747e0c8d17bfc8720",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Flask Web Development: Developing Web Applications with Python",
"Miguel Grinberg",
"",
"2014",
"30322d78018bbf481481b2d656f5c2e0",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Flask Web Development: Developing Web Applications with Python",
"Miguel Grinberg",
"",
"2014",
"e8bef6d775a50da5a6e9f51b7f6dbfc8",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Developing Web Apps with Haskell and Yesod: Safety-Driven Web Development",
"Michael Snoyman",
"",
"2015",
"216cf240cc02944b2f77ba17b6a44d49",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Developing Web Apps with Haskell and Yesod: Safety-Driven Web Development",
"Michael Snoyman",
"",
"2015",
"d7faf367da878470a7501591c4c9cb42",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Web Design for Developers: A Programmer's Guide to Design Tools and Techniques (The Pragmatic Programmers)",
"Brian P. Hogan",
"Computer Science/Web/Web Design",
"2009",
"0644B25822AFF6B1DEF036019C467F52",
"The Pragmatic Programmers ",
0,
"I've been a programmer / developer all my working life and I've never really understood all that web design stuff. At last I've found a book that explains it in a clear way you can understand without being treated like a rocket scientist or the village idiot. I definately recommend this. It does what it says in the title."
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"PHPEclipse: A User Guide: Take advantage of the leading open source integrated development environment to develop, organize, and debug your PHP web development projects.",
"Shu-Wai Chow",
"Компьютеры\\\\Программирование: Языки программирования",
"2006",
"47dcc653aa3f73886699e93be3415d20",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"GIS for Web Developers: Adding Where to Your Web Applications (2007)(en)(254s)",
"Scott Davis",
"",
"2007",
"97D33D4600942592A9593DBDA717F582",
"",
0,
"With this book readers can become real geographic programmers using the Java programming language. They will find working code examples in Java using some of the many GIS-oriented applications and APIs, and be able to display GIS data on the Web, manipulate GIS data, and programmatically store and retrieve it in geographically enabled databases."
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Moodle. E-Learning Course Development",
"William Rice",
"Компьютерная литература\\11 web строительство\\Web - строительство, ASP.NET\\",
"2006",
"369AE7B65CA28EF278DA86AF859924FF",
"",
0,
"A complete guide to successful learning using Moodle   - Straight-forward coverage of installing and using the Moodle system   - Working with Moodle features in all learning environments   - A unique course-based approach focuses your attention on designing well structured, interactive, and successful courses<P>    <P>A complete guide to successful learning using Moodle, focused on course development and delivery and using the best educational practices. Moodle is relatively easy to install and use, but the real challenge is to develop a learning process that leverages its power and maps effectively onto the content established learning situation. This book guides you through meeting that challenge.<P>    <P>This unique book gives you more than just a guide to the  Moodle software; it uses Moodle as a route to better teaching, more motivated students, and more successful courses. Moodle is the leading Open Source learning management system. Using Moodle, teachers can easily construct richly textured web based courses.  A course can consist of a number of lessons, with each lesson including reading materials; activities such as quizzes, tests, surveys, and projects; and social elements that encourage interaction and group work between students.Moodle E-Learning Course Development shows you how to use Moodle as a tool to enhance your teaching. It will help you analyse your students' requirements, and come to an understanding of what Moodle can do for them. After that you'll see how to use every feature of Moodle to meet your course goals.<P>    <P>The social constructionist learning philosophy is at the heart of Moodle: we all \"construct\" knowledge through interation with one another and with learning materials in a social way. Moodle E-Learning Course Develelopment will show you how to add static learning material, interactive activities, and social features to your courses so that students reach their learning potential. Whether you want to support traditional class teaching or lecturing, or provide complete online and distance learning courses, this book will prove a powerful resource throughout your use of Moodle.<P>    <P>- Understand what Moodle can do, how it compares to other e-learning packages, and how it can support your teaching strategies   - Install the Moodle software on your own computer or a server, and understand your way around it   - Know how to create different kinds of courses. Moodle can support courses where the group works through the classes with a shared schedule, or where individual students work through at their own pace, or courses where students are free to explore the different topics in their own time. This book will show you how.   - Understand all of Moodle's learning features. Moodle provides features for managing course content, interactive resources, and social activities such as forums and wikis. This book explains what each of these features are, how they work, and most importantly how and when to use them effectively.   - Manage students – so that you can ensure that the right students are going to the right classes; allow students to enrol themselves, or invite students to join a course. You can even set up commercial courses where students pay to sign <P>    <P>William Rice is an experienced trainer and expert on learning and teaching practices. This experience and expertise forms the foundation of his approach: What do we want to teach? How would this best translate into a course? How best can Moodle support these course objectives?Of course, the book contains everything you'd expect from an introduction to Moodle: clear step-by-step instructions, plenty of screenshots, explanations and guides through the many features and options that you have to choose from. Throughout the book, William develops an example course. He uses this example to explore the sort of decisions, design considerations, and thought that goes into developing a successful course.<P>    <P>This book is written for everyone who wants to get the most from Moodle. Beginners to the software will get a thorough guide to how the software works, and some great ideas for getting to a good start with their first course. More experienced Moodlers will find powerful insights into developing more successful and educational courses.<P>"
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Spring Web Flow 2 Web Development",
"Sven Lüppken, Markus Stäuble",
"",
"2009",
"AFBF1346C4B006C9397E140431E6D7F6",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Catalyst - Accelerating Perl Web Application Development",
"Jonathan Rockway",
"WEB дизайн/разработка",
"2007",
"38156A4CFB71D8A3EB551B8B0716DA4E",
"",
0,
"Книга Catalyst - Accelerating Perl Web Application Development Catalyst - Accelerating Perl Web Application Development Книги WEB дизайн/разработка Автор: Jonathan Rockway Год издания: 2007 Формат: pdf Издат.:Packt Publishing Страниц: 200 Размер: 3 ISBN: 1847190952 Язык: Русский0 (голосов: 0) Оценка:Книгао хорошем веб-фреймворке написанном на Perl."
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Spring Web Flow 2 Web Development",
"Sven Lüppken, Markus Stäuble",
"Computer science",
"2009",
"864E925F1AE5E758AD9A1DC6FF7D9A1A",
"",
0,
"<P>Master Spring's well-designed web frameworks to develop powerful web applications  <ul><li>Design, develop, and test your web applications using the Spring Web Flow 2 framework</li>  <li>Enhance your web applications with progressive AJAX, Spring security integration, and Spring Faces</li>  <li>Stay up-to-date with the latest version of Spring Web Flow</li>  <li>Walk through the creation of a bug tracker web application with clear explanations</li></ul></p>      <P><b>In Detail </p>  <P>Many web applications need to take the user through a defined series of steps such as e-commerce checkouts or user registrations. Spring Web Flow works well for rich and flexible user interaction, additionally it helps you to describe the flow of websites in complex processes. Spring Web Flow 2 provides the perfect way to build these kinds of features, keeping them secure, reliable, and easy to maintain.</p>  <P>This book provides a platform on which you can build your own applications and services. It gives detailed information on Spring basics and covers core topics involving testing, security, and so on. We develop a complete, robust web application using the latest version of Spring, where page navigation is done on-the-fly.</p>  <P>This book teaches you how to work with Spring Web Flow. It covers both basic and advanced aspects and provides a detailed reference of the features Spring Web Flow. The book helps readers to extend the framework.</p>  <P>The integration of Spring and Java Server Pages is clearly explained in the book. The book also explains the essential modules of the complete Spring framework stack and teaches how to manage the control flow of a Spring web application.</p>  <P>The Spring Faces module will provide integration between Spring Web Flow and Java Server Faces (JSF). Testing, an important aspect of the software development process is covered towards the end; the question of how to test a Spring Web Flow application is answered.</p>        <P><b>What you will learn from this book? </p>  <ul><li>Explore the features of Spring Web Flow 2 to develop powerful applications</li><li>Extend the framework to take it beyond its out-of-the-box feature set</li><li>Get started with Spring Faces, Spring JavaScript, and Spring Binding and improve the handling of the web flow</li><li>Test your Spring application and rest assured of its quality before going live</li><li>Secure your web applications using Spring Security and Spring Web Flow</li><li>Integrate JavaServer Faces (JSF) with Spring Web Flow to organize and manage the storage of data inside your web application</li></ul>     <P><b>Approach </p>    <P>This book is a tutorial, with plenty of step-by-step instructions beginning with \"getting started\" material, followed by advanced coverage of this technology. The book has a practical approach towards the Spring MVC framework and is packed with practical examples and code. </p>       <P><b>Who this book is written for? </p>  <P>This book is targeted at Java web application developers who want to work on Spring Web Flow. This book is a must-read for those who desire to bridge the gap between the popular web framework and the popular application framework. It requires prior knowledge of the Spring framework, but no prior knowledge of Spring Web Flow. </p>"
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"GIS for Web Developers: Adding 'Where' to Your Web Applications",
"Scott Davis",
"",
"2007",
"25843874A016719643CF94D47A2E6BA9",
"",
0,
"Easy to read.  Comprehensive.  Easily one of the best IT books that I own.  I am in Australia, but the US emphasis did not detract from my learning experience."
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Even Faster Web Sites: Performance Best Practices for Web Developers",
"Steve Souders",
"",
"2009",
"2209885316F24F95F082DC38FE7F8154",
"",
0,
"Steve Souders has been a leader in documenting and evangelizing techniques for improving web site performance, and his previous book High Performance Web Sites: Essential Knowledge for Front-End Engineers (or the web posting from which it evolved) is essential reading. Even Faster Web Sites is not an updating of that book, but a collection of additional advice from Souders and eight contributors. So the first thing to note is that you should probably only tackle this book if you've already mastered the techniques outlined in High Performance Web Sites.\r\rThe one exception to the advice above may be if you're a web developer who makes heavy use of Javascript, since over half of this book is devoted to AJAX. The remainder of the book addresses a variety of topics of interest to web development professionals in general--optimizing images, writing efficient CSS, advanced techniques for implementing gzipping, and more.\r\rAs with Souders previous book, there is little that will be new to professionals who've kept up with best practices via blogs and the like, but it's still nice to have all the information in one handy book. For those who are just starting to investigate web performance optimization, High Performance Web Sites plus Even Faster Web Sites will get you up to speed quickly."
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Spring Web Flow 2 Web Development",
"Sven Lüppken, Markus Stäuble",
"",
"2009",
"C4E2E386C7CCB3DECC1FE645F01AF770",
"",
0,
"This book was largely a rehash of Spring Web Flow XSD's and Configuration files. The author started by introducing a fairly simple login application with a basic Web Flow. The author skimmed over explaining this basic application. I fully expected the author to continue to build on this example and further explain how to setup and configure a flow and use the power of Spring WebFlow to build a modern JSF based web application. Instead I was presented with page after page of XSD samples and configuration file snippets. The author did a very poor job explaining Web Flow concepts and how all this works together. I will have trouble even using this book as an adequate reference book to augment the online Spring documentation. I definitely would not recommend this book."
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Developing Large Web Applications: Producing Code That Can Grow and Thrive",
"Kyle Loudon",
"Computing -Web",
"2010",
"95819B5F3EB0E4BFEECD369E7400A9B2",
"",
0,
"The book essentially covers how to code up a large application without a framework. In reality if you are working with a large application (or not) you should use an existing framework to manage PHP, HTML templates, and JavaScript. For example CodeIgniter, (I haven't found a PHP HTML templating system I like yet), and Dojo. \r\rtl;dr - has some stuff you should know, but better to let a framework(s) do it for you."
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Even Faster Web Sites: Performance Best Practices for Web Developers",
"Steve Souders",
"",
"2009",
"B649272BED7A50044E66DD0EC236156E",
"",
0,
"Steve Souders has been a leader in documenting and evangelizing techniques for improving web site performance, and his previous book High Performance Web Sites: Essential Knowledge for Front-End Engineers (or the web posting from which it evolved) is essential reading. Even Faster Web Sites is not an updating of that book, but a collection of additional advice from Souders and eight contributors. So the first thing to note is that you should probably only tackle this book if you've already mastered the techniques outlined in High Performance Web Sites.\r\rThe one exception to the advice above may be if you're a web developer who makes heavy use of Javascript, since over half of this book is devoted to AJAX. The remainder of the book addresses a variety of topics of interest to web development professionals in general--optimizing images, writing efficient CSS, advanced techniques for implementing gzipping, and more.\r\rAs with Souders previous book, there is little that will be new to professionals who've kept up with best practices via blogs and the like, but it's still nice to have all the information in one handy book. For those who are just starting to investigate web performance optimization, High Performance Web Sites plus Even Faster Web Sites will get you up to speed quickly."
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Even Faster Web Sites: Performance Best Practices for Web Developers",
"Steve Souders",
"",
"2009",
"E917EDEDF6C573DD6B4FD11B17834657",
"",
0,
"Steve Souders has been a leader in documenting and evangelizing techniques for improving web site performance, and his previous book High Performance Web Sites: Essential Knowledge for Front-End Engineers (or the web posting from which it evolved) is essential reading. Even Faster Web Sites is not an updating of that book, but a collection of additional advice from Souders and eight contributors. So the first thing to note is that you should probably only tackle this book if you've already mastered the techniques outlined in High Performance Web Sites.\r\rThe one exception to the advice above may be if you're a web developer who makes heavy use of Javascript, since over half of this book is devoted to AJAX. The remainder of the book addresses a variety of topics of interest to web development professionals in general--optimizing images, writing efficient CSS, advanced techniques for implementing gzipping, and more.\r\rAs with Souders previous book, there is little that will be new to professionals who've kept up with best practices via blogs and the like, but it's still nice to have all the information in one handy book. For those who are just starting to investigate web performance optimization, High Performance Web Sites plus Even Faster Web Sites will get you up to speed quickly."
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Spring Web Flow 2 Web Development",
"Sven Luppken, Markus Stauble",
"Компьютеры//Сети//Интернет",
"2009",
"70deaa673153eb8a2235614725cd8546",
"",
0,
"This book is a tutorial, with plenty of step-by-step instructions beginning with \"getting started\" material, followed by advanced coverage of this technology. The book has a practical approach towards the Spring MVC framework and is packed with practical examples and code. This book is targeted at Java web application developers who want to work on Spring Web Flow. This book is a must-read for those who desire to bridge the gap between the popular web framework and the popular application framework. It requires prior knowledge of the Spring framework, but no prior knowledge of Spring Web Flow."
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Communicating Design: Developing Web Site Documentation for Design and Planning (2nd Edition) (Voices That Matter)",
"Dan M. Brown",
"Компьютеры//Web-дизайн",
"2009",
"6488ceaac907b23528d5a39f98372648",
"",
0,
""
);
insert into library.book (title, author, category, publish_year, catalog_number, publishing_house, items, description) values (
"Weaving a Library Web: A Guide to Developing Children's Websites",
"Helene Blowers",
"Компьютеры//Web-дизайн",
"2009",
"f72ea8af5afe380fa9466d03010296f9",
"",
0,
""
);
