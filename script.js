document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");

    // تعديل مدخل الاسم لمنع الأرقام والرموز
    nameInput.addEventListener("input", function () {
        this.value = this.value.replace(/[0-9@#\$%\^&\*\(\)_\+\=\[\]\{\}\\|;:'",<>\./?`~!]/g, '');
    });

    // تعديل مدخل رقم الهاتف لقبول الأرقام فقط
    phoneInput.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, '');  // \D يعني أي حاجة مش رقم
    });
});
