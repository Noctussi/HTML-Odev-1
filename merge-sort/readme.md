# merge sort > [16,21,11,8,12,22]

## merge sort türüne göre aşamaları:

- [16,21,11] , [8,12,22]
- [16,21] , [11] , [8,12] , [22]
- [16] , [21] , [11] , [8] , [12] , [22]
- [16,21] , [11] , [8,12] , [22]
- [11,16,21] , [8,12,22]
- [8,11,12,16,21,22]

## big-o gösterimi: her iterasyonda elemanları yarıya indirdiği için 2^x = n > x = logn >> her aşamada O(n) işlem yapıldığından O(nlogn) bulunmakta. 