
const loadLevels = () => {
    const url = "https://openapi.programming-hero.com/api/levels/all";
    fetch(url)
    .then((res) => res.json())
    .then((levels) => displayLevels(levels.data));
}

const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelWord(data.data))

}

const displayLevelWord = (words) => {
    // console.log(words);
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";
    words.forEach((word) => {
        // const {word, meaning, pronounciation} = word;
        // console.log(word);
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-3">
            <h2 class="text-xl font-semibold">${word.word}</h2>
            <p class="text-sm py-2">${word.meaning}</p>
            <div class="font-bangla text-2xl">"${word.pronunciation}"</div>
            <div class="flex justify-between items-center">
                <button class="btn bg-[#1A91FF20] hover:bg-[#1A91FF80] p-2 rounded-md"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1A91FF20] hover:bg-[#1A91FF80] p-2 rounded-md"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>
        `;
        wordContainer.appendChild(card);
    })
} 

const displayLevels = (levels) => {
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";
    for (let lesson of levels) {
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
            <button onClick="loadLevelWord(${lesson.level_no})" href="" class="btn btn-outline btn-primary"> 
            <i class="fa-solid fa-book-open"></i>  
            Lesson - ${lesson.level_no}
            </button>

        `;
        levelContainer.appendChild(btnDiv);

        // console.log(lesson);
    }
}


loadLevels();
