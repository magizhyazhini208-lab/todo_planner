    function toDORemove(event)
        {
          const mainList=event.target.parentNode;
          mainList.remove();
        }
    function toDO()
    {
        const fav=document.getElementById("fav").value;
        if(fav.length!==0 && fav.length>5)
        {
        const mainList=document.getElementById("myList");
        //create list
        const list=document.createElement("li");//create element using DOM
        list.id=Math.floor(Math.random()*(100 - 1 + 1) + 1);
        list.className="listItems"; //we can add class names also 
        const textNode=document.createTextNode(fav);
        //create button
        const button=document.createElement("button");
        button.className="wasteBox";
        button.setAttribute('onclick',"toDORemove(event)");
        const bTextNode=document.createTextNode("🗑")
        button.append(bTextNode)
        
        list.append(textNode,button);
        mainList.append(list);
        document.getElementById("fav").value="";
        }
        else
        alert("Add the list first");
    }
    /*function toDO()
    {
        const fav=document.getElementById("fav").value;
        if(fav.length!==0 && fav.length>5){
        list=document.getElementById('myList');
        id=Math.floor(Math.random()*(100 - 1 + 1) + 1);
        list.innerHTML+=`<li class="listItems" id="${id}">${fav}<button class="wasteBox" onclick="toDORemove(${id})">🗑</button></li>`;
        }
        else
        alert("Add the list first");
      }
    //another method using dom

       //another method using fragement
        const mainList=document.getElementById("myList");
        const fav=document.getElementById("fav").value;
        function toDO()
        {
          mainList.append(fragement);
        }
        const fragement=document.createDocumentFragment()
        for(i=0;i<=10;i++)
        {
        const list=document.createElement("li");
        list.id=i;
        list.className="listItems"; 
        list.textContent="hello";
        fragement.append(list);
        }
        */
      