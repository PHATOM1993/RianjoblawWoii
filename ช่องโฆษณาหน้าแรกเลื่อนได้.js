let box = document.getElementById("movingBox");
        let speed = 2; // ความเร็วในการเคลื่อนที่
        let position = -200; // ตำแหน่งเริ่มต้น

        function moveBox() {
            position += speed; // เพิ่มตำแหน่งให้กล่องเลื่อนขวา
            if (position > window.innerWidth) { // ถ้าออกขอบขวา
                position = -box.offsetWidth; // กลับไปเริ่มที่ขอบซ้าย
            }
            box.style.left = position + "px"; // อัปเดตตำแหน่ง
            requestAnimationFrame(moveBox); // ทำให้เคลื่อนที่อย่างต่อเนื่อง
        }

        moveBox(); // เรียกใช้ฟังก์ชันเมื่อโหลดหน้าเว็บ