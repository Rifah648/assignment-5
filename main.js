document.getElementById('blog-btn').addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "index2.html";
});

function colorChange(event) {
    event.preventDefault();
    document.body.style.backgroundColor =
        'rgb(' + Math.round(Math.random() * 255) +
        ',' + Math.round(Math.random() * 255) +
        ',' + Math.round(Math.random() * 255) + ')';
}



let buttons = document.querySelectorAll(".Button");
let numberElement = document.getElementById('number');
let numberElement2 = document.getElementById('number2');

for (let button of buttons) {
    button.addEventListener('click', function () {
        var card = this.closest(".card");
        const titleText = card.querySelector("h2").textContent.trim();
        const titleContainer = document.getElementById('title');

        if (titleContainer) {
            titleContainer.classList.remove("hidden");

            
            const existingItems = titleContainer.querySelectorAll("li");
            for (let item of existingItems) {
                if (item.textContent.includes(titleText)) { 
                    console.warn("Duplicate title prevented:", titleText);
                    return;
                }
            }

            const now = new Date();
            console.log(now.toLocaleString());

            
            const newDiv = document.createElement('div');
            newDiv.classList.add("new-content");

            const ul = document.createElement('ul');
            const li = document.createElement('li');
            li.classList.add("bg-gray-50", "p-2", "rounded-lg", "shadow-md", "font-medium", "text-gray-800", "flex", "justify-between", "items-center", "gap-4", "mt-2");
            li.textContent = titleText + " - ";

            const span = document.createElement('span');
            span.textContent = now.toLocaleString();
            li.appendChild(span);

            ul.appendChild(li);
            newDiv.appendChild(ul);
            titleContainer.appendChild(newDiv);

            
            this.disabled = true;
            this.classList.replace('bg-blue-700', 'bg-white');
            this.classList.replace('text-white', 'text-black');

        
            let currentNumber = parseInt(numberElement.innerText, 10);
            if (!isNaN(currentNumber) && currentNumber > 0) {
                currentNumber--;
                numberElement.innerText = currentNumber;
            }

            let currentNumber2 = parseInt(numberElement2.innerText, 10);
            if (!isNaN(currentNumber2)) {
                currentNumber2++;
                numberElement2.innerText = currentNumber2;
            }

            
            const clearAll = document.getElementById('clear-All');
            clearAll.addEventListener('click', function () {
                while (titleContainer.firstChild) {
                    titleContainer.removeChild(titleContainer.firstChild);
                }
            });

            
            if (currentNumber === 0) {
                alert("Board updated Successfully");
            } else {
                alert("Board Update");
            }
        } else {
            console.warn("No element with id 'title' found!");
        }

        console.log(titleContainer);
    });
}

