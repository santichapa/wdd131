const b = document.querySelector("button");
const input = document.querySelector("#favchap");
const ul = document.querySelector("#list");

const chaptersArray = getChapterList() || [];


chaptersArray.forEach(chapter => displayList(chapter));


b.addEventListener("click", () => {
    if (input.value != "")
    {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();

        input.value = "";
        input.focus();


        
        
        
        input.value = "";
        
        input.focus();
        
    }
    else {
        input.focus();
    }
});



function displayList(item) {
    const li = document.createElement("li");
    const del = document.createElement("button"); 
    li.textContent = input.value;
    del.textContent = "❌";
    del.classList.add("delete");
    
    li.appendChild(del);
    ul.appendChild(li);
    
    del.addEventListener("click", () => {
            ul.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();
    });
}

function setChapterList() {
    newArray = JSON.stringify(chaptersArray);
    localStorage.setItem("BOMList", newArray);
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("BOMList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}


