export default function validate(name,email,project,message){
    let errors = {}
    if(name.length.trim === 0 || !/^[a-zA-Z\s]+$/.test(name.trim())){
        errors.name = "please enter a valid name."
    }
     if(email.length.trim === 0 ||  !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
        email
      )){
        errors.email = "please enter a valid email."
    }
    if(project.length === 0){
        errors.project = "please enter a valid project."
    }
    if(message.length === 0){
        errors.message = "please enter a valid message."
    }

    return errors
}