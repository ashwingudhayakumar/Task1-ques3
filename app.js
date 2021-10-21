class FormValidation{
    formValues = {
        username : "",
        DOB : "",
        phonenumber : "",
        Sex : "",
        
    }
    errorValues = {
        usernameErr : "",
        DOBErr : "",
        phonenumberErr : "",
        SexErr : "",
       
    }
    showErrorMsg(index,msg){
        const form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.add('error')
        form_group.getElementsByTagName('span')[0].textContent = msg   
    }
    showSuccessMsg(index){
        const form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.remove('error')
        form_group.classList.add('success')
    }
    getInputs(){
        this.formValues.username = document.getElementById('username').value.trim()
        this.formValues.DOB = document.getElementById('DOB').value.trim()
        this.formValues.phonenumber = document.getElementById('phonenumber').value.trim()
        this.formValues.Sex = document.getElementById('Sex').value.trim()
      
    }
    validateUsername(){
        if(this.formValues.username === ""){
            this.errorValues.usernameErr = "* Please Enter Your Name"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        } else if(this.formValues.username.length <= 4 ){
            this.errorValues.usernameErr = "* Username must be atleast 5 Characters"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        } else if(this.formValues.username.length > 14){
            this.errorValues.usernameErr = "* Username should not exceeds 14 Characters"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        } else {
            this.errorValues.usernameErr = ""
            this.showSuccessMsg(0)
        }
    }
    validateDOB(){
        
        if(this.formValues.DOB === ""){
            this.errorValues.DOBErr = "* Please Enter Valid DOB"
            this.showErrorMsg(1,this.errorValues.DOBErr)
        } 
         else {
            this.errorValues.DOBErr = ""
            this.showSuccessMsg(1)
        }
    }
    validatePhonenumber(){
       const phoneno = /^\d{10}$/
       if(this.formValues.phonenumber === ""){
           this.errorValues.phonenumberErr = "* Please Enter your Phone Number"
           this.showErrorMsg(2,this.errorValues.phonenumberErr)
       } else if(phoneno.test(this.formValues.phonenumber)){
           this.errorValues.phonenumberErr = ""
           this.showSuccessMsg(2)
       } else {
           this.errorValues.phonenumberErr = "* Invalid Phone Number"
           this.showErrorMsg(2,this.errorValues.phonenumberErr)
       }
    }
    validateSex(){
        if(this.formValues.Sex === ""){
            this.errorValues.SexErr = "* Please Provide a Sex"
            this.showErrorMsg(3,this.errorValues.SexErr)
        } else if(this.formValues.Sex.length < 4){
            this.errorValues.SexErr = "* Sex column atleast 4 Characters(male) or maximum 6(female)"
            this.showErrorMsg(3,this.errorValues.SexErr)
        } else if(this.formValues.Sex.length > 6){
            this.errorValues.SexErr = "* Sex column should not exceeds 6 Characters(Female) minimum is 4(male)"
            this.showErrorMsg(3,this.errorValues.SexErr)
        } else {
            this.errorValues.SexErr = ""
            this.showSuccessMsg(3)
        }
    }
    
    alertMessage(){
        const {usernameErr , DOBErr , phonenumberErr , SexErr }= this.errorValues
        if(usernameErr === "" && DOBErr === "" && phonenumberErr === "" && SexErr === "" ){
            swal("Registration Successful","ThankYou , "+this.formValues.username,"success").then(() => {
                console.log(this.formValues)
                this.removeInputs()
            })
        } else {
            swal("Give Valid Inputs","Click ok to Continue" ,"error")
        }
    }

    removeInputs(){
        const form_groups = document.getElementsByClassName('form-group')
        Array.from(form_groups).forEach(element => {
            element.getElementsByTagName('input')[0].value = ""
            element.getElementsByTagName('span')[0].textContent = ""
            element.classList.remove('success')
        })
    }
} 

const ValidateUserInputs = new FormValidation()

document.getElementsByClassName('form')[0].addEventListener('submit' , event => {
    event.preventDefault()
    ValidateUserInputs.getInputs()
    ValidateUserInputs.validateUsername()
    ValidateUserInputs.validateDOB()
    ValidateUserInputs.validatePhonenumber()
    ValidateUserInputs.validateSex()
    ValidateUserInputs.alertMessage()
})
