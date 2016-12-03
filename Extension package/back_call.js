/*
Written by: Aravind Kumar
Client script for ExecSphere chrome extension
*/
var funct="";
var fullname= "";
var desig="";
var loc="";
var ind="";
var email="";
var phno="";
var pub="";
var comp="";
var type_comp="";

var comp_fullname="";
var speciality="";
var website="";
var comp_industry="";
var headquarters="";
var no_emp="";
var founded="";
var summary="";

//var location="http://localhost/lise/record.php";
//checks for keypress events
$(function(){
    $("html").keydown(function(e){
        if(e.which==81)//Q...function
        {
          if(e.ctrlKey)
          {
              funct=prompt("Enter Function","Enter here");
              e.preventDefault();
          }
          else
          {
              funct=getText();
          }
        }

        if(e.which==87)//W...ES public address
        {
          if(e.ctrlKey)
          {
              pub=prompt("Enter Public address","Enter here");
              e.preventDefault();
          }
          else
          {
              pub=getText();
          }
        }
        if(e.which==69)//E...email
        {
          if(e.ctrlKey)
          {
              email=prompt("Enter Email","Enter here");
              e.preventDefault();
          }
          else
          {
              email=getText();
          }
        }
        if(e.which==82)//R...phone number
        {
          if(e.ctrlKey)
          {
              phno=prompt("Enter phone number","Enter here");
              e.preventDefault();
          }
          else
          {
              phno=getText();
          }
        }
        if(e.which==84)//T...type of company
        {
          if(e.ctrlKey)
          {
              type_comp=prompt("Enter Type of Company","Enter here");
              e.preventDefault();
          }
          else
          {
              type_comp=getText();
          }
        }
        if(e.which==79)//O(alphabet)...next entry
        {
          if(e.ctrlKey)
          {
                var title=document.title;
                var url=window.location.href;
                var mod=document.lastModified;
                /*console.log(fullname);
                console.log(desig);
                console.log(loc[1]);
                console.log(ind[1]);
                console.log(email);
                console.log(phno);
                console.log(pub);
                console.log(comp[1]);*/
                var send = new Array();
                send.push(funct);
                send.push(fullname);
                send.push(desig);
                send.push(comp);
                send.push(loc);
                send.push(pub);
                send.push(email);
                send.push(phno);
                send.push(ind);
                send.push(type_comp);
                send.push(title);
                send.push(url);
                send.push(mod);
                console.log(send);
                var location="http://localhost/lise/record.php";
                $.post(location,{"type" : "person","lise" : send},function(data){

                }, "json");
                return false;
          }
        }
        if(e.which==67)//C(alphabet)...next entry
        {
          if(e.ctrlKey)
          {
                var title=document.title;
                var url=window.location.href;
                var mod=document.lastModified;
                /*console.log(fullname);
                console.log(desig);
                console.log(loc[1]);
                console.log(ind[1]);
                console.log(email);
                console.log(phno);
                console.log(pub);
                console.log(comp[1]);*/
                var send = new Array();
                send.push(comp_fullname);
                send.push(speciality);
                send.push(website);
                send.push(comp_industry);
                send.push(headquarters);
                send.push(no_emp);
                send.push(founded);
                send.push(summary);
                send.push(title);
                send.push(url);
                send.push(mod);
                console.log(send);
                var location="http://localhost/lise/record.php";
                $.post(location,{"type" : "company","lise" : send},function(data){

                }, "json");
                return false;
          }
        }
        if (e.which==73)//I...Capture people
        {
          if(e.ctrlKey)
          {
              var temp="";
              try
              {
                  fullname= document.getElementsByClassName('full-name')[0].innerHTML;
                  fullname=fullname.replace(/<(?:.|\n)*?>/gm, '');
              }
              catch(err)
              {
                  fullname=prompt("Name not available","Enter here");
                  e.preventDefault();
              }

              try
              {
                  desig=document.getElementsByClassName('title')[0].innerHTML;
                  desig=desig.replace(/<(?:.|\n)*?>/gm, '');
              }
              catch(err)
              {
                  desig=prompt("Designation not available","Enter here");
                  e.preventDefault();
              }

              try
              {
                  var temp_loc=document.getElementsByClassName('locality')[0].innerHTML;    
                  temp=temp_loc;
                  var loct=temp.match(/">(.*)</);
                  loc=loct[1].replace(/<(?:.|\n)*?>/gm, '');
              }
              catch(err)
              {
                  loc=prompt("Location not available","Enter here");
                  e.preventDefault();
              }
              
              try
              {
                  var temp_ind=document.getElementsByClassName('industry')[0].innerHTML;
                  temp=temp_ind;
                  indt=temp.match(/">(.*)</);
                  ind=indt[1].replace(/<(?:.|\n)*?>/gm, '');
              }
              catch(err)
              {
                  ind=prompt("Industry not available","Enter here");
                  e.preventDefault();
              }
              
            //  var temp_email=document.getElementsByClassName('contact-field')[0].innerHTML;
            //  var temp_phno=document.getElementById('relationship-phone-numbers-view').innerHTML;
            //  var temp_pub=document.getElementsByClassName('public-profile')[0].innerHTML;
             

            //  var temp = temp_email;
            //  var email = temp.match(/">(.*)</);

              
            //  temp=temp_phno;
            //  var phno=temp.match(/">(.*)&n/);

            //   temp=temp_pub;
            //   var pub=temp.match(/<span>(.*)<\/span>/);

              try
              {
                var temp_comp=document.getElementById('overview-summary-current').innerHTML;
                temp=temp_comp;
                var temp2=temp.match(/<a href="\/company\/(.*)curr_pos">(.*)<\/a>/);
                var compt=temp2[0].match(/">(.*)</);
                comp=compt[1].replace(/<(?:.|\n)*?>/gm, '');
              }
              catch(err)
              {
                 comp=prompt("Current company not available","Enter here");
                 e.preventDefault();
              }


              console.log(fullname);
              console.log(desig);
              console.log(loc);
              console.log(ind);
              //console.log(email[1]);
              //console.log(phno[1]);
              //console.log(pub[1]);
              console.log(comp);
          }
        }
        if (e.which==80)
        {
          if(e.ctrlKey)
          {
              var disp="Function : "+funct+"\n"+"Name : "+fullname+"\n"+"Designation : "+desig+"\n"+"Company : "+comp+"\n"+"Location : "+loc+"\n"+"Public Address : "+pub+"\n"+"Email : "+email+"\n"+"Phone Number : "+phno+"\n"+"Industry : "+ind+"\n"+"Type of Company : "+type_comp+"\n";
              alert(disp);
          }
        }
         if (e.which==88)//x...Capture company
        {
          if(e.ctrlKey)
          {
              var temp="";
              try
              {
                  comp_fullname= document.title;
                  temp=comp_fullname.match(/[^:]*/);              
                  comp_fullname=temp[0];
              }
              catch(err)
              {
                  comp_fullname=prompt("Company Name not available","Enter here");
                  e.preventDefault();
              }
             
              try
              {
                  website=document.getElementsByClassName('website')[0].innerHTML;
                  temp=website;
                  temp=temp.match(/_blank">(.*)</);
                  website=temp[1].replace(/<(?:.|\n)*?>/gm, '');
              }
              catch(err)
              {
                  website=prompt("Website not available","Enter here");
                  e.preventDefault();
              }
              
              try
              {
                  comp_industry=document.getElementsByClassName('industry')[0].innerHTML;
                  temp=comp_industry;
                  temp=temp.match(/<p>(.*)<\/p>/);
                  comp_industry=temp[1].replace(/<(?:.|\n)*?>/gm, '');
              }
              catch(err)
              {
                  website=prompt("Industry not available","Enter here");
                  e.preventDefault();
              }

              try
              {
                  headquarters=document.getElementsByClassName('adr')[0].innerHTML;
                  headquarters=headquarters.replace(/<(?:.|\n)*?>/gm, '');
              }
              catch(err)
              {
                  headquarters=prompt("Headquarters not available","Enter here");
                  e.preventDefault();
              }

              try
              {
                  no_emp=document.getElementsByClassName('company-size')[0].innerHTML;
                  no_emp=no_emp.replace(/(\r\n|\n|\r)/gm,"");
                  temp=no_emp;
                  temp=temp.match(/<p>(.*)<\/p>/);
                  no_emp=temp[1].replace(/<(?:.|\n)*?>/gm, '');
              }
              catch(err)
              {
                  no_emp=prompt("Number of employees not available","Enter here");
                  e.preventDefault();
              }

              try
              {
                  founded=document.getElementsByClassName('founded')[0].innerHTML;
                  temp=founded;
                  temp=temp.match(/<p>(.*)<\/p>/);
                  founded=temp[1].replace(/<(?:.|\n)*?>/gm, '');
              }
              catch(err)
              {
                  founded=prompt("Founded not available","Enter here");
                  e.preventDefault();
              }

              try
              {
                  speciality=document.getElementsByClassName('specialties')[0].innerHTML;
                  speciality=speciality.replace(/(\r\n|\n|\r)/gm,"");
                  temp=speciality;
                  temp=temp.match(/<p>(.*)<\/p>/);
                  speciality=temp[1].replace(/<(?:.|\n)*?>/gm, '');
              }
              catch(err)
              {
                  speciality=prompt("speciality not available","Enter here");
                  e.preventDefault();
              }



              console.log(comp_fullname);
              console.log(website);
              console.log(comp_industry);
              console.log(headquarters);
              console.log(no_emp);
              console.log(founded);
              console.log(summary);
              console.log(speciality);
          }
        }
        if(e.which==90)//Z...one line summary
        {
          if(e.ctrlKey)
          {
              summary=prompt("Enter one line summary of the Company","Enter here");
              e.preventDefault();
          }
          else
          {
              summary=getText();
          }
        }
    });
});


//returns selected text
function getText()
{
  var text="";
  if(window.getSelection)
  {
    text=window.getSelection().toString();
  }//if
  return text;
}//getText

//ajax call to update content
function send_update(type,content)
{
  //location of backend script
  var location="http://localhost/hotkey_backend/fill.php"; 
  //post call
  $.post(location,{"type" : type,"content" : content},function(data){

  }, "json");
  return false;
}//send_update