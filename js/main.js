function addNewTask() {
    var list = document.getElementById("list");
    var text = document.getElementById("task_name").value;

    if (text.length === 0) {
        alert("Tarefa precisa ter mais de um caracter");
        return;
    }
    var listiten = document.createElement("li");
    listiten.className = "lista_itens";

    const textElement = document.createTextNode(text);
    listiten.appendChild(textElement);
    list.appendChild(listiten);
}