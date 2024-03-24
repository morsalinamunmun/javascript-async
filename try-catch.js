function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
    try{
        const age = parseInt(ageText);
        if(isNaN(age)){
            //console.log('age not found', age, ageText)
            throw "Please enter a number"
        }
        else if(age < 18){
            throw "Teenager not allow"
        }
        else if(age > 30){
            throw "Old not allow"
        }
    }
    catch(err){
        console.log('ERROR:', err)
        errorTag.innerHTML = 'ERROR' + err;
    }
    finally{
        console.log('All done inside try catch')
    }
}