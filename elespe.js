let tablicaFraz=document.getElementsByClassName("ant-table-cell ant-table-cell-with-append monitoring-table-phrase");
let frazy=[];
let wszystkiDiv=document.getElementsByTagName('div');
let urle=[];
let doSkopiowania=[];
let tabulator=`
`;
for(var i=0;i<tablicaFraz.length;i++){
    frazy[i]=tablicaFraz[i].innerText;
    }
for(var i=0;i<wszystkiDiv.length;i++){
    let div=wszystkiDiv[i];
    if(div.className.match('styled__Text(.*)')&&div.className!="styled__Text-dmjGTS gSFjOM"&&div.className!="styled__Text-gmDzXn fcmrwL"){
        urle.push(div.innerText);
    }
}
frazy[frazy.length-1]+=tabulator;
frazy.push(urle);
navigator.clipboard.writeText(frazy.toString());
alert("Skopiowano "+(tablicaFraz.length)+" fraz z monitoringu.");
