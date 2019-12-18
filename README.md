## Question 01: How many searches? ##

Input sorted list: 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
3, 5, 6, 8, 11
3, 5, 6, 8
6, 8
8

It would take 4 recursive calls to find '8'.


Input sorted list: 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
12, 14, 15, 17, 18
15, 17, 18
15, 17
17

It would take 4 recursive calls to NOT find '16'.