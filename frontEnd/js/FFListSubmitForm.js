let i=1;
document.addEventListener('submit',async (e)=>{
    e.preventDefault();
    let Name=e.target.name.value;
    let Img=e.target.img.value;
    let Occupation=e.target.occupation.value;
    let Institution=e.target.institution.value;
    let Department=e.target.department.value;
    let Roll=e.target.roll.value;
    let Session=e.target.session.value;
    let Address=e.target.address.value;
    let Date=e.target.date.value;
    let Killed_By=e.target.killed_by.value;
    let Profile_Link=e.target.profileUrl.value;
    let Description=e.target.description.value;
    
    const data={
        "Name": Name,
        "ImgUrl": Img,
        "Occupation": Occupation,
        "Institution": Institution,
        "Department": Department,
        "Roll": Roll,
        "Session": Session,
        "Address": Address,
        "Date": Date,
        "Killed_By": Killed_By,
        "Profile_Link":Profile_Link,
        "Description": Description
    }
    console.log(data);
    if(i===1){
        alert("recheck");
        i++;
    }else{
    const url=`http://localhost:1516/api/FFListSubmit`;
    const response=await fetch(url,{
        method: "POST",
        headers:{
             'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    const d=await response.json();
    if(d.acknowledged===true){
        alert('successfully submitted, wait we try to verify your data , it takes max 1 days');
        window.location.href='../html/index.html';
    }
}
})