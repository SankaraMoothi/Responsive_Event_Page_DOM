var container=document.createElement("div");

var div1=document.createElement("div");
div1.setAttribute("id","head");
var heading=createTag("h1","title","Anime-Event");
var para=createTag("p","description","Dressing Event")

var newrow=document.createElement("div");
newrow.className="row"

var col1=document.createElement("div");
col1.className="col"
col1.className-"col-lg-6 col-md-12 d-flex justify-content-center";

var col2=document.createElement("div");
col2.className="col"
col2.className-"col-lg-6 col-md-12 d-flex justify-content-center";

var form=document.createElement("form");
form.setAttribute("id","form");

var formdiv1=createformdiv("form-group p-1");
var formdiv2=createformdiv("form-group p-1");
var formdiv3=createformdiv("form-group p-1");
var formdiv4=createformdiv("form-group p-1");
var formdiv5=createformdiv("form-group p-1");
var button=document.createElement("button")
button.setAttribute("type", "button")
button.setAttribute("id", "submit")
button.className="btn btn-primary mt-1"
button.innerHTML="Submit"
button.addEventListener('click',submit);

var NameLabel=label("Name","Name:");
var EmailLabel=label("Email","Email:");
var PhoneLabel=label("Phone","Phone_No:");
var No_SeatLabel=label("No-seat","Number_Seat:");
var AdditionLabel=label("Add-name","Addition_Name:");

var Namename=input("input","text","Name","Enter Your Name");
var Emailname=input("input","text","Email","Enter Mail Id")
var Phonename=input("input","tel","Phone","Enter Mobile No:")
var No_Seatname=input("input","number","number","Enter the number:")
var Additionname=input("input","text","Names","Enter the Name:");


function createformdiv(className){
    var div=document.createElement("div");
    div.className=className;
    return div;
}
function label(forname,innerHTMLname){
    var label=document.createElement('label');
    label.setAttribute("for",forname)
    label.innerHTML=innerHTMLname;
    return label;
    }

    function input(inputtag,typename,idname,placeholdername){
        var name=document.createElement(inputtag);
        name.setAttribute("type", typename);
        name.setAttribute("id", idname);
        name.setAttribute("placeholder",placeholdername);
        name.setAttribute("required", "");
        name.required = true; 
        name.className="form-control";
        return name;
               }

               function createTag(tagname,idname,data) {
                var tag=document.createElement(tagname);
                tag.setAttribute("id",idname)
                tag.innerHTML=data
                return tag;
            }
            

var table=document.createElement("table")
table.className="table"
table.setAttribute("id","mytable")
var thead=document.createElement("thead")
thead.className="thead-dark"

var tr=document.createElement("tr")

var theading=creater("th","Name")
var th2=creater("th","Email")
var th3=creater("th","Phone_No")
var th4=creater("th","No_seat")
var th5=creater("th","AddName")
tr.append(theading,th2,th3,th4,th5)
thead.append(tr)

var tbody=document.createElement("tbody")

function creater(tag,data){
    var ele=document.createElement(tag);
    ele.innerHTML=data;
    return ele;
}

function submit(){
    var Namedata=document.getElementById("Name").value;
    var Emaildata=document.getElementById("Email").value;
    var Phonedata=document.getElementById("Phone").value;
    var No_seatdata=document.getElementById("number").value;
    var AddNamedata=document.getElementById("Names").value;
   
    if((Namedata==""||Namedata==null)||(Emaildata==""||Emaildata==null)||(Phonedata==""||Phonedata==null)||(No_seatdata==""||No_seatdata==null)||(AddNamedata==""||AddNamedata==null)){
        alert("Fill the Field");  
    }
    else{
        var table=document.getElementById("mytable");

        var row=table.insertRow(-1);
        var Namename=row.insertCell(0);
        var Emailname=row.insertCell(1);
        var Phonename=row.insertCell(2);
        var No_seatname=row.insertCell(3);
        var AddNamename=row.insertCell(4);

        Namename.innerHTML=Namedata
        Emailname.innerHTML=Emaildata
        Phonename.innerHTML=Phonedata
        No_seatname.innerHTML=No_seatdata
        AddNamename.innerHTML=AddNamedata
        document.getElementById("mytable").style.visibility="visible";

        document.getElementById("form").reset()

    }
}
            div1.append(heading,para)
            formdiv1.append(NameLabel,Namename)
            formdiv2.append(EmailLabel,Emailname)
            formdiv3.append(PhoneLabel,Phonename)
            formdiv4.append(No_SeatLabel,No_Seatname)
            formdiv5.append(AdditionLabel,Additionname)
            form.append(formdiv1,formdiv2,formdiv3,formdiv4,formdiv5,button)
            col1.append(form)
            table.append(thead,tbody)
            col2.append(table)
            newrow.append(col1,col2);
           
            container.append(div1,newrow);
            document.body.append(container)

