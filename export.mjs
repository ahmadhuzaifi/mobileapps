class Student{
    constructor(name,matric,major){
        this.name = name;
        this.matric=matric;
        this.major=major;
    }
    get Name(){
        return this.name;
    }
    
    set Name(name){
        this.name = name;
    }
    get Matric(){
        return this.matric;
    }
    
    set Matric(matric){
        this.matric = matric;
    }
    
    get Major(){
        return this.major;
    }
    
    set Major(major){
        this.major = major;
    }
    

    
    display=()=>{
        
        console.log(`Name: ${this.name}`);
        console.log(`Matric No: ${this.matric}`);
        console.log(`Major: ${this.major}`);
    }

    
}


export{Student};