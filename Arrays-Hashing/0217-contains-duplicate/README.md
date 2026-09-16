# 217. Contains Duplicate

- **Difficulty**: Easy
- **Topic**: Arrays & Hashing
- **Link**: [LeetCode #217](https://leetcode.com/problems/contains-duplicate/)

## Intuition & Approach
- **Brute Force**: So sánh từng cặp phần tử bằng 2 vòng lặp lồng nhau mất $O(N^2)$ thời gian và $O(1)$ bộ nhớ.
- **Sorting**: Sắp xếp mảng mất $O(N \log N)$ thời gian rồi kiểm tra 2 phần tử kề nhau.
- **Optimal (Hash Set)**: Duyệt qua từng phần tử và kiểm tra sự tồn tại trong `Set` với thời gian truy xuất $O(1)$. Dừng và trả về `true` ngay khi phát hiện phần tử trùng lặp (early exit).

## Complexity Analysis
- **Time Complexity**: $O(N)$ — Duyệt mảng tối đa 1 lần qua $N$ phần tử.
- **Space Complexity**: $O(N)$ — Bộ nhớ cấp phát cho Hash Set lưu tối đa $N$ giá trị duy nhất.