// console.log('button cliked pn');
//  step-1
document.getElementById('btn-login').addEventListener('click' , function(event){
    // step-2
    event.preventDefault();
    // console.log('btn clicked');
    
    // step-3-get the phone number

    const phonenumber = document.getElementById('phone-number'). value;
    const pinnumber = document.getElementById('pin-number').value;
console.log(phonenumber , pinnumber);

// condition
if(phonenumber==='5' && pinnumber==='1234'){
    console.log('you are loged in');
    window.location.href ='/home.html'
}else{
    alert('wrong phone number')
}
    

    
})
