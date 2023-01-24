function add_task(e)
{
    let content = document.getElementById('text_field').value;
    if(content !="")
    {
        document.getElementById('info').innerHTML="Click to remove the Task..."
    }
    if(content != "")
    {
        let li = document.createElement('li');
        let span = document.createElement('span');
        let text = document.createTextNode(content);

        span.appendChild(text);
        li.appendChild(span);
        const txt_div = document.getElementById('content_field');
        let ul_div = document.getElementById('ul');
        ul_div.appendChild(li);
        txt_div.appendChild(ul_div);
        document.getElementById("text_field").value="";
            span.addEventListener('click',(m)=>
        {
            const li = m.target.parentElement;
            li.parentElement.removeChild(li);
        })
    }
    else{
        alert("Field is Empty!!")
    }
}

var text_box = document.getElementById('text_field');
text_box.addEventListener("keypress",function(event)
{
    if(event.key === "Enter")
    {
        event.preventDefault();
        document.getElementById('add').click();
    }
});
