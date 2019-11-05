// Function triggered when form loaded, handles voting and validation
function setContestant(id,state) {
    
    constId = id;    
        
        let formId = 'form-'+constId;
        let votingFormId = 'vote-counter-voting-'+constId;        
        let votingValidationId = 'vote-counter-validation-'+constId;
        let otpResendId = 'otp-resend-'+constId;
        let thankyouId = 'thank-you-'+constId;
        let thankyouVotedId = 'thank-you-voted-'+constId;
        let vid = 'vid-'+constId;
        let cid = 'cid-'+constId;
        let mob = 'mobile-'+constId;
        let email = 'email-'+constId;
        let reMob = 'rmobile-'+constId;
        let reEmail = 'remail-'+constId;
    
        let votingForm = document.getElementById(votingFormId);
        let validationForm = document.getElementById(votingValidationId);
        let otpResendForm = document.getElementById(otpResendId);

        let voterId;
        let rMobile;
		let rEmail;
        let rOtp;
    
        // Voting Form
        votingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Resest form messages
            resetMessages();
            // Collect Data
            let data = {
                name: votingForm.querySelector('[name="name"]').value,
                email: votingForm.querySelector('[name="email"]').value,
                mobile: votingForm.querySelector('[name="mobile"]').value
            }
    
            // Validates Data
            if (!data.name) {
                votingForm.querySelector('[data-error="invalidName"]').classList.add('show');
                return;
            }
            if (!data.email) {
                votingForm.querySelector('[data-error="invalidEmail"]').classList.add('show');
                return;
            }
            if (!data.mobile || data.mobile.length < 10) {
                votingForm.querySelector('[data-error="invalidMobile"]').classList.add('show');
                return;
            }
    
            // Ajax HTTP Post
            let url = votingForm.dataset.url;
            let params = new URLSearchParams(new FormData(votingForm));
    
            votingForm.querySelector('.js-form-submission').classList.add('show');
    
            fetch(url, {
                    method: "POST",
                    body: params
                }).then(res => res.json())
                .catch(error => {
                    resetMessages();
                    votingForm.querySelector('.js-form-error').classList.add('show');
                })
                .then(response => {
                    resetMessages();
                    if (response === 0 || response.status === 'error') {
                        votingForm.querySelector('.js-form-error').classList.add('show');
                        return;
                    } else if (response.status === 'exist') {
                        voterId = response.ID;
                        rMobile = document.getElementById(mob).value;
                        rEmail = document.getElementById(email).value;
                        document.getElementById(vid).value = voterId;
                        document.getElementById(reMob).value = rMobile;
                        document.getElementById(reEmail).value = rEmail;
                        votingForm.querySelector('.js-form-exist').classList.add('show');                        
                        otpResendForm.querySelector('.resend-otp').classList.add('show');
                        document.getElementById(votingValidationId).setAttribute("class", "vote-counter-validation show");
                        return;
                    }
                    voterId = response.ID;
                    document.getElementById(vid).value = voterId;
                    votingForm.querySelector('.js-form-success').classList.add('show');
                    document.getElementById(votingValidationId).setAttribute("class", "vote-counter-validation show");
                })
        });
    
        // Validation Form
        validationForm.addEventListener('submit', (e) => {
            (e).preventDefault();
    
            let otpdata = {
                cid: validationForm.querySelector('[name="cid"]').value,
                vid: validationForm.querySelector('[name="vid"]').value,
                otp: validationForm.querySelector('[name="otp"]').value
            }
    
            // Validates Data
            if (!otpdata.cid) {
                resetMessages();
                validationForm.querySelector('.js-form-validation-data-error').classList.add('show');
                return;
            }
            if (!otpdata.vid) {
                resetMessages();
                validationForm.querySelector('.js-form-validation-data-error').classList.add('show');
                return;
            }
            if (!otpdata.otp || otpdata.otp.length < 6 || otpdata.otp.length > 6) {
                resetMessages();
                validationForm.querySelector('.js-form-validation-data-error').classList.add('show');
                return;
            }
    
            // Ajax HTTP Post
            let url = validationForm.dataset.url;
            let params = new URLSearchParams(new FormData(validationForm));
    
            fetch(url, {
                    method: "POST",
                    body: params
                }).then(res => res.json())
                .catch(error => {
                    resetMessages();
                    validationForm.querySelector('.js-form-validation-error').classList.add('show');
                })
                .then(response => {
                    resetMessages();
                    if (response === 0 || response.status === 'error') {
                        validationForm.querySelector('.js-form-validation-error').classList.add('show');
                        resetFormOne(votingForm);
                        resetFormTwo(validationForm);
                        resetFormThree(otpResendForm);
                        return;
                    } else if (response.status === 'voted') {                                            
                        validationForm.querySelector('.js-form-validation-voted').classList.add('show');
                        resetFormOne(votingForm);
                        resetFormTwo(validationForm);
                        resetFormThree(otpResendForm);
                        document.getElementById(formId).style.display="none";
                        document.getElementById(thankyouVotedId).setAttribute("class","thank-you-note show");
                        reloadPage(state);
                        return;
                    } else {
                        document.getElementById(formId).style.display="none";
                        document.getElementById(thankyouId).setAttribute("class","thank-you-note show");
                        reloadPage(state);
                    }                                       
                })
        });

        // OTP Resend Form
        otpResendForm.addEventListener('submit', (e) => {
            (e).preventDefault();
    
            let otpdata = {
                rmobile: otpResendForm.querySelector('[name="rmobile"]').value,
                remail: otpResendForm.querySelector('[name="remail"]').value,               
            }
    
            // Validates Data
            if (!otpdata.rmobile) {
                resetMessages();
                otpResendForm.querySelector('.js-form-error').classList.add('show');
                return;
            }
            if (!otpdata.remail) {
                resetMessages();
                otpResendForm.querySelector('.js-form-error').classList.add('show');
                return;
            }            
    
            // Ajax HTTP Post
            let url = otpResendForm.dataset.url;
            let params = new URLSearchParams(new FormData(otpResendForm));
    
            fetch(url, {
                    method: "POST",
                    body: params
                }).then(res => res.json())
                .catch(error => {                    
                    otpResendForm.querySelector('.js-form-error').classList.add('show');
                })
                .then(response => {                    
                    if (response === 0 || response.status === 'error') {
                        otpResendForm.querySelector('.js-form-error').classList.add('show');  
                        resetFormThree(otpResendForm);                      
                        return;
                    } 
                    otpResendForm.querySelector('.js-form-success').classList.add('show');                                      
                })
        });

}

// Function to Reset all messages
function resetMessages() {
    document.querySelectorAll('.field-msg').forEach(f => f.classList.remove('show'));
}

// Function to Reset Voting Form
function resetFormOne(form) {
    form.querySelector('[name="name"]').value = '';
    form.querySelector('[name="email"]').value = '';
    form.querySelector('[name="mobile"]').value = '';
}

// Function to Reset Validation Form
function resetFormTwo(form) {
    form.querySelector('[name="cid"]').value = '';
    form.querySelector('[name="vid"]').value = '';
    form.querySelector('[name="otp"]').value = '';
}

// Function to Reset OTP Resend Form
function resetFormThree(form){
    form.querySelector('.resend-otp').classList.remove('show');
}

function reloadPage(state){
    var url='';
    switch(state){
        case 'ka': url = 'karnataka-vote';
        break;
        case 'mh': url = 'maharashtra-vote';
        break;
        case 'tn': url = 'tamilnadu-vote';
        break;
        case 'kl': url = 'kerala-vote';
        break;
        default: url = '#';
    }    
    setTimeout(function(){
        window.location.replace('https://www.speakforindia.com/'+url);
        }, 3000);
}

// Function to Resend OTP using Js - Not Used Here
function resendOtp() {
    var mobile = document.getElementById('rmobile').value;
    var otp = 'Your Speak for India OTP is: '+document.getElementById('rotp').value;
    xhttp.open("GET", "http://sms.bytekat.com/api/api.php?ver=1&mode=1&action=push_sms&type=1&route=2&login_name=bytekat&api_password=bb6e0f621aaefc2b2864&message=" + otp + "&number=" + mobile + "&sender=BYTKAT", true);
    xhttp.send();
}