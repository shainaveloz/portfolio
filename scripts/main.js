const nodemailer = require('../node_modules/nodemailer/lib/nodemailer.js');

const email_form = document.getElementById('email');

email_form.addEventListener('click', send, false);

async function send(form) {
    console.log('form', form)
    // let email_data = {
    //     'name': form[]
    // }

    const response = await fetch('email.php', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    })

    // fetch({ 
    //     url: 'email.php', 
    //     data: from,
    //     type: 'POST',
    //     success: function (data) {
	// 		// For Notification
    //         email_form.reset();
    //         console.log('Success!!')
    //         // var $alertDiv = $(".mailResponse");
    //         // $alertDiv.show();
    //         // $alertDiv.find('.alert').removeClass('alert-danger alert-success');
    //         // $alertDiv.find('.mailResponseText').text("");
    //         // if(data.error){
    //         //     $alertDiv.find('.alert').addClass('alert-danger');
    //         //     $alertDiv.find('.mailResponseText').text(data.message);
    //         // }else{
    //         //     $alertDiv.find('.alert').addClass('alert-success');
    //         //     $alertDiv.find('.mailResponseText').text(data.message);
    //         // }
    //     }
    // });
    e.preventDefault();
}

send().then(data => {
    console.log('data', data)
})
async function mail(){

  let account = await nodemailer.createTestAccount();
  console.log('Credentials obtained, sending message...', 'This works!');

  let transporter = nodemailer.createTransport(
    {
        host: GMAIL_USER,
        port: PORT,
        secure: false,
        auth: {
            user: account.user,
            pass: account.pass
        },
        logger: false,
        debug: false // include SMTP traffic in the logs
    },
    {
        // default message fields

        // sender info
        from: 'Pangalink <no-reply@pangalink.net>',
        headers: {
            'X-Laziness-level': 1000 // just an example header, no need to use this
        }
    }
);
}
