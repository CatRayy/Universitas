// script.js
document.getElementById("dataForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const dataType = document.getElementById("dataType").value;
    const dataName = document.getElementById("dataName").value;

    if (!dataName) {
        alert("Silakan masukkan nama data.");
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = dataName;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("button", "edit-button");
    editButton.addEventListener("click", () => {
        openEditModal(listItem);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Hapus";
    deleteButton.classList.add("button", "hapus-button");
    deleteButton.addEventListener("click", () => {
        listItem.remove();
    });

    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    const listElement = document.getElementById(`${dataType}List`);
    listElement.appendChild(listItem);

    document.getElementById("dataName").value = "";
});

// Fungsi untuk membuka modal edit
function openEditModal(item) {
    const editModal = document.getElementById("editModal");
    const editDataInput = document.getElementById("editDataInput");
    const editDataButton = document.getElementById("editDataButton");

    editDataInput.value = item.textContent;

    // Menampilkan modal
    editModal.style.display = "block";

    // Mengatur tindakan saat tombol "Simpan Perubahan" pada modal di klik
    editDataButton.addEventListener("click", () => {
        item.textContent = editDataInput.value;
        editModal.style.display = "none";
    });

    // Mengatur tindakan saat tombol "Close" pada modal di klik
    const closeButtons = document.getElementsByClassName("close-button");
    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener("click", () => {
            editModal.style.display = "none";
        });
    }

    // Mengatur tindakan saat area di luar modal di klik (untuk menutup modal)
    window.addEventListener("click", (event) => {
        if (event.target === editModal) {
            editModal.style.display = "none";
        }
    });
}
