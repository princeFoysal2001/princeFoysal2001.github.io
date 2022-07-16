let on = false;
function OnOff()
{
    let stch = document.getElementById("switch");
    let stch_hold = document.getElementById("switch_holder");
    if(on == false)
    {

        stch_hold.style.boxShadow="0px 0px 20px green";
        stch.style.backgroundColor="green";
        stch.style.boxShadow="0px 0px 20px green";
        stch.style.left='30px';
        stch.innerHTML="On";
        on = true;
    }
    else 
    {
        stch_hold.style.boxShadow="0px 0px 20px red";
        stch.style.backgroundColor="red";
        stch.style.boxShadow="0px 0px 20px red";
        stch.style.left='0px';
        stch.innerHTML="Off";
        on = false;
    }
}
let notDetOn = false;
function ShowNotification()
{
    let not_det=document.getElementById("notification_details");
    if(notDetOn == false)
    {    
        not_det.style.display="block";
        notDetOn = true;
    }
    else 
    {
        not_det.style.display="none";
        notDetOn = false;
    }
}
let strLtrl = "";
let strInp="";
let msgCnt = 0;
function SendMessage()
{
    strInp=document.getElementById("notification_input").value;
    msgCnt++;
    document.getElementById("notification_count").innerHTML=msgCnt;
    strLtrl += msgCnt + ". " + strInp + "\n";
    document.getElementById("notification_details").value = strLtrl;
    strInp = "";
    document.getElementById("notification_input").value = "";
}
