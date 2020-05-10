
$(".addList").click(() => {
    let itemValue = $('#toDoInput').val()
    axios.post('/api/todo/create')
})