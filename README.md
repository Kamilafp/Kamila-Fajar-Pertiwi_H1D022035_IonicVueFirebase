# Kamila-Fajar-Pertiwi_H1D022035_IonicVueFirebase

Halaman Awal
![image](https://github.com/user-attachments/assets/08276b54-7e97-4595-82eb-dee6ace0276b)
Disini halaman awal untuk login, jika dipencet maka akan langsung terhubung dengan pilihan akun google yang akan digunakan untuk login
![image](https://github.com/user-attachments/assets/cf22339d-fab5-4bde-915d-6c7279fe2919)
project-762193193992
diatas adalah project yang telah dibuat dengan id yang telah dimasukkan ke file /stores/auth.ts sebelumnya, dimana id nya didapat setelah membuat firebase dan penyesuaian url dengan localhost yang digunakan di ionic
![image](https://github.com/user-attachments/assets/ef71c820-dffb-4aaf-9e6c-155e2f9ed553)
![image](https://github.com/user-attachments/assets/9a8e9136-a3dd-4d20-b360-76bffc653fc5)
karena project sudah terhubung dengan baik, antara firebase dan penyesuaian API di google, maka di project ini mendapat akses untuk bisa login otomatis dengan google
![image](https://github.com/user-attachments/assets/7367e5bc-1737-4322-ad89-93d8bd0b0ab9)


saat sudah masuk, akun yang tertera/akun yang login adalah akun tersedia yang dipilih untuk melakukan login
![image](https://github.com/user-attachments/assets/76f8b0b3-9265-435b-b191-c63aaaf32685)
![image](https://github.com/user-attachments/assets/3b5b9bb3-4d29-4299-8c14-f8ca4f37b14f)

dan di halaman home isinya masih polosan sesuai dengan arahan saat praktikum
![image](https://github.com/user-attachments/assets/7f52f7ed-fef7-4ad9-9c3c-95a6662361f8)

Modifikasi Halaman Utama
![image](https://github.com/user-attachments/assets/6a8f4b2d-befa-43f1-9a41-9ffe2d2c4843)

Read
Bagian read/pengambilan data di handle dengan sintaks
![image](https://github.com/user-attachments/assets/9485242a-1263-4dae-820f-f29e6238297c)
Proses membaca data terjadi di dalam fungsi loadTodos, yang mengambil data todo dari Firestore dan menyimpannya dalam variabel todos

![image](https://github.com/user-attachments/assets/c99eb24f-82b8-4d27-8e1b-dd9377868f44)
getTodos() bertanggung jawab untuk membaca (mengambil) data todos yang ada dari Firestore

![image](https://github.com/user-attachments/assets/c1555b3a-2099-4ba8-8593-2228a7f07955)
Fungsi loadTodos akan memanggil firestore.getTodos() untuk mendapatkan data dari Firestore dan menyimpannya dalam todos
activeTodos dan completedTodos adalah computed property yang digunakan untuk memisahkan todo berdasarkan statusnya

Create
Setelah icon + pada halaman uatama di klik, maka akan muncul halaman pembuatan list todo baru
![image](https://github.com/user-attachments/assets/b2aaa25c-dbc3-4763-b928-06eb22349895)

Bagian create data baru di handle dengan sintaks
![image](https://github.com/user-attachments/assets/76799002-b895-4a5b-9b83-9bca2b2255d9)
editingId adalah percabangan jika akan ada pengeditan/update data, Jika tidak ada editingId maka todo ditambahkan ke Firestore menggunakan metode firestoreService.addTodo()

![image](https://github.com/user-attachments/assets/9f56860b-2974-4c0c-8b92-c204dd85e6f6)
addTodo bertanggung jawab untuk membuat (menambah) todo baru ke dalam koleksi Firestore

Update Status
Bagian update atau edit status di handle dengan sintaks
![image](https://github.com/user-attachments/assets/3c04d3eb-b423-4d21-b26f-d80e92b782f5)
Untuk mengubah status todo (aktif ke selesai atau sebaliknya), aplikasi memanggil metode firestore.updateStatus untuk memperbarui status todo berdasarkan id

![image](https://github.com/user-attachments/assets/2ed77a26-7625-47eb-acaf-da72ad0510b3)
Fungsi updateStatus bertanggung jawab untuk memperbarui status dari todo yang ada

![image](https://github.com/user-attachments/assets/35e75472-8dc1-49cf-94e4-9a1db283bffe)
Sintaks diatas bertanggung jawab untuk aksi di klik dan swipe ke kiri, maka akan memanggil handleStatus untuk mengubah status list menjadi telah dilaksanakan

Bisa di swipe sampai maksimal
![image](https://github.com/user-attachments/assets/e0b71bcb-f78b-40dd-b3f0-78cb72ba4c77)

Bisa juga di swipe dan di klik
![image](https://github.com/user-attachments/assets/5cc2b621-d98c-4671-8520-6fbeae657aa4)

Update List data 
Bagian update/edit data di handle dengan sintaks
![image](https://github.com/user-attachments/assets/f9f829e2-d36b-4d99-a96f-d5734cfd16f1)
Fungsi ini digunakan untuk mengedit todo yang ada. Todo yang akan diedit diambil berdasarkan id, dan data yang ada akan ditampilkan dalam modal.

![image](https://github.com/user-attachments/assets/3dd9d605-417e-4985-a463-fc92850eae5f)
Fungsi updateTodo bertanggung jawab untuk memperbarui (mengubah) data todo yang sudah ada di Firestore

![image](https://github.com/user-attachments/assets/35e75472-8dc1-49cf-94e4-9a1db283bffe)
Sintaks diatas bertanggung jawab untuk aksi di klik dan swipe ke kiri, maka akan memanggil handleEdit, lalu di klik maka akan ditampilkan halaman pengeditan data

![image](https://github.com/user-attachments/assets/eb0021a6-f75b-4385-b235-fcab9dc79360)


Delete
Bagian delete data di handle dengan sintaks berikut
![image](https://github.com/user-attachments/assets/1eb97d0b-4784-4901-8bcf-8db690ea82e2)
Proses penghapusan todo dilakukan melalui fungsi handleDelete, yang akan menghapus todo dari Firestore menggunakan firestore.deleteTodo

![image](https://github.com/user-attachments/assets/c3eb6b4c-1e83-4a5a-a59c-4a5d0dc34c02)
Fungsi deleteTodo bertanggung jawab untuk menghapus data todo yang sudah ada dari Firestore

![image](https://github.com/user-attachments/assets/f38c1b7b-a475-436a-881c-d1e0071f5993)
Sintaks diatas bertanggung jawab untuk aksi di klik dan di swipe kearah kanan, maka akan memanggil handleDelete untuk melakukan penghapusan

Bisa di klik manual
![image](https://github.com/user-attachments/assets/6bebe7c9-4d23-47de-a807-a72061540621)

Bisa juga di swipe sampai maksimal
![image](https://github.com/user-attachments/assets/2378e4aa-b877-4ea7-90a5-05a2b4d02a37)
