---
layout:     posts  

title:      How to be a Great Programmer  
subtitle:   The Importance of Problem Solving in Computer Science  
author:     David Leger  
readTime:   4  
image:      _.png  

categories: [programming, opinion]  
tags:       [programming, code, problem solving, knowledge]

---

There's more to being a great programmer than just knowing how to write code. Problem solving is a big part of what makes a great programmer. The concept of problem solving is implicitly taught in computer science courses but it is generally left up to students to develop this essential skill without guidance from intructors. 
  
## You Can't Code Everything!

When all you have is a hammer, everything problem a nail. Likewise when you only know how to code, you'll only think of solutions involving code. Sometimes code is one solution, but there may be a faster, more efficient, or even better solution using a different approach. Even as programmers, we must consider the possibility that writing code is not always the best solution. To better explain what I mean by this let me use an example of something that happened to me. 

While I was working at [Mariner Innovations](http://www.marinerinnovation.com) last year (for non-disclosure I'll leave out some details), something happened that made me realize I was looking at every problem through an incredibly narrow scope.

One day while working on my main project, which involved parsing plain text files, my supervisor sent me an email asking if I could take a table of batch jobs which was stored in a MS Word file and make a CSV file containing certain information about each job and excluding other pieces of information. Since I the project I had been working on for several months created CSV files, I assumed he wanted something similar for these batch jobs. So I spent the whole day writing a Java command line tool to parse through this MS Word file -- which was no piece of cake, if you've ever seen the plain-text format of a MS Word table). At some point in the afternoon, I had the parser almost working flawlessly, and my supervisor came over and asked if I was done with the batch file yet. At this point I found out that coverting the batch jobs from the MS Word document to CSV was a one-time thing.

So what can we learn from this? First, make sure you are always 100% sure about what your requirements are before even thinking about a solution. Second, and more relevant to this article, writing code is not always the best solution to a problem. Although the programming solution I developed for this problem did eventually work, it was not the best solution; it was incredibly time-consuming, and still somewhat buggy. A much better  solution would have been to copy the data from the table into MS Excel, remove the unwanted data, and export to CSV. This solution is an improvement from the command line tool I had written in every aspect; it drastically reduces time-consumption, and eliminates the potential for bugs.

## ...But You're Going to Code Most Things

Although the example above is one where code was not a solution, there are still plenty of strictly programming problems where the considering all possible solutions remains especially difficult. So now the question is: How do we broaden our scope of potential solutions in order to find the best one? In the example I used above, it seems pretty simple: just think about the problem more thoroughly. This is true, but to truely consider all possible solutions to any given problem, we must do more than just *think harder*. Throughout my experience, I've discovered that improving one's problem solving abilities can be achieved through two things:

One is having knowledge in a variety of areas outside of programming. Even is it seems completely unrelated, it may someday help in solving a problem. One of my professors, [Rick Wightman]() told me that he did a survey of students to see what courses in high school corelated most heavily with success in computer science and he found that English and theatre arts were the top two.

Two is abstract thinking. This is important because in order for knowledge to be useful, we must be able to think of ways it can apply in different situations. Take English language arts, for example. The reason I believe English correlates so well with success in computer science is because they both share a common thread -- language. If you're an Enlish major, there is no doubt you know the correct usage of punctuation such as colons, semi-colon, and commas. Futhermore, you would know complex grammar rules and likely have a large vocabulary. Just as in English, computer languages also rely on grammar, punctuation, spelling, and the especially vocabulary since naming is one of the hardest concepts in computer science.

## Final Words

A great programmer approaches challenges with all perspectives in mind, even non-programming perspectives. 