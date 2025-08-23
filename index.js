document.addEventListener("DOMContentLoaded", () => {
    const words = ["Data Scientist", "Machine Learning Engineer", "AI Engineer"];
    let i = 0;
    let j = 0;
    let isDeleting = false;
    let speed = 150;

    function typingEffect() {
        const jobElement = document.getElementById("job");
        const currentWord = words[i];
        
        if (!isDeleting) {
            jobElement.textContent = currentWord.substring(0, j + 1);
            j++;
            if (j === currentWord.length) {
                isDeleting = true;
                speed = 1000;
            }
        } else {
            jobElement.textContent = currentWord.substring(0, j - 1);
            j--;
            if (j === 0) {
                isDeleting = false;
                i = (i + 1) % words.length;
            }
        }

        setTimeout(typingEffect, speed);
        speed = isDeleting ? 100 : 150;
    }

    typingEffect();
});

document.addEventListener("DOMContentLoaded", () => {
    const words = ["Working...", "Drinking Matcha...", "Watching F1...","Coding...", "Building Legos...", "Developing..."];
    let i = 0;
    let j = 0;
    let isDeleting = false;
    let speed = 150;

    function typingEffect() {
        const jobElement = document.getElementById("statusinfo");
        const currentWord = words[i];
        
        if (!isDeleting) {
            jobElement.textContent = currentWord.substring(0, j + 1);
            j++;
            if (j === currentWord.length) {
                isDeleting = true;
                speed = 1000;
            }
        } else {
            jobElement.textContent = currentWord.substring(0, j - 1);
            j--;
            if (j === 0) {
                isDeleting = false;
                i = (i + 1) % words.length;
            }
        }

        setTimeout(typingEffect, speed);
        speed = isDeleting ? 100 : 150;
    }

    typingEffect();
});
