# **INDEX TRA CỨU NHANH - CHƯƠNG 2**

## **MỤC ĐÍCH**
File này cung cấp tra cứu nhanh các công thức, bảng tra cứu và mẹo quan trọng trong Chương 2.

---

## 🔢 **CHUYỂN ĐỔI HỆ SỐ**

### **Công thức cơ bản**
```
Thập phân → Nhị phân: Chia 2, lấy dư, đọc ngược
Nhị phân → Thập phân: Tổng lũy thừa của 2
Nhị phân → Bát phân: Nhóm 3 bit
Nhị phân → Thập lục phân: Nhóm 4 bit
```

### **Bảng tra cứu nhanh**
| Thập phân | Nhị phân | Bát phân | Thập lục phân |
|-----------|----------|----------|---------------|
| 0         | 0000     | 0        | 0             |
| 1         | 0001     | 1        | 1             |
| 2         | 0010     | 2        | 2             |
| 3         | 0011     | 3        | 3             |
| 4         | 0100     | 4        | 4             |
| 5         | 0101     | 5        | 5             |
| 6         | 0110     | 6        | 6             |
| 7         | 0111     | 7        | 7             |
| 8         | 1000     | 10       | 8             |
| 9         | 1001     | 11       | 9             |
| 10        | 1010     | 12       | A             |
| 11        | 1011     | 13       | B             |
| 12        | 1100     | 14       | C             |
| 13        | 1101     | 15       | D             |
| 14        | 1110     | 16       | E             |
| 15        | 1111     | 17       | F             |

---

## ➕ **PHÉP TOÁN NHỊ PHÂN**

### **Bảng cộng nhị phân**
| A | B | Kết quả | Nhớ |
|---|---|---------|-----|
| 0 | 0 | 0       | 0   |
| 0 | 1 | 1       | 0   |
| 1 | 0 | 1       | 0   |
| 1 | 1 | 0       | 1   |

### **Quy tắc cộng**
```
0 + 0 = 0
0 + 1 = 1
1 + 0 = 1
1 + 1 = 0 (nhớ 1)
1 + 1 + 1 = 1 (nhớ 1)
```

---

## 🔢 **SỐ NGUYÊN**

### **Phạm vi biểu diễn**
| Số bit | Không dấu | Có dấu (mã bù 2) |
|--------|------------|-------------------|
| 8      | 0 - 255    | -128 đến 127      |
| 16     | 0 - 65535  | -32768 đến 32767  |
| 32     | 0 - 4294967295 | -2147483648 đến 2147483647 |

### **Mã bù 2 - Phương pháp nhanh**
```
1. Viết trị tuyệt đối bằng n bit
2. Tìm bit 1 đầu tiên từ phải
3. Giữ bit 1 và các bit bên phải
4. Đảo tất cả bit bên trái
```

### **Các số đặc biệt (8-bit)**
| Số | Mã bù 2 |
|----|---------| 
| 0  | 00000000 |
| -1 | 11111111 |
| -128 | 10000000 |

---

## **THAO TÁC BIT**

### **Bảng chân lý**
| A | B | A&B | A\|B | A^B | ~A |
|---|---|-----|------|-----|----|
| 0 | 0 | 0   | 0    | 0   | 1  |
| 0 | 1 | 0   | 1    | 1   | 1  |
| 1 | 0 | 0   | 1    | 1   | 0  |
| 1 | 1 | 1   | 1    | 0   | 0  |

### **Dịch bit**
```
Left Shift (<<): Nhân với 2^n
Right Shift (>>): Chia cho 2^n
```

---

## 🔢 **SỐ THỰC - IEEE 754**

### **Single Precision (32-bit)**
```
| S | EEEEEEEE | MMMMMMMMMMMMMMMMMMMMMMM |
| 1 |    8     |          23            |
```

**Công thức:** `X = (-1)^S × (1.M) × 2^(E-127)`

### **Double Precision (64-bit)**
```
| S | EEEEEEEEEEE | MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM |
| 1 |     11      |                       52                           |
```

**Công thức:** `X = (-1)^S × (1.M) × 2^(E-1023)`

### **Các trường hợp đặc biệt**
| Exponent | Fraction | Kết quả |
|----------|----------|---------|
| 0        | 0        | ±0      |
| 0        | ≠0       | Denormalized |
| 255 (Single) / 2047 (Double) | 0 | ±∞ |
| 255 (Single) / 2047 (Double) | ≠0 | NaN |

---

## **MÃ HÓA KÝ TỰ**

### **ASCII cơ bản**
| Dec | Hex | Ký tự | Dec | Hex | Ký tự |
|-----|-----|-------|-----|-----|-------|
| 32  | 20  | (space) | 65  | 41  | A     |
| 48  | 30  | 0      | 97  | 61  | a     |
| 49  | 31  | 1      | 122 | 7A  | z     |

### **Unicode/UTF-8**
| Ký tự | Code Point | UTF-8 | Số byte |
|-------|------------|-------|---------|
| ASCII | U+0000-U+007F | 0xxxxxxx | 1 |
| Latin-1 | U+0080-U+07FF | 110xxxxx 10xxxxxx | 2 |
| BMP | U+0800-U+FFFF | 1110xxxx 10xxxxxx 10xxxxxx | 3 |
| SMP+ | U+10000+ | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx | 4 |

---

## 🎵 **ÂM THANH**

### **Tần số Nyquist**
```
f_nyquist = 2 × f_max
```

### **Kích thước file âm thanh**
```
Kích thước = Tần_số_lấy_mẫu × Bit_depth × Số_kênh × Thời_gian
```

### **Ví dụ thực tế**
| Ứng dụng | Tần số | Bit depth | Kích thước (1 phút) |
|----------|--------|-----------|-------------------|
| Điện thoại | 8kHz | 8-bit | 480KB |
| CD | 44.1kHz | 16-bit | 10.6MB |
| Hi-Res | 96kHz | 24-bit | 34.6MB |

---

## 🖼️ **HÌNH ẢNH**

### **RGB Color**
```
Màu = R × 65536 + G × 256 + B
```

### **Kích thước ảnh**
```
Kích thước = Chiều_rộng × Chiều_cao × Bit_depth
```

### **Ví dụ thực tế**
| Độ phân giải | Bit depth | Kích thước (không nén) |
|--------------|-----------|------------------------|
| 1920×1080 | 24-bit | 6.22MB |
| 3840×2160 (4K) | 24-bit | 24.9MB |
| 7680×4320 (8K) | 24-bit | 99.5MB |

---

## 📦 **NÉN DỮ LIỆU**

### **Tỉ lệ nén**
```
Tỉ lệ nén = Kích_thước_gốc ÷ Kích_thước_nén
% Tiết kiệm = (Kích_thước_gốc - Kích_thước_nén) ÷ Kích_thước_gốc × 100%
```

### **Ví dụ nén**
| Loại file | Tỉ lệ nén | % Tiết kiệm |
|-----------|-----------|-------------|
| Văn bản (ZIP) | 5:1 | 80% |
| Ảnh (JPEG) | 10:1 | 90% |
| Video (H.264) | 20:1 | 95% |
| Âm thanh (MP3) | 12:1 | 92% |

---

## **MẸO NHANH**

### **Chuyển đổi nhanh**
```
Lũy thừa của 2: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024...
Số chẵn → bit cuối = 0
Số lẻ → bit cuối = 1
Lũy thừa của 2 → dạng 1000...0₂
```

### **Kiểm tra nhanh**
```
Nhị phân → Thập phân: Tổng lũy thừa
Mã bù 2: Cộng với số dương = 0
IEEE 754: Kiểm tra exponent và mantissa
```

### **Tính toán nhanh**
```
8 bit = 1 byte
1024 byte = 1 KB
1024 KB = 1 MB
1024 MB = 1 GB
```

---

**Tài liệu tham khảo:**
- Chương 2: Biểu diễn dữ liệu trên máy tính
- IEEE 754 Standard
- ASCII/Unicode Standards

---

*Nhập Môn Tin Học, 2025 - GVHD: Th.S Võ Việt Khoa - Khoa CNTT - Trường Đại Học Mở TP. Hồ Chí Minh*







