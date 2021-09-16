document.getElementById('header-servers').addEventListener('click', function(){

    var list = document.getElementById('servershower').style
    var arrow = document.getElementById('header-servers-arrow-icon').style

    var list_user = document.getElementById('user-info-list').style
    var arrow_user = document.getElementById('user-info-arrow').style

    if(list.display == 'none'){

        if(list_user.display == 'block'){

            list_user.display = 'none'

            arrow_user.transform = "rotate(0)"

        }

        list.display = 'block'

        arrow.transform = "rotate(180deg)"

    }else{

        list.display = 'none'

        arrow.transform = "rotate(0)"

    }

})

document.getElementById('user-info-top').addEventListener('click', function(){

    var list_user = document.getElementById('user-info-list').style
    var arrow_user = document.getElementById('user-info-arrow').style

    var list = document.getElementById('servershower').style
    var arrow = document.getElementById('header-servers-arrow-icon').style

    var langList = document.getElementById('language-shower').style

    var billingList = document.getElementById('billing-list').style

    if(list_user.visibility == 'hidden'){

        if(list.display == 'block'){

            list.display = 'none'

            arrow.transform = "rotate(0)"

        }

        list_user.visibility = 'visible'

        arrow_user.transform = "rotate(180deg)"

    }else{

        list_user.visibility = 'hidden'

        arrow_user.transform = "rotate(0)"

        if(langList.display == 'block'){
            langList.display = 'none'
        }

        if(billingList.display == 'block'){
            billingList.display = 'none'
        }

    }

})

document.getElementById('lang-selection').addEventListener('click', function(){

    var langList = document.getElementById('language-shower').style
    var billingList = document.getElementById('billing-list').style

    if(langList.display == 'none'){

        langList.display = 'block'

        if(billingList.display == 'block'){

            billingList.display = 'none'

        }

    }else{

        langList.display = 'none'

    }

})

document.getElementById('user-info-billing').addEventListener('click', function(){

    var billingList = document.getElementById('billing-list').style
    var langList = document.getElementById('language-shower').style

    if(billingList.display == 'none'){

        billingList.display = 'block'

        if(langList.display == 'block'){

            langList.display = 'none'

        }

    }else{

        billingList.display = 'none'

    }

})

document.getElementById('rank-card').addEventListener('click', function(){

    timer(6000, "Coming Soon", "This item is now disabled")

})

document.getElementById('alarm').addEventListener('click', function(){

    var notification = document.getElementById('alarm').style

    if(notification.display == 'block'){

        notification.display = 'none'

    }

})

document.getElementsByClassName('plugin-off').addEventListener('click', function(){

    

})

function timer(time, title, description){

    var not = document.getElementById('alarm').style

    document.getElementById('timer-title').innerHTML = title
    document.getElementById('timer-description').innerHTML = description

    if(not.display == 'none'){

        not.display = 'block'

        setTimeout(function(){

            if(not.display == 'block'){

                not.display = 'none'

            }

        }, time)

    }

}