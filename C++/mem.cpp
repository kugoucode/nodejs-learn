/*************************************************************************
	> File Name: mem.cpp
	> Author: 
	> Mail: 
	> Created Time: 日  9/11 14:18:26 2016
 ************************************************************************/

#include <iostream>
using namespace std;
void printfBook(struct Books book);

/**
 *  声明数据结构
 */
struct Books
{
    // 给使用的变量申请内存空间
    char title[50];
    char author[20];
    char subject[200];
    int book_id;
}Book1,Book2;

int main()
{
    // 将变量值拷贝到字符串所对应的空间上
    strcpy(Book1.title, "English");
    strcpy(Book1.author, "Mark");
    strcpy(Book1.subject, "Mark is the book English!");
    Book1.book_id = 12;

    strcpy(Book2.title, "English_2");
    strcpy(Book2.author, "Mark_2");
    strcpy(Book2.subject, "Mark_2 is the book English_2!");
    Book2.book_id = 14;

    // 手动输出第一本
    cout << "The book id is :" << Book1.book_id << endl;
    cout << "The book title is :" << Book1.title << endl;
    cout << "The book author is :" << Book1.author << endl;
    cout << "The book subject is:" << Book1.subject << endl;

    // 使用自定义函数输出结构数据信息
    printfBook(Book1);
    printfBook(Book2);

    return 0;
}

/**
 * 函数声明前缀 void 与函数返回值息息相关
 */
void printfBook(struct Books book)
{
    cout << "\n/------------------< The book : " << book.book_id <<" >-------------------/\n" << endl;

    cout << "The book id is :" << book.book_id << endl;
    cout << "The book title is :" << book.title << endl;
    cout << "The book author is :" << book.author << endl;
    cout << "The book subject is:" << book.subject << endl;
}

