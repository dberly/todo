let array = [{ name: 'Train', duetime: '31-7-2023' }, { name: 'learn js', duetime: '1-8-2023' }]

render()
function render() {
    let todoHtml = ''
    for (let i = 0; i < array.length; i++) {
        const arrValue = array[i]
        const name = arrValue.name
        const duetime = arrValue.duetime
        const Html = `
         <div class="name-dat">${name}</div>
         <div class="name-dat">${duetime}</div>
         
        <button  class="av"onclick="
        array.splice(${i},1)
        render() 
        "> Delete</button>
         `;
        todoHtml += Html
    }

    document.querySelector('.todo').innerHTML = `${todoHtml}`
}
function addTodo() {
    const input = document.querySelector('.toDo-name')
    const name = input.value;
    const inpDate = document.querySelector('.date')
    const date = inpDate.value;
    array.push({ name: name, duetime: date })
    input.value = ''
    render()
}


