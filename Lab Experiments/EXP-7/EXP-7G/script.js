function Student(name,roll,branch){
    this.name=name;
    this.roll=roll;
    this.branch=branch;
    this.display=function(){
        return (
            "Name : "+
            this.name+
            "<br> Roll No : "+
            this.roll +
            "<br> Branch : "+
            this.branch
        );
    };
}
Object.defineProperty(Student.prototype,"details",{
    get:function(){
        return this.name+ "(" + this.branch + ")";
    },
});

function StudentDetails(){
    let s1=new Student("gova",33117,"csm");
    document.getElementById("demo").innerHTML=s1.display()+"<br><br> <b>Accessor: </b>"+
    s1.details;
}