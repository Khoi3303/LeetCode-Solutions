# 242. Valid Anagram

- **Difficulty**: Easy
- **Topic**: Arrays & Hashing
- **Link**: [LeetCode #242](https://leetcode.com/problems/valid-anagram/)

## Intuition & Approach
1. **Sorting Approach**: Sắp xếp cả hai chuỗi rồi so sánh bằng nhau. Thời gian mất $O(N \log N)$, tốn $O(N)$ hoặc $O(1)$ bộ nhớ tùy vào ngôn ngữ.
2. **Optimal Approach (Frequency Counter)**: 
   - Kiểm tra điều kiện tiên quyết: `s.length === t.length`.
   - Dùng một mảng kích thước cố định 26 (tương ứng các ký tự thường từ `a` đến `z`).
   - Duyệt qua chuỗi: tăng đếm cho ký tự xuất hiện trong chuỗi `s` và giảm đếm cho ký tự xuất hiện trong chuỗi `t`.
   - Kết thúc duyệt, nếu mọi vị trí đều bằng `0` thì hai chuỗi là Anagram.

## Complexity Analysis
- **Time Complexity**: $O(N)$ — Duyệt qua chuỗi đúng 1 lần với độ dài $N$.
- **Space Complexity**: $O(1)$ — Sử dụng mảng đếm cố định 26 phần tử (không phụ thuộc vào độ dài chuỗi $N$).