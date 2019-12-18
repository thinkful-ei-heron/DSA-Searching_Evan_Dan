## Question 01: How many searches?

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

## Question 04: Searching in a BST

      35
    /    \

    25 89
    / \ / \
    15 27 79 91
    / \ /
    14 19 90

post-order: [14, 19, 15, 27, 25, 79, 90, 91, 89, 35]

      8
    /   \

    6 10
    / \ / \
    5 7 9 11

pre-order: [8, 6, 5, 7, 10, 9, 11]

Confirmed answers at http://www.cs.armstrong.edu/liang/animation/web/BST.html
